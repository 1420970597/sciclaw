import Link from "next/link";
import { privacySections } from "@/app/privacy-data";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.14),_transparent_22%),radial-gradient(circle_at_85%_10%,_rgba(129,140,248,0.12),_transparent_20%),linear-gradient(180deg,_#020617_0%,_#07101f_42%,_#020617_100%)] text-slate-50">
      <div className="mx-auto max-w-5xl px-6 py-10 sm:px-8 lg:px-10 lg:py-14">
        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-400">
          <Link
            href="/"
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:border-cyan-300/30 hover:text-white"
          >
            ← Back to home
          </Link>
          <Link
            href="/help/getting-started"
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:border-cyan-300/30 hover:text-white"
          >
            User Guide
          </Link>
        </div>

        <section className="mt-8 rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-[0_20px_80px_rgba(2,6,23,0.45)] backdrop-blur-xl sm:p-8 lg:p-10">
          <div className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100/90">
            Privacy policy summary
          </div>
          <h1 className="mt-6 text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
            SciClaw privacy and data handling overview
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
            A public-facing reconstruction of SciClaw&apos;s privacy page, based on the
            openly accessible policy summary and structured for fast scanning.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {[
              ["Entity", "Hangzhou Deep Principle Technology Co.,Ltd."],
              ["Status", "Beta / test basis"],
              ["Train on user content", "No"],
              ["Self-service deletion", "Not currently provided"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                  {label}
                </p>
                <p className="mt-3 text-sm font-medium leading-6 text-white">{value}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_220px]">
          <div className="space-y-6">
            {privacySections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-24 rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
              >
                <h2 className="text-2xl font-semibold text-white">{section.title}</h2>
                <div className="mt-4 space-y-4 text-base leading-8 text-slate-300">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <ul className="mt-5 space-y-3 rounded-[1.4rem] border border-white/8 bg-slate-950/60 p-5 text-sm leading-7 text-slate-200">
                  {section.bullets.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-cyan-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <aside className="h-fit rounded-[1.75rem] border border-white/10 bg-white/5 p-4 backdrop-blur-xl lg:sticky lg:top-6">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
              On this page
            </p>
            <ol className="mt-4 space-y-2 text-sm text-slate-300">
              {privacySections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="block rounded-xl px-3 py-2 transition hover:bg-white/5 hover:text-white"
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ol>
          </aside>
        </div>
      </div>
    </main>
  );
}
