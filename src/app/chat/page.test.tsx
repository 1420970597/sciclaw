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
    expect(screen.getByText(/thread anchor/i)).toBeInTheDocument();
    expect(screen.getByText(/memory pinned/i)).toBeInTheDocument();
    expect(screen.getByText(/live switchboard/i)).toBeInTheDocument();
    expect(screen.getByText(/3 live lanes/i)).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /edge lane/i })).toBeInTheDocument();
    expect(screen.getByText(/1 blocker routed/i)).toBeInTheDocument();
    expect(screen.getByText(/^packet ready$/i)).toBeInTheDocument();
    expect(screen.getByText(/keep answer, risk, and export aligned\./i)).toBeInTheDocument();
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

    const sessionsLink = screen.getByRole("link", { name: /sessions active investigation threads 3/i });
    const taskLaneCard = screen.getByRole("heading", { name: /edge lane/i }).closest("article");
    expect(taskLaneCard).not.toBeNull();
    const utilityBand = screen.getByRole("heading", { name: /thread anchor/i }).closest("div.grid");
    expect(utilityBand).not.toBeNull();

    expect(screen.getByText(/library · 128 assets/i)).toBeInTheDocument();
    expect(screen.getByText(/activity · 14 day streak/i)).toBeInTheDocument();
    expect(screen.getByText(/skills · 6 enabled/i)).toBeInTheDocument();
    expect(screen.getByText(/^128 assets$/i)).toBeInTheDocument();
    expect(within(sessionsLink).getByText(/^3$/i)).toBeInTheDocument();
    const utilityBandElement = utilityBand as HTMLElement;
    expect(within(taskLaneCard as HTMLElement).getByText(/^1 blocker$/i)).toBeInTheDocument();
    expect(within(utilityBandElement).getByText(/^1 blocker$/i)).toBeInTheDocument();
    expect(utilityBandElement).toHaveClass("xl:grid-cols-[repeat(3,minmax(0,11.3rem))]");
    expect(screen.getByText(/patent compare/i)).toBeInTheDocument();
    expect(screen.getByText(/clinical replay/i)).toBeInTheDocument();
    expect(screen.getByText(/reg memo final/i)).toBeInTheDocument();
    expect(screen.getByText(/next move stays on one quieter edge lane/i)).toBeInTheDocument();

    const tasksPanel = screen.getByText(/queue the next research slice/i).closest("section");
    expect(tasksPanel).not.toBeNull();
    expect(within(tasksPanel as HTMLElement).getByText(/import the next pdf batch/i)).toBeInTheDocument();
    expect(within(tasksPanel as HTMLElement).getByText(/^12 pdfs$/i)).toBeInTheDocument();
    expect(within(tasksPanel as HTMLElement).getByText(/ground retrieval first/i)).toBeInTheDocument();
    expect(within(tasksPanel as HTMLElement).getByText(/generate compare session/i)).toBeInTheDocument();
    expect(within(tasksPanel as HTMLElement).getByText(/^research lead$/i)).toBeInTheDocument();
    expect(within(tasksPanel as HTMLElement).getByText(/keep this lane isolated/i)).toBeInTheDocument();
    expect(within(tasksPanel as HTMLElement).getByText(/push verified outline/i)).toBeInTheDocument();
    expect(within(tasksPanel as HTMLElement).getByText(/^export$/i)).toBeInTheDocument();
    expect(within(tasksPanel as HTMLElement).getByText(/promote the winning brief/i)).toBeInTheDocument();
    expect(screen.getByTestId("chat-right-rail-grid")).toHaveClass(
      "xl:grid-cols-[minmax(0,1.06fr)_minmax(272px,0.92fr)]",
    );
    expect(screen.getByText(/pin live claim\./i)).toBeInTheDocument();
    expect(screen.getByText(/route one block/i)).toBeInTheDocument();
    expect(screen.getByText(/route blocker/i)).toBeInTheDocument();
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
      "xl:grid-cols-[repeat(3,minmax(0,14.6rem))]",
    );
    expect(sessionFlowScope.getByRole("heading", { name: /hold live claim/i })).toBeInTheDocument();
    expect(sessionFlowScope.getByRole("heading", { name: /route blocker/i })).toBeInTheDocument();
    expect(sessionFlowScope.getByRole("heading", { name: /foundry fold/i })).toBeInTheDocument();
    expect(sessionFlowScope.getByText(/foundry sync/i)).toBeInTheDocument();
    expect(sessionFlowScope.getByText(/bridge notes calm\./i)).toBeInTheDocument();
    expect(sessionFlowScope.queryByText(/all flow checkpoints stay folded into tasks and foundry/i)).not.toBeInTheDocument();
    expect(sessionFlowScope.getByRole("link", { name: /open rail/i })).toHaveAttribute(
      "href",
      "/help/foundry",
    );
    expect(screen.getByTestId("chat-right-rail-grid")).toHaveClass(
      "xl:grid-cols-[minmax(0,1.06fr)_minmax(272px,0.92fr)]",
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
      activeSessionsScope.getByText(/next move stays on one quieter edge lane/i),
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

    expect(within(activeSessionsRows[0] as HTMLElement).getByText(/^12m$/i)).toBeInTheDocument();
    expect(within(activeSessionsRows[0] as HTMLElement).getByText(/^Map$/i)).toBeInTheDocument();
    expect(within(activeSessionsRows[1] as HTMLElement).getByText(/^1 hold$/i)).toBeInTheDocument();
    expect(within(activeSessionsRows[1] as HTMLElement).getByText(/^Queue$/i)).toBeInTheDocument();
    expect(within(activeSessionsRows[2] as HTMLElement).getByText(/^Ready$/i)).toBeInTheDocument();
    expect(within(activeSessionsRows[2] as HTMLElement).getByText(/^Packet$/i)).toBeInTheDocument();

    const firstSession = activeSessionsRows[0];
    expect(firstSession).toHaveClass("sm:grid-cols-[minmax(0,1fr)_minmax(5rem,auto)]");
    expect(within(firstSession).getByText(/Patent compare/i)).toBeInTheDocument();
    expect(within(firstSession).getByText(/Overlap staged\./i)).toBeInTheDocument();
    expect(within(firstSession).getByText(/^Map$/i)).toBeInTheDocument();
    expect(within(firstSession).getByText(/^12m$/i)).toBeInTheDocument();

    const secondSession = activeSessionsRows[1] as HTMLElement;
    expect(within(secondSession).getByText(/Clinical replay/i)).toBeInTheDocument();
    expect(within(secondSession).getByText(/Replay queued\./i)).toBeInTheDocument();
    expect(within(secondSession).getByText(/^Queue$/i)).toBeInTheDocument();
    expect(within(secondSession).getByText(/^1 hold$/i)).toBeInTheDocument();

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
    expect(rightRailScope.getByText(/2 signals/i)).toBeInTheDocument();
    expect(rightRailScope.getByText(/^sources$/i)).toBeInTheDocument();
    expect(rightRailScope.getByText(/^risk$/i)).toBeInTheDocument();
    expect(rightRailScope.queryByText(/evidence chain/i)).not.toBeInTheDocument();
    expect(rightRailScope.queryByText(/open risk/i)).not.toBeInTheDocument();
    expect(rightRailScope.queryByText(/sources locked/i)).not.toBeInTheDocument();
    expect(rightRailScope.queryByText(/1 call held/i)).not.toBeInTheDocument();
    expect(rightRailScope.queryByText(/one review call waits\./i)).not.toBeInTheDocument();
    expect(rightRailScope.getByText(/^locked$/i)).toBeInTheDocument();
    expect(rightRailScope.getByText(/^1 held$/i)).toBeInTheDocument();
    expect(rightRailScope.getByText(/one review wait\./i)).toBeInTheDocument();
    expect(rightRailScope.getAllByText(/^foundry handoff$/i).length).toBeGreaterThan(0);
    expect(rightRailScope.getByText(/^ready$/i)).toBeInTheDocument();
    expect(
      rightRailScope.getByText(/bundle memory, sessions, and verified charts into one export packet\./i),
    ).toBeInTheDocument();
    expect(rightRailScope.queryByText(/^packet export$/i)).not.toBeInTheDocument();
    expect(rightRailScope.getByText(/session output lane/i)).toBeInTheDocument();
    expect(rightRailScope.getByText(/keep answer, risk, and export aligned\./i)).toBeInTheDocument();
    expect(rightRailScope.getByText(/^packet ready$/i)).toBeInTheDocument();
    expect(rightRailScope.getAllByText(/^export$/i).length).toBeGreaterThan(0);
    expect(rightRailScope.getByText(/brief \+ slides staged\./i)).toBeInTheDocument();
    expect(rightRailScope.queryByText(/brief \+ slides ready\./i)).not.toBeInTheDocument();
    expect(rightRailScope.queryByText(/^packet$/i)).not.toBeInTheDocument();
    expect(rightRailScope.queryByText(/brief and slides together\./i)).not.toBeInTheDocument();
    expect(rightRailScope.queryByText(/brief and slides staged together\./i)).not.toBeInTheDocument();
    expect(rightRailScope.queryByText(/evidence appendix/i)).not.toBeInTheDocument();
    expect(rightRailScope.queryByText(/slides handoff/i)).not.toBeInTheDocument();
    expect(rightRailScope.getAllByText(/^export$/i).length).toBeGreaterThan(0);
  });
});
