import { render, screen, within } from "@testing-library/react";
import ChatPage from "@/app/chat/page";

describe("Chat app shell placeholder", () => {
  it("renders the public app-shell IA preview instead of a blank route", () => {
    render(<ChatPage />);

    expect(
      screen.getByRole("heading", {
        name: /coordinate project context, sessions, tasks, and outputs from one app shell/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByText(/sciclaw · user guide · session preview/i)).toBeInTheDocument();
    expect(
      screen.getByText(
        /mirror the public docs shell with a product-facing workspace preview that keeps navigation, memory, tasks, and foundry handoff visible at a glance/i,
      ),
    ).toBeInTheDocument();
    expect(screen.getByText(/project & session flow mirrored from the public docs ia/i)).toBeInTheDocument();
    expect(screen.getByText(/queue the next research slice/i)).toBeInTheDocument();
    expect(screen.getByText(/shape a product-like narrative before the foundry export starts/i)).toBeInTheDocument();
  });

  it("links the sidebar IA to implemented help and shell routes", () => {
    render(<ChatPage />);

    const projectsLink = screen.getByRole("link", { name: /projects shared workspace overview/i });
    const sessionsLink = screen.getByRole("link", { name: /sessions active investigation threads 3/i });
    const libraryLink = screen.getByRole("link", { name: /library grounded papers & notes rag/i });
    const tasksLink = screen.getByRole("link", { name: /tasks queued autonomous work today/i });
    const foundryLink = screen.getByRole("link", { name: /foundry polished output layer/i });
    const personaLink = screen.getByRole("link", { name: /persona research behavior controls/i });
    const imLink = screen.getByRole("link", { name: /im external workflow delivery/i });
    const settingsLink = screen.getByRole("link", { name: /settings appearance and usage/i });

    expect(projectsLink).toHaveAttribute("href", "/help/projects");
    expect(sessionsLink).toHaveAttribute("href", "/chat");
    expect(libraryLink).toHaveAttribute("href", "/help/library");
    expect(tasksLink).toHaveAttribute("href", "/help/tasks");
    expect(foundryLink).toHaveAttribute("href", "/help/foundry");
    expect(personaLink).toHaveAttribute("href", "/help/persona");
    expect(imLink).toHaveAttribute("href", "/help/im");
    expect(settingsLink).toHaveAttribute("href", "/help/settings");
  });

  it("shows durable project memory and session cards that reflect the public docs concepts", () => {
    render(<ChatPage />);

    expect(screen.getByText(/library · 128 assets/i)).toBeInTheDocument();
    expect(screen.getByText(/activity · 14 day streak/i)).toBeInTheDocument();
    expect(screen.getByText(/skills · 6 enabled/i)).toBeInTheDocument();
    expect(screen.getByText(/patent landscaping · comparative thread/i)).toBeInTheDocument();
    expect(screen.getByText(/clinical diligence · session replay/i)).toBeInTheDocument();
    expect(screen.getByText(/regulatory memo · final synthesis/i)).toBeInTheDocument();

    const tasksPanel = screen.getByText(/queue the next research slice/i).closest("section");
    expect(tasksPanel).not.toBeNull();
    expect(within(tasksPanel as HTMLElement).getByText(/import the next pdf batch into the project library/i)).toBeInTheDocument();
    expect(within(tasksPanel as HTMLElement).getByText(/generate a fresh comparative-analysis session/i)).toBeInTheDocument();
    expect(within(tasksPanel as HTMLElement).getByText(/push the verified outline to foundry/i)).toBeInTheDocument();
  });

  it("elevates the center panel into a session-output preview and gives the right rail stronger product weight", () => {
    render(<ChatPage />);

    const rightRailGrid = screen.getByTestId("chat-right-rail-grid");
    expect(rightRailGrid).toHaveClass("2xl:grid-cols-[minmax(0,1fr)_minmax(272px,0.92fr)]");

    const outputPanel = screen.getByText(/session output/i).closest("section");
    expect(outputPanel).not.toBeNull();
    const outputScope = within(outputPanel as HTMLElement);

    expect(outputScope.getByRole("heading", { name: /shape a product-like narrative before the foundry export starts/i })).toBeInTheDocument();
    expect(outputScope.getByText(/regulatory memo · current answer/i)).toBeInTheDocument();
    expect(outputScope.getByText(/session 07/i)).toBeInTheDocument();
    expect(outputScope.getByText(/the current shell preview now reads like an active working answer/i)).toBeInTheDocument();
    expect(outputScope.getByText(/summarize the strongest evidence chain before export/i)).toBeInTheDocument();
    expect(outputScope.getByText(/flag one unresolved risk so the reviewer knows what still needs judgment/i)).toBeInTheDocument();
    expect(outputScope.getByText(/keep the source route visible back to sessions, tasks, and project memory/i)).toBeInTheDocument();

    const foundryCard = outputScope.getByText(/^foundry handoff$/i).closest("article");
    expect(foundryCard).not.toBeNull();
    const foundryScope = within(foundryCard as HTMLElement);
    expect(foundryScope.getByText(/high-visibility export rail/i)).toBeInTheDocument();
    expect(foundryScope.getByText(/^ready$/i)).toBeInTheDocument();
    expect(foundryScope.getByText(/brief outline/i)).toBeInTheDocument();
    expect(foundryScope.getByText(/evidence appendix/i)).toBeInTheDocument();
    expect(foundryScope.getByText(/slides handoff/i)).toBeInTheDocument();
  });
});
