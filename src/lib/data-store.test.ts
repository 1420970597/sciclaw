import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { promises as fs } from "node:fs";
import path from "node:path";

import {
  createSession,
  createTask,
  createUser,
  deleteSession,
  findSession,
  findUserByAccessCode,
  findUserByEmail,
  listProjects,
  listTasks,
  readStore,
  setTaskStatus,
  verifyUserPassword,
  writeStore,
} from "@/lib/data-store";

const dataDir = path.join(process.cwd(), ".data");
const storePath = path.join(dataDir, "app-state.json");

async function resetStore() {
  await fs.rm(dataDir, { recursive: true, force: true });
}

describe("data-store", () => {
  beforeEach(async () => {
    await resetStore();
  });

  afterEach(async () => {
    await resetStore();
  });

  it("seeds the repo-local store with an admin user and default projects", async () => {
    const store = await readStore();

    expect(store.users).toHaveLength(1);
    expect(store.users[0]).toMatchObject({
      id: "user_admin_seed",
      email: "admin@sciclaw.local",
      role: "admin",
      accessCode: "SC-ADMIN-2026",
    });
    expect(store.projects).toHaveLength(3);
    expect(await fs.readFile(storePath, "utf8")).toContain("Patent overlap review");
  });

  it("creates users, verifies passwords, and prevents duplicate emails", async () => {
    const user = await createUser({
      name: "Research Lead",
      email: "Lead@Example.com",
      password: "Password123",
      intent: "Patent overlap review",
    });

    expect(user.email).toBe("lead@example.com");
    await expect(
      verifyUserPassword("lead@example.com", "Password123"),
    ).resolves.toMatchObject({ id: user.id, email: "lead@example.com" });
    await expect(verifyUserPassword("lead@example.com", "wrong-password")).resolves.toBeNull();
    await expect(findUserByEmail("LEAD@example.com")).resolves.toMatchObject({ id: user.id });
    await expect(
      createUser({
        name: "Research Lead",
        email: "lead@example.com",
        password: "Password123",
        intent: "Duplicate check",
      }),
    ).rejects.toThrow("EMAIL_EXISTS");
  });

  it("creates, finds, and deletes sessions while keeping only the newest session per user", async () => {
    const user = await createUser({
      name: "Research Lead",
      email: "lead@example.com",
      password: "Password123",
      intent: "Patent overlap review",
    });

    const firstSession = await createSession(user.id);
    const secondSession = await createSession(user.id);

    expect(await findSession(firstSession.id)).toBeNull();
    await expect(findSession(secondSession.id)).resolves.toMatchObject({ id: secondSession.id, userId: user.id });

    await deleteSession(secondSession.id);
    await expect(findSession(secondSession.id)).resolves.toBeNull();
  });

  it("finds users by access code and preserves project persistence writes", async () => {
    const store = await readStore();
    store.projects.push({
      id: "proj-new",
      title: "Live workspace extension",
      stage: "Queued",
      summary: "Extends the protected workspace beyond the marketing shell.",
      updatedAt: "Updated now",
      sources: 4,
      tasksOpen: 1,
    });
    await writeStore(store);

    await expect(findUserByAccessCode("sc-admin-2026")).resolves.toMatchObject({
      id: "user_admin_seed",
    });
    await expect(listProjects()).resolves.toHaveLength(4);
  });

  it("creates tasks, validates project ownership, and updates task status", async () => {
    const task = await createTask({
      projectId: "proj-patent-overlap",
      title: "  Queue evidence memo  ",
      summary: "  Package the next evidence lane for reviewer handoff.  ",
      owner: "  SciClaw Admin  ",
    });

    expect(task).toMatchObject({
      projectId: "proj-patent-overlap",
      title: "Queue evidence memo",
      summary: "Package the next evidence lane for reviewer handoff.",
      owner: "SciClaw Admin",
      status: "queued",
    });
    await expect(listTasks()).resolves.toEqual(expect.arrayContaining([expect.objectContaining({ id: task.id })]));

    const updated = await setTaskStatus(task.id, "done");
    expect(updated).toMatchObject({ id: task.id, status: "done" });
    await expect(listTasks()).resolves.toEqual(
      expect.arrayContaining([expect.objectContaining({ id: task.id, status: "done" })]),
    );

    await expect(
      createTask({
        projectId: "project_missing",
        title: "Broken task",
        summary: "Should fail",
        owner: "SciClaw Admin",
      }),
    ).rejects.toThrow("PROJECT_NOT_FOUND");
  });
});
