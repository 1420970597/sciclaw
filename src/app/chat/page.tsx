import {
  appShellCards,
  appShellExportAssets,
  appShellFlowCards,
  appShellOutputSignals,
  appShellResources,
  appShellSections,
  appShellTimeline,
  appShellTodos,
  appShellWorkspaceMetrics,
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
          <h1 className="mt-2 max-w-[24ch] text-2xl font-semibold tracking-[-0.025em] text-[#202020] sm:text-[2rem]">
            Coordinate project context, sessions, tasks, and outputs from one app shell.
          </h1>
          <p className="mt-2 max-w-[34rem] text-sm leading-6 text-[#7a7267] sm:text-[0.95rem]">
            Keep navigation, memory, tasks, and handoff visible while the public docs shell narrows into a lighter workspace preview.
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
          <h2 className="mt-2 text-xl font-semibold text-[#212121]">Project &amp; Session flow staged between public docs and the future workspace.</h2>
        </div>
        <p className="max-w-xl text-sm leading-6 text-[#7a7267]">
          Each session captures one investigation thread, keeps tool traces visible, and rolls polished outputs into Foundry without losing project memory.
        </p>
      </div>

      <div className="mt-6 grid gap-5 xl:grid-cols-[minmax(0,1.15fr)_minmax(360px,0.85fr)] 2xl:grid-cols-[minmax(0,1.08fr)_minmax(390px,0.92fr)]">
        <div className="rounded-[1.75rem] border border-[#f2e8dc] bg-[#fbf8f3] p-4 sm:p-5">
          <div className="grid gap-4 xl:grid-cols-[repeat(3,minmax(0,1fr))] 2xl:grid-cols-[repeat(3,minmax(0,1fr))]">
            {appShellCards.map((card) => (
              <article key={card.title} className="rounded-[1.5rem] border border-white bg-white p-4 shadow-[0_10px_20px_rgba(15,23,42,0.04)]">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#b5ab9c]">{card.eyebrow}</p>
                    <h3 className="mt-2 text-base font-semibold leading-6 text-[#1f1f1f]">{card.title}</h3>
                  </div>
                  <span className="shrink-0 rounded-full border border-[#f1e4d4] bg-[#fcf7f0] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#b18b6a]">
                    {card.meta}
                  </span>
                </div>
                <p className="mt-3 max-w-[24ch] text-sm leading-6 text-[#6c6459]">{card.description}</p>
                {card.detail ? <p className="mt-3 text-[11px] font-medium uppercase tracking-[0.18em] text-[#b08a68]">{card.detail}</p> : null}
              </article>
            ))}
          </div>

          <div className="mt-5 rounded-[1.5rem] border border-white bg-white p-4 shadow-[0_10px_20px_rgba(15,23,42,0.03)]">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#f3eee7] pb-3">
              <div>
                <p className="text-sm font-semibold text-[#222]">Active sessions</p>
                <p className="mt-1 text-xs text-[#9b9183]">New session threads are grouped under the project and searchable from the top bar.</p>
              </div>
              <span className="rounded-full border border-[#f0dfcf] bg-[#fff5ec] px-3 py-1 text-[11px] text-[#de7d30]">3 live</span>
            </div>

            <div className="mt-4 space-y-3">
              {appShellTimeline.map((item) => (
                <div key={item.title} className="flex gap-4 rounded-[1.35rem] border border-[#f5efe6] bg-[#fffdfa] px-4 py-3">
                  <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#eb8b3b] shadow-[0_0_18px_rgba(235,139,59,0.35)]" />
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="text-sm font-medium text-[#222]">{item.title}</p>
                      <span className="text-[11px] uppercase tracking-[0.18em] text-[#a89d8f]">{item.meta}</span>
                    </div>
                    <p className="mt-1 text-sm leading-6 text-[#6e665b]">{item.description}</p>
                    {item.summary ? <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.18em] text-[#b08a68]">{item.summary}</p> : null}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 grid gap-3 xl:grid-cols-[repeat(3,minmax(0,1fr))] 2xl:grid-cols-[repeat(3,minmax(0,1fr))]">
            {appShellFlowCards.map((card) => (
              <article key={card.title} className="rounded-[1.45rem] border border-[#f2e8dc] bg-white px-4 py-4 shadow-[0_12px_24px_rgba(15,23,42,0.035)]">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#b5ab9c]">{card.eyebrow}</p>
                    <h3 className="mt-2 text-sm font-semibold leading-6 text-[#1f1f1f]">{card.title}</h3>
                  </div>
                  <span className="shrink-0 rounded-full border border-[#f1e4d4] bg-[#fcf7f0] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#b18b6a]">
                    {card.meta}
                  </span>
                </div>
                <p className="mt-3 max-w-[24ch] text-sm leading-6 text-[#6b6257]">{card.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {card.pills.map((pill) => (
                    <StatusPill key={pill.label} pill={pill} />
                  ))}
                </div>
                <Link
                  href={card.ctaHref}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#2b2b2b] transition hover:text-[#de7d30]"
                >
                  {card.ctaLabel}
                  <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>

        <div className="grid gap-5 xl:grid-cols-[1fr_0.9fr] 2xl:grid-cols-[0.98fr_1.02fr]" data-testid="chat-right-rail-grid">
          <section className="rounded-[1.85rem] border border-[#efe6da] bg-white p-5 shadow-[0_16px_36px_rgba(15,23,42,0.04)]">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#b6ab9e]">Tasks</p>
                <h3 className="mt-2 text-lg font-semibold text-[#1f1f1f]">Queue the next research slice</h3>
              </div>
              <span className="rounded-full border border-[#f0e2d2] bg-[#fff7ef] px-3 py-1 text-[11px] text-[#de7d30]">Heatmap-ready</span>
            </div>
            <div className="mt-4 space-y-3">
              {appShellTodos.map((todo) => (
                <div key={todo.label} className="flex items-start gap-3 rounded-[1.25rem] border border-[#f4eee5] bg-[#fcfaf7] px-4 py-3">
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
                  <div>
                    <p className="text-sm font-medium text-[#232323]">{todo.label}</p>
                    <p className="mt-1 text-xs leading-5 text-[#8a8175]">{todo.note}</p>
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
                  <h3 className="mt-2 text-lg font-semibold text-[#1f1f1f]">Shape a tighter workspace brief before you leave the public docs shell.</h3>
                </div>
                <span className="rounded-full border border-[#f0dfcf] bg-[#fff4ea] px-3 py-1 text-[11px] text-[#de7d30]">Live draft</span>
              </div>
              <div className="mt-4 space-y-4">
                <article className="rounded-[1.45rem] border border-[#f3e8dc] bg-white px-4 py-4 shadow-[0_10px_22px_rgba(15,23,42,0.03)]">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-semibold text-[#242424]">Regulatory memo · current answer</p>
                    <span className="rounded-full bg-[#f6f1e9] px-2.5 py-1 text-[11px] uppercase tracking-[0.14em] text-[#9c8e7d]">
                      Session 07
                    </span>
                  </div>
                  <p className="mt-3 max-w-[30rem] text-sm leading-6 text-[#686154]">
                    The center workspace now keeps the live answer, evidence posture, and export lane visible in one bridge card between docs and the future app shell.
                  </p>
                  <div className="mt-4 grid gap-2 sm:grid-cols-3">
                    {appShellWorkspaceMetrics.map((metric) => (
                      <div key={metric.label} className="rounded-[1.2rem] border border-[#f3e9dd] bg-[#fcfaf7] px-3 py-3">
                        <p className="text-[10px] uppercase tracking-[0.18em] text-[#b29f88]">{metric.label}</p>
                        <p className="mt-2 text-lg font-semibold text-[#242424]">{metric.value}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 grid gap-2 sm:grid-cols-3 xl:grid-cols-1 2xl:grid-cols-1">
                    {appShellOutputSignals.map((signal) => (
                      <div key={signal.label} className="rounded-[1.15rem] border border-[#f4ece2] bg-[#fcfaf7] px-3 py-3">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#9f8f7d]">{signal.label}</p>
                          {signal.summary ? (
                            <span className="rounded-full border border-[#efe1d2] bg-white px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#b08a68]">
                              {signal.summary}
                            </span>
                          ) : null}
                        </div>
                        <p className="mt-1 text-xs leading-5 text-[#7f776c]">{signal.description}</p>
                      </div>
                    ))}
                  </div>
                </article>

                <article className="rounded-[1.45rem] border border-[#f3e7d9] bg-[linear-gradient(180deg,#fff7ef_0%,#fffdf9_100%)] px-4 py-4 shadow-[0_14px_26px_rgba(235,139,59,0.08)]">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="max-w-[18rem]">
                      <p className="text-sm font-semibold text-[#242424]">Foundry handoff</p>
                      <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[#c08d62]">High-visibility export rail</p>
                    </div>
                    <span className="rounded-full border border-[#ecd8c6] bg-white/90 px-2.5 py-1 text-[11px] text-[#d37632]">Ready</span>
                  </div>
                  <div className="mt-4 space-y-3 text-sm text-[#6c6459]">
                    <p className="max-w-[28rem]">Bundle project memory, selected sessions, and verified charts into one lighter output stream for downstream review.</p>
                    <div className="space-y-2 text-xs text-[#8f8578]">
                      {appShellExportAssets.map((asset) => (
                        <div key={asset.label} className="flex items-start justify-between gap-3 rounded-2xl border border-[#f0dfcf] bg-white px-3 py-2.5">
                          <div>
                            <p className="font-medium text-[#5e564c]">{asset.label}</p>
                            <p className="mt-1 max-w-[22ch] leading-5 text-[#8f8578]">{asset.description}</p>
                          </div>
                          <span className="mt-0.5 shrink-0 rounded-full bg-[#fcf1e4] px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#c27d3f]">
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
