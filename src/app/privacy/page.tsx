import Link from "next/link";
import { privacySections } from "@/app/privacy-data";

function slugify(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#fcfcfb] text-[#1f1f1f]">
      <div className="mx-auto max-w-[960px] px-6 py-6 sm:px-8 lg:px-10">
        <header className="border-b border-black/8 pb-4">
          <div className="flex items-center justify-between gap-4">
            <Link href="/" className="text-base font-medium text-[#1f1f1f] transition hover:text-[#eb8b3b]">
              Sci<span className="text-[#eb8b3b]">Claw</span>
            </Link>
            <Link
              href="/"
              className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#a0a0a0] transition hover:text-[#3d3d3d]"
            >
              ← Back
            </Link>
          </div>
        </header>

        <article className="pt-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#eb8b3b]">SciClaw · Legal</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-[#181818] sm:text-5xl">Privacy Policy</h1>
          <p className="mt-4 max-w-2xl text-base leading-8 text-[#6b6b6b]">
            Please read this policy carefully to understand how we collect, use, and protect your information.
          </p>
          <div className="mt-8 border-t border-black/8 pt-8">
            <p className="text-base leading-8 text-[#4b4b4b]">
              <strong>SciClaw Privacy Policy</strong> explains how personal data is collected, used, disclosed,
              and otherwise processed when you use <strong>SciClaw</strong>, an AI research assistant service,
              or any product, service, or application that links to this policy.
            </p>
            <p className="mt-4 text-sm italic text-[#8a8a8a]">Last updated: March 30, 2026</p>
          </div>

          {privacySections.map((section) => (
            <section key={section.id} id={section.id} className="mt-12 border-t border-black/8 pt-8">
              <h2 className="text-xl font-semibold text-[#1f1f1f]">{section.title}</h2>
              <div className="mt-4 space-y-4 text-base leading-8 text-[#4b4b4b]">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {section.bullets.length ? (
                <ul className="mt-5 space-y-3 pl-5 text-base leading-8 text-[#4f4f4f]">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="list-disc">
                      {bullet}
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}

          <section className="mt-12 border-t border-black/8 pt-8">
            <h2 className="text-xl font-semibold text-[#1f1f1f]">Contents</h2>
            <div className="mt-4 flex flex-wrap gap-3 text-sm text-[#6b6b6b]">
              {privacySections.map((section) => (
                <Link
                  key={section.id}
                  href={`#${slugify(section.id)}`}
                  className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1.5 transition hover:border-[#eb8b3b]/40 hover:text-[#eb8b3b]"
                >
                  {section.title}
                </Link>
              ))}
            </div>
          </section>
        </article>
      </div>
    </main>
  );
}
