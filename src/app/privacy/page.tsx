import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#fcfcfb] text-[#1f1f1f]">
      <div className="mx-auto max-w-[840px] px-6 py-6 sm:px-8 lg:px-10">
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
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#eb8b3b]">
            SciClaw · Legal
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-[#181818] sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-8 text-[#6b6b6b]">
            Please read this policy carefully to understand how we collect, use, and protect your information.
          </p>
          <div className="mt-8 border-t border-black/8 pt-8">
            <p className="text-base leading-8 text-[#4b4b4b]">
              <strong>SciClaw Privacy Policy</strong> explains how personal data is collected, used,
              disclosed, and otherwise processed when you use <strong>SciClaw</strong>, an AI research
              assistant service, or any product, service, or application that links to this policy.
            </p>
            <p className="mt-4 text-sm italic text-[#8a8a8a]">Last updated: March 30, 2026</p>
          </div>

          <div className="mt-8 rounded-sm border border-black/10 bg-white px-5 py-4 text-base leading-8 text-[#4b4b4b] shadow-[0_1px_1px_rgba(17,24,39,0.02)]">
            This Privacy Policy explains how Hangzhou Deep Principle Technology Co.,Ltd. (&quot;we&quot;,
            &quot;us&quot;, or &quot;our&quot;) processes personal data in connection with SciClaw.
          </div>

          <div className="mt-10 space-y-10 text-base leading-8 text-[#4b4b4b]">
            <section id="who-we-are">
              <h2 className="text-xl font-semibold text-[#1f1f1f]">1. Who We Are</h2>
              <p className="mt-4">
                SciClaw is currently offered on a test/beta basis by the SciClaw team at Hangzhou Deep
                Principle Technology Co.,Ltd. We are responsible for operating the service and for the
                processing of personal data described in this Policy.
              </p>
              <p className="mt-4">
                If the service structure changes as part of a formal commercial launch, we may update this
                Policy and provide additional notice where required by applicable law.
              </p>
            </section>

            <section id="personal-data">
              <h2 className="text-xl font-semibold text-[#1f1f1f]">2. Personal Data We Collect</h2>
              <p className="mt-4">
                We collect personal data in three main ways: data you provide to us, data we collect
                automatically, and data we receive from third parties where permitted by law.
              </p>
              <ul className="mt-4 space-y-3 pl-5 text-[#4f4f4f]">
                <li className="list-disc">Account data such as your email address, mobile phone number, verification codes, and settings.</li>
                <li className="list-disc">Service content such as prompts, chat history, uploaded files, notes, datasets, and generated outputs.</li>
                <li className="list-disc">Device, browser, usage, and diagnostic data collected for operations and security.</li>
              </ul>
            </section>

            <section id="use-of-content">
              <h2 className="text-xl font-semibold text-[#1f1f1f]">3. How SciClaw Uses Your Content</h2>
              <p className="mt-4">
                SciClaw processes Your Content to provide AI-assisted features and service functionality.
                The public policy states that prompts, uploaded files, chat history, and generated outputs
                are not used to train or improve the company&apos;s AI models.
              </p>
              <ul className="mt-4 space-y-3 pl-5 text-[#4f4f4f]">
                <li className="list-disc">Content is used to generate answers, analyze uploaded materials, and maintain conversation continuity.</li>
                <li className="list-disc">Support, abuse prevention, and legal compliance may still require limited review or processing.</li>
                <li className="list-disc">Aggregated or de-identified usage information may be used to improve product quality and safety.</li>
              </ul>
            </section>

            <section id="sharing-retention-security">
              <h2 className="text-xl font-semibold text-[#1f1f1f]">4. Sharing, Retention, and Security</h2>
              <p className="mt-4">
                The public summary indicates that SciClaw may process data in China and other countries
                where it or its service providers operate, and that it may share information with vendors,
                affiliates, and legally required recipients.
              </p>
              <p className="mt-4">
                The policy also notes that no system can guarantee absolute security, and that breach
                notifications will be made without undue delay when required by applicable law.
              </p>
            </section>
          </div>
        </article>
      </div>
    </main>
  );
}
