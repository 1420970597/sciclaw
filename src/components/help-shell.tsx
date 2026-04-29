import Link from "next/link";
import { helpArticles, helpArticleMap, type HelpArticle } from "@/app/landing-data";

type HelpShellProps = {
  article: HelpArticle;
};

function DocsSidebar({ currentSlug }: { currentSlug: string }) {
  return (
    <nav
      aria-label="User Guide navigation"
      className="rounded-[1.75rem] border border-white/10 bg-white/5 p-4 backdrop-blur-xl"
    >
      <div className="mb-4 flex items-center justify-between border-b border-white/8 pb-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200/80">
            SciClaw
          </p>
          <p className="mt-1 text-sm text-slate-400">USER GUIDE</p>
        </div>
        <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-slate-300">
          Docs
        </div>
      </div>

      <ol className="space-y-2">
        {helpArticles.map((entry) => {
          const isActive = entry.slug === currentSlug;

          return (
            <li key={entry.slug}>
              <Link
                href={`/help/${entry.slug}`}
                className={`group flex items-start gap-3 rounded-2xl px-3 py-3 transition ${
                  isActive
                    ? "border border-cyan-300/30 bg-cyan-300/12 text-white shadow-[0_10px_30px_rgba(34,211,238,0.08)]"
                    : "border border-transparent text-slate-300 hover:border-white/10 hover:bg-white/5 hover:text-white"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                <span
                  className={`mt-0.5 inline-flex h-7 min-w-7 items-center justify-center rounded-full text-[11px] font-semibold tracking-[0.2em] ${
                    isActive
                      ? "bg-white text-slate-950"
                      : "border border-white/10 bg-slate-950/70 text-slate-400"
                  }`}
                >
                  {entry.index}
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-medium">{entry.title}</span>
                  <span className="mt-1 block text-xs leading-5 text-slate-500 group-hover:text-slate-400">
                    {entry.description}
                  </span>
                </span>
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
    <div className="mb-6 flex flex-col gap-3 rounded-[1.75rem] border border-white/10 bg-white/5 p-4 backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
      <button
        type="button"
        className="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-left text-sm text-slate-400 sm:max-w-md"
      >
        <span>Search documentation</span>
        <span className="rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-[11px] uppercase tracking-[0.24em] text-slate-500">
          ⌘K
        </span>
      </button>

      <div className="flex flex-wrap items-center gap-3 text-sm text-slate-300">
        <button
          type="button"
          className="rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:border-cyan-300/30 hover:text-white"
        >
          Appearance · Dark
        </button>
        <button
          type="button"
          className="rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:border-cyan-300/30 hover:text-white"
        >
          Language · EN
        </button>
      </div>
    </div>
  );
}

function ArticleBody({ article }: { article: HelpArticle }) {
  return (
    <article className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-[0_20px_80px_rgba(2,6,23,0.45)] backdrop-blur-xl sm:p-8 lg:p-10">
      <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200/80">
        <span>{article.index}</span>
        <span className="h-px flex-1 bg-white/10" />
      </div>

      <header className="mt-6 border-b border-white/8 pb-6">
        <h1 className="text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
          {article.title}
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
          {article.description}
        </p>
      </header>

      <div className="mt-8 space-y-8">
        {article.sections.map((section, index) => {
          const block = article.body[index];

          return (
            <section key={section.id} id={section.id} className="scroll-mt-24 space-y-4">
              <h2 className="text-2xl font-semibold text-white">{section.title}</h2>
              {block?.type === "paragraph" ? (
                <p className="text-base leading-8 text-slate-300">{block.content}</p>
              ) : null}
            </section>
          );
        })}

        {article.body
          .filter((block) => block.type === "paragraph")
          .slice(article.sections.length)
          .map((block, index) => (
            <p key={`paragraph-${index}`} className="text-base leading-8 text-slate-300">
              {block.content}
            </p>
          ))}

        {article.body
          .filter((block) => block.type === "list")
          .map((block, index) => (
            <ol
              key={`list-${index}`}
              className="grid gap-3 rounded-[1.75rem] border border-white/10 bg-white/5 p-5 text-sm leading-7 text-slate-200"
            >
              {block.items.map((item, itemIndex) => (
                <li key={item} className="flex gap-4">
                  <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-slate-950/80 text-xs font-semibold text-cyan-200">
                    {itemIndex + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          ))}
      </div>

      {article.nextHref && article.nextLabel ? (
        <div className="mt-10 border-t border-white/8 pt-6">
          <Link
            href={article.nextHref}
            className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-slate-100 transition hover:border-cyan-300/30 hover:text-white"
          >
            <span>{article.nextLabel}</span>
            <span aria-hidden>→</span>
          </Link>
        </div>
      ) : null}
    </article>
  );
}

function Toc({ article }: { article: HelpArticle }) {
  return (
    <aside className="rounded-[1.75rem] border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
        On this page
      </p>
      <ol className="mt-4 space-y-2 text-sm">
        {article.sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className="block rounded-xl px-3 py-2 text-slate-300 transition hover:bg-white/5 hover:text-white"
            >
              {section.title}
            </a>
          </li>
        ))}
      </ol>
    </aside>
  );
}

export function HelpShell({ article }: HelpShellProps) {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.16),_transparent_24%),radial-gradient(circle_at_85%_10%,_rgba(168,85,247,0.18),_transparent_20%),linear-gradient(180deg,_#020617_0%,_#07101f_42%,_#020617_100%)] text-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
        <DocsTopBar />

        <div className="grid gap-6 xl:grid-cols-[280px_minmax(0,1fr)_240px]">
          <DocsSidebar currentSlug={article.slug} />
          <ArticleBody article={article} />
          <div className="xl:sticky xl:top-6 xl:self-start">
            <Toc article={article} />
          </div>
        </div>
      </div>
    </main>
  );
}

export function getHelpArticle(slug: string) {
  return helpArticleMap[slug];
}
