import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

const redirectMock = vi.fn();
const getCurrentUserMock = vi.fn();
const listProjectsMock = vi.fn();
const listTasksMock = vi.fn();
const listChatThreadsMock = vi.fn();
const listChatMessagesMock = vi.fn();

vi.mock("next/navigation", () => ({
  redirect: (...args: unknown[]) => redirectMock(...args),
}));

vi.mock("@/lib/auth", () => ({
  getCurrentUser: (...args: unknown[]) => getCurrentUserMock(...args),
}));

vi.mock("@/lib/data-store", () => ({
  listProjects: (...args: unknown[]) => listProjectsMock(...args),
  listTasks: (...args: unknown[]) => listTasksMock(...args),
  listChatThreads: (...args: unknown[]) => listChatThreadsMock(...args),
  listChatMessages: (...args: unknown[]) => listChatMessagesMock(...args),
}));

vi.mock("@/app/auth-actions", () => ({
  logoutAction: vi.fn(),
  updateWorkspaceTaskStatusAction: vi.fn(),
}));

vi.mock("@/components/workspace-task-form", () => ({
  WorkspaceTaskForm: ({ projects }: { projects: Array<{ id: string; title: string }> }) => (
    <div data-testid="workspace-task-form">{projects.map((project) => project.title).join(", ")}</div>
  ),
}));

vi.mock("@/components/workspace-chat-panel", () => ({
  WorkspaceChatPanel: ({
    currentUserName,
    threads,
    messages,
    activeThreadId,
  }: {
    currentUserName: string;
    threads: Array<{ id: string; title: string }>;
    messages: Array<{ id: string; content: string }>;
    activeThreadId: string | null;
  }) => (
    <div data-testid="workspace-chat-panel">
      <span>{currentUserName}</span>
      <span>{activeThreadId ?? "no-thread"}</span>
      <span>{threads.map((thread) => thread.title).join(", ")}</span>
      <span>{messages.map((message) => message.content).join(" | ")}</span>
    </div>
  ),
}));

import WorkspacePage from "@/app/workspace/page";

describe("WorkspacePage", () => {
  beforeEach(() => {
    redirectMock.mockReset();
    getCurrentUserMock.mockReset();
    listProjectsMock.mockReset();
    listTasksMock.mockReset();
    listChatThreadsMock.mockReset();
    listChatMessagesMock.mockReset();
  });

  it("redirects anonymous visitors to login", async () => {
    getCurrentUserMock.mockResolvedValue(null);
    listProjectsMock.mockResolvedValue([]);
    listChatThreadsMock.mockResolvedValue([]);

    render(await WorkspacePage());

    expect(redirectMock).toHaveBeenCalledWith("/login");
  });

  it("renders the protected workspace with persisted projects", async () => {
    getCurrentUserMock.mockResolvedValue({
      id: "user_admin_seed",
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
    listChatThreadsMock.mockResolvedValue([
      {
        id: "thread-1",
        userId: "user_admin_seed",
        title: "Claim chart review thread",
        updatedAt: new Date("2026-05-22T11:00:00.000Z").toISOString(),
      },
    ]);
    listChatMessagesMock.mockResolvedValue([
      {
        id: "message-1",
        threadId: "thread-1",
        role: "assistant",
        author: "SciClaw",
        content: "Open a project lane and keep the next reviewer prompt persisted here.",
        createdAt: new Date("2026-05-22T11:01:00.000Z").toISOString(),
      },
    ]);

    render(await WorkspacePage());

    expect(screen.getByRole("heading", { name: /sciclaw workspace/i })).toBeInTheDocument();
    expect(screen.getByText(/protected workspace/i)).toBeInTheDocument();
    expect(screen.getByText("SciClaw Admin")).toBeInTheDocument();
    expect(screen.getByText("admin@sciclaw.local")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /sign out/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /view public guide/i })).toHaveAttribute("href", "/help/projects");
    expect(screen.getByRole("heading", { name: /patent overlap review/i })).toBeInTheDocument();
    expect(screen.getByText(/18 sources/i)).toBeInTheDocument();
    expect(screen.getByText(/2 tasks open/i)).toBeInTheDocument();
    expect(screen.getByTestId("workspace-task-form")).toHaveTextContent("Patent overlap review");
    expect(screen.getByTestId("workspace-chat-panel")).toHaveTextContent("SciClaw Admin");
    expect(screen.getByTestId("workspace-chat-panel")).toHaveTextContent("Claim chart review thread");
    expect(screen.getByTestId("workspace-chat-panel")).toHaveTextContent(
      "Open a project lane and keep the next reviewer prompt persisted here.",
    );
    expect(screen.getByText(/runtime-backed work items/i)).toBeInTheDocument();
    expect(screen.getByText(/1 live tasks/i)).toBeInTheDocument();
    expect(screen.getByText(/draft claim chart skeleton/i)).toBeInTheDocument();
    expect(screen.getByText(/mark in progress/i)).toBeInTheDocument();
  });
});
