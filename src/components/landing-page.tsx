"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { DockMenuBar } from "@/components/dock-menu-bar";
import {
  bestCases,
  featureItems,
  type AuthTab,
} from "@/app/landing-data";

function GuideIcon({ className = "h-4.5 w-4.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden>
      <path d="M5.5 6.5A2.5 2.5 0 0 1 8 4h9v14H8a2.5 2.5 0 0 0-2.5 2.5V6.5Z" />
      <path d="M17 18H8a2.5 2.5 0 0 0 0 5h9" />
      <path d="M9.5 8.5h4.5" />
    </svg>
  );
}

function ContactIcon({ className = "h-4.5 w-4.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden>
      <path d="M5 4.5h9A4.5 4.5 0 0 1 18.5 9v10H8a3 3 0 0 0-3 3V4.5Z" />
      <path d="M18.5 19H8a3 3 0 0 0 0 6h10.5" />
      <path d="M9.5 8.5h5" />
      <path d="M9.5 12h4" />
    </svg>
  );
}

function SettingsIcon({ className = "h-4.5 w-4.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden>
      <circle cx="12" cy="12" r="3" />
      <path d="M19 12a7 7 0 0 0-.12-1.25l1.74-1.35-1.7-2.94-2.08.84a7.15 7.15 0 0 0-2.16-1.25L14.4 3h-3l-.28 2.05a7.15 7.15 0 0 0-2.16 1.25l-2.08-.84-1.7 2.94 1.74 1.35A7 7 0 0 0 5 12c0 .43.04.85.12 1.25L3.38 14.6l1.7 2.94 2.08-.84c.64.53 1.37.95 2.16 1.25L11.4 21h3l.28-2.05a7.15 7.15 0 0 0 2.16-1.25l2.08.84 1.7-2.94-1.74-1.35c.08-.4.12-.82.12-1.25Z" />
    </svg>
  );
}

function Header() {
  const settingsGroups = [
    {
      id: "guide",
      triggerLabel: "User Guide",
      triggerAriaLabel: "User Guide",
      icon: <GuideIcon />,
      items: [
        { id: "workspace-basics", label: "Workspace basics", description: "Projects, sessions, and flow", href: "/help/getting-started" },
        { id: "skills-reference", label: "Skills reference", description: "Enable the right research tools", href: "/help/skills" },
      ],
    },
    {
      id: "contact",
      triggerLabel: "Contact Us",
      triggerAriaLabel: "Contact Us",
      icon: <ContactIcon />,
      items: [
        { id: "privacy-policy", label: "Privacy Policy", description: "Legal and data handling", href: "/privacy" },
        { id: "beta-access", label: "Beta access", description: "Request onboarding support", href: "/privacy" },
      ],
    },
    {
      id: "settings",
      triggerId: "landing-settings-trigger",
      triggerLabel: "Settings",
      triggerAriaLabel: "Settings",
      icon: <SettingsIcon />,
      items: [
        { id: "theme", label: "Theme", description: "Light workspace previews", href: "/help/settings" },
        { id: "language", label: "Language", description: "English-first public shell", href: "/help/settings" },
      ],
    },
  ] as const;

  return (
    <header className="pt-8 sm:pt-10">
      <div className="mx-auto flex w-full max-w-[1240px] items-center justify-end px-6 sm:px-8 lg:px-10">
        <nav aria-label="Primary" className="flex items-center gap-3 sm:gap-3.5">
          <DockMenuBar
            groups={settingsGroups.map((group) => ({ ...group, items: [...group.items] }))}
            buttonClassName="border-black/7 bg-white/96 text-[#5a6069] shadow-[0_12px_28px_rgba(15,23,42,0.06)] hover:-translate-y-0.5 hover:border-black/10 hover:text-[#1e2229] sm:h-11 sm:w-11"
            panelClassName="border-black/6 bg-white/98 text-[#3a4048]"
            itemClassName="hover:bg-[#f5f7fa]"
          />
        </nav>
      </div>
    </header>
  );
}

function FeatureNetwork({ onSelect }: { onSelect: (index: number) => void }) {
  const nodes = useMemo(
    () => [
      {
        id: "literature-analysis",
        label: "Literature Analysis",
        icon: "文",
        position: "left-[4%] top-[12%] sm:left-[7%] sm:top-[10%]",
        lineClass: "left-[42%] top-[28%] h-px w-[23%] origin-left rotate-[8deg]",
      },
      {
        id: "data-mining",
        label: "Data Mining",
        icon: "研",
        position: "left-[16%] top-[62%] sm:left-[18%] sm:top-[60%]",
        lineClass: "left-[44%] top-[56%] h-px w-[19%] origin-left rotate-[168deg]",
      },
      {
        id: "outcome-present",
        label: "Outcome Present",
        icon: "果",
        position: "right-[8%] top-[20%] sm:right-[10%] sm:top-[18%]",
        lineClass: "left-[57%] top-[30%] h-px w-[22%] origin-left rotate-[166deg]",
      },
    ],
    [],
  );

  return (
    <div className="relative min-h-[290px] overflow-hidden rounded-[2rem] bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.75),_rgba(255,255,255,0)_62%)] sm:min-h-[360px]">
      <div className="absolute inset-0">
        <div className="absolute left-[16%] top-[18%] h-1.5 w-1.5 rounded-full bg-[#d5d8df]" />
        <div className="absolute left-[25%] top-[42%] h-1.5 w-1.5 rounded-full bg-[#d7dae1]" />
        <div className="absolute left-[72%] top-[36%] h-1.5 w-1.5 rounded-full bg-[#d6d9df]" />
        <div className="absolute left-[68%] top-[66%] h-1.5 w-1.5 rounded-full bg-[#d6d9df]" />
        <div className="absolute left-[47%] top-[24%] h-[84px] w-px bg-gradient-to-b from-[#f2b28a] via-[#ed8d51] to-transparent" />
        {nodes.map((node) => (
          <div key={node.id}>
            <span className={`absolute ${node.lineClass} bg-gradient-to-r from-[#d8dbe1] via-[#e4e6eb] to-transparent`} aria-hidden />
            <button
              type="button"
              onClick={() => {
                const nextIndex = featureItems.findIndex((feature) => feature.id === node.id);
                if (nextIndex >= 0) {
                  onSelect(nextIndex);
                }
              }}
              className={`absolute ${node.position} flex flex-col items-center gap-3 text-center transition hover:scale-[1.02]`}
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/80 bg-white/88 text-lg font-semibold text-[#b3bac4] shadow-[0_16px_36px_rgba(15,23,42,0.08)] backdrop-blur">
                {node.icon}
              </span>
              <span className="max-w-[110px] text-xs font-medium leading-5 text-[#c1c6ce] sm:text-sm">{node.label}</span>
            </button>
          </div>
        ))}
      </div>

      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
        <span className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#f29a62] text-[11px] font-semibold text-white shadow-[0_10px_25px_rgba(242,154,98,0.4)]">
          AI
        </span>
        <button
          type="button"
          onClick={() => onSelect(1)}
          className="group relative flex h-28 w-28 items-center justify-center rounded-full bg-white text-[#ef8c4b] shadow-[0_0_0_18px_rgba(249,159,120,0.16),0_0_0_42px_rgba(249,159,120,0.08),0_28px_60px_rgba(236,132,73,0.14)] transition hover:scale-[1.02] sm:h-32 sm:w-32"
          aria-label="Data Mining"
        >
          <span className="absolute inset-[14px] rounded-full border border-[#f8c4a3]/80" />
          <span className="text-[22px] font-semibold sm:text-[24px]">数</span>
        </button>
        <p className="mt-4 text-sm font-semibold tracking-[-0.01em] text-[#eb8841] sm:text-base">Data Mining</p>
      </div>
    </div>
  );
}

function FeaturePreview({ activeIndex }: { activeIndex: number }) {
  const activeFeature = featureItems[activeIndex];
  const previewMap = {
    "literature-analysis": {
      bodyLabel: "Autonomous Research",
      chartLabels: ["Methodology", "Conclusion", "Data", "Evidence"],
      heading: "Deep Literature Analysis",
      description:
        "Upload a PDF, and SciClaw automatically extracts the core arguments, research methods, and key data, then independently designs plans to reproduce and extend the published results.",
      ctaLabel: "Get started",
    },
    "data-mining": {
      bodyLabel: "Autonomous Research",
      chartLabels: ["Methodology", "Conclusion", "Data", "Evidence"],
      heading: "Intelligent Data Visualization",
      description:
        "Visualize patterns across uploaded evidence, filings, and datasets with clean, presentation-ready charts that remain connected to the underlying scientific context.",
      ctaLabel: "Get started",
    },
    "outcome-present": {
      bodyLabel: "Autonomous Research",
      chartLabels: ["PPT", "PDF", "CSV", "DOCX"],
      heading: "Multi-Format Research Output",
      description:
        "Automatically consolidate your research process and conclusions into professional, content-rich outputs such as presentation slides, academic posters, and documents.",
      ctaLabel: "Get started",
    },
  } as const;
  const previewContent = previewMap[activeFeature.id as keyof typeof previewMap] ?? previewMap["data-mining"];
  const bars =
    activeIndex === 0
      ? [56, 84, 104, 88]
      : activeIndex === 1
        ? [74, 112, 146, 126]
        : [52, 76, 96, 118];

  return (
    <div className="flex flex-col gap-6">
      <div className="rounded-[2rem] border border-white/70 bg-white p-5 shadow-[0_24px_70px_rgba(15,23,42,0.08)] sm:p-6">
        <div className="flex items-center justify-between">
          <span className="h-1.5 w-16 rounded-full bg-[#e3e6eb]" aria-hidden />
          <div className="flex items-center gap-1.5" aria-hidden>
            <span className="h-2.5 w-2.5 rounded-full bg-[#f3bf95]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#ef9c63]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#ea8543]" />
          </div>
        </div>

        <div className="mt-8 flex h-[220px] items-end justify-between gap-3 rounded-[1.5rem] bg-[linear-gradient(180deg,#fffdf9_0%,#fff8f1_100%)] px-5 pb-5 pt-8 sm:h-[250px] sm:px-8">
          {bars.map((height, index) => (
            <div key={`${activeFeature.id}-${index}`} className="flex flex-1 flex-col items-center justify-end gap-3">
              <div
                className="w-full rounded-t-[1.2rem] bg-[linear-gradient(180deg,#f3c098_0%,#eb8e49_100%)] shadow-[0_10px_24px_rgba(235,142,73,0.12)]"
                style={{ height }}
              />
              <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#b7bcc6]">
                {previewContent.chartLabels[index] ?? `Q${index + 1}`}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4 px-1">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#ed8a43]">{previewContent.bodyLabel}</p>
        <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#1f232a] sm:text-[2rem] md:text-[2.3rem]">
          {previewContent.heading}
        </h2>
        <p className="max-w-xl text-base leading-8 text-[#6a7079] sm:text-lg">{previewContent.description}</p>
        <Link
          href="/help/getting-started"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#70757f] transition hover:text-[#1f232a]"
          aria-label="Get started preview"
        >
          {previewContent.ctaLabel}
          <span aria-hidden className="text-base leading-none">
            ↓
          </span>
        </Link>
      </div>
    </div>
  );
}

function FeatureRotator() {
  const [activeIndex, setActiveIndex] = useState(1);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % featureItems.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="feature-rotator" className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-12">
      <FeatureNetwork onSelect={setActiveIndex} />
      <FeaturePreview activeIndex={activeIndex} />
    </section>
  );
}

function AuthCard() {
  const [activeTab, setActiveTab] = useState<AuthTab>("onboard");

  return (
    <aside
      id="auth-card"
      className="mx-auto w-full max-w-[430px] rounded-[2.2rem] border border-[#eceff4] bg-white/98 px-6 py-6 shadow-[0_24px_90px_rgba(241,180,135,0.16),0_18px_50px_rgba(15,23,42,0.08)] sm:px-7 sm:py-7"
    >
      <div className="mx-auto w-full max-w-[332px]">
        <div className="rounded-[1.5rem] border border-[#eceff4] bg-white/96 p-1 shadow-[0_10px_25px_rgba(15,23,42,0.04)]">
          <div role="tablist" aria-label="Authentication mode" className="grid grid-cols-2 rounded-[1.15rem] bg-[#f6f7fa] p-1 text-sm text-[#8a909a]">
            {[
              { key: "onboard", label: "Onboard", panelId: "auth-panel-onboard" },
              { key: "login", label: "Login", panelId: "auth-panel-login" },
            ].map((tab) => {
              const selected = activeTab === tab.key;

              return (
                <button
                  key={tab.key}
                  type="button"
                  role="tab"
                  id={`auth-tab-${tab.key}`}
                  aria-selected={selected}
                  aria-controls={tab.panelId}
                  onClick={() => setActiveTab(tab.key as AuthTab)}
                  className={`rounded-[1rem] px-5 py-2.5 font-medium transition ${
                    selected
                      ? "bg-[#f5d1b6] text-[#6b4b35] shadow-[0_10px_24px_rgba(241,176,126,0.22)]"
                      : "text-[#8a909a] hover:text-[#2a2e35]"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-5 space-y-5">
          <div
            role="tabpanel"
            id={activeTab === "onboard" ? "auth-panel-onboard" : "auth-panel-login"}
            aria-labelledby={activeTab === "onboard" ? "auth-tab-onboard" : "auth-tab-login"}
            aria-label={activeTab === "onboard" ? "Onboard" : "Login"}
            className="rounded-[1.7rem] border border-[#eef1f5] bg-[#fbfcfd] p-4 sm:p-5"
          >
            {activeTab === "onboard" ? (
              <div className="space-y-4">
                <p className="text-center text-sm text-[#7a8088]">Enter your access code to begin</p>
                <label className="block text-sm text-[#5e646d]">
                  <span className="sr-only">Access code</span>
                  <input
                    readOnly
                    value="SC-XXXXXXXX"
                    placeholder="SC-XXXXXXXX"
                    className="w-full rounded-[1.2rem] border border-[#ebeef3] bg-white px-4 py-3 text-center text-sm font-medium uppercase tracking-[0.28em] text-[#a6acb5] outline-none"
                  />
                </label>
                <button
                  type="button"
                  disabled
                  className="w-full rounded-[1.2rem] border border-[#eef1f4] bg-[#f3f5f8] px-4 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#b7bcc5]"
                >
                  Verify access code
                </button>
              </div>
            ) : (
              <form
                className="space-y-4"
                onSubmit={(event) => {
                  event.preventDefault();
                }}
              >
                <label className="block space-y-2 text-sm text-[#5f646d]">
                  <span className="sr-only">Email address</span>
                  <input
                    type="email"
                    aria-label="Email address"
                    placeholder="Email address"
                    className="w-full rounded-[1.1rem] border border-[#eceff3] bg-white px-4 py-3 text-sm text-[#20242b] outline-none transition placeholder:text-[#b0b6bf] focus:border-[#ebb284]"
                  />
                </label>
                <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
                  <label className="block space-y-2 text-sm text-[#5f646d]">
                    <span className="sr-only">Verification code</span>
                    <input
                      aria-label="Verification code"
                      placeholder="Verification code"
                      className="w-full rounded-[1.1rem] border border-[#eceff3] bg-white px-4 py-3 text-sm text-[#20242b] outline-none transition placeholder:text-[#b0b6bf] focus:border-[#ebb284]"
                    />
                  </label>
                  <button
                    type="button"
                    disabled
                    className="self-end rounded-[1.1rem] border border-[#edf0f4] bg-[#f4f6f9] px-4 py-3 text-sm font-medium uppercase tracking-[0.12em] text-[#b4bac3]"
                  >
                    Send code
                  </button>
                </div>
                <button
                  type="submit"
                  disabled
                  className="w-full rounded-[1.2rem] bg-[#f2a467] px-4 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white shadow-[0_16px_32px_rgba(242,164,103,0.3)] transition disabled:cursor-not-allowed disabled:bg-[#f2a467] disabled:text-white"
                >
                  Enter laboratory
                </button>
                <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.28em] text-[#a1a7b0]">
                  <span className="h-px flex-1 bg-[#e6e9ee]" />
                  OR
                  <span className="h-px flex-1 bg-[#e6e9ee]" />
                </div>
                <button
                  type="button"
                  className="w-full rounded-[1.2rem] border border-[#eceff3] bg-white px-4 py-3 text-sm font-medium uppercase tracking-[0.12em] text-[#31363d] shadow-[0_12px_24px_rgba(15,23,42,0.04)] transition hover:border-[#dce1e8]"
                >
                  Continue with Google
                </button>
              </form>
            )}
          </div>

          <Link
            href="/privacy"
            className="inline-flex w-full items-center justify-center rounded-[1.2rem] border border-[#f4d9c3] bg-[#fdf4ec] px-4 py-3 text-sm font-medium text-[#87522e] transition hover:border-[#efcaa9] hover:bg-[#fcedde]"
          >
            No account yet? Apply Now →
          </Link>

          {activeTab === "login" ? (
            <p className="text-center text-xs leading-5 text-[#9097a1]">
              By continuing, you agree to SciClaw&apos;s{" "}
              <Link href="/privacy" className="font-medium text-[#626973] underline-offset-4 hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          ) : null}
        </div>
      </div>
    </aside>
  );
}

function BestCases() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCase = bestCases[activeIndex];
  const carouselFrames = [
    {
      eyebrow: "Reproduction",
      tag: "Live workflow",
      summaryTitle: "Accelerated Paper Reproduction",
      summaryText:
        "Provides end-to-end support for environment setup, workflow construction, and error handling in paper reproduction, enabling faster validation of methods and results.",
      chipA: "Environment setup",
      chipB: "Workflow construction",
      bars: [72, 106, 82],
    },
    {
      eyebrow: "Peer Review",
      tag: "Live review",
      summaryTitle: "Peer Review Response Support",
      summaryText:
        "Automatically retrieves relevant data, manuscript content, and past task records in response to reviewer comments, helping researchers quickly draft evidence-based replies.",
      chipA: "Reviewer tasks",
      chipB: "Evidence retrieval",
      bars: [64, 96, 118],
    },
    {
      eyebrow: "Foundry",
      tag: "Draft 01",
      summaryTitle: "Automated Report Generation",
      summaryText:
        "Automatically integrates historical tasks, literature, and experimental data into clear, presentation-ready materials, significantly improving the efficiency of research reporting.",
      chipA: "Slides handoff",
      chipB: "Evidence appendix",
      bars: [48, 70, 98],
    },
    {
      eyebrow: "Literature",
      tag: "Autonomous",
      summaryTitle: "Deep Literature Analysis",
      summaryText:
        "Upload a PDF, and SciClaw automatically extracts the core arguments, research methods, and key data, then independently designs plans to reproduce and extend the published results.",
      chipA: "Core arguments",
      chipB: "Key data",
      bars: [58, 78, 108],
    },
  ] as const;
  const activeFrame = carouselFrames[activeIndex] ?? carouselFrames[0];

  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % bestCases.length);
  };

  const previousSlide = () => {
    setActiveIndex((current) => (current - 1 + bestCases.length) % bestCases.length);
  };

  return (
    <section className="mt-24">
      <div className="mb-10 flex flex-col items-center gap-3 text-center">
        <h2 className="text-[2rem] font-semibold tracking-[-0.03em] text-[#1f232a] sm:text-[2.4rem]">
          Best <span className="text-[#ec8a44]">Cases</span>
        </h2>
        <p className="text-base text-[#747a83] sm:text-lg">Real research results powered by SciClaw</p>
      </div>

      <div className="overflow-hidden rounded-[2rem] bg-[linear-gradient(180deg,#f7efe5_0%,#fbf7f1_12%,#ffffff_36%)] shadow-[0_26px_80px_rgba(15,23,42,0.08)]">
        <div className="grid lg:grid-cols-[1.08fr_0.92fr]">
          <div className="relative min-h-[300px] bg-[radial-gradient(circle_at_20%_20%,rgba(244,162,95,0.14),transparent_28%),linear-gradient(180deg,#12161d_0%,#0d1016_100%)] p-6 sm:p-8">
            <div className="absolute inset-x-8 top-8 flex items-center justify-between text-[11px] uppercase tracking-[0.22em] text-[#6a7180]">
              <span>{activeFrame.eyebrow}</span>
              <span>Preview</span>
            </div>
            <div className="mx-auto mt-12 max-w-[520px] rounded-[1.8rem] border border-white/10 bg-[#161a22]/92 p-5 shadow-[0_24px_70px_rgba(0,0,0,0.28)] sm:p-6">
              <div className="flex items-center justify-between border-b border-white/8 pb-3">
                <div>
                    <p className="text-sm font-semibold text-white">{activeFrame.summaryTitle}</p>
                  <p className="mt-1 text-xs text-[#8e95a2]">Stakeholder-ready synthesis</p>
                </div>
                <span className="rounded-full border border-[#f0a467]/25 bg-[#f0a467]/12 px-3 py-1 text-[11px] text-[#f4b17b]">
                  {activeFrame.tag}
                </span>
              </div>
              <div className="mt-5 grid gap-4 md:grid-cols-[1.15fr_0.85fr]">
                <div className="space-y-3">
                  <div className="rounded-[1.25rem] border border-white/6 bg-white/4 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-[#778090]">Summary</p>
                    <p className="mt-3 text-sm leading-6 text-[#e5e8ef]">
                      {activeFrame.summaryText}
                    </p>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-[1.1rem] border border-white/6 bg-white/4 p-4 text-xs text-[#c7ccd6]">{activeFrame.chipA}</div>
                    <div className="rounded-[1.1rem] border border-white/6 bg-white/4 p-4 text-xs text-[#c7ccd6]">{activeFrame.chipB}</div>
                  </div>
                </div>
                <div className="rounded-[1.35rem] border border-white/6 bg-[linear-gradient(180deg,#232935_0%,#1b202a_100%)] p-4">
                  <div className="space-y-3">
                    <div className="h-2 w-16 rounded-full bg-[#f29a62]" />
                    <div className="space-y-2">
                      <div className="h-2 rounded-full bg-white/10" />
                      <div className="h-2 w-5/6 rounded-full bg-white/10" />
                      <div className="h-2 w-4/6 rounded-full bg-white/10" />
                    </div>
                    <div className="mt-4 grid grid-cols-3 gap-2">
                      {activeFrame.bars.map((height) => (
                        <div key={height} className="flex items-end justify-center rounded-xl bg-white/5 p-2">
                          <span className="w-6 rounded-t-xl bg-[linear-gradient(180deg,#f4b282_0%,#eb8745_100%)]" style={{ height }} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden bg-[#fbf8f2] p-8 sm:p-10">
            <div
              className="absolute inset-0 opacity-45"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, rgba(224, 194, 164, 0.75) 1px, transparent 0)",
                backgroundSize: "18px 18px",
              }}
              aria-hidden
            />
            <div className="relative z-10 flex h-full flex-col justify-between gap-10">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#ec8a44]">
                  {String(activeIndex + 1).padStart(2, "0")} / {String(bestCases.length).padStart(2, "0")}
                </p>
                <h3 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#1f232a] sm:text-[2.3rem]">{activeCase.title}</h3>
                <p className="mt-5 max-w-[420px] text-base leading-8 text-[#6c727b] sm:text-lg">{activeCase.description}</p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={previousSlide}
                  aria-label="Previous"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-black/8 bg-white text-[#42474f] shadow-[0_10px_25px_rgba(15,23,42,0.05)] transition hover:-translate-y-0.5 hover:text-[#1f232a]"
                >
                  ←
                </button>
                <div className="flex items-center gap-2">
                  {bestCases.map((item, index) => {
                    const isActive = index === activeIndex;
                    return (
                      <button
                        key={item.title}
                        type="button"
                        onClick={() => setActiveIndex(index)}
                        aria-label={`Go to slide ${index + 1}`}
                        className={`h-2 rounded-full transition ${isActive ? "w-10 bg-[#ec8a44]" : "w-6 bg-[#d9dde3] hover:bg-[#c9cfd7]"}`}
                      />
                    );
                  })}
                </div>
                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Next"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-black/8 bg-white text-[#42474f] shadow-[0_10px_25px_rgba(15,23,42,0.05)] transition hover:-translate-y-0.5 hover:text-[#1f232a]"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mt-24 border-t border-black/6">
      <div className="mx-auto grid max-w-[1240px] gap-3 px-6 py-10 text-sm text-[#8a9098] sm:px-8 lg:px-10">
        <p>SciClaw - AI co-worker for scientific research.</p>
        <p>2026 All rights reserved</p>
      </div>
    </footer>
  );
}

export function LandingPage() {
  return (
    <main
      id="top"
      className="min-h-screen bg-[linear-gradient(180deg,#f4f5f8_0%,#f1f3f7_100%)] text-[#1f232a]"
    >
      <Header />

      <section className="mx-auto max-w-[1240px] px-6 pb-16 pt-7 sm:px-8 sm:pt-8 lg:px-10 lg:pt-10">
        <div className="space-y-16 text-center sm:space-y-18">
          <div className="space-y-6">
            <h1 className="text-5xl font-semibold tracking-[-0.055em] text-[#1f232a] sm:text-6xl lg:text-[5.2rem]">
              Sci<span className="text-[#eb8a3c]">Claw</span>
            </h1>
            <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#8c919a] sm:text-xs">
              AI co-worker for scientific research.
            </p>
            <p className="mx-auto max-w-[980px] text-base leading-8 tracking-[0.005em] text-[#60656f] sm:text-[1.3rem] sm:leading-9 lg:max-w-[1060px]">
              SciClaw connects inspiration generation, experimental execution, and iterative optimization, ushering in a new paradigm of scientific discovery
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-14 xl:gap-16">
            <FeatureRotator />
            <AuthCard />
          </div>
        </div>

        <BestCases />
      </section>

      <Footer />
    </main>
  );
}
