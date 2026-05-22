import { beforeEach, describe, expect, it, vi } from "vitest";

const startUserSessionMock = vi.fn();
const endUserSessionMock = vi.fn();
const getCurrentUserMock = vi.fn();
const verifyUserPasswordMock = vi.fn();
const createUserMock = vi.fn();
const createTaskMock = vi.fn();
const findProjectByIdMock = vi.fn();
const setTaskStatusMock = vi.fn();
const findUserByAccessCodeMock = vi.fn();
const redirectMock = vi.fn();

vi.mock("next/navigation", () => ({
  redirect: (...args: unknown[]) => redirectMock(...args),
}));

vi.mock("@/lib/auth", () => ({
  startUserSession: (...args: unknown[]) => startUserSessionMock(...args),
  endUserSession: (...args: unknown[]) => endUserSessionMock(...args),
  getCurrentUser: (...args: unknown[]) => getCurrentUserMock(...args),
}));

vi.mock("@/lib/data-store", () => ({
  verifyUserPassword: (...args: unknown[]) => verifyUserPasswordMock(...args),
  createUser: (...args: unknown[]) => createUserMock(...args),
  createTask: (...args: unknown[]) => createTaskMock(...args),
  findProjectById: (...args: unknown[]) => findProjectByIdMock(...args),
  setTaskStatus: (...args: unknown[]) => setTaskStatusMock(...args),
  findUserByAccessCode: (...args: unknown[]) => findUserByAccessCodeMock(...args),
  DataStoreValidationError: class DataStoreValidationError extends Error {},
}));

import {
  accessCodeAction,
  createWorkspaceTaskAction,
  loginAction,
  logoutAction,
  registerAction,
  updateWorkspaceTaskStatusAction,
} from "@/app/auth-actions";

describe("auth-actions", () => {
  beforeEach(() => {
    startUserSessionMock.mockReset();
    endUserSessionMock.mockReset();
    getCurrentUserMock.mockReset();
    verifyUserPasswordMock.mockReset();
    createUserMock.mockReset();
    createTaskMock.mockReset();
    findProjectByIdMock.mockReset();
    setTaskStatusMock.mockReset();
    findUserByAccessCodeMock.mockReset();
    redirectMock.mockReset();
  });

  it("returns a validation error when login fields are missing", async () => {
    const formData = new FormData();

    await expect(loginAction({}, formData)).resolves.toEqual({
      error: "Email and password are required.",
    });
    expect(verifyUserPasswordMock).not.toHaveBeenCalled();
    expect(startUserSessionMock).not.toHaveBeenCalled();
    expect(redirectMock).not.toHaveBeenCalled();
  });

  it("creates a session and redirects on successful login", async () => {
    const formData = new FormData();
    formData.set("email", "Admin@SciClaw.Local");
    formData.set("password", "Admin123!");

    verifyUserPasswordMock.mockResolvedValue({ id: "user_admin_seed" });
    startUserSessionMock.mockResolvedValue({ id: "session_1" });

    await loginAction({}, formData);

    expect(verifyUserPasswordMock).toHaveBeenCalledWith("admin@sciclaw.local", "Admin123!");
    expect(startUserSessionMock).toHaveBeenCalledWith("user_admin_seed");
    expect(redirectMock).toHaveBeenCalledWith("/workspace");
  });

  it("returns a validation error when register fields are incomplete", async () => {
    const formData = new FormData();
    formData.set("name", "Research Lead");
    formData.set("email", "lead@example.com");

    await expect(registerAction({}, formData)).resolves.toEqual({
      error: "Name, email, password, and research intent are required.",
    });
    expect(createUserMock).not.toHaveBeenCalled();
  });

  it("returns a duplicate-email message when registration hits an existing account", async () => {
    const formData = new FormData();
    formData.set("name", "Research Lead");
    formData.set("email", "lead@example.com");
    formData.set("password", "Password123");
    formData.set("intent", "Patent overlap review");

    createUserMock.mockRejectedValue(new Error("EMAIL_EXISTS"));

    await expect(registerAction({}, formData)).resolves.toEqual({
      error: "That email is already registered.",
    });
    expect(startUserSessionMock).not.toHaveBeenCalled();
    expect(redirectMock).not.toHaveBeenCalled();
  });

  it("creates a user session and redirects after registration", async () => {
    const formData = new FormData();
    formData.set("name", "Research Lead");
    formData.set("email", "lead@example.com");
    formData.set("password", "Password123");
    formData.set("intent", "Patent overlap review");

    createUserMock.mockResolvedValue({ id: "user_2" });
    startUserSessionMock.mockResolvedValue({ id: "session_2" });

    await registerAction({}, formData);

    expect(createUserMock).toHaveBeenCalledWith({
      name: "Research Lead",
      email: "lead@example.com",
      password: "Password123",
      intent: "Patent overlap review",
    });
    expect(startUserSessionMock).toHaveBeenCalledWith("user_2");
    expect(redirectMock).toHaveBeenCalledWith("/workspace");
  });

  it("returns a validation error for an empty access code", async () => {
    const formData = new FormData();

    await expect(accessCodeAction({}, formData)).resolves.toEqual({
      error: "Access code is required.",
    });
    expect(findUserByAccessCodeMock).not.toHaveBeenCalled();
  });

  it("starts a session and redirects when the access code is valid", async () => {
    const formData = new FormData();
    formData.set("accessCode", "SC-ADMIN-2026");

    findUserByAccessCodeMock.mockResolvedValue({ id: "user_admin_seed" });
    startUserSessionMock.mockResolvedValue({ id: "session_3" });

    await accessCodeAction({}, formData);

    expect(findUserByAccessCodeMock).toHaveBeenCalledWith("SC-ADMIN-2026");
    expect(startUserSessionMock).toHaveBeenCalledWith("user_admin_seed");
    expect(redirectMock).toHaveBeenCalledWith("/workspace");
  });

  it("ends the session and redirects home on logout", async () => {
    endUserSessionMock.mockResolvedValue(undefined);

    await logoutAction();

    expect(endUserSessionMock).toHaveBeenCalled();
    expect(redirectMock).toHaveBeenCalledWith("/");
  });

  it("creates protected workspace tasks for authenticated users", async () => {
    const formData = new FormData();
    formData.set("projectId", "proj-patent-overlap");
    formData.set("title", "Queue evidence memo");
    formData.set("summary", "Package the next evidence lane for reviewer handoff.");

    getCurrentUserMock.mockResolvedValue({ name: "SciClaw Admin" });
    findProjectByIdMock.mockResolvedValue({ id: "proj-patent-overlap" });
    createTaskMock.mockResolvedValue({ id: "task_1" });

    await expect(createWorkspaceTaskAction({}, formData)).resolves.toEqual({
      success: "Task queued in the protected workspace.",
    });
    expect(createTaskMock).toHaveBeenCalledWith({
      projectId: "proj-patent-overlap",
      title: "Queue evidence memo",
      summary: "Package the next evidence lane for reviewer handoff.",
      owner: "SciClaw Admin",
    });
  });

  it("returns a validation error when a workspace task is missing fields", async () => {
    const formData = new FormData();
    formData.set("projectId", "proj-patent-overlap");

    getCurrentUserMock.mockResolvedValue({ name: "SciClaw Admin" });

    await expect(createWorkspaceTaskAction({}, formData)).resolves.toEqual({
      error: "Project, title, and summary are required.",
    });
    expect(createTaskMock).not.toHaveBeenCalled();
  });

  it("updates task status for authenticated users", async () => {
    const formData = new FormData();
    formData.set("status", "done");

    getCurrentUserMock.mockResolvedValue({ id: "user_admin_seed" });
    setTaskStatusMock.mockResolvedValue({ id: "task_1", status: "done" });

    await updateWorkspaceTaskStatusAction("task_1", formData);

    expect(setTaskStatusMock).toHaveBeenCalledWith("task_1", "done");
  });
});
