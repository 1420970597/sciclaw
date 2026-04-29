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

export type HelpSection = {
  id: string;
  title: string;
};

export type HelpArticle = {
  slug: string;
  index: string;
  title: string;
  description: string;
  sections: HelpSection[];
  nextHref?: string;
  nextLabel?: string;
  body: Array<
    | {
        type: "paragraph";
        content: string;
      }
    | {
        type: "list";
        items: string[];
      }
  >;
};

export const navLinks: NavLink[] = [
  { label: "User Guide", href: "/help/getting-started" },
  { label: "Privacy", href: "/privacy" },
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
    title: "IP & prior-art review",
    description:
      "Rapidly compare patents, papers, and prosecution history to build a defensible novelty or invalidation position.",
    tags: ["Prior art", "Patent claims", "Research memo"],
    statLabel: "Review acceleration",
    statValue: "3.2×",
  },
  {
    title: "Scientific diligence",
    description:
      "Consolidate trial literature, competitive data, and expert commentary into one diligence trail for biotech and medtech teams.",
    tags: ["Clinical studies", "Competitor watch", "Diligence"],
    statLabel: "Sources connected",
    statValue: "120+",
  },
  {
    title: "Regulatory evidence packs",
    description:
      "Assemble source-backed summaries and timelines that legal, policy, and compliance stakeholders can actually review together.",
    tags: ["Timeline", "Policy brief", "Evidence pack"],
    statLabel: "Stakeholder handoff",
    statValue: "Same day",
  },
];

export const helpArticles: HelpArticle[] = [
  {
    slug: "getting-started",
    index: "01",
    title: "Getting Started",
    description:
      "SciClaw is an AI co-worker built for scientific research. It helps researchers manage knowledge capture, task execution, output generation, and workflow improvement in one closed loop.",
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
    sections: [
      { id: "prompting", title: "Prompting" },
      { id: "execution-loop", title: "Execution loop" },
      { id: "artifacts", title: "Artifacts & review" },
    ],
    nextHref: "/help/skills",
    nextLabel: "Skills",
    body: [
      {
        type: "paragraph",
        content:
          "The public help copy suggests a chat surface that is deeply integrated with files, tools, and task execution. Prompts are not isolated messages; they sit inside a project context enriched by uploaded literature, prior outputs, and enabled skills.",
      },
      {
        type: "paragraph",
        content:
          "Use chat to ask questions, request synthesis, launch analysis jobs, and inspect intermediate outputs. As the system runs, the session view exposes tool activity and generated files so researchers can verify each step.",
      },
      {
        type: "list",
        items: [
          "Start broad with a research objective or question.",
          "Narrow the execution with explicit sources, constraints, or deliverables.",
          "Review artifacts inline and iterate until the result is publication- or stakeholder-ready.",
        ],
      },
    ],
  },
  {
    slug: "skills",
    index: "04",
    title: "Skills",
    description:
      "Skills package reusable workflows, tool access, and domain-specific execution patterns that can be activated per project or session.",
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
    description:
      "Persona settings let teams steer SciClaw's tone, assumptions, and role-specific behavior for different research contexts.",
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
    description:
      "IM covers messaging integrations that bring notifications, updates, and lightweight workflow control into external communication channels.",
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
    title: "Settings",
    description:
      "Settings centralize workspace appearance, language, account preferences, usage controls, and other product-level configuration.",
    sections: [
      { id: "workspace-preferences", title: "Workspace preferences" },
      { id: "account-controls", title: "Account controls" },
      { id: "usage-and-access", title: "Usage & access" },
    ],
    body: [
      {
        type: "paragraph",
        content:
          "The public help navigation exposes Settings alongside workflow concepts like Chat, Tasks, and Foundry, suggesting that account and environment preferences are treated as part of the broader operating system rather than isolated profile settings.",
      },
      {
        type: "paragraph",
        content:
          "Typical settings likely include appearance themes, language preferences, notification controls, account access details, and usage settings that influence how the workspace behaves across projects.",
      },
      {
        type: "list",
        items: [
          "Adjust theme and language for your daily workflow.",
          "Review account and access configuration.",
          "Tune defaults for notifications, usage, and workspace behavior.",
        ],
      },
    ],
  },
];

export const helpArticleMap = Object.fromEntries(
  helpArticles.map((article) => [article.slug, article]),
) as Record<string, HelpArticle>;
