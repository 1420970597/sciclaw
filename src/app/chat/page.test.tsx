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
    expect(screen.getByText(/one lane per thread/i)).toBeInTheDocument();
    expect(screen.getByText(/live state surfaced/i)).toBeInTheDocument();
    expect(screen.getByText(/promote the locked answer/i)).toBeInTheDocument();
    expect(screen.getByText(/signal and next move stay on one tighter edge lane/i)).toBeInTheDocument();
    expect(screen.getByText(/switch live threads/i)).toBeInTheDocument();
    expect(screen.getByText(/session output lane/i)).toBeInTheDocument();
    expect(screen.getByText(/keep the answer lane in one calmer summary card/i)).toBeInTheDocument();
  });

  it("links the sidebar IA to implemented help and shell routes", () => {
    render(<ChatPage />);

    const projectsLink = screen.getByRole("link", { name: /projects shared workspace overview/i });
    const sessionsLink = screen.getByRole("link", { name: /sessions active investigation threads 3/i });
    const foundryCard = screen.getByRole("heading", { name: /promote the locked answer\./i }).closest("article");
    expect(foundryCard).not.toBeNull();
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

    const sessionsLink = screen.getByRole("link", { name: /sessions active investigation threads 3/i });
    const foundryCard = screen.getByRole("heading", { name: /promote the locked answer\./i }).closest("article");
    expect(foundryCard).not.toBeNull();

    expect(screen.getByText(/library · 128 assets/i)).toBeInTheDocument();
    expect(screen.getByText(/activity · 14 day streak/i)).toBeInTheDocument();
    expect(screen.getByText(/skills · 6 enabled/i)).toBeInTheDocument();
    expect(screen.getByText(/^128 assets$/i)).toBeInTheDocument();
    expect(within(sessionsLink).getByText(/^3$/i)).toBeInTheDocument();
    expect(within(foundryCard as HTMLElement).getByText(/12 ready/i)).toBeInTheDocument();
    expect(screen.getByText(/patent compare/i)).toBeInTheDocument();
    expect(screen.getByText(/clinical replay/i)).toBeInTheDocument();
    expect(screen.getByText(/reg memo final/i)).toBeInTheDocument();
    expect(screen.getByText(/signal and next move stay on one tighter edge lane/i)).toBeInTheDocument();

    const tasksPanel = screen.getByText(/queue the next research slice/i).closest("section");
    expect(tasksPanel).not.toBeNull();
    expect(within(tasksPanel as HTMLElement).getByText(/import the next pdf batch/i)).toBeInTheDocument();
    expect(within(tasksPanel as HTMLElement).getByText(/12 pdfs queued/i)).toBeInTheDocument();
    expect(within(tasksPanel as HTMLElement).getByText(/ground retrieval before review/i)).toBeInTheDocument();
    expect(within(tasksPanel as HTMLElement).getByText(/generate the compare session/i)).toBeInTheDocument();
    expect(within(tasksPanel as HTMLElement).getByText(/owner · research lead/i)).toBeInTheDocument();
    expect(within(tasksPanel as HTMLElement).getByText(/keep this lane isolated/i)).toBeInTheDocument();
    expect(within(tasksPanel as HTMLElement).getByText(/push the verified outline/i)).toBeInTheDocument();
    expect(within(tasksPanel as HTMLElement).getByText(/export lane/i)).toBeInTheDocument();
    expect(screen.getByTestId("chat-right-rail-grid")).toHaveClass(
      "xl:grid-cols-[minmax(0,1fr)_minmax(0,0.98fr)]",
    );
  });

  it("keeps the docs-to-workspace bridge actions navigable from the preview shell", () => {
    render(<ChatPage />);

    expect(screen.getByRole("link", { name: /open thread/i })).toHaveAttribute("href", "/chat");
    expect(screen.getByRole("link", { name: /review tasks/i })).toHaveAttribute("href", "/help/tasks");
    expect(screen.getByRole("link", { name: /open rail/i })).toHaveAttribute("href", "/help/foundry");
  });

  it("keeps the lower center strip as a calmer three-card checkpoint rail after the density pass", () => {
    render(<ChatPage />);

    const sessionFlowHeading = screen.getByRole("heading", {
      name: /project & session flow staged between docs and the future workspace/i,
    });
    const sessionFlowSection = sessionFlowHeading.closest("section");
    expect(sessionFlowSection).not.toBeNull();
    const sessionFlowScope = within(sessionFlowSection as HTMLElement);

    expect(sessionFlowSection).toHaveTextContent(/project & session flow staged between docs and the future workspace/i);
    expect(sessionFlowScope.getByTestId("chat-flow-card-grid")).toHaveClass(
      "xl:grid-cols-[repeat(3,minmax(0,14rem))]",
    );
    expect(sessionFlowScope.getByRole("heading", { name: /hold live hypothesis/i })).toBeInTheDocument();
    expect(sessionFlowScope.getByRole("heading", { name: /assign blocker/i })).toBeInTheDocument();
    expect(sessionFlowScope.getByRole("heading", { name: /foundry fold/i })).toBeInTheDocument();
    expect(sessionFlowScope.getByText(/foundry sync/i)).toBeInTheDocument();
    expect(sessionFlowScope.getByText(/keep bridge notes calm/i)).toBeInTheDocument();
    expect(sessionFlowScope.queryByText(/all flow checkpoints stay folded into tasks and foundry/i)).not.toBeInTheDocument();
    expect(sessionFlowScope.getByRole("link", { name: /open rail/i })).toHaveAttribute(
      "href",
      "/help/foundry",
    );
    expect(screen.getByTestId("chat-right-rail-grid")).toHaveClass(
      "xl:grid-cols-[minmax(0,1fr)_minmax(0,0.98fr)]",
    );
  });

  it("keeps the Active sessions rows denser in meaning but calmer in layout after the session-lane pass", () => {
    render(<ChatPage />);

    const activeSessionsLabel = screen.getByText(/^active sessions$/i);
    const activeSessionsHeader = activeSessionsLabel.parentElement?.parentElement;
    const activeSessionsCard = activeSessionsHeader?.parentElement;
    expect(activeSessionsHeader).not.toBeNull();
    expect(activeSessionsCard).not.toBeNull();
    const activeSessionsScope = within(activeSessionsCard as HTMLElement);

    expect(
      activeSessionsScope.getByText(/signal and next move stay on one tighter edge lane/i),
    ).toBeInTheDocument();

    const activeSessionTitles = [/patent compare/i, /clinical replay/i, /reg memo final/i];
    for (const titlePattern of activeSessionTitles) {
      expect(activeSessionsScope.getByText(titlePattern)).toBeInTheDocument();
    }

    const activeSessionsRows = Array.from(
      activeSessionTitles.map((titlePattern) => {
        const row = activeSessionsScope.getByText(titlePattern).closest("div.grid");
        expect(row).not.toBeNull();
        return row as HTMLElement;
      }),
    );

    const firstSession = activeSessionsRows[0];
    expect(firstSession).toHaveClass("sm:grid-cols-[minmax(0,1fr)_minmax(4.8rem,auto)]");
    expect(within(firstSession).getByText(/Patent compare/i)).toBeInTheDocument();
    expect(within(firstSession).getByText(/Overlap staged\./i)).toBeInTheDocument();
    expect(within(firstSession).getByText(/Cluster map/i)).toBeInTheDocument();
    expect(within(firstSession).getByText(/^12m$/i)).toBeInTheDocument();

    const secondSession = activeSessionsRows[1] as HTMLElement;
    expect(within(secondSession).getByText(/Clinical replay/i)).toBeInTheDocument();
    expect(within(secondSession).getByText(/Replay queued\./i)).toBeInTheDocument();
    expect(within(secondSession).getByText(/^Queue$/i)).toBeInTheDocument();
    expect(within(secondSession).getByText(/^1 blocker$/i)).toBeInTheDocument();

    const thirdSession = activeSessionsRows[2] as HTMLElement;
    expect(within(thirdSession).getByText(/Reg memo final/i)).toBeInTheDocument();
    expect(within(thirdSession).getByText(/Outline locked\./i)).toBeInTheDocument();
    expect(within(thirdSession).getByText(/^Ready$/i)).toBeInTheDocument();
    expect(within(thirdSession).getByText(/^Packet$/i)).toBeInTheDocument();
  });

  it("keeps the right rail flatter and less nested after the density pass", () => {
    render(<ChatPage />);

    const sessionOutputHeading = screen.getByRole("heading", {
      name: /shape a concise workspace brief before you leave the public docs shell/i,
    });
    const sessionOutputSection = sessionOutputHeading.closest("section");
    expect(sessionOutputSection).not.toBeNull();
    const rightRailScope = within(sessionOutputSection as HTMLElement);

    expect(rightRailScope.getByText(/status board/i)).toBeInTheDocument();
    expect(rightRailScope.getByText(/3 signals/i)).toBeInTheDocument();
    expect(rightRailScope.getByText(/evidence chain/i)).toBeInTheDocument();
    expect(rightRailScope.getByText(/open risk/i)).toBeInTheDocument();
    expect(rightRailScope.getByText(/handoff route/i)).toBeInTheDocument();
    expect(rightRailScope.queryByText(/keep citations attached to the draft/i)).not.toBeInTheDocument();
    expect(rightRailScope.queryByText(/hold one unresolved call before review leaves/i)).not.toBeInTheDocument();
    expect(rightRailScope.queryByText(/jump back to memory, tasks, or the thread/i)).not.toBeInTheDocument();
    expect(rightRailScope.getByText(/citations pinned/i)).toBeInTheDocument();
    expect(rightRailScope.getByText(/1 call pending/i)).toBeInTheDocument();
    expect(rightRailScope.getByText(/return to source/i)).toBeInTheDocument();
    expect(rightRailScope.getByText(/foundry packet/i)).toBeInTheDocument();
    expect(rightRailScope.getByText(/^ready$/i)).toBeInTheDocument();
    expect(rightRailScope.queryByText(/^packet export$/i)).not.toBeInTheDocument();
    expect(rightRailScope.getByText(/session output lane/i)).toBeInTheDocument();
    expect(rightRailScope.getByText(/keep the answer lane in one calmer summary card/i)).toBeInTheDocument();
    expect(rightRailScope.getByText(/^packet$/i)).toBeInTheDocument();
    expect(rightRailScope.getByText(/brief and slides together/i)).toBeInTheDocument();
    expect(rightRailScope.queryByText(/packet export/i)).not.toBeInTheDocument();
    expect(rightRailScope.queryByText(/brief and slides staged together/i)).not.toBeInTheDocument();
    expect(rightRailScope.queryByText(/evidence appendix/i)).not.toBeInTheDocument();
    expect(rightRailScope.queryByText(/slides handoff/i)).not.toBeInTheDocument();
    expect(rightRailScope.getAllByText(/^export$/i).length).toBeGreaterThan(0);
  });
});
