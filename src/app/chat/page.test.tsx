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
        /keep navigation, memory, tasks, and handoff visible while the public docs shell narrows into a quieter workspace preview/i,
      ),
    ).toBeInTheDocument();
    expect(screen.getByText(/project & session flow staged between docs and the future workspace/i)).toBeInTheDocument();
    expect(screen.getByText(/queue the next research slice/i)).toBeInTheDocument();
    expect(screen.getByText(/shape a concise workspace brief before you leave the public docs shell/i)).toBeInTheDocument();
    expect(screen.getByText(/one lane per session/i)).toBeInTheDocument();
    expect(screen.getByText(/switch live threads/i)).toBeInTheDocument();
    expect(screen.getByText(/promote the locked answer/i)).toBeInTheDocument();
    expect(screen.getByText(/pin the open claim/i)).toBeInTheDocument();
    expect(screen.getByText(/clear the blocker/i)).toBeInTheDocument();
    expect(screen.getByText(/more flow checkpoints stay inside tasks and foundry/i)).toBeInTheDocument();
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

  it("shows durable project memory, focused flow cards, and session cards that reflect the public docs concepts", () => {
    render(<ChatPage />);

    expect(screen.getByText(/library · 128 assets/i)).toBeInTheDocument();
    expect(screen.getByText(/activity · 14 day streak/i)).toBeInTheDocument();
    expect(screen.getByText(/skills · 6 enabled/i)).toBeInTheDocument();
    expect(screen.getByText(/128 assets · 6 skills/i)).toBeInTheDocument();
    expect(screen.getByText(/3 live threads/i)).toBeInTheDocument();
    expect(screen.getByText(/12 export-ready assets/i)).toBeInTheDocument();
    expect(screen.getByText(/patent landscaping · comparative thread/i)).toBeInTheDocument();
    expect(screen.getByText(/clinical diligence · session replay/i)).toBeInTheDocument();
    expect(screen.getByText(/regulatory memo · final synthesis/i)).toBeInTheDocument();
    expect(screen.getByText(/3 source clusters · 2 claim deltas/i)).toBeInTheDocument();
    expect(screen.getByText(/1 blocker · 4 exhibits linked/i)).toBeInTheDocument();
    expect(screen.getByText(/ready · outline locked/i)).toBeInTheDocument();
    expect(screen.getByText(/hold the live hypothesis/i)).toBeInTheDocument();
    expect(screen.getByText(/assign the blocker/i)).toBeInTheDocument();
    expect(screen.getByText(/more flow checkpoints stay inside tasks and foundry/i)).toBeInTheDocument();
    expect(screen.getByText(/memo live/i)).toBeInTheDocument();
    expect(screen.getByText(/2 pending/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /open session thread/i })).toHaveAttribute("href", "/chat");
    expect(screen.getByRole("link", { name: /review active tasks/i })).toHaveAttribute("href", "/help/tasks");
    expect(screen.getByRole("link", { name: /view all flow checkpoints/i })).toHaveAttribute("href", "/help/foundry");

    const tasksPanel = screen.getByText(/queue the next research slice/i).closest("section");
    expect(tasksPanel).not.toBeNull();
    expect(within(tasksPanel as HTMLElement).getByText(/import the next pdf batch into the project library/i)).toBeInTheDocument();
    expect(within(tasksPanel as HTMLElement).getByText(/12 pdfs queued/i)).toBeInTheDocument();
    expect(within(tasksPanel as HTMLElement).getByText(/generate a fresh comparative-analysis session/i)).toBeInTheDocument();
    expect(within(tasksPanel as HTMLElement).getByText(/owner · research lead/i)).toBeInTheDocument();
    expect(within(tasksPanel as HTMLElement).getByText(/push the verified outline to foundry/i)).toBeInTheDocument();
    expect(within(tasksPanel as HTMLElement).getByText(/export lane/i)).toBeInTheDocument();
  });

  it("keeps the docs-to-workspace bridge actions navigable from the preview shell", () => {
    render(<ChatPage />);

    expect(screen.getByRole("link", { name: /open session thread/i })).toHaveAttribute("href", "/chat");
    expect(screen.getByRole("link", { name: /review active tasks/i })).toHaveAttribute("href", "/help/tasks");
    expect(screen.getByRole("link", { name: /view all flow checkpoints/i })).toHaveAttribute("href", "/help/foundry");
  });

  it("tightens the chat density by collapsing lower flow cards and grouping the right-rail status signals", () => {
    render(<ChatPage />);

    const sessionFlowHeading = screen.getByRole("heading", {
      name: /project & session flow staged between docs and the future workspace/i,
    });
    const sessionFlowSection = sessionFlowHeading.closest("section");
    expect(sessionFlowSection).not.toBeNull();
    const sessionFlowScope = within(sessionFlowSection as HTMLElement);

    expect(sessionFlowScope.getByTestId("chat-flow-card-grid")).toHaveClass(
      "xl:grid-cols-[repeat(2,minmax(0,11.5rem))]",
    );
    expect(sessionFlowScope.queryByRole("heading", { name: /lock outline and appendix/i })).not.toBeInTheDocument();
    expect(sessionFlowScope.getByRole("link", { name: /view all flow checkpoints/i })).toHaveAttribute(
      "href",
      "/help/foundry",
    );

    const rightRail = screen.getByTestId("chat-right-rail-grid");
    expect(rightRail).toHaveClass("xl:grid-cols-[1fr]");

    const statusPanel = screen.getByText(/^status board$/i).closest("article");
    expect(statusPanel).not.toBeNull();
    const statusScope = within(statusPanel as HTMLElement);
    expect(statusScope.getByText(/citations pinned/i)).toBeInTheDocument();
    expect(statusScope.getByText(/1 call pending/i)).toBeInTheDocument();
    expect(statusScope.getByText(/return to source/i)).toBeInTheDocument();
  });
});
