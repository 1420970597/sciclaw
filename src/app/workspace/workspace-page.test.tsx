import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

const redirectMock = vi.fn();
const getCurrentUserMock = vi.fn();
const listProjectsMock = vi.fn();
const listTasksMock = vi.fn();

vi.mock("next/navigation", () => ({
  redirect: (...args: unknown[]) => redirectMock(...args),
}));

vi.mock("@/lib/auth", () => ({
  getCurrentUser: (...args: unknown[]) => getCurrentUserMock(...args),
}));

vi.mock("@/lib/data-store", () => ({
  listProjects: (...args: unknown[]) => listProjectsMock(...args),
  listTasks: (...args: unknown[]) => listTasksMock(...args),
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

import WorkspacePage from "@/app/workspace/page";

describe("WorkspacePage", () => {
  beforeEach(() => {
    redirectMock.mockReset();
    getCurrentUserMock.mockReset();
    listProjectsMock.mockReset();
    listTasksMock.mockReset();
  });

  it("redirects anonymous visitors to login", async () => {
    getCurrentUserMock.mockResolvedValue(null);
    listProjectsMock.mockResolvedValue([]);

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
    expect(screen.getByText(/runtime-backed work items/i)).toBeInTheDocument();
    expect(screen.getByText(/1 live tasks/i)).toBeInTheDocument();
    expect(screen.getByText(/draft claim chart skeleton/i)).toBeInTheDocument();
    expect(screen.getByText(/mark in progress/i)).toBeInTheDocument();
  });
});
