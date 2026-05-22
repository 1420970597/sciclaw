import { beforeEach, describe, expect, it, vi } from "vitest";

const cookiesMock = vi.fn();
const findSessionMock = vi.fn();
const findUserByIdMock = vi.fn();
const listProjectsMock = vi.fn();
const listTasksMock = vi.fn();

vi.mock("next/headers", () => ({
  cookies: (...args: unknown[]) => cookiesMock(...args),
}));

vi.mock("@/lib/auth", () => ({
  SESSION_COOKIE: "sciclaw_session",
}));

vi.mock("@/lib/data-store", () => ({
  findSession: (...args: unknown[]) => findSessionMock(...args),
  findUserById: (...args: unknown[]) => findUserByIdMock(...args),
  listProjects: (...args: unknown[]) => listProjectsMock(...args),
  listTasks: (...args: unknown[]) => listTasksMock(...args),
}));

import { GET } from "@/app/api/workspace/route";

describe("GET /api/workspace", () => {
  beforeEach(() => {
    cookiesMock.mockReset();
    findSessionMock.mockReset();
    findUserByIdMock.mockReset();
    listProjectsMock.mockReset();
    listTasksMock.mockReset();
  });

  it("returns 401 when the session cookie is missing", async () => {
    cookiesMock.mockResolvedValue({
      get: vi.fn().mockReturnValue(undefined),
    });

    const response = await GET();

    expect(response.status).toBe(401);
    await expect(response.json()).resolves.toEqual({ error: "Unauthorized" });
  });

  it("returns 401 when the session cannot be found", async () => {
    cookiesMock.mockResolvedValue({
      get: vi.fn().mockReturnValue({ value: "session_missing" }),
    });
    findSessionMock.mockResolvedValue(null);

    const response = await GET();

    expect(response.status).toBe(401);
    await expect(response.json()).resolves.toEqual({ error: "Unauthorized" });
  });

  it("returns the authenticated workspace payload", async () => {
    cookiesMock.mockResolvedValue({
      get: vi.fn().mockReturnValue({ value: "session_1" }),
    });
    findSessionMock.mockResolvedValue({ id: "session_1", userId: "user_1" });
    findUserByIdMock.mockResolvedValue({
      id: "user_1",
      name: "SciClaw Admin",
      email: "admin@sciclaw.local",
      role: "admin",
      intent: "Operations oversight and replica verification",
    });
    listProjectsMock.mockResolvedValue([
      {
        id: "proj-1",
        title: "Patent overlap review",
        stage: "Live comparison",
        summary: "Grounding claim charts against prior filings and source exhibits.",
        updatedAt: "Updated 12m ago",
        sources: 18,
        tasksOpen: 2,
      },
    ]);
    listTasksMock.mockResolvedValue([
      {
        id: "task-1",
        projectId: "proj-1",
        title: "Draft claim chart skeleton",
        summary: "Pull the first comparison table into the workspace so reviewers can verify the overlap call.",
        owner: "SciClaw Admin",
        status: "in-progress",
        updatedAt: "Updated 8m ago",
      },
    ]);

    const response = await GET();

    expect(response.status).toBe(200);
    await expect(response.json()).resolves.toEqual({
      user: {
        id: "user_1",
        name: "SciClaw Admin",
        email: "admin@sciclaw.local",
        role: "admin",
        intent: "Operations oversight and replica verification",
      },
      projects: [
        {
          id: "proj-1",
          title: "Patent overlap review",
          stage: "Live comparison",
          summary: "Grounding claim charts against prior filings and source exhibits.",
          updatedAt: "Updated 12m ago",
          sources: 18,
          tasksOpen: 2,
        },
      ],
      tasks: [
        {
          id: "task-1",
          projectId: "proj-1",
          title: "Draft claim chart skeleton",
          summary: "Pull the first comparison table into the workspace so reviewers can verify the overlap call.",
          owner: "SciClaw Admin",
          status: "in-progress",
          updatedAt: "Updated 8m ago",
        },
      ],
    });
  });
});
