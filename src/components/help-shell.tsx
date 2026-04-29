import Link from "next/link";
import { helpArticles, helpArticleMap, type HelpArticle, type HelpIcon } from "@/app/landing-data";

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
    <nav aria-label="User Guide navigation" className="space-y-4">
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
          <span className="text-[11px] uppercase tracking-[0.24em] text-[#b0b0b0]">User Guide</span>
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
          <button
            type="button"
            aria-label="Appearance and language"
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-black/8 bg-white text-[#8b8b8b] transition hover:border-black/15 hover:text-[#333]"
          >
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
          </button>
        </div>
      </div>
    </header>
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
        <h1 className="mt-3 text-[2rem] font-semibold uppercase tracking-[0.18em] text-[#222] sm:text-[2.25rem]">
          {article.title}
        </h1>
      </div>

      <div className="mt-7 space-y-4 text-[16px] leading-8 text-[#4a4a4a]">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-10 space-y-10">
        {article.sections.map((section) => {
          const sectionBlocks = article.body.filter((block) => block.sectionId === section.id);

          return (
            <section key={section.id} id={section.id} className="scroll-mt-24">
              <div className="flex items-center gap-3">
                <span className="h-5 w-0.5 rounded-full bg-[#ef9b52]" aria-hidden />
                <h2 className="text-[1.15rem] font-semibold text-[#1f1f1f]">{section.title}</h2>
              </div>
              <div className="mt-4 space-y-4">
                {sectionBlocks.map((block, blockIndex) =>
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
                )}
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

      <p className="mt-10 text-[11px] uppercase tracking-[0.24em] text-[#b4b4b4]">SciClaw · User Guide</p>
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
