"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { DockMenuBar } from "@/components/dock-menu-bar";
import {
  bestCases,
  featureItems,
  type AuthTab,
} from "@/app/landing-data";

function GuideIcon({ className = "h-[1.1rem] w-[1.1rem]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden>
      <path d="M5.5 6.5A2.5 2.5 0 0 1 8 4h9v14H8a2.5 2.5 0 0 0-2.5 2.5V6.5Z" />
      <path d="M17 18H8a2.5 2.5 0 0 0 0 5h9" />
      <path d="M9.5 8.5h4.5" />
    </svg>
  );
}

function ContactIcon({ className = "h-[1.1rem] w-[1.1rem]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden>
      <path d="M6.75 11.75a4.75 4.75 0 0 1 9.5 0" />
      <path d="M5.25 12.5a2.25 2.25 0 0 1 2.25-2.25h.75a1.75 1.75 0 0 1 1.75 1.75v4.25A1.75 1.75 0 0 1 8.25 18H7.5a2.25 2.25 0 0 1-2.25-2.25V12.5Z" />
      <path d="M14 12a1.75 1.75 0 0 1 1.75-1.75h.75a2.25 2.25 0 0 1 2.25 2.25v3.25A2.25 2.25 0 0 1 16.5 18h-.75A1.75 1.75 0 0 1 14 16.25V12Z" />
      <path d="M16.5 18h.5a1.75 1.75 0 0 0 1.75-1.75V15.5" />
      <path d="M12 18.75v.25" />
    </svg>
  );
}

function SettingsIcon({ className = "h-[1.1rem] w-[1.1rem]" }: { className?: string }) {
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
        { id: "discord", label: "Discord", description: "discord.gg/6KRR6svTGu", href: "https://discord.gg/6KRR6svTGu" },
        { id: "email", label: "Email", description: "service@sciclaw.ai", href: "mailto:service@sciclaw.ai" },
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
    <header className="pt-[0.52rem] sm:pt-[0.66rem]">
      <div className="mx-auto flex w-full max-w-[1180px] items-center justify-end px-5 sm:px-7 lg:px-9">
        <nav aria-label="Primary" className="flex items-center gap-[0.08rem] sm:gap-[0.15rem]">
          <DockMenuBar
            groups={settingsGroups.map((group) => ({ ...group, items: [...group.items] }))}
            buttonClassName="border-[#d4c6b1] bg-[linear-gradient(180deg,rgba(255,255,255,0.998)_0%,rgba(249,244,238,0.996)_100%)] text-[#56616d] shadow-[0_5px_10px_rgba(15,23,42,0.034),inset_0_1px_0_rgba(255,255,255,0.998)] hover:-translate-y-0.5 hover:border-[#c7b79e] hover:text-[#171b22]"
            panelClassName="border-black/6 bg-white/98 text-[#3a4048]"
            itemClassName="hover:bg-[#f5f7fa]"
          />
        </nav>
      </div>
    </header>
  );
}

function FeatureNetwork({ activeIndex, onSelect }: { activeIndex: number; onSelect: (index: number) => void }) {
  const nodes = useMemo(
    () => [
      {
        id: "literature-analysis",
        label: "Literature Analysis",
        icon: "文",
        position: "left-[15.1%] top-[1.2%] sm:left-[15.1%] sm:top-[1.2%]",
        lineClass: "left-[43.35%] top-[22.6%] h-[1.48px] w-[20.9%] origin-left rotate-[221deg]",
        ringClass: "h-[3.62rem] w-[3.62rem] border-[#adb8c3] bg-[linear-gradient(180deg,#ffffff_0%,#f7f9fb_100%)] text-[#5b6672] shadow-[0_8px_16px_rgba(15,23,42,0.03)]",
        activeRingClass: "h-[3.92rem] w-[3.92rem] border-[#e7a068] bg-[linear-gradient(180deg,#fffbf7_0%,#ffd8bc_100%)] text-[#bb581c] shadow-[0_0_0_5px_rgba(240,142,79,0.068),0_11px_18px_rgba(232,124,55,0.094)]",
        labelClass: "max-w-[64px] text-[#6c7886] drop-shadow-[0_1px_0_rgba(255,255,255,0.9)]",
        activeLabelClass: "max-w-[72px] text-[#a04d1b] drop-shadow-[0_2px_6px_rgba(240,142,79,0.07)]",
      },
      {
        id: "data-mining",
        label: "Data Mining",
        icon: "数",
        position: "left-[15%] top-[74.9%] sm:left-[15%] sm:top-[74.9%]",
        lineClass: "left-[43.1%] top-[51.2%] h-[1.48px] w-[22.6%] origin-left rotate-[143deg]",
        ringClass: "h-[3.62rem] w-[3.62rem] border-[#adb8c3] bg-[linear-gradient(180deg,#ffffff_0%,#f7f9fb_100%)] text-[#5b6672] shadow-[0_8px_16px_rgba(15,23,42,0.03)]",
        activeRingClass: "h-[3.92rem] w-[3.92rem] border-[#e7a068] bg-[linear-gradient(180deg,#fffbf7_0%,#ffd8bc_100%)] text-[#bb581c] shadow-[0_0_0_5px_rgba(240,142,79,0.068),0_11px_18px_rgba(232,124,55,0.094)]",
        labelClass: "max-w-[64px] text-[#6c7886] drop-shadow-[0_1px_0_rgba(255,255,255,0.9)]",
        activeLabelClass: "max-w-[72px] text-[#a04d1b] drop-shadow-[0_2px_6px_rgba(240,142,79,0.07)]",
      },
      {
        id: "outcome-present",
        label: "Outcome Present",
        icon: "果",
        position: "right-[5.2%] top-[8.2%] sm:right-[5.2%] sm:top-[8.2%]",
        lineClass: "left-[51.05%] top-[28.5%] h-[1.48px] w-[21.7%] origin-left rotate-[-8deg]",
        ringClass: "h-[3.62rem] w-[3.62rem] border-[#adb8c3] bg-[linear-gradient(180deg,#ffffff_0%,#f7f9fb_100%)] text-[#5b6672] shadow-[0_8px_16px_rgba(15,23,42,0.03)]",
        activeRingClass: "h-[3.92rem] w-[3.92rem] border-[#e7a068] bg-[linear-gradient(180deg,#fffbf7_0%,#ffd8bc_100%)] text-[#bb581c] shadow-[0_0_0_5px_rgba(240,142,79,0.068),0_11px_18px_rgba(232,124,55,0.094)]",
        labelClass: "max-w-[67px] text-[#6c7886] drop-shadow-[0_1px_0_rgba(255,255,255,0.9)]",
        activeLabelClass: "max-w-[75px] text-[#a04d1b] drop-shadow-[0_2px_6px_rgba(240,142,79,0.07)]",
      },
    ],
    [],
  );

  return (
    <div className="relative min-h-[334px] overflow-hidden rounded-[2rem] bg-[radial-gradient(circle_at_48%_49%,_rgba(255,255,255,0.93),_rgba(255,255,255,0)_56%)] sm:min-h-[390px]">
      <div className="absolute inset-0 opacity-[0.998]">
        <div className="absolute left-[23.2%] top-[11.7%] h-[1.5px] w-[1.5px] rounded-full bg-[#a9b7c5]" />
        <div className="absolute left-[28.7%] top-[45.2%] h-[1.5px] w-[1.5px] rounded-full bg-[#aebdcb]" />
        <div className="absolute left-[57.4%] top-[22.9%] h-[1.5px] w-[1.5px] rounded-full bg-[#b5c2cf]" />
        <div className="absolute left-[59.6%] top-[43.6%] h-[1.5px] w-[1.5px] rounded-full bg-[#b8c4d0]" />
        <div className="absolute left-[48.95%] top-[21.5%] h-[114px] w-[1.16px] bg-gradient-to-b from-[#efac73] via-[#db7c36] to-transparent opacity-[0.92]" />
        <div className="absolute left-[49.87%] top-[21.5%] h-[114px] w-px bg-gradient-to-b from-[#fff0e3] via-[#fff6ef]/34 to-transparent opacity-[0.68]" />
        <div className="absolute left-[49.5%] top-[20.45%] h-[2.8rem] w-[2.8rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(244,177,132,0.038)_0%,_rgba(244,177,132,0.014)_34%,_rgba(255,255,255,0)_66%)]" />
        <div className="absolute left-[49.5%] top-[20.45%] h-[3.24rem] w-[3.24rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(255,242,231,0.62)_0%,_rgba(255,242,231,0)_72%)]" />
        <div className="absolute left-[49.5%] top-[20.45%] h-3.5 w-3.5 -translate-x-1/2 rounded-full border border-[#eba16a] bg-[#e37b33] shadow-[0_0_0_3px_rgba(242,154,98,0.064),0_6px_12px_rgba(232,124,55,0.102)]" />
        <div className="absolute left-[49.5%] top-[47.3%] h-[96px] w-[96px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(244,177,132,0.022)_0%,_rgba(244,177,132,0.006)_30%,_rgba(255,255,255,0)_69%)]" />
        <div className="absolute left-[49.5%] top-[47.3%] h-[88px] w-[88px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#ddb088]/58 shadow-[0_0_9px_rgba(239,146,86,0.016)]" />
        <div className="absolute left-[49.5%] top-[47.3%] h-[64px] w-[64px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#efc7aa]/5 shadow-[0_0_4px_rgba(239,146,86,0.01)]" />
        {nodes.map((node) => {
          const nextIndex = featureItems.findIndex((feature) => feature.id === node.id);
          const isActive = nextIndex === activeIndex;

          return (
            <div key={node.id}>
              <span className={`absolute ${node.lineClass} bg-gradient-to-r from-[#9fb3c2] via-[#d0dbe3] to-transparent opacity-[0.96]`} aria-hidden />
              <button
                type="button"
                onClick={() => {
                  if (nextIndex >= 0) {
                    onSelect(nextIndex);
                  }
                }}
                className={`absolute ${node.position} flex flex-col items-center gap-[0.98rem] text-center transition hover:scale-[1.02]`}
              >
                <span className={`flex items-center justify-center rounded-full border text-[1.02rem] font-semibold backdrop-blur ${isActive ? node.activeRingClass : node.ringClass}`}>
                  {node.icon}
                </span>
                <span className={`text-[10.95px] font-medium leading-[1.76] tracking-[0.066em] sm:text-[0.775rem] ${isActive ? node.activeLabelClass : node.labelClass}`}>{node.label}</span>
              </button>
            </div>
          );
        })}
      </div>

      <div className="absolute left-1/2 top-1/2 flex -translate-x-[42%] -translate-y-[28.1%] flex-col items-center">
        <span className="mb-[0.82rem] flex h-8.5 w-8.5 items-center justify-center rounded-full bg-[#ef8f4d] text-[11px] font-semibold text-white shadow-[0_8px_16px_rgba(232,124,55,0.22)]">
          AI
        </span>
        <button
          type="button"
          onClick={() => onSelect(0)}
          className="group relative flex h-[5.34rem] w-[5.34rem] items-center justify-center rounded-full bg-[linear-gradient(180deg,#ffffff_0%,#fff8f2_100%)] text-[#e37f36] shadow-[0_0_0_5px_rgba(249,159,120,0.038),0_0_0_12px_rgba(249,159,120,0.014),0_11px_16px_rgba(232,124,55,0.04)] transition hover:scale-[1.02] sm:h-[5.56rem] sm:w-[5.56rem]"
          aria-label="Literature Analysis"
        >
          <span className="absolute inset-[13px] rounded-full border border-[#efc8aa]/6" />
          <span className="absolute inset-[24px] rounded-full border border-[#efd8c8]/58" />
          <span className="text-[19px] font-semibold sm:text-[21px]">文</span>
        </button>
        <p className="mt-[0.72rem] text-[0.845rem] font-semibold tracking-[0.02em] text-[#dc7429] drop-shadow-[0_2px_4px_rgba(240,142,79,0.076)] sm:text-[0.91rem]">Literature Analysis</p>
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
    "autonomous-execution": {
      bodyLabel: "Autonomous Research",
      chartLabels: ["Plan", "Tools", "Results", "Reports"],
      heading: "Autonomous Experiment Execution",
      description:
        "Enter your research goal, and SciClaw automatically breaks down the research path, designs computational and simulation experiments, analyzes and iterates on the results, and delivers a reasonable outcome.",
      ctaLabel: "Get started",
    },
  } as const;
  const previewContent = previewMap[activeFeature.id as keyof typeof previewMap] ?? previewMap["literature-analysis"];
  const bars =
    activeIndex === 0
      ? [56, 84, 104, 88]
      : activeIndex === 1
        ? [74, 112, 146, 126]
        : [52, 76, 96, 118];

  return (
    <div className="flex flex-col gap-6">
      <div className="rounded-[2rem] border border-white/72 bg-white p-[1.15rem] shadow-[0_22px_58px_rgba(15,23,42,0.068)] sm:p-5">
        <div className="flex items-center justify-between">
          <span className="h-1.5 w-16 rounded-full bg-[#e3e6eb]" aria-hidden />
          <div className="flex items-center gap-1.5" aria-hidden>
            <span className="h-2.5 w-2.5 rounded-full bg-[#f3bf95]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#ef9c63]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#ea8543]" />
          </div>
        </div>

        <div className="mt-7 rounded-[1.55rem] bg-[linear-gradient(180deg,#fffdf9_0%,#fff8f1_100%)] px-[1.02rem] pb-[1.32rem] pt-[1.28rem] sm:px-[1.32rem] sm:pb-[1.46rem]">
          <div className="flex items-center justify-between gap-3 border-b border-[#f1e5d8] pb-3">
            <div>
              <p className="text-sm font-semibold text-[#272a30]">{previewContent.heading}</p>
              <p className="mt-1 text-xs text-[#9da4ad]">Research workspace preview</p>
            </div>
            <span className="rounded-full border border-[#f6d9c1] bg-[#fff6ef] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-[#e18c51]">
              {previewContent.bodyLabel}
            </span>
          </div>

          <div className="mt-[1.28rem] grid gap-[1.34rem] lg:grid-cols-[1fr_1.03fr]">
            <div className="space-y-[1.22rem]">
              <div className="rounded-[1.25rem] border border-[#efe4d8] bg-white/92 p-[1.18rem] shadow-[0_8px_18px_rgba(15,23,42,0.034)]">
                <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#bc9d82]">
                  <span className="h-2 w-2 rounded-full bg-[#ef9c63]" />
                  Summary
                </div>
                <div className="mt-[1.38rem] space-y-[1.14rem]" aria-hidden>
                  <span className="block h-2 rounded-full bg-[#eceff3]" />
                  <span className="block h-2 w-11/12 rounded-full bg-[#eceff3]" />
                  <span className="block h-2 w-10/12 rounded-full bg-[#eceff3]" />
                  <span className="block h-2 w-7/12 rounded-full bg-[#f4d3bb]" />
                </div>
              </div>
              <div className="grid gap-[1.08rem] sm:grid-cols-2">
                {previewContent.chartLabels.slice(0, 2).map((label) => (
                  <div
                    key={`${activeFeature.id}-${label}`}
                    className="rounded-[1.15rem] border border-[#eee2d4] bg-white/84 px-4 py-[0.94rem] text-[11px] font-medium uppercase tracking-[0.24em] text-[#8a755f] shadow-[0_8px_16px_rgba(15,23,42,0.028)]"
                  >
                    {label}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.35rem] border border-[#f0e4d8] bg-white/78 p-[1.22rem] shadow-[inset_0_1px_0_rgba(255,255,255,0.62)]">
              <div className="space-y-[1.28rem]">
                <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.22em] text-[#8e9bab]">
                  <span>Evidence</span>
                  <span>Preview</span>
                </div>
                <div className="space-y-[1.08rem]" aria-hidden>
                  <div className="h-2 rounded-full bg-[#eceff4]" />
                  <div className="h-2 w-5/6 rounded-full bg-[#eceff4]" />
                  <div className="h-2 w-4/6 rounded-full bg-[#f6d9c2]" />
                </div>
                <div className="mt-[1.58rem] grid grid-cols-4 gap-[1.18rem] pt-[0.9rem]">
                  {bars.map((height, index) => (
                    <div key={`${activeFeature.id}-${index}`} className="flex flex-col items-center gap-[0.94rem]">
                      <div className="flex h-[150px] w-full items-end justify-center rounded-[1rem] bg-white/94 px-2 pb-[0.48rem] shadow-[inset_0_1px_0_rgba(255,255,255,0.78)]">
                        <span
                          className="w-full rounded-t-[1rem] bg-[linear-gradient(180deg,#f3c098_0%,#eb8e49_100%)] shadow-[0_10px_24px_rgba(235,142,73,0.12)]"
                          style={{ height }}
                        />
                      </div>
                      <span className="text-center text-[8.7px] font-medium uppercase tracking-[0.34em] text-[#566576] sm:text-[9.35px] sm:tracking-[0.38em]">
                        {previewContent.chartLabels[index] ?? `Q${index + 1}`}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-[1.02rem] px-1 pt-[0.35rem]">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#ed8a43]">{previewContent.bodyLabel}</p>
        <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#1f232a] sm:text-[1.92rem] md:text-[2.06rem]">
          {previewContent.heading}
        </h2>
        <p className="max-w-[33.2rem] text-base leading-[2.02] text-[#676d77] sm:text-[1.01rem]">{previewContent.description}</p>
        <Link
          href="/help/getting-started"
          className="inline-flex items-center gap-2 pt-[0.36rem] text-sm font-medium text-[#6d737c] transition hover:text-[#1f232a]"
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
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="feature-rotator"
      className="grid gap-4 lg:grid-cols-[minmax(0,326px)_minmax(0,1fr)] lg:items-center lg:gap-[0.98rem] xl:grid-cols-[minmax(0,338px)_minmax(0,1fr)] xl:gap-[1.18rem]"
    >
      <div className="overflow-hidden rounded-[2.05rem] bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.46),_rgba(255,255,255,0)_66%)] px-0 py-1 sm:px-1 lg:-mr-1 lg:px-0 xl:mr-0 xl:px-1">
        <FeatureNetwork activeIndex={activeIndex} onSelect={setActiveIndex} />
      </div>
      <FeaturePreview activeIndex={activeIndex} />
    </section>
  );
}

function AuthCard() {
  const [activeTab, setActiveTab] = useState<AuthTab>("onboard");

  return (
    <aside
      id="auth-card"
      className="mx-auto w-full max-w-[322px] rounded-[1.95rem] border border-[#e7ecf1] bg-white px-[1.02rem] py-[1.02rem] shadow-[0_16px_34px_rgba(15,23,42,0.048),0_10px_24px_rgba(241,180,135,0.07)] sm:px-[1.06rem] sm:py-[1.04rem]"
    >
      <div className="mx-auto w-full max-w-[322px]">
        <div className="rounded-[1.42rem] border border-[#e9eef3] bg-white p-1 shadow-[0_8px_18px_rgba(15,23,42,0.034)]">
          <div role="tablist" aria-label="Authentication mode" className="grid grid-cols-2 rounded-[1.15rem] bg-[#f5f7fa] p-[0.98rem] text-sm text-[#828893]">
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
                      ? "bg-[#f4cfb2] text-[#654732] shadow-[0_9px_20px_rgba(241,176,126,0.2)]"
                      : "text-[#7f8691] hover:text-[#2a2e35]"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-3.5 space-y-[1.08rem]">
          <div
            role="tabpanel"
            id={activeTab === "onboard" ? "auth-panel-onboard" : "auth-panel-login"}
            aria-labelledby={activeTab === "onboard" ? "auth-tab-onboard" : "auth-tab-login"}
            aria-label={activeTab === "onboard" ? "Onboard" : "Login"}
            className="rounded-[1.46rem] border border-[#eaedf2] bg-[#fcfdff] p-[1rem] shadow-[inset_0_1px_0_rgba(255,255,255,0.84)] sm:p-[1.04rem]"
          >
            {activeTab === "onboard" ? (
              <div className="space-y-[1.08rem]">
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
    <section className="mt-[1.95rem] sm:mt-[2.35rem]">
      <div className="mb-7 flex flex-col items-center gap-2.5 text-center">
        <h2 className="text-[2rem] font-semibold tracking-[-0.03em] text-[#1f232a] sm:text-[2.4rem]">
          Best <span className="text-[#ec8a44]">Cases</span>
        </h2>
        <p className="text-base text-[#747a83] sm:text-lg">Real research results powered by SciClaw</p>
      </div>

      <div className="overflow-hidden rounded-[2rem] bg-[linear-gradient(180deg,#f7efe5_0%,#fbf7f1_12%,#ffffff_36%)] shadow-[0_26px_80px_rgba(15,23,42,0.08)]">
        <div className="grid lg:grid-cols-[1.06fr_0.94fr]">
          <div className="relative min-h-[276px] bg-[radial-gradient(circle_at_20%_20%,rgba(244,162,95,0.14),transparent_28%),linear-gradient(180deg,#12161d_0%,#0d1016_100%)] p-5 sm:p-6">
            <div className="absolute inset-x-7 top-7 flex items-center justify-between text-[11px] uppercase tracking-[0.22em] text-[#6a7180]">
              <span>{activeFrame.eyebrow}</span>
              <span>Preview</span>
            </div>
            <div className="mx-auto mt-11 max-w-[498px] rounded-[1.72rem] border border-white/10 bg-[#161a22]/92 p-4 shadow-[0_24px_70px_rgba(0,0,0,0.28)] sm:p-5">
              <div className="flex items-center justify-between border-b border-white/8 pb-3">
                <div>
                  <p className="text-sm font-semibold text-white">{activeFrame.summaryTitle}</p>
                  <p className="mt-1 text-xs text-[#8e95a2]">Stakeholder-ready synthesis</p>
                </div>
                <span className="rounded-full border border-[#f0a467]/25 bg-[#f0a467]/12 px-3 py-1 text-[11px] text-[#f4b17b]">
                  {activeFrame.tag}
                </span>
              </div>
              <div className="mt-4 grid gap-3 md:grid-cols-[1.1fr_0.9fr]">
                <div className="space-y-[0.92rem]">
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
                  <div className="space-y-[0.92rem]">
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

          <div className="relative overflow-hidden bg-[#fbf8f2] px-7 py-7 sm:px-8 sm:py-8">
            <div
              className="absolute inset-0 opacity-45"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, rgba(224, 194, 164, 0.75) 1px, transparent 0)",
                backgroundSize: "18px 18px",
              }}
              aria-hidden
            />
            <div className="relative z-10 flex h-full flex-col justify-between gap-8">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#ec8a44]" aria-label={`Slide ${String(activeIndex + 1).padStart(2, "0")} of ${String(bestCases.length).padStart(2, "0")}`}>
                  {String(activeIndex + 1).padStart(2, "0")} / {String(bestCases.length).padStart(2, "0")}
                </p>
                <h3 className="mt-4 text-[2rem] font-semibold tracking-[-0.03em] text-[#1f232a] sm:text-[2.1rem]">{activeCase.title}</h3>
                <p className="mt-4 max-w-[390px] text-[0.98rem] leading-7 text-[#6c727b] sm:text-[1.02rem]">{activeCase.description}</p>
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
      <div className="mx-auto grid max-w-[1240px] items-center gap-3 px-6 py-10 text-center text-sm text-[#8a9098] sm:px-8 lg:px-10">
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
        <div className="space-y-8 text-center sm:space-y-9">
          <div className="space-y-4 sm:space-y-[1.125rem]">
            <h1 className="text-5xl font-semibold tracking-[-0.055em] text-[#1f232a] sm:text-6xl lg:text-[5.2rem]">
              Sci<span className="text-[#eb8a3c]">Claw</span>
            </h1>
            <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#8c919a] sm:text-xs">
              AI co-worker for scientific research.
            </p>
            <p className="mx-auto max-w-[920px] text-base leading-8 tracking-[0.005em] text-[#60656f] sm:text-[1.22rem] sm:leading-9 lg:max-w-[980px]">
              SciClaw connects inspiration generation, experimental execution, and iterative optimization, ushering in a new paradigm of scientific discovery
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_322px] lg:items-start lg:gap-[4.12rem] xl:grid-cols-[minmax(0,0.99fr)_322px] xl:gap-[4.48rem]" data-testid="landing-hero">
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
