import {
  appShellCards,
  appShellExportAssets,
  appShellExportStats,
  appShellExportSummary,
  appShellFlowCards,
  appShellOutputSummary,
  appShellResources,
  appShellSections,
  appShellStatusGroups,
  appShellTimeline,
  appShellTodos,
  type AppShellSection,
  type AppShellStatusPill,
} from "@/app/landing-data";
import Link from "next/link";

function StatusPill({ pill }: { pill: AppShellStatusPill }) {
  const toneClass =
    pill.tone === "accent"
      ? "border-[#f3d8bf] bg-[#fff3e8] text-[#d87631]"
      : pill.tone === "warn"
        ? "border-[#f1decb] bg-[#fffaf3] text-[#9c6f46]"
        : "border-[#ece3d7] bg-white text-[#938779]";

  return (
    <span className={`rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] ${toneClass}`}>
      {pill.label}
    </span>
  );
}

function AppSidebar({ activeView }: { activeView: AppShellSection["view"] }) {
  return (
    <aside className="rounded-[2rem] border border-[#ece7de] bg-white/92 p-5 shadow-[0_24px_60px_rgba(15,23,42,0.08)] xl:sticky xl:top-8 xl:self-start">
      <div className="flex items-center justify-between border-b border-[#f2eee7] pb-4">
        <div>
          <p className="text-sm font-semibold text-[#2d2d2d]">
            Sci<span className="text-[#eb8b3b]">Claw</span>
          </p>
          <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-[#b0a99b]">Workspace</p>
        </div>
        <span className="rounded-full border border-[#f1d9c2] bg-[#fff5ec] px-3 py-1 text-[11px] font-medium text-[#de7d30]">
          Beta
        </span>
      </div>

      <div className="mt-5 space-y-1 border-t border-[#f3ede3] pt-4">
        {appShellSections.map((section) => {
          const isActive = section.view === activeView;

          return (
            <Link
              key={section.href}
              href={section.href}
              aria-current={isActive ? "page" : undefined}
              className={`group flex items-center justify-between rounded-2xl px-3 py-3 transition ${
                isActive
                  ? "bg-[#fff4ec] text-[#de7d30]"
                  : "text-[#666257] hover:bg-[#f7f4ef] hover:text-[#232323]"
              }`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`flex h-9 w-9 items-center justify-center rounded-2xl border text-sm font-semibold transition ${
                    isActive
                      ? "border-[#f3d5bc] bg-white text-[#de7d30]"
                      : "border-[#efebe4] bg-[#fbfaf8] text-[#9f978a] group-hover:border-[#e5dfd3] group-hover:text-[#6d675d]"
                  }`}
                >
                  {section.index}
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-current">{section.label}</p>
                  <p className="text-xs leading-5 text-[#aca496]">{section.subtitle}</p>
                </div>
              </div>
              {section.badge ? (
                <span className="shrink-0 rounded-full border border-[#f0e5d6] bg-white px-2 py-1 text-[11px] text-[#9b8f80]">
                  {section.badge}
                </span>
              ) : null}
            </Link>
          );
        })}
      </div>

      <div className="mt-6 rounded-[1.75rem] border border-[#f1e7d9] bg-[#fbf8f3] p-4">
        <div className="flex items-center justify-between gap-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#b1a793]">Project memory</p>
          <span className="rounded-full border border-[#efe2d4] bg-white px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-[#af8e71]">
            Memory rail
          </span>
        </div>
        <ul className="mt-3 space-y-3 text-sm text-[#5c564d]">
          {appShellResources.map((resource) => (
            <li key={resource.label} className="flex items-start justify-between gap-3">
              <div>
                <p className="font-medium text-[#2a2a2a]">{resource.label}</p>
                <p className="mt-1 text-xs leading-5 text-[#8f8779]">{resource.description}</p>
              </div>
              <span className="rounded-full bg-white px-2 py-1 text-[11px] text-[#b18a68]">{resource.meta}</span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

function ShellHeader() {
  return (
    <header className="sticky top-0 z-20 rounded-[2rem] border border-[#efe7dc] bg-[rgba(255,252,247,0.92)] px-5 py-4 shadow-[0_14px_34px_rgba(15,23,42,0.05)] backdrop-blur sm:px-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#b2aa9d]">SciClaw · User Guide · Session Preview</p>
          <h1 className="mt-2 max-w-[19ch] text-2xl font-semibold tracking-[-0.025em] text-[#202020] sm:text-[2rem]">
            Coordinate project context, sessions, tasks, and outputs from one app shell.
          </h1>
          <p className="mt-2 max-w-[27rem] text-sm leading-6 text-[#7a7267] sm:text-[0.95rem]">
            Keep navigation, memory, tasks, and handoff visible while the public docs shell narrows into a quieter workspace preview.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-sm text-[#6f685e]">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-2xl border border-[#ece4d9] bg-[#fbfaf8] px-4 py-2.5 transition hover:border-[#e4d7c6] hover:text-[#2b2b2b]"
            aria-label="Search sessions"
          >
            Search sessions
            <span className="rounded-lg border border-[#ebe2d6] bg-white px-2 py-0.5 text-[11px] uppercase tracking-[0.18em] text-[#a19484]">
              ⌘K
            </span>
          </button>
          <button
            type="button"
            className="rounded-2xl border border-[#ece4d9] bg-white px-4 py-2.5 transition hover:border-[#e4d7c6] hover:text-[#2b2b2b]"
            aria-label="Appearance light"
          >
            Appearance · Light
          </button>
          <button
            type="button"
            className="rounded-2xl bg-[#1d1d1d] px-4 py-2.5 font-medium text-white transition hover:bg-[#2f2f2f]"
            aria-label="Create new session"
          >
            New session
          </button>
        </div>
      </div>
    </header>
  );
}

function SessionTimeline() {
  return (
    <section className="rounded-[2rem] border border-[#efe6da] bg-white/94 p-5 shadow-[0_18px_48px_rgba(15,23,42,0.05)] sm:p-6">
      <div className="flex flex-col gap-3 border-b border-[#f2ece3] pb-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#b6ab9e]">Session timeline</p>
          <h2 className="mt-2 text-xl font-semibold text-[#212121]">Project &amp; session flow staged between docs and the future workspace.</h2>
        </div>
        <p className="max-w-[22rem] text-sm leading-6 text-[#7a7267]">
          Keep one thread, tool trace, and handoff tied to the same project memory.
        </p>
      </div>

      <div className="mt-6 grid gap-5 xl:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] 2xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div className="rounded-[1.75rem] border border-[#f2e8dc] bg-[#fbf8f3] p-4 sm:p-5">
          <div className="grid gap-4 xl:grid-cols-[repeat(3,minmax(0,12.4rem))] xl:justify-between 2xl:grid-cols-[repeat(3,minmax(0,1fr))]">
            {appShellCards.map((card) => (
              <article key={card.title} className="rounded-[1.5rem] border border-white bg-white p-4 shadow-[0_10px_20px_rgba(15,23,42,0.04)]">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#b5ab9c]">{card.eyebrow}</p>
                    <h3 className="mt-2 max-w-[12ch] text-[0.98rem] font-semibold leading-[1.45] text-[#1f1f1f]">{card.title}</h3>
                  </div>
                  <span className="shrink-0 self-start rounded-full border border-[#f1e4d4] bg-[#fcf7f0] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#b18b6a]">
                    {card.meta}
                  </span>
                </div>
                <p className="mt-3 max-w-[14ch] text-sm leading-5 text-[#6c6459]">{card.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-5 rounded-[1.5rem] border border-white bg-white p-4 shadow-[0_10px_20px_rgba(15,23,42,0.03)]">
            <div className="flex flex-col gap-2 border-b border-[#f3eee7] pb-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-[#222]">Active sessions</p>
                <p className="mt-1 max-w-[8.1rem] text-xs leading-5 text-[#9b9183]">
                  Next move stays on one quieter edge lane.
                </p>
              </div>
              <span className="shrink-0 rounded-full border border-[#f0dfcf] bg-[#fff5ec] px-3 py-1 text-[11px] text-[#de7d30]">3 live</span>
            </div>

          <div className="mt-4 space-y-3">
            {appShellTimeline.map((item) => (
                <div
                  key={item.title}
                  className="grid gap-3 rounded-[1.2rem] border border-[#f5efe6] bg-[#fffdfa] px-4 py-3.5 sm:grid-cols-[minmax(0,1fr)_minmax(5rem,auto)] sm:items-start sm:gap-3"
                >
                  <div className="flex min-w-0 gap-3">
                    <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#eb8b3b] shadow-[0_0_18px_rgba(235,139,59,0.35)]" />
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-[#222]">{item.title}</p>
                      <p className="mt-1 max-w-[20ch] text-sm leading-6 text-[#6e665b]">{item.description}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-start justify-start gap-2 sm:max-w-[5rem] sm:flex-col sm:items-end sm:justify-start">
                    <span className="rounded-full border border-[#f0dfcf] bg-[#fff6ef] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#d07b3d]">
                      {item.meta}
                    </span>
                    {item.summary ? (
                      <span
                        className={`rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] ${
                          item.summaryTone === "accent"
                            ? "border-[#f3d8bf] bg-[#fff3e8] text-[#d87631]"
                            : item.summaryTone === "warn"
                              ? "border-[#f1decb] bg-[#fffaf3] text-[#9c6f46]"
                              : "border-[#efe4d7] bg-white text-[#b08a68]"
                        }`}
                      >
                        {item.summary}
                      </span>
                    ) : null}
                  </div>
                </div>
            ))}
          </div>
          </div>

          <div className="mt-5 grid gap-4 xl:grid-cols-[repeat(3,minmax(0,14.6rem))] xl:justify-between 2xl:grid-cols-[repeat(3,minmax(0,14.8rem))]" data-testid="chat-flow-card-grid">
            {appShellFlowCards.map((card, index) => (
              <article
                key={card.title}
                className={`rounded-[1.45rem] border border-[#f2e8dc] bg-white px-4 py-4 shadow-[0_12px_24px_rgba(15,23,42,0.035)] ${
                  index === 2 ? "xl:px-4.5 xl:py-4" : ""
                }`}
              >
                <div className="flex items-start justify-between gap-2.5">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#b5ab9c]">{card.eyebrow}</p>
                    <h3 className={`mt-2 font-semibold leading-6 text-[#1f1f1f] ${index === 2 ? "max-w-[14ch] text-[0.92rem] leading-[1.5]" : "max-w-[16ch] text-sm"}`}>
                      {card.title}
                    </h3>
                  </div>
                  <span className="shrink-0 self-start rounded-full border border-[#f1e4d4] bg-[#fcf7f0] px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#b18b6a]">
                    {card.meta}
                  </span>
                </div>
                <p className={`mt-3 text-sm leading-6 text-[#6b6257] ${index === 2 ? "max-w-[17ch] text-[0.84rem] leading-[1.48]" : "max-w-[18ch]"}`}>
                  {card.description}
                </p>
                <div className={`mt-4 flex flex-wrap gap-1.5 ${index === 2 ? "items-center justify-between gap-y-2.5" : ""}`}>
                  {card.pills.map((pill) => (
                    <StatusPill key={pill.label} pill={pill} />
                  ))}
                </div>
                <Link
                  href={card.ctaHref}
                  className={`mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[#2b2b2b] transition hover:text-[#de7d30] ${
                    index === 2 ? "mt-5" : ""
                  }`}
                >
                  {card.ctaLabel}
                  <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>

        </div>

        <div className="grid gap-5 xl:grid-cols-[minmax(232px,1.22fr)_minmax(220px,0.78fr)] 2xl:grid-cols-[minmax(244px,1.2fr)_minmax(236px,0.8fr)]" data-testid="chat-right-rail-grid">
          <section className="rounded-[1.85rem] border border-[#efe6da] bg-white p-5 shadow-[0_16px_36px_rgba(15,23,42,0.04)]">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#b6ab9e]">Tasks</p>
                <h3 className="mt-2 max-w-[8ch] text-lg font-semibold leading-[1.34] text-[#1f1f1f]">Queue</h3>
              </div>
              <span className="rounded-full border border-[#f0e2d2] bg-[#fff7ef] px-2.5 py-1 text-[11px] text-[#de7d30]">Map</span>
            </div>
            <div className="mt-4 space-y-2.5">
              {appShellTodos.map((todo) => (
                <div key={todo.label} className="flex items-start gap-3 rounded-[1.15rem] border border-[#f4eee5] bg-[#fcfaf7] px-4 py-3">
                  <span
                    className={`mt-0.5 flex h-5 w-5 items-center justify-center rounded-full text-[11px] font-semibold ${
                      todo.state === "done"
                        ? "bg-[#1f1f1f] text-white"
                        : todo.state === "active"
                          ? "bg-[#fff0e4] text-[#de7d30]"
                          : "bg-white text-[#9d9386]"
                    }`}
                  >
                    {todo.state === "done" ? "✓" : todo.state === "active" ? "•" : "○"}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="text-sm font-medium text-[#232323]">{todo.label}</p>
                      {todo.meta ? (
                        <span className="rounded-full border border-[#efe3d6] bg-white px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#ab9175]">
                          {todo.meta}
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-1 max-w-[14ch] text-xs leading-5 text-[#8a8175]">{todo.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="space-y-5">
            <section className="rounded-[1.85rem] border border-[#efe6da] bg-[#fffdfa] p-5 shadow-[0_18px_40px_rgba(15,23,42,0.05)]">
              <div className="flex items-start justify-between gap-3 border-b border-[#f3e7da] pb-4">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#b6ab9e]">Session output</p>
                  <h3 className="mt-2 max-w-[13ch] text-[1.02rem] font-semibold leading-[1.45] text-[#1f1f1f]">
                    Shape a concise workspace brief before you leave the public docs shell.
                  </h3>
                </div>
                <span className="rounded-full border border-[#f0dfcf] bg-[#fff4ea] px-3 py-1 text-[11px] text-[#de7d30]">{appShellOutputSummary.eyebrow}</span>
              </div>
              <div className="mt-4 space-y-3.5">
                <article className="rounded-[1.25rem] border border-[#f3e8dc] bg-white px-4 py-3 shadow-[0_8px_18px_rgba(15,23,42,0.025)]">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div className="max-w-[14.5ch]">
                      <p className="text-sm font-semibold text-[#242424]">{appShellOutputSummary.title}</p>
                      <p className="mt-1 max-w-[14.5ch] text-[11px] leading-[1.45] text-[#7f776c]">{appShellOutputSummary.description}</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      {appShellExportStats.map((stat) => (
                        <span
                          key={stat}
                          className="rounded-full border border-[#f0e2d4] bg-[#fcfaf7] px-2.5 py-1 text-center text-[10px] font-semibold uppercase tracking-[0.12em] text-[#9f8f7d]"
                        >
                          {stat}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>

                {appShellStatusGroups.map((group) => (
                  <article key={group.heading} className="rounded-[1.18rem] border border-[#f1e8dc] bg-[#fcfaf7] px-4 py-3.5 shadow-[0_8px_18px_rgba(15,23,42,0.025)]">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#efe4d8] pb-2.5">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9f8f7d]">{group.heading}</p>
                      <span className="rounded-full border border-[#ebddce] bg-white px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#b18a68]">
                        {group.items.length} signals
                      </span>
                    </div>
                    <div className="mt-3 space-y-1.5">
                      {group.items.map((signal) => (
                        <div key={signal.label} className="grid gap-1.5 rounded-[0.98rem] border-t border-[#efe4d7] px-1 py-1.5 first:border-t-0 first:pt-0 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start sm:gap-2">
                          <div className="min-w-0">
                            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8f806f]">{signal.label}</p>
                            <p className="mt-1 max-w-[20ch] text-[11px] leading-[1.45] text-[#7f776c]">{signal.description}</p>
                          </div>
                          {signal.summary ? (
                            <span className="rounded-full border border-[#efe1d2] bg-[#fcf8f2] px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#b08a68] sm:justify-self-end">
                              {signal.summary}
                            </span>
                          ) : null}
                        </div>
                      ))}
                    </div>
                  </article>
                ))}

                <article className="rounded-[1.28rem] border border-[#f3e7d9] bg-[linear-gradient(180deg,#fff7ef_0%,#fffdf9_100%)] px-4 py-3.5 shadow-[0_14px_26px_rgba(235,139,59,0.08)]">
                  <div className="flex flex-wrap items-start justify-between gap-2.5">
                    <div className="max-w-[11.5rem]">
                      <p className="text-sm font-semibold text-[#242424]">{appShellExportSummary.eyebrow}</p>
                      <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[#c08d62]">{appShellExportSummary.title}</p>
                    </div>
                    <span className="rounded-full border border-[#ecd8c6] bg-white/90 px-2.5 py-1 text-[11px] text-[#d37632]">{appShellExportSummary.badge}</span>
                  </div>
                  <div className="mt-3 space-y-2.5 text-sm text-[#6c6459]">
                    <p className="max-w-[11.5rem] text-[0.8rem] leading-[1.42]">{appShellExportSummary.description}</p>
                    <div className="space-y-2 text-xs text-[#8f8578]">
                      {appShellExportAssets.map((asset) => (
                        <div key={asset.label} className="flex items-center justify-between gap-2 rounded-[1.02rem] border border-[#f0dfcf] bg-white px-3 py-2">
                          <div className="min-w-0">
                            <p className="font-medium text-[#5e564c]">{asset.label}</p>
                            <p className="mt-1 text-[11px] leading-[1.42] text-[#8f8578]">{asset.description}</p>
                          </div>
                          <span className="shrink-0 rounded-full bg-[#fcf1e4] px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#c27d3f]">
                            Export
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ChatPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(255,210,170,0.2),_transparent_22%),linear-gradient(180deg,#fcfbf8_0%,#f6f2ea_100%)] text-[#1f1f1f]">
      <div className="mx-auto max-w-[1440px] px-5 py-6 sm:px-8 lg:px-10 lg:py-8">
        <ShellHeader />

        <div className="mt-6 grid gap-6 xl:grid-cols-[290px_minmax(0,1fr)] xl:items-start">
          <AppSidebar activeView="session" />
          <SessionTimeline />
        </div>
      </div>
    </main>
  );
}
