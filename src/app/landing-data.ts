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
  relatedLinks?: NavLink[];
  body: HelpBodyBlock[];
};

export type BillingFaqItem = {
  question: string;
  answer: string;
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
      "In SciClaw, skills are one of the main ways an agent can call external capabilities, run domain-specific workflows, and complete more complex tasks.",
    icon: "bolt",
    heroParagraphs: [
      "In SciClaw, skills are one of the main ways an agent can call external capabilities, run domain-specific workflows, and complete more complex tasks. You can think of a skill as an installable, manageable, reusable capability module.",
    ],
    sections: [
      { id: "workflow-reuse", title: "1. What Skills Are" },
      { id: "triggering-skills", title: "2. How to Trigger Skills" },
      { id: "scoped-tools", title: "3. When Skills Are Most Useful" },
      { id: "skills-management", title: "4. Skills Management" },
    ],
    nextHref: "/help/foundry",
    nextLabel: "Foundry",
    body: [
      {
        type: "paragraph",
        sectionId: "workflow-reuse",
        content:
          "In SciClaw, a skill is a callable task capability. Each one is usually designed around a clear goal, such as information organization, a specific analysis workflow, file processing, research execution, or some other specialized domain workflow.",
      },
      {
        type: "paragraph",
        sectionId: "workflow-reuse",
        content:
          "Compared with ordinary chat, a skill is more like an execution template with a defined method and scope. It helps SciClaw understand your task according to a predefined method, produce outputs in a more stable structure, and reduce ambiguity in more complex work.",
      },
      {
        type: "list",
        sectionId: "triggering-skills",
        items: [
          "Use /skill-name directly in chat when you already know the capability you want.",
          "Open ⚡ Skills above the input box to browse the skill list and insert one manually.",
          "Describe the goal naturally and let SciClaw decide whether a skill should be used automatically.",
        ],
      },
      {
        type: "list",
        sectionId: "scoped-tools",
        items: [
          "Skills are most helpful when the goal is clearly defined and the output needs to follow a fixed structure or format.",
          "They are also useful when the task depends on a specialized toolchain or you want to standardize a recurring workflow.",
          "For casual Q&A or open-ended brainstorming, ordinary chat may still be enough without specifying a skill manually.",
        ],
      },
      {
        type: "list",
        sectionId: "skills-management",
        items: [
          "Upload skills into the current environment so they become callable in chat.",
          "Search, preview, export, and delete existing skills from the Skills Management surface.",
          "Use enable / disable controls to decide which skills stay available for a given workflow.",
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
    title: "AI Persona",
    description:
      "SciClaw uses three editable persona files to shape the AI's behavior and tailor it to your work.",
    icon: "persona",
    heroParagraphs: [
      "SciClaw uses three editable persona files to shape the AI's behavior and tailor it to your work.",
    ],
    sections: [
      { id: "initial-ai-persona-setting", title: "Initial AI Persona setting" },
      { id: "editing-persona-settings", title: "Editing persona settings" },
      { id: "persona-files", title: "Persona files" },
      { id: "why-sciclaw-uses-file-based-persona-records", title: "Why SciClaw Uses File-Based Persona Records" },
    ],
    relatedLinks: [
      { label: "Skills", href: "/help/skills" },
      { label: "Connect Messaging Apps", href: "/help/im" },
    ],
    body: [
      {
        type: "paragraph",
        sectionId: "initial-ai-persona-setting",
        content:
          "As part of onboarding, SciClaw starts with a short guided conversation to understand how you work. This is where you can describe your research focus, working style, preferred interaction tone, and any boundaries or expectations you want the AI to follow. After the setup is complete, SciClaw saves this information as your initial AI Persona, which it uses to provide more personalized and aligned support from the start.",
      },
      {
        type: "paragraph",
        sectionId: "editing-persona-settings",
        content:
          "To access persona settings, click the settings icon (⚙) on the right side of the conversation header and choose Prompts from the dropdown menu. This opens the persona editor, where you can manage SOUL, IDENTITY, and USER.",
      },
      {
        type: "list",
        sectionId: "persona-files",
        items: [
          "SOUL.md — Defines SciClaw's core purpose and mission",
          "IDENTITY.md — Defines the AI's personality, tone, and interaction style",
          "USER.md — Stores information about you, such as your research focus, expertise, preferences, and goals",
          "Tip: Update USER.md regularly to reflect your current research topics and priorities. This helps SciClaw provide responses that are more relevant, personalized, and context-aware.",
        ],
      },
      {
        type: "paragraph",
        sectionId: "why-sciclaw-uses-file-based-persona-records",
        content:
          "SciClaw stores persona settings as editable files so they remain transparent, portable, and easy to revise as your research workflow changes. This file-based structure also makes it easier to audit how guidance evolves over time without hiding key behavioral instructions behind opaque UI-only settings.",
      },
    ],
  },
  {
    slug: "im",
    index: "09",
    title: "Connect Messaging Apps",
    navTitle: "Connect Messaging Apps",
    description:
      "Connect SciClaw to the messaging apps your team already uses, so you can send tasks directly from chat and have AI-generated results pushed automatically to the team channel.",
    icon: "send",
    heroParagraphs: [
      "Connect SciClaw to the messaging apps your team already uses, so you can send tasks directly from chat and have AI-generated results pushed automatically to the team channel. Click the settings icon (⚙), choose Connect Messaging Apps, click Add Connection, select a platform, and fill in the required credentials to complete setup.",
    ],
    sections: [
      { id: "telegram", title: "Telegram" },
      { id: "discord", title: "Discord" },
    ],
    nextHref: "/help/persona",
    nextLabel: "AI Persona",
    body: [
      {
        type: "list",
        sectionId: "telegram",
        items: [
          "For instant messaging via bots in personal or group chats",
          "Bot Token + Chat ID",
        ],
      },
      {
        type: "list",
        sectionId: "discord",
        items: [
          "For server-based community chats with bot integration",
          "Bot Token + Channel ID",
        ],
      },
    ],
  },
  {
    slug: "settings",
    index: "10",
    title: "System Settings",
    navTitle: "Settings",
    description:
      "System Settings keeps appearance, language, and usage guidance visible in the public shell without pretending private account configuration is already exposed.",
    icon: "sliders",
    sections: [
      { id: "theme", title: "Theme" },
      { id: "language", title: "Language" },
      { id: "usage", title: "Usage" },
    ],
    nextHref: "/help/projects",
    nextLabel: "Projects · Chats · Tasks",
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
  {
    slug: "billing",
    index: "01",
    title: "Credits & Billing",
    navTitle: "Credits & Billing",
    description:
      "This page explains how credits and subscriptions work on SciClaw, what each plan includes, how top-up credits behave, and how payments, refunds, and invoices are handled.",
    icon: "sliders",
    sections: [
      { id: "what-are-credits", title: "1. What Are Credits?" },
      { id: "credit-types", title: "2. Credit Types" },
      { id: "deduction-order", title: "3. Credit Deduction Order" },
      { id: "subscription-plans", title: "4. Subscription Plans" },
      { id: "top-up-rules", title: "5. Top-up Rules" },
      { id: "payments-refunds-and-invoices", title: "6. Payments, Refunds, and Invoices" },
    ],
    nextHref: "/help/faq",
    nextLabel: "FAQ",
    body: [
      {
        type: "paragraph",
        sectionId: "what-are-credits",
        content:
          "Credits are SciClaw's unit for measuring everyday AI usage. Model calls, runtime execution, web research, library retrieval, document processing, and similar tasks draw from the credit pool according to the resources consumed.",
      },
      {
        type: "list",
        sectionId: "credit-types",
        items: [
          "Daily credits refresh on the schedule defined by the active account or plan.",
          "Plan credits are included with the current subscription tier and follow the billing cycle.",
          "Top-up credits do not expire by default, but the public page says they require an active paid subscription to remain usable.",
          "Promotional or reward credits follow the specific campaign rules that issued them.",
        ],
      },
      {
        type: "paragraph",
        sectionId: "deduction-order",
        content:
          "When multiple credit types are available, the public billing page describes the deduction order as Daily Credits → Plan Credits → Top-up Credits / Promo Credits.",
      },
      {
        type: "list",
        sectionId: "subscription-plans",
        items: [
          "Free / Trial — $0 — 10,000 one-time credits.",
          "Lite — $19 / month — 200,000 credits / month.",
          "Plus — $39 / month — 430,000 credits / month.",
          "Pro — $79 / month — 900,000 credits / month.",
        ],
      },
      {
        type: "paragraph",
        sectionId: "top-up-rules",
        content:
          "Top-ups are framed as an additional credit reserve instead of a plan upgrade. They can extend paid usage capacity, but they do not replace the need for an active plan and do not act like cash or a transferable balance.",
      },
      {
        type: "list",
        sectionId: "payments-refunds-and-invoices",
        items: [
          "Payment failures can interrupt renewals until the billing issue is resolved.",
          "Invoices and receipts are tied to the active billing surface rather than a separate finance dashboard.",
          "Final pricing, taxes, and promotional adjustments are defined by the checkout page at purchase time.",
        ],
      },
    ],
  },
  {
    slug: "faq",
    index: "02",
    title: "FAQ",
    navTitle: "FAQ",
    description:
      "Frequently asked questions about credits, subscriptions, top-ups, and billing on SciClaw. Tap a question to expand the answer.",
    icon: "sliders",
    sections: [{ id: "faq", title: "FAQ" }],
    relatedLinks: [{ label: "Credits & Billing", href: "/help/billing" }],
    body: [
      {
        type: "paragraph",
        sectionId: "faq",
        content:
          "Frequently asked questions about credits, subscriptions, top-ups, and billing on SciClaw. Tap a question to expand the answer.",
      },
    ],
  },
];

export const helpSidebarEntries: HelpSidebarEntry[] = [
  { index: "01", slug: "getting-started", title: "Getting Started", icon: "rocket" },
  {
    index: "02",
    slug: "projects",
    title: "Projects · Chats · Tasks",
    icon: "folder",
  },
  { index: "03", slug: "foundry", title: "Library & Foundry", icon: "hammer" },
  { index: "04", slug: "skills", title: "Skills", icon: "bolt" },
  { index: "05", slug: "persona", title: "AI Persona", icon: "persona" },
  { index: "06", slug: "im", title: "Messaging Apps", icon: "send" },
];

export const billingSidebarEntries: HelpSidebarEntry[] = [
  { index: "01", slug: "billing", title: "Credits & Billing", icon: "sliders" },
  { index: "02", slug: "faq", title: "FAQ", icon: "sliders" },
];

export const helpArticleMap = Object.fromEntries(
  helpArticles.map((article) => [article.slug, article]),
) as Record<string, HelpArticle>;

export const billingFaqItems: BillingFaqItem[] = [
  {
    question: "Are credits deducted by message count?",
    answer:
      "No. The public FAQ says credits are deducted according to the actual resources consumed by the task, not by a fixed number of messages.",
  },
  {
    question: "Are credits the same as tokens?",
    answer:
      "No. Credits are a product-level usage unit that can cover model calls, runtime work, retrieval, document processing, and external tools. They are not a raw token counter.",
  },
  {
    question: "Do unused plan credits roll over?",
    answer:
      "The billing page frames plan credits around the billing cycle and does not promise unlimited rollover. The checkout or active plan page is the source of truth for the current rule.",
  },
  {
    question: "Do top-up credits expire?",
    answer:
      "Top-up credits do not expire by default on the public billing page, but they still require an active paid subscription to remain usable.",
  },
  {
    question: "Does buying a credit pack upgrade my plan?",
    answer:
      "No. A top-up extends the available credit reserve, but it does not change the active subscription tier by itself.",
  },
  {
    question: "Which plan should I choose?",
    answer:
      "The public guidance positions Free / Trial for evaluation, Lite for lighter recurring workloads, Plus for heavier routine use, and Pro for larger ongoing research volume.",
  },
  {
    question: "What happens if my payment fails?",
    answer:
      "Renewal can be interrupted until the billing issue is resolved. The billing surface and checkout flow remain the public source of truth for the exact recovery steps.",
  },
  {
    question: "Can I change my payment method?",
    answer:
      "The public billing guidance indicates payment details are managed through the billing flow rather than a separate finance console.",
  },
  {
    question: "Can I get an invoice or receipt?",
    answer:
      "Yes. The public billing page says invoices or receipts are handled through the billing and payment flow for completed purchases.",
  },
  {
    question: "Where can I see the final price?",
    answer:
      "The checkout page is the final source of truth for price, taxes, discounts, and promotional adjustments at the moment of purchase.",
  },
];
