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
};

export type AppShellOutputSignal = {
  label: string;
  description: string;
};

export type AppShellExportAsset = {
  label: string;
  description: string;
};

export type AppShellTimelineItem = {
  title: string;
  description: string;
  meta: string;
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
    description:
      "Keep uploads, memory, enabled skills, and downstream outputs attached to the same research track so each thread starts with the right evidence.",
    meta: "128 assets · 6 skills",
  },
  {
    eyebrow: "Session selector",
    title: "Move between active threads without dropping prior reasoning.",
    description:
      "Search previous runs, reopen a session checkpoint, or launch a new analysis lane while the rest of the workspace stays intact.",
    meta: "3 live threads",
  },
  {
    eyebrow: "Foundry handoff",
    title: "Ship validated work into reviewer-ready outputs with one clear handoff.",
    description:
      "Surface the active answer, open risk, and export bundle so the transition from session work to stakeholder deliverables is explicit.",
    meta: "12 export-ready assets",
  },
];

export const appShellFlowCards: AppShellFlowCard[] = [
  {
    eyebrow: "Session focus",
    title: "Comparative pathway scan",
    description: "The live workspace keeps the active hypothesis, evidence lane, and reviewer framing visible without falling back to long explainer prose.",
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
    description: "Queue the unresolved risk, pin the supporting citations, and hand the narrowed question back into the current session thread.",
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
    description: "Promote the validated outline, evidence appendix, and slide cues into one concise handoff package before the final export starts.",
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
    description:
      "Tracks literature clustering, prior-art notes, and follow-up prompts for claim overlap analysis across uploaded filings.",
    meta: "12 min ago",
  },
  {
    title: "Clinical diligence · session replay",
    description:
      "Reopens the evidence chain for trial endpoints, competitor snapshots, and generated briefing sections before Foundry export.",
    meta: "Yesterday",
  },
  {
    title: "Regulatory memo · final synthesis",
    description:
      "Bundles verified source quotes, task outcomes, and charts into one executive-ready narrative with minimal handoff friction.",
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

export const appShellWorkspaceMetrics: AppShellWorkspaceMetric[] = [
  { label: "Live sessions", value: "3" },
  { label: "Open tasks", value: "5" },
  { label: "Foundry exports", value: "12" },
];

export const appShellOutputSignals: AppShellOutputSignal[] = [
  {
    label: "Evidence chain",
    description: "Source citations, highlighted claims, and session checkpoints stay attached to the answer draft.",
  },
  {
    label: "Open risk",
    description: "Flag one unresolved judgment call before the reviewer receives the Foundry package.",
  },
  {
    label: "Handoff route",
    description: "Jump back to project memory, active tasks, or the originating session thread without losing context.",
  },
];

export const appShellExportAssets: AppShellExportAsset[] = [
  {
    label: "Brief outline",
    description: "One-page narrative frame for the current answer.",
  },
  {
    label: "Evidence appendix",
    description: "Linked citations, figures, and extracted notes bundled for review.",
  },
  {
    label: "Slides handoff",
    description: "Presentation-ready talking points routed into Foundry.",
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

export const helpArticles: HelpArticle[] = [
  {
    slug: "getting-started",
    index: "01",
    title: "Getting Started",
    description:
      "SciClaw is an AI co-worker built for scientific research. It helps researchers manage knowledge capture, task execution, output generation, and workflow improvement in one closed loop.",
    icon: "rocket",
    heroParagraphs: [
      "SciClaw is an AI co-worker built for scientific research. It helps researchers continuously manage the full research cycle around a project, including knowledge capture, task execution, output generation, and workflow improvement, so research can operate as a true closed loop.",
      "Powered by a proactive agent framework, SciClaw continuously connects literature search, data analysis, deep research, long-running computation, result organization, and experimental execution. This allows research workflows to move beyond manually advancing one step at a time and toward a system that can actively coordinate and push work forward.",
      "Scientific discovery is not a discipline that can be run well by stacking conversations alone with AI, nor is it a field where breakthroughs reliably come from pure model reasoning. Serious research demands project-based orchestration of stage-appropriate tasks, scientific computing and simulation engines that yield high-precision, trustworthy data, and long-horizon cycles of reflection and iteration to refine methods and workflows. These are capabilities that today’s large language models, and general-purpose frameworks such as OpenClaw by themselves, do not provide end-to-end.",
    ],
    sections: [
      { id: "what-is-sciclaw", title: "What is SciClaw" },
      { id: "onboarding", title: "Onboarding" },
      { id: "how-it-works", title: "How SciClaw works" },
    ],
    nextHref: "/help/projects",
    nextLabel: "Project & Session",
    body: [
      {
        type: "paragraph",
        content:
          "SciClaw continuously connects literature search, data analysis, deep research, long-running computation, result organization, and experimental execution, so research workflows move beyond one-off chat and into proactive project orchestration.",
      },
      {
        type: "paragraph",
        content:
          "Scientific discovery needs project-based coordination, stage-appropriate tasks, scientific computing engines, and long-horizon iteration loops. The public product language makes clear that SciClaw positions itself as an operating system for these workflows rather than a simple chatbot.",
      },
      {
        type: "paragraph",
        content:
          "When you log in for the first time, SciClaw guides you through a short setup conversation about your research focus and working style so the workspace can tailor skills, plans, and execution support more precisely.",
      },
      {
        type: "list",
        items: [
          "Create a project and upload your research files.",
          "Enable the right skills for the task at hand.",
          "Ask questions or request analysis directly in chat.",
          "Review live outputs, tool activity, and generated files.",
          "Export reports and documents in Foundry.",
        ],
      },
    ],
  },
  {
    slug: "projects",
    index: "02",
    title: "Project & Session",
    description:
      "Projects provide the durable context for a research initiative, while sessions capture each discrete line of investigation, execution, and review inside that project.",
    icon: "folder",
    sections: [
      { id: "projects", title: "Projects" },
      { id: "sessions", title: "Sessions" },
      { id: "knowledge-memory", title: "Knowledge & memory" },
    ],
    nextHref: "/help/chat",
    nextLabel: "Chat",
    body: [
      {
        type: "paragraph",
        content:
          "A project acts as the parent workspace for a scientific question, grant, paper, or diligence thread. It anchors uploaded files, configured skills, generated outputs, and long-running tasks so the full lifecycle remains grouped together.",
      },
      {
        type: "paragraph",
        content:
          "Sessions are the execution units within a project. They preserve the conversational thread, tool traces, generated artifacts, and checkpoints for a specific phase of work such as literature review, hypothesis testing, or result packaging.",
      },
      {
        type: "list",
        items: [
          "Use projects to separate unrelated research tracks.",
          "Open focused sessions for each workstream to reduce context noise.",
          "Keep durable project knowledge in shared memory and library assets.",
        ],
      },
    ],
  },
  {
    slug: "chat",
    index: "03",
    title: "Chat",
    description:
      "Chat is the main command surface for guiding SciClaw, requesting analysis, reviewing evidence, and steering autonomous work as outputs accumulate.",
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
    nextHref: "/help/skills",
    nextLabel: "Skills",
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
      "Skills package reusable workflows, tool access, and domain-specific execution patterns that can be activated per project or session.",
    icon: "bolt",
    sections: [
      { id: "skill-library", title: "Skill library" },
      { id: "activation", title: "Activation" },
      { id: "best-practices", title: "Best practices" },
    ],
    nextHref: "/help/library",
    nextLabel: "Library",
    body: [
      {
        type: "paragraph",
        content:
          "SciClaw's public information architecture treats skills as first-class building blocks for research execution. They let users compose repeatable methods around literature analysis, computational tooling, external data collection, and reporting workflows.",
      },
      {
        type: "paragraph",
        content:
          "Enable only the skills relevant to the current task so the agent has the right capabilities without unnecessary tool noise. This makes long-running sessions easier to inspect and keeps outputs aligned to the workstream.",
      },
      {
        type: "list",
        items: [
          "Pair skills with project goals and data availability.",
          "Use narrow skill sets for focused investigations.",
          "Expand the active toolset when moving from analysis into execution or reporting.",
        ],
      },
    ],
  },
  {
    slug: "library",
    index: "05",
    title: "Library",
    description:
      "The library stores papers, notes, datasets, and reference materials so sessions can ground reasoning in persistent project knowledge.",
    icon: "book",
    sections: [
      { id: "knowledge-base", title: "Knowledge base" },
      { id: "uploading", title: "Uploading content" },
      { id: "retrieval", title: "Retrieval & grounding" },
    ],
    nextHref: "/help/tasks",
    nextLabel: "Tasks",
    body: [
      {
        type: "paragraph",
        content:
          "The docs IA indicates that library assets sit beside projects and chat, giving SciClaw a structured place to retain PDFs, notes, and other research context over time.",
      },
      {
        type: "paragraph",
        content:
          "Uploading content to the library makes it easier to ground later analysis, connect findings across sessions, and maintain a durable evidence trail as outputs evolve.",
      },
      {
        type: "list",
        items: [
          "Upload source papers and supporting exhibits early.",
          "Use clear titles and metadata to keep retrieval reliable.",
          "Revisit library assets when verifying claims or generating final reports.",
        ],
      },
    ],
  },
  {
    slug: "tasks",
    index: "06",
    title: "Tasks",
    description:
      "Tasks represent queued, active, and completed units of work that let SciClaw push research forward beyond the visible chat thread.",
    icon: "clock",
    sections: [
      { id: "task-types", title: "Task types" },
      { id: "automation", title: "Automation" },
      { id: "monitoring", title: "Monitoring progress" },
    ],
    nextHref: "/help/foundry",
    nextLabel: "Foundry",
    body: [
      {
        type: "paragraph",
        content:
          "Long-running work is a core part of the public SciClaw story. Tasks likely capture research plans, background analysis, ingestion jobs, and report generation steps that continue executing after a single prompt is sent.",
      },
      {
        type: "paragraph",
        content:
          "The interface language implies that users can inspect task activity, see generated files, and understand what the system is doing over time rather than treating execution as a black box.",
      },
      {
        type: "list",
        items: [
          "Create task lists for multi-step research programs.",
          "Use automation for recurring collection or computation jobs.",
          "Review completed outputs before exporting or sharing them.",
        ],
      },
    ],
  },
  {
    slug: "foundry",
    index: "07",
    title: "Foundry",
    description:
      "Foundry is the output layer where SciClaw turns sessions and tasks into polished reports, briefs, and presentation-ready deliverables.",
    icon: "hammer",
    sections: [
      { id: "deliverables", title: "Deliverables" },
      { id: "editing", title: "Editing outputs" },
      { id: "export", title: "Export & handoff" },
    ],
    nextHref: "/help/persona",
    nextLabel: "Persona",
    body: [
      {
        type: "paragraph",
        content:
          "The landing page and docs both emphasize outcome presentation. Foundry appears to be the place where intermediate notes become final stakeholder-facing documents, slide material, and narrative summaries.",
      },
      {
        type: "paragraph",
        content:
          "Researchers can likely refine outputs, align them to audience expectations, and export them once the underlying evidence chain has been reviewed inside the project workflow.",
      },
      {
        type: "list",
        items: [
          "Compile generated notes into cohesive reports.",
          "Edit tone and structure for scientific, legal, or executive audiences.",
          "Export ready-to-share deliverables without leaving the workspace.",
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
      "Persona settings let teams steer SciClaw's tone, assumptions, and role-specific behavior for different research contexts.",
    icon: "persona",
    sections: [
      { id: "role-framing", title: "Role framing" },
      { id: "tone-controls", title: "Tone & style" },
      { id: "reuse", title: "Reusable presets" },
    ],
    nextHref: "/help/im",
    nextLabel: "IM",
    body: [
      {
        type: "paragraph",
        content:
          "A persona system is useful when the same workspace must serve principal investigators, diligence analysts, legal reviewers, or executive stakeholders. The public IA suggests SciClaw exposes this as a configurable surface.",
      },
      {
        type: "paragraph",
        content:
          "By shaping the assistant's framing and writing style, persona presets can make summaries and generated outputs more immediately usable by the target audience.",
      },
      {
        type: "list",
        items: [
          "Define default tone and evidence standards.",
          "Switch personas when preparing outputs for different stakeholders.",
          "Save reusable presets for recurring project types.",
        ],
      },
    ],
  },
  {
    slug: "im",
    index: "09",
    title: "IM",
    navTitle: "IM Connection",
    description:
      "IM covers messaging integrations that bring notifications, updates, and lightweight workflow control into external communication channels.",
    icon: "send",
    sections: [
      { id: "integrations", title: "Integrations" },
      { id: "alerts", title: "Alerts & notifications" },
      { id: "workflow-control", title: "Workflow control" },
    ],
    nextHref: "/help/settings",
    nextLabel: "Settings",
    body: [
      {
        type: "paragraph",
        content:
          "The docs IA includes IM as a dedicated help section, implying integration with team messaging tools for task updates, review prompts, and research progress notifications.",
      },
      {
        type: "paragraph",
        content:
          "External messaging can reduce the need to watch the app constantly, especially for long-running computation and background task execution.",
      },
      {
        type: "list",
        items: [
          "Connect channels used by your research team.",
          "Route important task and review notifications externally.",
          "Use lightweight commands or links to jump back into the relevant session.",
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
      "Settings centralize workspace appearance, language, account preferences, usage controls, and other product-level configuration.",
    icon: "sliders",
    sections: [
      { id: "theme", title: "Theme" },
      { id: "language", title: "Language" },
      { id: "usage", title: "Usage" },
    ],
    body: [
      {
        type: "paragraph",
        content:
          "To change the appearance of the interface, click your avatar in the upper-right corner and choose Theme. You can switch between Dark, Light, and Follow System.",
      },
      {
        type: "paragraph",
        content:
          "To change the interface language, click your avatar and choose Language. SciClaw currently supports English and Simplified Chinese. The page refreshes automatically after you switch languages.",
      },
      {
        type: "paragraph",
        content:
          "To view account usage details, click your avatar and select Usage. This page shows your current token usage, document credits, and storage consumption.",
      },
    ],
  },
];

export const helpArticleMap = Object.fromEntries(
  helpArticles.map((article) => [article.slug, article]),
) as Record<string, HelpArticle>;
