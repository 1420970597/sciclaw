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

export type AppShellExportAsset = {
  label: string;
  description: string;
};

export type AppShellTimelineItem = {
  title: string;
  description: string;
  meta: string;
  summary?: string;
};

export type AppShellTodo = {
  label: string;
  note: string;
  state: "done" | "active" | "pending";
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
    statValue: "Autonomous",
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
    eyebrow: "Project context",
    title: "Ground every active session in one durable project workspace.",
    description: "Keep uploads, memory, skills, and outputs pinned to the same research track.",
    meta: "128 assets · 6 skills",
    detail: "Grounded start · memory pinned",
  },
  {
    eyebrow: "Session selector",
    title: "Move between active threads without dropping prior reasoning.",
    description: "Reopen checkpoints or branch a new lane without losing the active answer.",
    meta: "3 live threads",
    detail: "Checkpoint recall · branch cleanly",
  },
  {
    eyebrow: "Foundry handoff",
    title: "Ship validated work into reviewer-ready outputs with one clear handoff.",
    description: "Keep the active answer and export lane visible before the package leaves the workspace.",
    meta: "12 export-ready assets",
    detail: "Answer live · export queue visible",
  },
];

export const appShellFlowCards: AppShellFlowCard[] = [
  {
    eyebrow: "Session focus",
    title: "Comparative pathway scan",
    description: "Pin one live hypothesis and its evidence lane for the active thread.",
    meta: "12 min ago",
    pills: [
      { label: "Memo live", tone: "accent" },
      { label: "2 sources pending", tone: "warn" },
    ],
    ctaLabel: "Open session thread",
    ctaHref: "/chat",
  },
  {
    eyebrow: "Task lane",
    title: "Resolve one open judgment call",
    description: "Assign the blocker and return a single narrowed question for review.",
    meta: "Reviewer handoff",
    pills: [
      { label: "1 blocker", tone: "warn" },
      { label: "Task owner set", tone: "neutral" },
    ],
    ctaLabel: "Review active tasks",
    ctaHref: "/help/tasks",
  },
  {
    eyebrow: "Foundry prep",
    title: "Package the export bundle",
    description: "Promote the locked outline, appendix, and slide cues into one packet.",
    meta: "Export rail",
    pills: [
      { label: "12 assets ready", tone: "accent" },
      { label: "Outline synced", tone: "neutral" },
    ],
    ctaLabel: "Inspect Foundry assets",
    ctaHref: "/help/foundry",
  },
];

export const appShellTimeline: AppShellTimelineItem[] = [
  {
    title: "Patent landscaping · comparative thread",
    description: "Prior-art overlap scan staged for the current filings set.",
    summary: "3 source clusters · 2 claim deltas",
    meta: "12 min ago",
  },
  {
    title: "Clinical diligence · session replay",
    description: "Endpoint notes and competitor claims queued for one replay.",
    summary: "1 blocker · 4 exhibits linked",
    meta: "Yesterday",
  },
  {
    title: "Regulatory memo · final synthesis",
    description: "Reviewer-ready answer bundle now aligned with the export lane.",
    summary: "Ready · outline locked",
    meta: "Ready for review",
  },
];

export const appShellTodos: AppShellTodo[] = [
  {
    label: "Import the next PDF batch into the project library",
    note: "Ground retrieval before the next autonomous session starts.",
    state: "done",
  },
  {
    label: "Generate a fresh comparative-analysis session",
    note: "Keep the current workstream isolated so experiment notes do not pollute the diligence thread.",
    state: "active",
  },
  {
    label: "Push the verified outline to Foundry",
    note: "Promote the winning narrative after session review closes.",
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

export const appShellOutputSignals: AppShellOutputSignal[] = [
  {
    label: "Evidence chain",
    summary: "Citations pinned",
    description: "Keep citations and checkpoints attached to the answer draft.",
  },
  {
    label: "Open risk",
    summary: "1 call pending",
    description: "Hold one unresolved call before review leaves the workspace.",
  },
  {
    label: "Handoff route",
    summary: "Return to source",
    description: "Jump back to memory, tasks, or the source thread without losing context.",
  },
];

export const appShellExportAssets: AppShellExportAsset[] = [
  {
    label: "Brief outline",
    description: "One-page narrative frame for the current answer.",
  },
  {
    label: "Evidence appendix",
    description: "Linked citations and figures bundled for review.",
  },
  {
    label: "Slides handoff",
    description: "Presentation-ready talking points routed into Foundry.",
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
      "SciClaw is an AI-powered scientific co-worker that links inspiration generation, experimental execution, and iterative optimization in one workspace.",
      "The platform combines autonomous analysis, experiment assistance, and output packaging so every research thread can move from first question to polished result without losing context.",
    ],
    sections: [
      { id: "what-is-sciclaw", title: "What is SciClaw" },
      { id: "key-capabilities", title: "Key capabilities" },
      { id: "core-workflow", title: "Core workflow" },
    ],
    nextHref: "/help/projects",
    nextLabel: "Projects",
    body: [
      {
        type: "paragraph",
        sectionId: "what-is-sciclaw",
        content:
          "SciClaw acts as an AI co-worker for scientific research, helping teams coordinate literature digestion, experiment planning, data mining, and report generation from one connected environment.",
      },
      {
        type: "paragraph",
        sectionId: "what-is-sciclaw",
        content:
          "It is designed to keep evidence, task history, and generated outputs traceable, so researchers can move quickly without losing the chain between source material and final conclusions.",
      },
      {
        type: "list",
        sectionId: "key-capabilities",
        items: [
          "Review papers, notes, and project materials in one grounded context.",
          "Support iterative workflows spanning ideation, execution, analysis, and presentation.",
          "Package validated findings into briefs, decks, and other stakeholder-ready outputs.",
        ],
      },
      {
        type: "list",
        sectionId: "core-workflow",
        items: [
          "Start from the Projects area to organize context and materials.",
          "Use Chat to run a focused research thread while keeping memory and tasks connected.",
          "Send polished deliverables through Foundry when the answer is ready to share.",
        ],
      },
    ],
  },
  {
    slug: "projects",
    index: "02",
    title: "Projects",
    description:
      "Projects provide the shared container for assets, sessions, and deliverables so SciClaw can keep a research thread grounded over time.",
    icon: "folder",
    sections: [
      { id: "workspace-foundation", title: "Workspace foundation" },
      { id: "what-projects-store", title: "What projects store" },
      { id: "collaboration-flow", title: "Collaboration flow" },
    ],
    nextHref: "/help/chat",
    nextLabel: "Chat",
    body: [
      {
        type: "paragraph",
        sectionId: "workspace-foundation",
        content:
          "Every project in SciClaw acts as the durable container for a line of research, collecting the assets, session memory, and output history that the agent relies on when answering new questions.",
      },
      {
        type: "list",
        sectionId: "what-projects-store",
        items: [
          "Uploaded PDFs, notes, figures, and experiment files.",
          "Session history, checkpoints, and intermediate task results.",
          "Generated outputs such as outlines, reports, and presentation assets.",
        ],
      },
      {
        type: "list",
        sectionId: "collaboration-flow",
        items: [
          "Start a new project when you need a clean research track.",
          "Run multiple sessions under the same project without losing shared context.",
          "Use Foundry outputs to capture the final deliverables tied back to that project.",
        ],
      },
    ],
  },
  {
    slug: "chat",
    index: "03",
    title: "Chat",
    description:
      "Chat is the active workspace for running an investigation thread, combining memory, tools, tasks, and answer drafting in one place.",
    icon: "chat",
    sections: [
      { id: "session-workspace", title: "Session workspace" },
      { id: "tool-and-memory-loop", title: "Tool and memory loop" },
      { id: "handoff-to-output", title: "Handoff to output" },
    ],
    nextHref: "/help/skills",
    nextLabel: "Skills",
    body: [
      {
        type: "paragraph",
        sectionId: "session-workspace",
        content:
          "Chat is where a single research thread becomes actionable: a prompt, the relevant context, and the running chain of evidence all stay visible while SciClaw works through the problem.",
      },
      {
        type: "list",
        sectionId: "tool-and-memory-loop",
        items: [
          "Bring in project memory, prior sessions, and uploaded assets without leaving the thread.",
          "Run tools, gather evidence, and refine the answer while keeping the output grounded.",
          "Turn promising sub-results into tasks or export-ready material when the line of reasoning stabilizes.",
        ],
      },
      {
        type: "list",
        sectionId: "handoff-to-output",
        items: [
          "Keep the live answer draft and unresolved risks visible during the session.",
          "Escalate structured outputs to Foundry once the thread is ready for review or presentation.",
          "Return to the same session later without losing context or citations.",
        ],
      },
    ],
  },
  {
    slug: "skills",
    index: "04",
    title: "Skills",
    description:
      "Skills package reusable workflows so SciClaw can apply consistent methods across repeated research tasks.",
    icon: "bolt",
    sections: [
      { id: "why-skills-matter", title: "Why skills matter" },
      { id: "how-skills-are-used", title: "How skills are used" },
      { id: "examples", title: "Examples" },
    ],
    nextHref: "/help/library",
    nextLabel: "Library",
    body: [
      {
        type: "paragraph",
        sectionId: "why-skills-matter",
        content:
          "Skills let SciClaw apply stable procedures instead of improvising every time, which is especially useful when the same analysis pattern or delivery flow needs to be repeated reliably.",
      },
      {
        type: "list",
        sectionId: "how-skills-are-used",
        items: [
          "Activate a known workflow when a task matches a saved pattern.",
          "Keep repeated operations consistent across different sessions and projects.",
          "Reduce setup time for complex tool chains and output packaging steps.",
        ],
      },
      {
        type: "list",
        sectionId: "examples",
        items: [
          "Literature review workflows.",
          "Experiment or data-analysis routines.",
          "Output handoff sequences for report or slide generation.",
        ],
      },
    ],
  },
  {
    slug: "library",
    index: "05",
    title: "Library",
    description:
      "Library keeps the uploaded papers, notes, and evidence tables that ground each project and session.",
    icon: "book",
    sections: [
      { id: "grounded-assets", title: "Grounded assets" },
      { id: "retrieval-usage", title: "Retrieval usage" },
      { id: "maintaining-signal", title: "Maintaining signal" },
    ],
    nextHref: "/help/tasks",
    nextLabel: "Tasks",
    body: [
      {
        type: "paragraph",
        sectionId: "grounded-assets",
        content:
          "The Library stores the source material that SciClaw can pull into a session, such as PDFs, notes, figures, and structured evidence tables tied to a project.",
      },
      {
        type: "list",
        sectionId: "retrieval-usage",
        items: [
          "Use uploaded assets to ground citations and summaries.",
          "Search across prior material without re-uploading context each time.",
          "Keep source material connected to downstream reports and outputs.",
        ],
      },
      {
        type: "list",
        sectionId: "maintaining-signal",
        items: [
          "Group assets by project so retrieval stays focused.",
          "Add notes or metadata when a source needs special handling.",
          "Keep the library current so later sessions inherit the right evidence base.",
        ],
      },
    ],
  },
  {
    slug: "tasks",
    index: "06",
    title: "Tasks",
    description:
      "Tasks turn multi-step work into trackable units, making it easier to queue autonomous slices and review progress over time.",
    icon: "clock",
    sections: [
      { id: "task-planning", title: "Task planning" },
      { id: "autonomous-execution", title: "Autonomous execution" },
      { id: "review-rhythm", title: "Review rhythm" },
    ],
    nextHref: "/help/foundry",
    nextLabel: "Foundry",
    body: [
      {
        type: "paragraph",
        sectionId: "task-planning",
        content:
          "Tasks break larger goals into manageable steps so SciClaw can make progress without losing track of what still needs verification, refinement, or export.",
      },
      {
        type: "list",
        sectionId: "autonomous-execution",
        items: [
          "Queue a focused slice of work instead of overloading a single session.",
          "Track what is pending, in progress, and completed.",
          "Keep operational work visible to the project and session that depend on it.",
        ],
      },
      {
        type: "list",
        sectionId: "review-rhythm",
        items: [
          "Use tasks to mark validation checkpoints.",
          "Re-open or branch work when a session exposes a blocker.",
          "Promote verified outputs once the task is complete.",
        ],
      },
    ],
  },
  {
    slug: "foundry",
    index: "07",
    title: "Foundry",
    description:
      "Foundry is the output layer for turning validated research threads into polished deliverables.",
    icon: "hammer",
    sections: [
      { id: "output-layer", title: "Output layer" },
      { id: "asset-types", title: "Asset types" },
      { id: "handoff-pattern", title: "Handoff pattern" },
    ],
    nextHref: "/help/persona",
    nextLabel: "Persona",
    body: [
      {
        type: "paragraph",
        sectionId: "output-layer",
        content:
          "Foundry gathers the validated pieces of a research thread—notes, citations, charts, and conclusions—into a cleaner handoff surface for reports, slides, and other review-ready assets.",
      },
      {
        type: "list",
        sectionId: "asset-types",
        items: [
          "Brief outlines and narrative summaries.",
          "Evidence appendices and supporting figures.",
          "Presentation-ready talking points and slide inputs.",
        ],
      },
      {
        type: "list",
        sectionId: "handoff-pattern",
        items: [
          "Promote the active answer when a session reaches a stable draft.",
          "Bundle supporting evidence before sharing the output.",
          "Use Foundry as the final stop before external review or presentation.",
        ],
      },
    ],
  },
  {
    slug: "persona",
    index: "08",
    title: "Persona",
    description:
      "Persona controls adjust how SciClaw approaches reasoning, analysis tone, and task behavior for a given project or session.",
    icon: "persona",
    sections: [
      { id: "behavior-controls", title: "Behavior controls" },
      { id: "session-fit", title: "Session fit" },
      { id: "keeping-consistency", title: "Keeping consistency" },
    ],
    nextHref: "/help/im",
    nextLabel: "IM",
    body: [
      {
        type: "paragraph",
        sectionId: "behavior-controls",
        content:
          "Personas help tune how SciClaw works—whether the focus is conservative evidence review, exploratory analysis, delivery-oriented packaging, or another workflow style.",
      },
      {
        type: "list",
        sectionId: "session-fit",
        items: [
          "Match the reasoning style to the kind of research being done.",
          "Keep answers aligned with the expectations of a project or stakeholder.",
          "Reduce repeated steering when a certain tone or process should persist.",
        ],
      },
      {
        type: "list",
        sectionId: "keeping-consistency",
        items: [
          "Apply stable behavior across related sessions.",
          "Document the intended mode for future reuse.",
          "Keep persona settings visible when the project context changes.",
        ],
      },
    ],
  },
  {
    slug: "im",
    index: "09",
    title: "IM",
    description:
      "IM connects SciClaw outputs to external messaging or workflow channels for delivery and coordination.",
    icon: "send",
    sections: [
      { id: "delivery-surface", title: "Delivery surface" },
      { id: "workflow-connection", title: "Workflow connection" },
      { id: "handoff-discipline", title: "Handoff discipline" },
    ],
    nextHref: "/help/settings",
    nextLabel: "Settings",
    body: [
      {
        type: "paragraph",
        sectionId: "delivery-surface",
        content:
          "IM provides a delivery layer for moving outputs, notifications, or handoff updates into the external channels where collaborators actually see them.",
      },
      {
        type: "list",
        sectionId: "workflow-connection",
        items: [
          "Send updates into team communication surfaces.",
          "Mirror the state of validated outputs outside the core workspace.",
          "Support coordination without breaking the chain back to the source session.",
        ],
      },
      {
        type: "list",
        sectionId: "handoff-discipline",
        items: [
          "Deliver only after the output is review-ready.",
          "Keep references back to the originating project and session.",
          "Use IM as a bridge, not a replacement for the core workspace record.",
        ],
      },
    ],
  },
  {
    slug: "settings",
    index: "10",
    title: "Settings",
    description:
      "Settings covers appearance, language, and workspace-level controls that shape how SciClaw is presented and used.",
    icon: "sliders",
    sections: [
      { id: "theme", title: "Theme" },
      { id: "language", title: "Language" },
      { id: "usage", title: "Usage" },
    ],
    body: [
      {
        type: "paragraph",
        sectionId: "theme",
        content:
          "Settings centralize workspace appearance, language, account preferences, usage controls, and other product-level configuration.",
      },
      {
        type: "list",
        sectionId: "theme",
        items: [
          "Adjust visual presentation such as light or dark appearance.",
          "Keep contrast and shell clarity aligned across public docs and workspace previews.",
        ],
      },
      {
        type: "list",
        sectionId: "language",
        items: [
          "Keep language and basic workspace defaults visible in one place.",
          "Use translation and wording controls without losing the public-docs information architecture.",
        ],
      },
      {
        type: "list",
        sectionId: "usage",
        items: [
          "Use settings as the stable reference point for UI-level preferences.",
          "Preserve a clean transition between public guidance and the working interface.",
        ],
      },
    ],
  },
];

export const helpArticleMap = Object.fromEntries(helpArticles.map((article) => [article.slug, article]));
