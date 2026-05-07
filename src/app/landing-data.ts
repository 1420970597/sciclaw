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
      "Automatically retrieves relevant data, prior task records, and manuscript context to speed up evidence-backed reviewer responses.",
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
    description: "3 live lanes.",
    meta: "3 live",
    detail: "Checkpoint recall",
  },
  {
    eyebrow: "Tasks",
    title: "Edge lane",
    description: "1 blocker routed.",
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
    label: "Import the next PDF batch",
    note: "Ground retrieval first.",
    meta: "12 PDFs",
    state: "done",
  },
  {
    label: "Generate compare session",
    note: "Keep this lane isolated.",
    meta: "Research lead",
    state: "active",
  },
  {
    label: "Push verified outline",
    note: "Promote the winning brief.",
    meta: "Export",
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
      "SciClaw is an AI-powered scientific co-worker that links inspiration generation, experimental execution, and iterative optimization in one workspace.",
    icon: "rocket",
    heroParagraphs: [
      "Use SciClaw to move from a rough research question to a validated working plan without losing the source trail. The public docs shell doubles as the first layer of the product narrative: orientation, examples, and a guided path into the future app workspace.",
      "This high-fidelity reconstruction keeps the same marketing-to-workspace bridge feeling visible on sciclaw.ai today — concise hero copy, calm control surfaces, and explicit next routes into projects, chat, tasks, and output packaging.",
    ],
    sections: [
      { id: "what-is-sciclaw", title: "What is SciClaw" },
      { id: "why-the-shell-looks-like-this", title: "Why the shell looks like this" },
      { id: "where-to-go-next", title: "Where to go next" },
    ],
    nextHref: "/help/projects",
    nextLabel: "Projects overview",
    body: [
      {
        type: "paragraph",
        sectionId: "what-is-sciclaw",
        content:
          "SciClaw presents itself as an AI co-worker for scientific research: a system that keeps project context, literature, live sessions, tasks, and polished output connected in one visible flow.",
      },
      {
        type: "list",
        sectionId: "what-is-sciclaw",
        items: [
          "Ground literature and uploaded evidence in a reusable project memory rail.",
          "Run and compare active research sessions without losing the current hypothesis lane.",
          "Promote verified findings into handoff-ready briefs, slides, and export packets.",
        ],
      },
      {
        type: "paragraph",
        sectionId: "why-the-shell-looks-like-this",
        content:
          "The reconstructed shell intentionally feels halfway between documentation and application. It mirrors the live public site, where the route is still public-facing marketing, while suggesting how project memory, timeline, tasks, and Foundry outputs will eventually converge into the product workspace.",
      },
      {
        type: "list",
        sectionId: "why-the-shell-looks-like-this",
        items: [
          "A sticky header keeps search, appearance, and session creation visible.",
          "The left rail preserves clear navigation into projects, sessions, tasks, output, and settings.",
          "The center and right lanes preview how a live session becomes a concise export packet.",
        ],
      },
      {
        type: "paragraph",
        sectionId: "where-to-go-next",
        content:
          "Continue through Projects, Chat, Tasks, and Foundry to see the same bridge narrative unfold across more detailed public help routes.",
      },
    ],
  },
  {
    slug: "projects",
    index: "02",
    title: "Projects",
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
      "The chat route is the clearest public bridge into the future app shell: active sessions, queued work, and an export-ready handoff stay visible at once.",
    icon: "chat",
    heroParagraphs: [
      "This route intentionally feels more product-like than the surrounding docs pages. It is where the public marketing shell narrows into a credible workspace preview without claiming that the live site is already a private app.",
      "The current reconstruction keeps the same major pieces visible: active session lanes, project memory, queued tasks, and the right-rail handoff into Foundry output.",
    ],
    sections: [
      { id: "active-lanes", title: "Active lanes" },
      { id: "task-queue", title: "Task queue" },
      { id: "output-handoff", title: "Output handoff" },
    ],
    nextHref: "/help/tasks",
    nextLabel: "Tasks guide",
    body: [
      {
        type: "paragraph",
        sectionId: "active-lanes",
        content:
          "The center timeline emphasizes three simultaneous research threads, each with a compact title, one-line state, and a pair of lightweight status tokens. This keeps the app-shell preview believable while staying calmer than a true operations dashboard.",
      },
      {
        type: "list",
        sectionId: "active-lanes",
        items: [
          "Top summary cards orient the viewer before the denser session rows begin.",
          "The Active sessions block now carries the highest information density and is tuned carefully to remain scannable.",
          "Lower checkpoint cards translate session work into review and Foundry handoff actions.",
        ],
      },
      {
        type: "paragraph",
        sectionId: "task-queue",
        content:
          "The Tasks lane previews how the product could queue ingestion, comparison, and export work without pretending those operations are already interactive on the public site.",
      },
      {
        type: "paragraph",
        sectionId: "output-handoff",
        content:
          "The right rail closes the story: session output, status review, and Foundry handoff stay visible together so the route reads as one continuous bridge from evidence to packetized output.",
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
    title: "Settings",
    description:
      "Appearance, language, and shell-level preferences complete the public preview without pretending private account configuration is already exposed.",
    icon: "sliders",
    heroParagraphs: [
      "Settings stays intentionally light: appearance, language, and shell controls echo the public header while preserving the app-like continuity of the route family.",
    ],
    sections: [
      { id: "shell-preferences", title: "Shell preferences" },
      { id: "public-contract", title: "Public contract" },
    ],
    body: [
      {
        type: "paragraph",
        sectionId: "shell-preferences",
        content:
          "Appearance and language controls are represented consistently across the shell so the public routes feel cohesive, even without authenticated personalization.",
      },
      {
        type: "paragraph",
        sectionId: "public-contract",
        content:
          "The route deliberately avoids overclaiming account management depth. It mirrors the live marketing shell's level of visible control while still supporting the broader docs-to-workspace bridge.",
      },
    ],
  },
];

export const helpArticleMap = Object.fromEntries(
  helpArticles.map((article) => [article.slug, article]),
) as Record<string, HelpArticle>;
