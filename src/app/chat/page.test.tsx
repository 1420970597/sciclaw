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
    expect(screen.getByText(/ready the export packet/i)).toBeInTheDocument();
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
    expect(screen.getByText(/lock outline and appendix/i)).toBeInTheDocument();
    expect(screen.getByText(/memo live/i)).toBeInTheDocument();
    expect(screen.getByText(/2 pending/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /open session thread/i })).toHaveAttribute("href", "/chat");
    expect(screen.getByRole("link", { name: /review active tasks/i })).toHaveAttribute("href", "/help/tasks");
    expect(screen.getByRole("link", { name: /inspect foundry assets/i })).toHaveAttribute("href", "/help/foundry");

    const tasksPanel = screen.getByText(/queue the next research slice/i).closest("section");
    expect(tasksPanel).not.toBeNull();
    expect(within(tasksPanel as HTMLElement).getByText(/import the next pdf batch into the project library/i)).toBeInTheDocument();
    expect(within(tasksPanel as HTMLElement).getByText(/generate a fresh comparative-analysis session/i)).toBeInTheDocument();
    expect(within(tasksPanel as HTMLElement).getByText(/push the verified outline to foundry/i)).toBeInTheDocument();
  });

  it("keeps the docs-to-workspace bridge actions navigable from the preview shell", () => {
    render(<ChatPage />);

    expect(screen.getByRole("link", { name: /open session thread/i })).toHaveAttribute("href", "/chat");
    expect(screen.getByRole("link", { name: /review active tasks/i })).toHaveAttribute("href", "/help/tasks");
    expect(screen.getByRole("link", { name: /inspect foundry assets/i })).toHaveAttribute("href", "/help/foundry");
  });

  it("elevates the center panel into a session-output preview and gives the right rail stronger product weight", () => {
    render(<ChatPage />);

    const sessionFlowHeading = screen.getByRole("heading", {
      name: /project & session flow staged between docs and the future workspace/i,
    });
    const sessionFlowSection = sessionFlowHeading.closest("section");
    expect(sessionFlowSection).not.toBeNull();
    const sessionFlowScope = within(sessionFlowSection as HTMLElement);
    expect(sessionFlowScope.getByRole("heading", { name: /one lane per session/i })).toBeInTheDocument();
    expect(sessionFlowScope.getByRole("heading", { name: /switch live threads/i })).toBeInTheDocument();
    expect(sessionFlowScope.getByRole("heading", { name: /promote the locked answer/i })).toBeInTheDocument();

    const outputPanel = screen.getByText(/session output/i).closest("section");
    expect(outputPanel).not.toBeNull();
    const outputScope = within(outputPanel as HTMLElement);

    expect(outputScope.getByRole("heading", { name: /shape a concise workspace brief before you leave the public docs shell/i })).toBeInTheDocument();
    expect(outputScope.getByText(/regulatory memo · current answer/i)).toBeInTheDocument();
    expect(outputScope.getByText(/session 07/i)).toBeInTheDocument();
    expect(outputScope.getByText(/keep the current answer, evidence posture, and export lane visible in one bridge card/i)).toBeInTheDocument();
    expect(outputScope.getByText(/^3 live sessions$/i)).toBeInTheDocument();
    expect(outputScope.getByText(/^5 open tasks$/i)).toBeInTheDocument();
    expect(outputScope.getByText(/^12 foundry exports$/i)).toBeInTheDocument();
    expect(outputScope.getByText(/evidence chain/i)).toBeInTheDocument();
    expect(outputScope.getByText(/citations pinned/i)).toBeInTheDocument();
    expect(outputScope.getByText(/keep citations and checkpoints attached to the draft/i)).toBeInTheDocument();
    expect(outputScope.getByText(/open risk/i)).toBeInTheDocument();
    expect(outputScope.getByText(/1 call pending/i)).toBeInTheDocument();
    expect(outputScope.getByText(/hold one unresolved call before review leaves/i)).toBeInTheDocument();
    expect(outputScope.getByText(/handoff route/i)).toBeInTheDocument();
    expect(outputScope.getByText(/return to source/i)).toBeInTheDocument();
    expect(outputScope.getByText(/jump back to memory, tasks, or the thread/i)).toBeInTheDocument();

    const foundryCard = outputScope.getByText(/^foundry handoff$/i).closest("article");
    expect(foundryCard).not.toBeNull();
    const foundryScope = within(foundryCard as HTMLElement);
    expect(foundryScope.getByText(/foundry reviewer packet/i)).toBeInTheDocument();
    expect(foundryScope.getByText(/^ready$/i)).toBeInTheDocument();
    expect(foundryScope.getByText(/bundle project memory, sessions, and verified charts into one foundry export packet/i)).toBeInTheDocument();
    expect(foundryScope.getByText(/brief outline/i)).toBeInTheDocument();
    expect(foundryScope.getByText(/one-page narrative frame/i)).toBeInTheDocument();
    expect(foundryScope.getByText(/evidence appendix/i)).toBeInTheDocument();
    expect(foundryScope.getByText(/linked citations and figures for review/i)).toBeInTheDocument();
    expect(foundryScope.getByText(/slides handoff/i)).toBeInTheDocument();
    expect(foundryScope.getByText(/presentation-ready talking points for Foundry/i)).toBeInTheDocument();
    expect(within(foundryCard as HTMLElement).getAllByText(/^export$/i)).toHaveLength(3);
  });
});
