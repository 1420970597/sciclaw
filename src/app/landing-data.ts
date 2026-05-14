export type NavLink = {
  label: string;
  href: string;
};

export type FeatureItem = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  metrics: string[];
  accent: string;
};

export type AuthTab = "onboard" | "login";

export type BestCase = {
  title: string;
  description: string;
  tags: string[];
  statLabel: string;
  statValue: string;
};

export type HelpIcon =
  | "rocket"
  | "folder"
  | "chat"
  | "bolt"
  | "book"
  | "clock"
  | "hammer"
  | "persona"
  | "send"
  | "sliders";

export type HelpSection = {
  id: string;
  title: string;
};

export type HelpSidebarEntry = {
  index: string;
  slug: string;
  title: string;
  icon: HelpIcon;
};

type HelpBodyBlock =
  | {
      type: "paragraph";
      content: string;
      sectionId?: string;
    }
  | {
      type: "list";
      items: string[];
      sectionId?: string;
    };

export type HelpArticle = {
  slug: string;
  index: string;
  title: string;
  navTitle?: string;
  description: string;
  icon: HelpIcon;
  heroParagraphs?: string[];
  sections: HelpSection[];
  nextHref?: string;
  nextLabel?: string;
  body: HelpBodyBlock[];
};

export type AppShellSection = {
  index: string;
  label: string;
  subtitle: string;
  href: string;
  badge?: string;
  view: "project" | "session" | "library" | "tasks" | "foundry" | "persona" | "im" | "settings";
};

export type AppShellCard = {
  eyebrow: string;
  title: string;
  description: string;
  meta: string;
  detail?: string;
};

export type AppShellOutputSignal = {
  label: string;
  description: string;
  summary?: string;
};

export type AppShellStatusGroup = {
  heading: string;
  items: AppShellOutputSignal[];
};

export type AppShellExportAsset = {
  label: string;
  description: string;
};

export type AppShellTimelineItem = {
  title: string;
  description: string;
  meta: string;
  summary?: string;
  summaryTone?: "neutral" | "warn" | "accent";
};

export type AppShellTodo = {
  label: string;
  note: string;
  state: "done" | "active" | "pending";
  meta?: string;
};

export type AppShellResource = {
  label: string;
  description: string;
  meta: string;
};

export type AppShellStatusPill = {
  label: string;
  tone: "neutral" | "warn" | "accent";
};

export type AppShellFlowCard = {
  title: string;
  eyebrow: string;
  description: string;
  meta: string;
  pills: AppShellStatusPill[];
  ctaLabel: string;
  ctaHref: string;
};

export type AppShellWorkspaceMetric = {
  label: string;
  value: string;
};

export const navLinks: NavLink[] = [
  { label: "User Guide", href: "/help/getting-started" },
  { label: "Contact Us", href: "/privacy" },
  { label: "Settings", href: "/help/settings" },
];

export const featureItems: FeatureItem[] = [
  {
    id: "literature-analysis",
    eyebrow: "Literature Analysis",
    title: "Turn dense papers into an executable research brief.",
    description:
      "Summarize arguments, surface evidence chains, and map contradictions across sources in a single workspace built for scientific and legal review.",
    metrics: [
      "Claim graph extraction",
      "Related work clustering",
      "Citation-grounded notes",
    ],
    accent: "from-cyan-400/30 via-sky-400/10 to-transparent",
  },
  {
    id: "data-mining",
    eyebrow: "Data Mining",
    title: "Mine datasets, filings, and transcripts for the patterns that matter.",
    description:
      "Blend tabular evidence, scraped records, and uploaded archives to expose trends, anomalies, and supporting exhibits without leaving the thread.",
    metrics: [
      "Multi-source ingestion",
      "Evidence traceability",
      "Structured export ready",
    ],
    accent: "from-violet-400/30 via-fuchsia-400/10 to-transparent",
  },
  {
    id: "outcome-present",
    eyebrow: "Outcome Present",
    title: "Package insights into stakeholder-ready narratives in minutes.",
    description:
      "Convert working notes into polished case memos, presentation outlines, and action-focused summaries while preserving links back to source context.",
    metrics: [
      "Auto-generated briefs",
      "Slide-friendly story arcs",
      "Review and revise loop",
    ],
    accent: "from-emerald-400/25 via-teal-400/10 to-transparent",
  },
  {
    id: "autonomous-execution",
    eyebrow: "Autonomous Execution",
    title: "Turn a research goal into an executable plan without leaving the landing flow.",
    description:
      "Break down the next experiment, queue the needed tools, and route the first output packet while keeping each stage tied back to the underlying question.",
    metrics: [
      "Goal-to-plan routing",
      "Experiment queue handoff",
      "Output packet staging",
    ],
    accent: "from-amber-400/25 via-orange-400/10 to-transparent",
  },
];

export const bestCases: BestCase[] = [
  {
    title: "Automated Report Generation",
    description:
      "Automatically integrates historical tasks, literature, and experimental data into clear, presentation-ready materials, significantly improving the efficiency of research reporting.",
    tags: ["Slides", "Documents", "Research reporting"],
    statLabel: "Reporting efficiency",
    statValue: "Presentation-ready",
  },
  {
    title: "Peer Review Response Support",
    description:
      "Automatically retrieves relevant data, manuscript content, and past task records in response to reviewer comments, helping researchers quickly draft evidence-based replies.",
    tags: ["Peer review", "Task records", "Evidence-backed response"],
    statLabel: "Response turnaround",
    statValue: "Faster",
  },
  {
    title: "Accelerated Paper Reproduction",
    description:
      "Provides end-to-end support for environment setup, workflow construction, and error handling in paper reproduction, enabling faster validation of methods and results.",
    tags: ["Paper reproduction", "Workflow setup", "Error handling"],
    statLabel: "Reproduction support",
    statValue: "End-to-end",
  },
  {
    title: "Deep Literature Analysis",
    description:
      "Upload a PDF, and SciClaw automatically extracts the core arguments, research methods, and key data, then independently designs plans to reproduce and extend the published results.",
    tags: ["PDF analysis", "Methods", "Data extraction"],
    statLabel: "Core insight",
    statValue: "Mapped",
  },
];

export const appShellSections: AppShellSection[] = [
  {
    index: "01",
    label: "Projects",
    subtitle: "Shared workspace overview",
    href: "/help/projects",
    view: "project",
  },
  {
    index: "02",
    label: "Sessions",
    subtitle: "Active investigation threads",
    href: "/chat",
    badge: "3",
    view: "session",
  },
  {
    index: "03",
    label: "Library",
    subtitle: "Grounded papers & notes",
    href: "/help/library",
    badge: "RAG",
    view: "library",
  },
  {
    index: "04",
    label: "Tasks",
    subtitle: "Queued autonomous work",
    href: "/help/tasks",
    badge: "Today",
    view: "tasks",
  },
  {
    index: "05",
    label: "Foundry",
    subtitle: "Polished output layer",
    href: "/help/foundry",
    view: "foundry",
  },
  {
    index: "06",
    label: "Persona",
    subtitle: "Research behavior controls",
    href: "/help/persona",
    view: "persona",
  },
  {
    index: "07",
    label: "IM",
    subtitle: "External workflow delivery",
    href: "/help/im",
    view: "im",
  },
  {
    index: "08",
    label: "Settings",
    subtitle: "Appearance and usage",
    href: "/help/settings",
    view: "settings",
  },
];

export const appShellCards: AppShellCard[] = [
  {
    eyebrow: "Context",
    title: "Thread anchor",
    description: "Memory pinned.",
    meta: "128 assets",
    detail: "Memory pinned",
  },
  {
    eyebrow: "Threads",
    title: "Live switchboard",
    description: "3 live.",
    meta: "3 live",
    detail: "Checkpoint recall",
  },
  {
    eyebrow: "Tasks",
    title: "Edge lane",
    description: "1 blocker.",
    meta: "1 blocker",
    detail: "Task lane live",
  },
];

export const appShellFlowCards: AppShellFlowCard[] = [
  {
    eyebrow: "Session focus",
    title: "Hold live claim",
    description: "Pin live claim.",
    meta: "12m",
    pills: [{ label: "Memo live", tone: "accent" }],
    ctaLabel: "Open thread",
    ctaHref: "/chat",
  },
  {
    eyebrow: "Task lane",
    title: "Route blocker",
    description: "Route one blocker.",
    meta: "Handoff",
    pills: [{ label: "1 blocker", tone: "warn" }],
    ctaLabel: "Review tasks",
    ctaHref: "/help/tasks",
  },
  {
    eyebrow: "Checkpoint rail",
    title: "Foundry fold",
    description: "Bridge notes calm.",
    meta: "Folded",
    pills: [{ label: "Foundry sync", tone: "neutral" }],
    ctaLabel: "Open rail",
    ctaHref: "/help/foundry",
  },
];

export const appShellTimeline: AppShellTimelineItem[] = [
  {
    title: "Patent compare",
    description: "Overlap staged.",
    summary: "Map",
    summaryTone: "neutral",
    meta: "12m",
  },
  {
    title: "Clinical replay",
    description: "Replay queued.",
    summary: "Queue",
    summaryTone: "warn",
    meta: "1 hold",
  },
  {
    title: "Reg memo final",
    description: "Outline locked.",
    summary: "Packet",
    summaryTone: "accent",
    meta: "Ready",
  },
];

export const appShellTodos: AppShellTodo[] = [
  {
    label: "Import PDFs",
    note: "Ground.",
    meta: "Map",
    state: "done",
  },
  {
    label: "Compare",
    note: "Keep quiet.",
    meta: "Lead",
    state: "active",
  },
  {
    label: "Ship brief",
    note: "Stage brief.",
    meta: "Ship",
    state: "pending",
  },
];

export const appShellResources: AppShellResource[] = [
  {
    label: "Library · 128 assets",
    description: "Uploaded papers, notes, and evidence tables available for grounded retrieval.",
    meta: "Synced",
  },
  {
    label: "Activity · 14 day streak",
    description: "Heatmap-ready task history to pivot from daily execution into specific session reviews.",
    meta: "Live",
  },
  {
    label: "Skills · 6 enabled",
    description: "Focused tool access for literature analysis, task execution, and report packaging.",
    meta: "Scoped",
  },
];

export const appShellWorkspaceMetrics: AppShellWorkspaceMetric[] = [
  { label: "Live sessions", value: "3" },
  { label: "Open tasks", value: "5" },
  { label: "Foundry exports", value: "12" },
];

export const appShellStatusGroups: AppShellStatusGroup[] = [
  {
    heading: "Status board",
    items: [
      {
        label: "Sources",
        summary: "Locked",
        description: "Citations pinned.",
      },
      {
        label: "Risk",
        summary: "1 held",
        description: "One review wait.",
      },
    ],
  },
];

export const appShellOutputSummary = {
  eyebrow: "Live draft",
  title: "Session output lane",
  description: "Keep answer, risk, and export aligned.",
  meta: "Session 07",
};

export const appShellExportStats = ["3 live", "Packet ready"];

export const appShellExportSummary = {
  eyebrow: "Ready packet",
  title: "Foundry handoff",
  badge: "Ready",
  description: "Bundle memory, sessions, and verified charts into one export packet.",
};

export const appShellExportAssets: AppShellExportAsset[] = [
  {
    label: "Export",
    description: "Brief + slides staged.",
  },
];

export const helpArticles: HelpArticle[] = [

  {
    slug: "getting-started",
    index: "01",
    title: "Getting Started",
    description:
      "SciClaw is an AI co-worker built for scientific research. It helps researchers continuously manage the full research cycle around a project.",
    icon: "rocket",
    heroParagraphs: [
      "SciClaw is an AI co-worker built for scientific research. It helps researchers continuously manage the full research cycle around a project, including knowledge capture, task execution, output generation, and workflow improvement, so research can operate as a true closed loop. Powered by a proactive agent framework, SciClaw continuously connects literature search, data analysis, deep research, long-running computation, result organization, and experimental execution. This allows research workflows to move beyond manually advancing one step at a time and toward a system that can actively coordinate and push work forward.",
      "Scientific discovery is not a discipline that can be run well by stacking conversations alone with AI, nor is it a field where breakthroughs reliably come from pure model reasoning. Serious research demands project-based orchestration of stage-appropriate tasks, scientific computing and simulation engines that yield high-precision, trustworthy data, and long-horizon cycles of reflection and iteration to refine methods and workflows. These are capabilities that today's large language models, and general-purpose frameworks such as OpenClaw by themselves, do not provide end-to-end.",
    ],
    sections: [
      { id: "what-sciclaw-is", title: "1. What SciClaw Is" },
      { id: "initial-setup", title: "2. Initial Setup" },
      { id: "how-sciclaw-works", title: "3. How SciClaw Works" },
    ],
    nextHref: "/help/projects",
    nextLabel: "Project & Session",
    body: [
      {
        type: "paragraph",
        sectionId: "what-sciclaw-is",
        content:
          "SciClaw was designed to address the fragmentation of modern research work: it keeps project context, capability routing, output generation, and downstream experimental execution connected inside one collaborative system.",
      },
      {
        type: "paragraph",
        sectionId: "initial-setup",
        content:
          "When you use SciClaw for the first time, the system starts with a short conversation to understand your research focus, working style, and usage preferences. Based on this, it initializes your AI Persona so later collaboration can stay more relevant and consistent.",
      },
      {
        type: "list",
        sectionId: "how-sciclaw-works",
        items: [
          "1 Create a project and upload your research files",
          "2 Enable the right skills for the task",
          "3 Ask questions or request analysis in chat",
          "4 Review live outputs, tool activity, and generated files",
          "5 Export reports and documents in Foundry",
        ],
      },
    ],
  },
  {
    slug: "projects",
    index: "02",
    title: "Projects",
    navTitle: "Project & Session",
    description:
      "Project hubs tie together uploaded sources, hypothesis lanes, and handoff targets so every session can stay grounded in the same working context.",
    icon: "folder",
    heroParagraphs: [
      "Projects are the stable memory layer of the SciClaw shell. They collect papers, datasets, and operating notes so later session work can reuse the same context without restarting from scratch.",
      "On the public route, the project story is represented through cards, metrics, and preview rails rather than editable forms. The goal is to preserve the live site's calm app-shell feeling while still reading as a marketing-facing preview.",
    ],
    sections: [
      { id: "project-memory", title: "Project memory" },
      { id: "session-attachment", title: "Session attachment" },
      { id: "handoff-path", title: "Handoff path" },
    ],
    nextHref: "/chat",
    nextLabel: "Chat workspace preview",
    body: [
      {
        type: "paragraph",
        sectionId: "project-memory",
        content:
          "A project preserves the reusable context behind the public preview: uploaded assets, activity history, enabled skills, and the working labels that make later chat or Foundry steps legible.",
      },
      {
        type: "list",
        sectionId: "project-memory",
        items: [
          "Asset counts and memory badges make the context tangible without exposing private data flows.",
          "Activity and skills cards suggest live operational depth while staying appropriate for a public page.",
          "The sidebar keeps Projects framed as the shell's anchor rather than a detached docs section.",
        ],
      },
      {
        type: "paragraph",
        sectionId: "session-attachment",
        content:
          "Every session lane in the reconstructed chat preview assumes a project is already holding the relevant literature, evidence, and operating brief. That dependency is visible even when the route remains public-facing.",
      },
      {
        type: "paragraph",
        sectionId: "handoff-path",
        content:
          "Projects also define the destination for finished output: session summaries, review packets, and Foundry exports all read more clearly when they are anchored to a persistent project hub.",
      },
    ],
  },
  {
    slug: "chat",
    index: "03",
    title: "Chat",
    description:
      "The chat panel is the main workspace for interacting with SciClaw. Here, you can ask questions, attach files, enable knowledge base search, or use the command bar to access specific features.",
    icon: "chat",
    heroParagraphs: [
      "The chat panel is the main workspace for interacting with SciClaw. Here, you can ask questions, attach files, enable knowledge base search, or use the command bar to access specific features.",
    ],
    sections: [
      { id: "command-bar", title: "Command bar" },
      { id: "sending-messages", title: "Sending messages" },
      { id: "attaching-files", title: "Attaching files" },
      { id: "library", title: "Library" },
      { id: "guiding-the-agent-mid-task", title: "Guiding the agent mid-task" },
      { id: "interactive-prompts", title: "Interactive prompts" },
      { id: "inline-skill-invocation", title: "Inline skill invocation" },
    ],
    body: [
      {
        type: "paragraph",
        sectionId: "command-bar",
        content:
          "The command bar above the input box provides four quick actions:",
      },
      {
        type: "list",
        sectionId: "command-bar",
        items: [
          "➕ New Chat — Start a new conversation session",
          "⏹ Stop — Interrupt the current response or background task",
          "⚡ Skills — Open the Skills list and select the skills you want to use in the current chat",
          "🔨 Foundry — Open the document generation workspace",
        ],
      },
      {
        type: "paragraph",
        sectionId: "sending-messages",
        content:
          "Type your message in the input box and press Enter to send. Press Shift + Enter to start a new line. SciClaw's responses are streamed in real time, so you can follow its reasoning, tool usage, and results as they appear.",
      },
      {
        type: "paragraph",
        sectionId: "attaching-files",
        content:
          "To upload a file, click the 📎 paperclip icon in the lower-right corner of the input box, or simply drag and drop a file into the chat area. Uploaded files are automatically added to the current project, and their paths are passed to SciClaw for use in the conversation.",
      },
      {
        type: "paragraph",
        sectionId: "library",
        content:
          "Click the Library toggle in the lower-right corner of the input box to enable RAG mode. When enabled, SciClaw searches the current project's knowledge base before answering and retrieves relevant documents.",
      },
      {
        type: "paragraph",
        sectionId: "guiding-the-agent-mid-task",
        content:
          "While SciClaw is generating a response, you can type a new message in the input box and press Enter to inject it directly into the active agent workflow. This allows you to guide the next step in real time without interrupting the current task.",
      },
      {
        type: "paragraph",
        sectionId: "interactive-prompts",
        content:
          "When SciClaw needs confirmation, clarification, or a selection from you during task execution, it displays an interactive prompt above the input box. Click an option or type a reply to continue.",
      },
      {
        type: "paragraph",
        sectionId: "inline-skill-invocation",
        content:
          "Type / in the input box to open the skill list. Press Enter or click a skill to select it. The selected skill name is automatically inserted as a prefix to your message.",
      },
    ],
  },
  {
    slug: "skills",
    index: "04",
    title: "Skills",
    description:
      "Skills frame the reusable workflows that let SciClaw move from orientation into repeatable scientific and legal work patterns.",
    icon: "bolt",
    heroParagraphs: [
      "In the public shell, Skills act as the narrative explanation for why the app preview can speak about retrieval, execution, and packet handoff with confidence.",
    ],
    sections: [
      { id: "workflow-reuse", title: "Workflow reuse" },
      { id: "scoped-tools", title: "Scoped tools" },
    ],
    nextHref: "/help/library",
    nextLabel: "Library guide",
    body: [
      {
        type: "paragraph",
        sectionId: "workflow-reuse",
        content:
          "Reusable skills turn repeated investigation patterns into stable operating lanes: ingest evidence, compare sources, queue the next action, and package the verified result.",
      },
      {
        type: "list",
        sectionId: "scoped-tools",
        items: [
          "Public copy references enabled skills instead of internal agent implementation details.",
          "Sidebar and resource cards hint at scoped tool access without overclaiming hidden infrastructure.",
        ],
      },
    ],
  },
  {
    slug: "library",
    index: "05",
    title: "Library",
    description:
      "The library route explains how assets, notes, and evidence tables stay grounded and reusable across sessions.",
    icon: "book",
    heroParagraphs: [
      "SciClaw's library is the source-of-truth layer behind the visible session and task previews. The public route keeps that story concrete with asset counts, retrieval language, and evidence-forward copy.",
    ],
    sections: [
      { id: "grounded-assets", title: "Grounded assets" },
      { id: "retrieval-lane", title: "Retrieval lane" },
    ],
    nextHref: "/help/tasks",
    nextLabel: "Tasks guide",
    body: [
      {
        type: "paragraph",
        sectionId: "grounded-assets",
        content:
          "Library copy keeps the product grounded in uploaded papers, notes, transcripts, and structured tables so the rest of the shell can credibly speak about evidence-backed work.",
      },
      {
        type: "paragraph",
        sectionId: "retrieval-lane",
        content:
          "The public route emphasizes retrieval readiness and traceability rather than raw database operations. That preserves fidelity to the live site's tone while still explaining the product model.",
      },
    ],
  },
  {
    slug: "tasks",
    index: "06",
    title: "Tasks",
    description:
      "Tasks keep the next action visible: queued imports, comparison sessions, and outline promotion all stay adjacent to the live thread.",
    icon: "clock",
    heroParagraphs: [
      "The public task narrative is intentionally compact. It should feel like a credible operational queue without becoming a dense admin board.",
    ],
    sections: [
      { id: "queue-shape", title: "Queue shape" },
      { id: "promotion-path", title: "Promotion path" },
    ],
    nextHref: "/help/foundry",
    nextLabel: "Foundry guide",
    body: [
      {
        type: "paragraph",
        sectionId: "queue-shape",
        content:
          "Task rows in the chat preview show a concise label, a short note, and one meta token so the queue feels active but not overloaded.",
      },
      {
        type: "paragraph",
        sectionId: "promotion-path",
        content:
          "The queue ultimately promotes work toward brief-ready output and Foundry handoff, keeping the product story continuous from ingestion to presentation.",
      },
    ],
  },
  {
    slug: "foundry",
    index: "07",
    title: "Foundry",
    description:
      "Foundry is the public name for the polished output layer: briefs, slides, and review packets shaped from live session work.",
    icon: "hammer",
    heroParagraphs: [
      "Foundry closes the bridge from documentation into workspace preview. It is where memory, sessions, citations, and verified charts condense into stakeholder-ready output.",
    ],
    sections: [
      { id: "packet-shape", title: "Packet shape" },
      { id: "review-safety", title: "Review safety" },
    ],
    nextHref: "/help/persona",
    nextLabel: "Persona guide",
    body: [
      {
        type: "paragraph",
        sectionId: "packet-shape",
        content:
          "The right rail in /chat previews Foundry as a ready packet rather than a finished private feature. The goal is fidelity to the public shell, not overclaiming unseen functionality.",
      },
      {
        type: "list",
        sectionId: "review-safety",
        items: [
          "Bundle memory, session state, and verified charts into one export lane.",
          "Keep brief and slides visibly paired so the public route still reads as one product story.",
        ],
      },
    ],
  },
  {
    slug: "persona",
    index: "08",
    title: "Persona",
    navTitle: "AI Persona",
    description:
      "Persona settings describe how the assistant can be steered for different scientific workflows without breaking the calm app-shell narrative.",
    icon: "persona",
    heroParagraphs: [
      "Persona controls are shown as a public-facing explanation layer rather than a deep preferences console. The route should read as guidance, not a fully authenticated settings tool.",
    ],
    sections: [
      { id: "behavior-shaping", title: "Behavior shaping" },
      { id: "session-fit", title: "Session fit" },
    ],
    nextHref: "/help/im",
    nextLabel: "IM guide",
    body: [
      {
        type: "paragraph",
        sectionId: "behavior-shaping",
        content:
          "Persona copy explains how SciClaw can adapt to review, synthesis, and output-shaping tasks while keeping the overall public shell lightweight.",
      },
      {
        type: "paragraph",
        sectionId: "session-fit",
        content:
          "This route stays adjacent to chat and tasks because persona choices are meaningful only in the context of live session work.",
      },
    ],
  },
  {
    slug: "im",
    index: "09",
    title: "IM",
    navTitle: "IM Connection",
    description:
      "External workflow delivery explains how results leave the shell: notifications, routing, and lightweight collaboration handoff.",
    icon: "send",
    heroParagraphs: [
      "The IM route keeps delivery visible without turning the public shell into a full communications product. It stays in the bridge narrative: session → review → handoff.",
    ],
    sections: [
      { id: "delivery-lane", title: "Delivery lane" },
      { id: "handoff-context", title: "Handoff context" },
    ],
    nextHref: "/help/settings",
    nextLabel: "Settings guide",
    body: [
      {
        type: "paragraph",
        sectionId: "delivery-lane",
        content:
          "IM copy explains where a verified packet might go next: a teammate, a reporting channel, or a review checkpoint outside the shell.",
      },
      {
        type: "paragraph",
        sectionId: "handoff-context",
        content:
          "Keeping this route public-facing preserves the live site's information architecture while hinting at the downstream workflow layer.",
      },
    ],
  },
  {
    slug: "settings",
    index: "10",
    title: "System Settings",
    navTitle: "Settings",
    description:
      "System settings keeps appearance, language, and usage guidance visible in the public shell without pretending private account configuration is already exposed.",
    icon: "sliders",
    sections: [
      { id: "theme", title: "Theme" },
      { id: "language", title: "Language" },
      { id: "usage", title: "Usage" },
    ],
    nextHref: "/help/im",
    nextLabel: "IM Connection",
    body: [
      {
        type: "paragraph",
        sectionId: "theme",
        content:
          "To change the appearance of the interface, click your avatar in the upper-right corner and choose Theme. You can switch between Dark, Light, and Follow System.",
      },
      {
        type: "paragraph",
        sectionId: "language",
        content:
          "To change the interface language, click your avatar and choose Language. SciClaw currently supports English and Simplified Chinese. The page refreshes automatically after you switch languages.",
      },
      {
        type: "paragraph",
        sectionId: "usage",
        content:
          "To view account usage details, click your avatar and select Usage. This page shows your current token usage, document credits, and storage consumption.",
      },
    ],
  },
];

export const helpSidebarEntries: HelpSidebarEntry[] = [
  { index: "01", slug: "getting-started", title: "Getting Started", icon: "rocket" },
  {
    index: "02",
    slug: "projects",
    title: "Projects, Conversations, Tasks & Library",
    icon: "folder",
  },
  { index: "03", slug: "foundry", title: "Foundry", icon: "hammer" },
  { index: "04", slug: "skills", title: "Skills", icon: "bolt" },
  { index: "05", slug: "persona", title: "AI Persona", icon: "persona" },
  { index: "06", slug: "im", title: "Connect Messaging Apps", icon: "send" },
];

export const helpArticleMap = Object.fromEntries(
  helpArticles.map((article) => [article.slug, article]),
) as Record<string, HelpArticle>;
