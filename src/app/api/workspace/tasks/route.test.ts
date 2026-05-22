import { beforeEach, describe, expect, it, vi } from "vitest";

const cookiesMock = vi.fn();
const findSessionMock = vi.fn();
const findUserByIdMock = vi.fn();
const findProjectByIdMock = vi.fn();
const createTaskMock = vi.fn();
const findTaskByIdMock = vi.fn();
const setTaskStatusMock = vi.fn();

vi.mock("next/headers", () => ({
  cookies: (...args: unknown[]) => cookiesMock(...args),
}));

vi.mock("@/lib/auth", () => ({
  SESSION_COOKIE: "sciclaw_session",
}));

vi.mock("@/lib/data-store", () => ({
  createTask: (...args: unknown[]) => createTaskMock(...args),
  DataStoreValidationError: class DataStoreValidationError extends Error {},
  findProjectById: (...args: unknown[]) => findProjectByIdMock(...args),
  findSession: (...args: unknown[]) => findSessionMock(...args),
  findTaskById: (...args: unknown[]) => findTaskByIdMock(...args),
  findUserById: (...args: unknown[]) => findUserByIdMock(...args),
  setTaskStatus: (...args: unknown[]) => setTaskStatusMock(...args),
}));

import { PATCH, POST } from "@/app/api/workspace/tasks/route";

describe("/api/workspace/tasks", () => {
  beforeEach(() => {
    cookiesMock.mockReset();
    findSessionMock.mockReset();
    findUserByIdMock.mockReset();
    findProjectByIdMock.mockReset();
    createTaskMock.mockReset();
    findTaskByIdMock.mockReset();
    setTaskStatusMock.mockReset();
  });

  it("returns 401 when creating a task without a session", async () => {
    cookiesMock.mockResolvedValue({
      get: vi.fn().mockReturnValue(undefined),
    });

    const response = await POST(
      new Request("http://localhost/api/workspace/tasks", {
        method: "POST",
        body: JSON.stringify({ projectId: "proj-1", title: "Task", summary: "Summary" }),
        headers: { "content-type": "application/json" },
      }),
    );

    expect(response.status).toBe(401);
    await expect(response.json()).resolves.toEqual({ error: "Unauthorized" });
  });

  it("creates a task for an authenticated workspace user", async () => {
    cookiesMock.mockResolvedValue({
      get: vi.fn().mockReturnValue({ value: "session_1" }),
    });
    findSessionMock.mockResolvedValue({ id: "session_1", userId: "user_1" });
    findUserByIdMock.mockResolvedValue({ id: "user_1", name: "SciClaw Admin" });
    findProjectByIdMock.mockResolvedValue({ id: "proj-1" });
    createTaskMock.mockResolvedValue({
      id: "task_1",
      projectId: "proj-1",
      title: "Queue evidence memo",
      summary: "Package the next evidence lane for reviewer handoff.",
      owner: "SciClaw Admin",
      status: "queued",
      updatedAt: "Updated now",
    });

    const response = await POST(
      new Request("http://localhost/api/workspace/tasks", {
        method: "POST",
        body: JSON.stringify({
          projectId: "proj-1",
          title: "Queue evidence memo",
          summary: "Package the next evidence lane for reviewer handoff.",
        }),
        headers: { "content-type": "application/json" },
      }),
    );

    expect(createTaskMock).toHaveBeenCalledWith({
      projectId: "proj-1",
      title: "Queue evidence memo",
      summary: "Package the next evidence lane for reviewer handoff.",
      owner: "SciClaw Admin",
    });
    expect(response.status).toBe(201);
    await expect(response.json()).resolves.toEqual({
      task: {
        id: "task_1",
        projectId: "proj-1",
        title: "Queue evidence memo",
        summary: "Package the next evidence lane for reviewer handoff.",
        owner: "SciClaw Admin",
        status: "queued",
        updatedAt: "Updated now",
      },
    });
  });

  it("updates task status for an authenticated workspace user", async () => {
    cookiesMock.mockResolvedValue({
      get: vi.fn().mockReturnValue({ value: "session_1" }),
    });
    findSessionMock.mockResolvedValue({ id: "session_1", userId: "user_1" });
    findUserByIdMock.mockResolvedValue({ id: "user_1", name: "SciClaw Admin" });
    findTaskByIdMock.mockResolvedValue({ id: "task_1" });
    setTaskStatusMock.mockResolvedValue({
      id: "task_1",
      status: "done",
    });

    const response = await PATCH(
      new Request("http://localhost/api/workspace/tasks", {
        method: "PATCH",
        body: JSON.stringify({ taskId: "task_1", status: "done" }),
        headers: { "content-type": "application/json" },
      }),
    );

    expect(setTaskStatusMock).toHaveBeenCalledWith("task_1", "done");
    expect(response.status).toBe(200);
    await expect(response.json()).resolves.toEqual({
      task: {
        id: "task_1",
        status: "done",
      },
    });
  });
});
