import Link from "next/link";
import { DockMenuBar } from "@/components/dock-menu-bar";
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
  appShellWorkspaceMetrics,
  helpArticles,
  helpArticleMap,
  type HelpArticle,
  type HelpIcon,
} from "@/app/landing-data";

type HelpShellProps = {
  article: HelpArticle;
};

function HelpGlyph({ icon, className = "h-4 w-4" }: { icon: HelpIcon; className?: string }) {
  switch (icon) {
    case "rocket":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={className} aria-hidden>
          <path d="M14 4c3.5.5 5.5 2.5 6 6-2.5 3.5-5.5 5.5-9 6l-3 3-.5-4.5L3 14l3-3c.5-3.5 2.5-6.5 6-9Z" />
          <circle cx="14.5" cy="9.5" r="1.5" />
        </svg>
      );
    case "folder":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={className} aria-hidden>
          <path d="M3.5 7.5A2.5 2.5 0 0 1 6 5h4l2 2h6A2.5 2.5 0 0 1 20.5 9.5v7A2.5 2.5 0 0 1 18 19H6a2.5 2.5 0 0 1-2.5-2.5v-9Z" />
        </svg>
      );
    case "chat":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={className} aria-hidden>
          <path d="M5 6.5A2.5 2.5 0 0 1 7.5 4h9A2.5 2.5 0 0 1 19 6.5v6A2.5 2.5 0 0 1 16.5 15H11l-4 3v-3H7.5A2.5 2.5 0 0 1 5 12.5v-6Z" />
        </svg>
      );
    case "bolt":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={className} aria-hidden>
          <path d="M13.5 2.5 5.5 13h5L9.5 21.5 18.5 11h-5l.5-8.5Z" />
        </svg>
      );
    case "book":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={className} aria-hidden>
          <path d="M5.5 4.5h9A3.5 3.5 0 0 1 18 8v11H8a2.5 2.5 0 0 0-2.5 2.5V4.5Z" />
          <path d="M18 19H8a2.5 2.5 0 0 0 0 5h10" />
        </svg>
      );
    case "clock":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={className} aria-hidden>
          <circle cx="12" cy="12" r="8.5" />
          <path d="M12 7.5v5l3 1.5" />
        </svg>
      );
    case "hammer":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={className} aria-hidden>
          <path d="m13.5 5.5 5 5-2 2-5-5 2-2Z" />
          <path d="m10.5 8.5-7 7 4 4 7-7" />
          <path d="m14.5 4.5 2-2 5 5-2 2" />
        </svg>
      );
    case "persona":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={className} aria-hidden>
          <circle cx="12" cy="8" r="3.25" />
          <path d="M5 18.5c1.5-2.8 4.1-4.2 7-4.2s5.5 1.4 7 4.2" />
        </svg>
      );
    case "send":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={className} aria-hidden>
          <path d="M20 4 4 11l6 2 2 6 8-15Z" />
        </svg>
      );
    case "sliders":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={className} aria-hidden>
          <path d="M5 6.5h14" />
          <path d="M5 17.5h14" />
          <circle cx="9" cy="6.5" r="2" />
          <circle cx="15" cy="17.5" r="2" />
        </svg>
      );
  }
}

function DocsSidebar({ currentSlug }: { currentSlug: string }) {
  return (
    <nav className="space-y-4">
      <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#b9b9b9]">
        Contents
      </p>
      <ol className="space-y-1.5">
        {helpArticles.map((entry) => {
          const isActive = entry.slug === currentSlug;

          return (
            <li key={entry.slug}>
              <Link
                href={`/help/${entry.slug}`}
                className={`relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition ${
                  isActive
                    ? "bg-[#fff4ec] text-[#e98532]"
                    : "text-[#787878] hover:bg-[#f6f6f6] hover:text-[#343434]"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {isActive ? (
                  <span className="absolute inset-y-2 left-0 w-0.5 rounded-full bg-[#ed8a3a]" />
                ) : null}
                <span className="w-6 shrink-0 text-[11px] font-medium tracking-[0.2em] text-[#bfbfbf]">
                  {entry.index}
                </span>
                <span className={isActive ? "text-[#e98532]" : "text-[#b2b2b2]"}>
                  <HelpGlyph icon={entry.icon} />
                </span>
                <span className="truncate font-medium text-current">{entry.navTitle ?? entry.title}</span>
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

function DocsTopBar() {
  const utilityGroups = [
    {
      id: "appearance-language",
      triggerLabel: "Appearance and language",
      triggerAriaLabel: "Appearance and language",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-4 w-4" aria-hidden>
          <path d="M12 3v2.5" />
          <path d="M12 18.5V21" />
          <path d="m5.6 5.6 1.8 1.8" />
          <path d="m16.6 16.6 1.8 1.8" />
          <path d="M3 12h2.5" />
          <path d="M18.5 12H21" />
          <path d="m5.6 18.4 1.8-1.8" />
          <path d="m16.6 7.4 1.8-1.8" />
          <circle cx="12" cy="12" r="3.5" />
        </svg>
      ),
      items: [
        { id: "theme", label: "Theme", description: "Light docs shell" },
        { id: "language", label: "Language", description: "English" },
      ],
    },
  ] as const;

  return (
    <header className="border-b border-black/8 pb-4">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <Link href="/chat" className="inline-flex items-center gap-2 text-sm text-[#737373] transition hover:text-[#2f2f2f]">
          <span aria-hidden>←</span>
          <span>Back to SciClaw</span>
        </Link>

        <div className="flex items-center gap-2 text-sm font-medium text-[#1f1f1f] lg:absolute lg:left-1/2 lg:-translate-x-1/2">
          <span>
            Sci<span className="text-[#eb8b3b]">Claw</span>
          </span>
          <span className="text-[11px] uppercase tracking-[0.24em] text-[#b0b0b0]">USER GUIDE</span>
        </div>

        <div className="flex items-center gap-3 self-end lg:self-auto">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-xl border border-black/10 bg-white px-3 py-2 text-sm text-[#7a7a7a] shadow-[0_1px_1px_rgba(17,24,39,0.02)] transition hover:border-black/15 hover:text-[#333]"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-4 w-4" aria-hidden>
              <circle cx="11" cy="11" r="6" />
              <path d="m20 20-3.5-3.5" />
            </svg>
            <span>Search…</span>
            <span className="rounded-lg border border-black/10 bg-[#f7f7f7] px-2 py-0.5 text-[11px] uppercase tracking-[0.18em] text-[#9a9a9a]">
              ⌘K
            </span>
          </button>
          <DockMenuBar
            groups={utilityGroups.map((group) => ({ ...group, items: [...group.items] }))}
            className="gap-0"
            buttonClassName="h-9 w-9 rounded-xl border-black/8 bg-white text-[#8b8b8b] hover:border-black/15 hover:text-[#333]"
            panelClassName="right-0 min-w-[154px] rounded-[1rem] border-black/8 bg-white text-[#4b4b4b]"
            itemClassName="hover:bg-[#f6f6f6]"
          />
        </div>
      </div>
    </header>
  );
}

function ChatWorkspacePreview() {
  return (
    <section
      aria-label="Chat workspace preview"
      className="rounded-[2rem] border border-black/8 bg-white/92 p-5 shadow-[0_24px_60px_rgba(15,23,42,0.08)] sm:p-6"
      data-testid="chat-workspace-preview"
    >
      <div className="flex flex-wrap items-start justify-between gap-4 border-b border-black/6 pb-5">
        <div className="space-y-2">
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#b7b7b7]">Chat workspace preview</p>
          <h3 className="text-[1.35rem] font-semibold tracking-[-0.03em] text-[#232323]">Active lanes</h3>
          <p className="max-w-[34rem] text-sm leading-7 text-[#5b5b5b]">
            The center timeline emphasizes three simultaneous research threads while keeping the surrounding task queue and output handoff visible.
          </p>
        </div>

        <div className="grid min-w-[14rem] flex-1 gap-3 sm:grid-cols-3">
          {appShellCards.map((card) => (
            <article
              key={card.title}
              className="rounded-[1.15rem] border border-black/6 bg-[#fcfcfb] px-4 py-3 shadow-[0_10px_24px_rgba(15,23,42,0.04)]"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#b6b6b6]">{card.eyebrow}</p>
              <p className="mt-2 text-sm font-semibold text-[#202020]">{card.title}</p>
              <p className="mt-1 text-[13px] leading-6 text-[#666]">{card.description}</p>
              <div className="mt-3 flex items-center justify-between gap-3 text-[11px] uppercase tracking-[0.18em] text-[#9c9c9c]">
                <span>{card.meta}</span>
                {card.detail ? <span>{card.detail}</span> : null}
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-5 xl:grid-cols-[minmax(0,1.45fr)_minmax(16rem,0.92fr)]">
        <div className="space-y-5">
          <section className="rounded-[1.35rem] border border-black/6 bg-[#fbfbfa] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)]">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-black/6 pb-3">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#b2b2b2]">Sessions</p>
                <h4 className="mt-1 text-base font-semibold text-[#242424]">Active sessions</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {appShellWorkspaceMetrics.map((metric) => (
                  <span
                    key={metric.label}
                    className="rounded-full border border-black/8 bg-white px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-[#7d7d7d]"
                  >
                    {metric.value} {metric.label}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {appShellTimeline.map((item) => (
                <article key={item.title} className="rounded-[1.1rem] border border-black/6 bg-white px-4 py-3">
                  <div className="flex items-center justify-between gap-3">
                    <h5 className="text-sm font-semibold text-[#212121]">{item.title}</h5>
                    <span className="text-[11px] uppercase tracking-[0.18em] text-[#a1a1a1]">{item.meta}</span>
                  </div>
                  <p className="mt-2 text-[13px] leading-6 text-[#666]">{item.description}</p>
                  {item.summary ? (
                    <span
                      className={`mt-3 inline-flex rounded-full px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.16em] ${
                        item.summaryTone === "accent"
                          ? "bg-[#fff1e3] text-[#d97f2a]"
                          : item.summaryTone === "warn"
                            ? "bg-[#fff5e8] text-[#b7791f]"
                            : "bg-[#f3f4f6] text-[#68707b]"
                      }`}
                    >
                      {item.summary}
                    </span>
                  ) : null}
                </article>
              ))}
            </div>
          </section>

          <section className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(15rem,0.92fr)]">
            <article className="rounded-[1.25rem] border border-black/6 bg-[#fcfcfb] p-4">
              <div className="flex items-center justify-between gap-3 border-b border-black/6 pb-3">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#b3b3b3]">Task queue</p>
                  <h4 className="mt-1 text-base font-semibold text-[#242424]">Queued work</h4>
                </div>
                <span className="rounded-full border border-black/8 bg-white px-2.5 py-1 text-[11px] uppercase tracking-[0.16em] text-[#8a8a8a]">
                  Today
                </span>
              </div>
              <ul className="mt-4 space-y-3">
                {appShellTodos.map((todo) => (
                  <li key={todo.label} className="flex items-start gap-3 rounded-[1rem] border border-black/6 bg-white px-3 py-3">
                    <span
                      className={`mt-1 h-2.5 w-2.5 shrink-0 rounded-full ${
                        todo.state === "done"
                          ? "bg-[#8bcf99]"
                          : todo.state === "active"
                            ? "bg-[#ef9b52]"
                            : "bg-[#d2d6dc]"
                      }`}
                      aria-hidden
                    />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-sm font-medium text-[#262626]">{todo.label}</p>
                        {todo.meta ? <span className="text-[11px] uppercase tracking-[0.16em] text-[#9a9a9a]">{todo.meta}</span> : null}
                      </div>
                      <p className="mt-1 text-[13px] leading-6 text-[#666]">{todo.note}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </article>

            <div className="space-y-4">
              {appShellFlowCards.map((card) => (
                <article key={card.title} className="rounded-[1.25rem] border border-black/6 bg-white p-4 shadow-[0_12px_30px_rgba(15,23,42,0.05)]">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#b4b4b4]">{card.eyebrow}</p>
                      <h4 className="mt-1 text-base font-semibold text-[#232323]">{card.title}</h4>
                    </div>
                    <span className="text-[11px] uppercase tracking-[0.16em] text-[#9a9a9a]">{card.meta}</span>
                  </div>
                  <p className="mt-2 text-[13px] leading-6 text-[#666]">{card.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {card.pills.map((pill) => (
                      <span
                        key={pill.label}
                        className={`rounded-full px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.16em] ${
                          pill.tone === "accent"
                            ? "bg-[#fff1e3] text-[#d97f2a]"
                            : pill.tone === "warn"
                              ? "bg-[#fff5e8] text-[#b7791f]"
                              : "bg-[#f3f4f6] text-[#68707b]"
                        }`}
                      >
                        {pill.label}
                      </span>
                    ))}
                  </div>
                  <Link href={card.ctaHref} className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#eb8b3b] transition hover:text-[#c86f17]">
                    <span>{card.ctaLabel}</span>
                    <span aria-hidden>→</span>
                  </Link>
                </article>
              ))}
            </div>
          </section>
        </div>

        <aside className="space-y-4">
          <article className="rounded-[1.4rem] border border-black/6 bg-[#fbfbfa] p-4 shadow-[0_16px_34px_rgba(15,23,42,0.05)]">
            <div className="flex items-center justify-between gap-3 border-b border-black/6 pb-3">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#b3b3b3]">{appShellOutputSummary.eyebrow}</p>
                <h4 className="mt-1 text-base font-semibold text-[#242424]">{appShellOutputSummary.title}</h4>
              </div>
              <span className="text-[11px] uppercase tracking-[0.16em] text-[#9a9a9a]">{appShellOutputSummary.meta}</span>
            </div>
            <p className="mt-3 text-[13px] leading-6 text-[#666]">{appShellOutputSummary.description}</p>

            <div className="mt-4 space-y-3">
              {appShellStatusGroups.map((group) => (
                <section key={group.heading} className="rounded-[1rem] border border-black/6 bg-white px-3 py-3">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#9f9f9f]">{group.heading}</p>
                  <div className="mt-3 space-y-2">
                    {group.items.map((item) => (
                      <div key={item.label} className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-sm font-medium text-[#262626]">{item.label}</p>
                          <p className="text-[13px] leading-6 text-[#666]">{item.description}</p>
                        </div>
                        {item.summary ? <span className="text-[11px] uppercase tracking-[0.16em] text-[#9b9b9b]">{item.summary}</span> : null}
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </article>

          <article className="rounded-[1.4rem] border border-black/6 bg-white p-4 shadow-[0_16px_34px_rgba(15,23,42,0.05)]">
            <div className="flex items-center justify-between gap-3 border-b border-black/6 pb-3">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#b3b3b3]">{appShellExportSummary.eyebrow}</p>
                <h4 className="mt-1 text-base font-semibold text-[#242424]">Output handoff</h4>
              </div>
              <span className="rounded-full bg-[#fff2e4] px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-[#d97f2a]">
                {appShellExportSummary.badge}
              </span>
            </div>
            <p className="mt-3 text-[13px] leading-6 text-[#666]">{appShellExportSummary.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {appShellExportStats.map((stat) => (
                <span key={stat} className="rounded-full border border-black/8 bg-[#fcfcfb] px-2.5 py-1 text-[11px] uppercase tracking-[0.16em] text-[#8a8a8a]">
                  {stat}
                </span>
              ))}
            </div>

            <div className="mt-4 space-y-3">
              {appShellExportAssets.map((asset) => (
                <div key={asset.label} className="rounded-[1rem] border border-black/6 bg-[#fcfcfb] px-3 py-3">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-medium text-[#262626]">{asset.label}</p>
                    <span className="text-[11px] uppercase tracking-[0.16em] text-[#9a9a9a]">Ready</span>
                  </div>
                  <p className="mt-1 text-[13px] leading-6 text-[#666]">{asset.description}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-[1.25rem] border border-black/6 bg-[#fcfcfb] p-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#b3b3b3]">Grounding</p>
            <div className="mt-3 space-y-3">
              {appShellResources.map((resource) => (
                <div key={resource.label} className="rounded-[1rem] border border-black/6 bg-white px-3 py-3">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-medium text-[#262626]">{resource.label}</p>
                    <span className="text-[11px] uppercase tracking-[0.16em] text-[#9a9a9a]">{resource.meta}</span>
                  </div>
                  <p className="mt-1 text-[13px] leading-6 text-[#666]">{resource.description}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-[1.25rem] border border-dashed border-black/10 bg-white px-4 py-3 text-[13px] leading-6 text-[#686868]">
            Lower checkpoint cards translate session work into review and Foundry handoff actions.
          </article>
        </aside>
      </div>

      <div className="mt-5 flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.18em] text-[#9a9a9a]">
        {appShellSections.slice(0, 5).map((section) => (
          <span key={section.href} className="rounded-full border border-black/8 bg-[#fcfcfb] px-2.5 py-1">
            {section.label}
          </span>
        ))}
      </div>
    </section>
  );
}

function ArticleBody({ article }: { article: HelpArticle }) {
  const paragraphs = article.heroParagraphs?.length ? article.heroParagraphs : [article.description];

  return (
    <article className="min-w-0">
      <div className="border-b border-black/8 pb-6">
        <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.26em] text-[#b8b8b8]">
          <span>{article.index}</span>
        </div>
        <h2 className="mt-3 text-[2rem] font-semibold tracking-[-0.035em] text-[#222] sm:text-[2.25rem]">
          {article.title}
        </h2>
      </div>

      <div className="mt-7 space-y-4 text-[16px] leading-8 text-[#4a4a4a]">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-10 space-y-10">
        {article.slug === "chat" ? <ChatWorkspacePreview /> : null}
        {article.sections.map((section) => {
          const sectionBlocks = article.body.filter((block) => block.sectionId === section.id);

          return (
            <section key={section.id} id={section.id} className="scroll-mt-24">
              <div className="flex items-center gap-3">
                <span className="h-5 w-0.5 rounded-full bg-[#ef9b52]" aria-hidden />
                <h3 className="text-[1.15rem] font-semibold text-[#1f1f1f]">{section.title}</h3>
              </div>
              <div className="mt-4 space-y-4">
                {sectionBlocks.length > 0 ? (
                  sectionBlocks.map((block, blockIndex) =>
                    block.type === "paragraph" ? (
                      <p key={`${section.id}-paragraph-${blockIndex}`} className="text-[16px] leading-8 text-[#4a4a4a]">
                        {block.content}
                      </p>
                    ) : (
                      <ul
                        key={`${section.id}-list-${blockIndex}`}
                        className="space-y-3 text-[15px] leading-7 text-[#4f4f4f]"
                      >
                        {block.items.map((item) => (
                          <li key={item} className="flex gap-3">
                            <span className="mt-[0.65rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#f0a05c]" aria-hidden />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    ),
                  )
                ) : null}
              </div>
            </section>
          );
        })}
      </div>

      {article.nextHref && article.nextLabel ? (
        <div className="mt-12 border-t border-black/8 pt-6">
          <Link href={article.nextHref} className="inline-flex items-center gap-2 text-sm text-[#6b6b6b] transition hover:text-[#e98532]">
            <span>{article.nextLabel}</span>
            <span aria-hidden>→</span>
          </Link>
        </div>
      ) : null}

      <p className="mt-10 text-[11px] uppercase tracking-[0.24em] text-[#b4b4b4]">SciClaw · USER GUIDE</p>
    </article>
  );
}

function Toc({ article }: { article: HelpArticle }) {
  const activeId = article.sections[0]?.id;

  return (
    <aside className="lg:sticky lg:top-8 lg:self-start">
      <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#b9b9b9]">
        On this page
      </p>
      <ol className="mt-4 space-y-2 text-sm">
        {article.sections.map((section) => {
          const isActive = section.id === activeId;

          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={`relative block pl-4 transition ${
                  isActive ? "text-[#e98532]" : "text-[#949494] hover:text-[#343434]"
                }`}
              >
                {isActive ? (
                  <span className="absolute inset-y-1 left-0 w-0.5 rounded-full bg-[#ed8a3a]" aria-hidden />
                ) : null}
                {section.title}
              </a>
            </li>
          );
        })}
      </ol>
    </aside>
  );
}

export function HelpShell({ article }: HelpShellProps) {
  return (
    <main className="min-h-screen bg-[#fcfcfb] text-[#1f1f1f]">
      <div className="mx-auto max-w-[1440px] px-6 py-6 sm:px-8 lg:px-10">
        <DocsTopBar />

        <div className="grid gap-10 pt-8 xl:grid-cols-[260px_minmax(0,720px)_200px] xl:gap-12">
          <DocsSidebar currentSlug={article.slug} />
          <ArticleBody article={article} />
          <Toc article={article} />
        </div>
      </div>
    </main>
  );
}

export function getHelpArticle(slug: string) {
  return helpArticleMap[slug];
}
