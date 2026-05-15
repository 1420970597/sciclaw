"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { DockMenuBar } from "@/components/dock-menu-bar";
import {
  bestCases,
  featureItems,
  type AuthTab,
} from "@/app/landing-data";

type AuthMode = AuthTab | "apply";

function GuideIcon({ className = "h-[1.06rem] w-[1.06rem]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden>
      <path d="M5.5 6.5A2.5 2.5 0 0 1 8 4h9v14H8a2.5 2.5 0 0 0-2.5 2.5V6.5Z" />
      <path d="M17 18H8a2.5 2.5 0 0 0 0 5h9" />
      <path d="M9.5 8.5h4.5" />
    </svg>
  );
}

function ContactIcon({ className = "h-[1.06rem] w-[1.06rem]" }: { className?: string }) {
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

function SettingsIcon({ className = "h-[1.06rem] w-[1.06rem]" }: { className?: string }) {
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
    <header className="pt-[0.46rem] sm:pt-[0.62rem]">
      <div className="mx-auto flex w-full max-w-[1180px] items-center justify-between px-5 sm:px-7 lg:px-[1.95rem] xl:px-[2.18rem]">
        <div data-testid="landing-header-wordmark" className="pr-4 text-[0.98rem] font-semibold tracking-[-0.04em] text-[#1b2027] sm:text-[1.04rem]">
          Sci<span className="text-[#eb8a3c]">Claw</span>
        </div>
        <div data-testid="landing-utility-row" className="flex items-center gap-[0.56rem] pr-[1.38rem] sm:gap-[0.72rem] sm:pr-[1.42rem]">
          <DockMenuBar
            groups={settingsGroups.map((group) => ({ ...group, items: [...group.items] }))}
            className="gap-[0.3rem] sm:gap-[0.38rem]"
            buttonClassName="border-[rgba(15,23,42,0.26)] bg-white/82 text-[#2f3a46] shadow-[0_12px_26px_rgba(15,23,42,0.08)] hover:-translate-y-0.5 hover:border-[rgba(15,23,42,0.34)] hover:bg-white hover:text-[#18222c]"
            panelClassName="border-black/8 bg-white text-[#313943] shadow-[0_20px_40px_rgba(15,23,42,0.12)]"
            itemClassName="hover:bg-[#f5f7fa]"
          />
        </div>
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
      icon: <span className="inline-block h-[0.68rem] w-[0.68rem] rounded-full bg-current/90 shadow-[0_0_0_1px_rgba(255,255,255,0.14)]" aria-hidden />,
      position: "left-[46.6%] top-[14.05%] sm:left-[46.6%] sm:top-[14.05%]",
      lineClass: "left-[45.9%] top-[28.7%] h-[2.02px] w-[12.4%] origin-left -rotate-[9deg]",
      ringClass: "h-[4.58rem] w-[4.58rem] border-[#4f697a] bg-[linear-gradient(180deg,#ffffff_0%,#f9fbfd_100%)] text-[#234356] shadow-[0_11px_20px_rgba(15,23,42,0.082)]",
      activeRingClass: "h-[4.74rem] w-[4.74rem] border-[#cf884f] bg-[linear-gradient(180deg,#fffdf9_0%,#ffe7d3_100%)] text-[#a45a2c] shadow-[0_0_0_2px_rgba(240,142,79,0.03),0_11px_20px_rgba(232,124,55,0.075)]",
      wrapperClass: "items-center",
      labelClass: "max-w-[108px] text-left text-[#3d5869] drop-shadow-[0_1px_0_rgba(255,255,255,0.96)]",
      activeLabelClass: "max-w-[108px] text-left text-[#5f381d] drop-shadow-[0_2px_3px_rgba(240,142,79,0.012)]",
      labelPositionClass: "absolute left-[-2.16rem] top-[0.02rem] sm:left-[-2.22rem]",
    },
    {
      id: "data-mining",
      label: "Data Mining",
      icon: (
        <span className="relative inline-block h-[0.72rem] w-[0.72rem]" aria-hidden>
          <span className="absolute left-0 top-[0.31rem] h-[2px] w-full rounded-full bg-current/90" />
          <span className="absolute left-[0.08rem] top-0 h-full w-[2px] rounded-full bg-current/90" />
          <span className="absolute right-[0.08rem] top-0 h-full w-[2px] rounded-full bg-current/90" />
        </span>
      ),
      position: "left-[49.02%] top-[47.2%] sm:left-[49.02%] sm:top-[47.2%]",
      lineClass: "left-[48.22%] top-[50.14%] h-[2.02px] w-[10.52%] origin-left rotate-[6deg]",
      ringClass: "h-[4.58rem] w-[4.58rem] border-[#4f697a] bg-[linear-gradient(180deg,#ffffff_0%,#f9fbfd_100%)] text-[#234356] shadow-[0_11px_20px_rgba(15,23,42,0.082)]",
      activeRingClass: "h-[4.74rem] w-[4.74rem] border-[#cf884f] bg-[linear-gradient(180deg,#fffdf9_0%,#ffe7d3_100%)] text-[#a45a2c] shadow-[0_0_0_2px_rgba(240,142,79,0.03),0_11px_20px_rgba(232,124,55,0.075)]",
      wrapperClass: "items-center",
      labelClass: "max-w-[114px] text-center text-[#3d5869] drop-shadow-[0_1px_0_rgba(255,255,255,0.96)]",
      activeLabelClass: "max-w-[114px] text-center text-[#5f381d] drop-shadow-[0_2px_3px_rgba(240,142,79,0.012)]",
      labelPositionClass: "absolute left-1/2 top-[calc(100%+0.02rem)] -translate-x-1/2",
    },
    {
      id: "outcome-present",
      label: "Outcome Present",
      icon: (
        <span className="relative inline-block h-[0.76rem] w-[0.76rem]" aria-hidden>
          <span className="absolute inset-0 rounded-full border-[1.6px] border-current/90" />
          <span className="absolute inset-[0.2rem] rounded-full bg-current/90" />
        </span>
      ),
      position: "right-[17.9%] top-[13.55%] sm:right-[17.9%] sm:top-[13.55%]",
      lineClass: "left-[48.46%] top-[27.92%] h-[2.02px] w-[10.74%] origin-left rotate-[11deg]",
      ringClass: "h-[4.58rem] w-[4.58rem] border-[#4f697a] bg-[linear-gradient(180deg,#ffffff_0%,#f9fbfd_100%)] text-[#234356] shadow-[0_11px_20px_rgba(15,23,42,0.082)]",
      activeRingClass: "h-[4.74rem] w-[4.74rem] border-[#cf884f] bg-[linear-gradient(180deg,#fffdf9_0%,#ffe7d3_100%)] text-[#a45a2c] shadow-[0_0_0_2px_rgba(240,142,79,0.03),0_11px_20px_rgba(232,124,55,0.075)]",
      wrapperClass: "items-center",
      labelClass: "max-w-[122px] whitespace-nowrap text-left text-[#3d5869] drop-shadow-[0_1px_0_rgba(255,255,255,0.96)]",
      activeLabelClass: "max-w-[122px] whitespace-nowrap text-left text-[#5f381d] drop-shadow-[0_2px_3px_rgba(240,142,79,0.012)]",
      labelPositionClass: "absolute left-[2.66rem] top-[-0.02rem] sm:left-[2.72rem]",
    },
    ],
    [],
  );
  const activeFeature = featureItems[activeIndex] ?? featureItems[0];
  const centerNode =
    activeFeature.id === "autonomous-execution"
      ? {
          icon: (
            <span className="relative inline-block h-[0.98rem] w-[0.98rem]" aria-hidden>
              <span className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 rounded-full bg-current/90" />
              <span className="absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 rounded-full bg-current/90" />
            </span>
          ),
          label: "Autonomous Execution",
        }
      : activeFeature.id === "data-mining"
        ? {
            icon: (
              <span className="relative inline-block h-[0.92rem] w-[0.92rem]" aria-hidden>
                <span className="absolute bottom-0 left-0 h-[45%] w-[2px] rounded-full bg-current/90" />
                <span className="absolute bottom-0 left-[0.34rem] h-[70%] w-[2px] rounded-full bg-current/90" />
                <span className="absolute bottom-0 right-0 h-full w-[2px] rounded-full bg-current/90" />
              </span>
            ),
            label: "Data Mining",
          }
        : activeFeature.id === "outcome-present"
          ? {
              icon: (
                <span className="relative inline-block h-[0.92rem] w-[0.92rem]" aria-hidden>
                  <span className="absolute inset-0 rounded-full border-[1.7px] border-current/90" />
                  <span className="absolute inset-[0.18rem] rounded-full border-[1.6px] border-current/60" />
                </span>
              ),
              label: "Outcome Present",
            }
          : {
              icon: <span className="inline-block h-[0.82rem] w-[0.82rem] rounded-full bg-current/90 shadow-[0_0_0_1px_rgba(255,255,255,0.16)]" aria-hidden />,
              label: "Literature Analysis",
            };

  return (
    <div
      data-testid="feature-network-shell"
      className="relative min-h-[352px] overflow-visible rounded-[2rem] bg-[radial-gradient(circle_at_50%_49.3%,_rgba(255,255,255,0.87),_rgba(255,255,255,0)_60.5%)] sm:min-h-[404px]"
    >
      <div className="absolute inset-0 opacity-[0.998]">
        <div className="pointer-events-none absolute inset-y-[18%] left-[61.8%] hidden w-[11.2%] rounded-full bg-[radial-gradient(circle,_rgba(235,143,77,0.09)_0%,_rgba(235,143,77,0.028)_48%,_rgba(255,255,255,0)_78%)] blur-[18px] lg:block" />
        <div className="absolute left-[25.3%] top-[13.4%] h-[1.5px] w-[1.5px] rounded-full bg-[#a9b7c5]" />
        <div className="absolute left-[29.8%] top-[45.5%] h-[1.5px] w-[1.5px] rounded-full bg-[#aebdcb]" />
        <div className="absolute left-[57.2%] top-[23.8%] h-[1.5px] w-[1.5px] rounded-full bg-[#b5c2cf]" />
        <div className="absolute left-[58.8%] top-[43.2%] h-[1.5px] w-[1.5px] rounded-full bg-[#b8c4d0]" />
        <div className="absolute left-[49.25%] top-[21.2%] h-[126px] w-[1px] bg-gradient-to-b from-[#df8d53] via-[#d87534] to-transparent opacity-[0.78]" />
        <div className="absolute left-[50.02%] top-[21.2%] h-[126px] w-[0.96px] bg-gradient-to-b from-[#fff2e6] via-[#fff6ef]/18 to-transparent opacity-[0.24]" />
        <div className="absolute left-[49.65%] top-[20.55%] h-[0.88rem] w-[0.88rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(244,177,132,0.0032)_0%,_rgba(244,177,132,0.0011)_34%,_rgba(255,255,255,0)_68%)]" />
        <div className="absolute left-[49.65%] top-[20.55%] h-[1.08rem] w-[1.08rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(255,242,231,0.034)_0%,_rgba(255,242,231,0)_75%)]" />
        <div className="absolute left-[49.65%] top-[20.55%] h-[3.7px] w-[3.7px] -translate-x-1/2 rounded-full border border-[#de8b4e] bg-[#d7671e] shadow-[0_0_0_1.2px_rgba(242,154,98,0.012),0_3px_5px_rgba(232,124,55,0.022)]" />
        <div className="absolute left-[49.65%] top-[46.8%] h-[35px] w-[35px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(244,177,132,0.0011)_0%,_rgba(244,177,132,0.0004)_30%,_rgba(255,255,255,0)_68%)]" />
        <div className="absolute left-[49.65%] top-[46.8%] h-[39px] w-[39px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#ddb088]/8 shadow-[0_0_1px_rgba(239,146,86,0.0013)]" />
        <div className="absolute left-[49.65%] top-[46.8%] h-[27px] w-[27px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#efd8c8]/44 shadow-[0_0_1px_rgba(239,146,86,0.0008)]" />
        {nodes.map((node) => {
          const nextIndex = featureItems.findIndex((feature) => feature.id === node.id);
          const isActive = nextIndex === activeIndex;

          return (
            <div key={node.id}>
              <span className={`absolute ${node.lineClass} bg-gradient-to-r from-[#7691a4] via-[#d9e3eb] to-transparent opacity-[0.86]`} aria-hidden />
              <div className={`absolute ${node.position} relative inline-flex ${node.wrapperClass ?? "items-center"} flex-col gap-[1.02rem] text-center`}>
                <button
                  type="button"
                  data-testid={`feature-node-${node.id}`}
                  onClick={() => {
                    if (nextIndex >= 0) {
                      onSelect(nextIndex);
                    }
                  }}
                  className="flex items-center justify-center rounded-full transition hover:scale-[1.02]"
                >
                  <span className={`flex items-center justify-center rounded-full border text-[0.96rem] font-semibold ${isActive ? node.activeRingClass : node.ringClass}`}>
                    {node.icon}
                  </span>
                </button>
                <span
                  className={`${node.labelPositionClass ?? ""} text-[10.8px] font-medium leading-[2.06] tracking-[0.03em] sm:text-[0.8rem] ${isActive ? node.activeLabelClass : node.labelClass}`.trim()}
                >
                  {node.label}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="absolute left-1/2 top-1/2 flex -translate-x-[39.2%] -translate-y-[26.8%] flex-col items-center">
        <span className="mb-[0.82rem] flex h-8.5 w-8.5 items-center justify-center rounded-full bg-[#ef8f4d] text-white shadow-[0_8px_16px_rgba(232,124,55,0.2)]" aria-hidden>
          <span className="h-[0.38rem] w-[0.38rem] rounded-full bg-white/96 shadow-[0_0_0_1px_rgba(255,255,255,0.22)]" />
        </span>
        <button
          type="button"
          data-testid="feature-node-center"
          onClick={() => onSelect(activeIndex)}
          className="group relative flex h-[5.12rem] w-[5.12rem] items-center justify-center rounded-full bg-[linear-gradient(180deg,#ffffff_0%,#fff8f2_100%)] text-[#df7930] shadow-[0_0_0_4px_rgba(249,159,120,0.026),0_0_0_8px_rgba(249,159,120,0.008),0_8px_12px_rgba(232,124,55,0.024)] transition hover:scale-[1.02] sm:h-[5.24rem] sm:w-[5.24rem]"
        >
          <span className="absolute inset-[12px] rounded-full border border-[#efc8aa]/8" />
          <span className="absolute inset-[23px] rounded-full border border-[#efd8c8]/58" />
          <span className="text-[19px] font-semibold sm:text-[21px]">{centerNode.icon}</span>
        </button>
        <div className="mt-[0.86rem] flex items-center justify-center" aria-hidden>
          <span className="h-[1.5px] w-[6.2rem] rounded-full bg-[#f1c9ab]/72 shadow-[0_2px_4px_rgba(240,142,79,0.04)]" />
        </div>
      </div>
    </div>
  );
}

function FeaturePreview({
  activeIndex,
  onGetStarted,
  onApplyNow,
}: {
  activeIndex: number;
  onGetStarted: () => void;
  onApplyNow: () => void;
}) {
  const activeFeature = featureItems[activeIndex];
  const previewMap = {
    "literature-analysis": {
      bodyLabel: "Autonomous Research",
      chartLabels: ["方法论", "结论", "数据", ""],
      heading: "Deep Literature Analysis",
      description:
        "Upload a PDF, and SciClaw automatically extracts the core arguments, research methods, and key data, then independently designs plans to reproduce and extend the published results.",
      ctaLabel: "Get started",
    },
    "data-mining": {
      bodyLabel: "Autonomous Research",
      chartLabels: ["Q1", "Q2", "Q3", "Q4"],
      heading: "Intelligent Data Visualization",
      description:
        "Upload experimental data in batches, and SciClaw automatically performs statistical testing, trend analysis, and chart generation to uncover the scientific patterns behind your data.",
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
      chartLabels: ["33%", "", "", ""],
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
  const visibleChartLabels = previewContent.chartLabels.filter((label) => label.trim().length > 0);
  const visibleBars = bars.slice(0, visibleChartLabels.length);
  const chartGridClass = visibleChartLabels.length <= 3 ? "grid-cols-3" : "grid-cols-4";

  return (
      <div className="flex flex-col gap-[1.08rem]">
      <div className="order-1 space-y-[0.62rem] px-1 pt-[0.08rem] lg:max-w-[35.4rem]">
        <span className="text-sm font-semibold tracking-[0.24em] text-[#ed8a43]">{previewContent.bodyLabel}</span>
        <h3 className="text-3xl font-semibold tracking-[-0.03em] text-[#1f232a] sm:text-[1.88rem] md:text-[2.02rem]">
          {previewContent.heading}
        </h3>
        <p className="max-w-[31.4rem] text-base leading-[1.82] text-[#676d77] sm:text-[0.99rem]">{previewContent.description}</p>
        <button
          type="button"
          onClick={onGetStarted}
          className="inline-flex pt-[0.18rem] font-mono text-sm tracking-[0.12em] text-[#6d737c] transition hover:text-[#1f232a]"
        >
          {previewContent.ctaLabel}
        </button>
      </div>

      <div className="order-2 rounded-[2.08rem] border border-[rgba(205,214,224,0.98)] bg-[linear-gradient(180deg,#fcfaf7_0%,#e6edf5_100%)] p-[1.28rem] shadow-[0_22px_44px_rgba(15,23,42,0.118)] sm:p-[1.42rem]" data-testid="feature-preview-card">
        <div className="flex items-center justify-between">
          <span className="h-1.5 w-[4.3rem] rounded-full bg-[#e3e7ec]" aria-hidden />
          <div className="flex items-center gap-1.5" aria-hidden>
            <span className="h-2.5 w-2.5 rounded-full bg-[#f4c6a4]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#efa873]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#e88c4a]" />
          </div>
        </div>

        <div className="mt-[1.9rem] rounded-[1.72rem] bg-[linear-gradient(180deg,#fff8f1_0%,#fde7d4_100%)] px-[1.2rem] pb-[1.56rem] pt-[1.44rem] sm:px-[1.54rem] sm:pb-[1.72rem] sm:pt-[1.5rem]">
          <div className="flex items-center justify-between gap-3 border-b border-[#f1e7db] pb-[0.92rem]">
            <div aria-hidden className="space-y-[0.46rem]">
              <span className="block h-[1.5px] w-[8.8rem] rounded-full bg-[#dbe1e8]" />
              <span className="block h-[1.5px] w-[5.5rem] rounded-full bg-[#e8edf2]" />
            </div>
            <span
              aria-hidden
              className="flex h-[1.86rem] w-[7.5rem] items-center justify-center rounded-full border border-[#f6dcc6] bg-[#fff8f2] px-3 py-1"
            >
              <span className="block h-[1.5px] w-[4.9rem] rounded-full bg-[#efc8a6]" />
            </span>
          </div>

          <div className="mt-[1.52rem] grid gap-[1.56rem] lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.12fr)]">
            <div className="space-y-[1.4rem]">
              <div className="rounded-[1.3rem] border border-[#e7ddd2] bg-white/97 p-[1.28rem] shadow-[0_7px_16px_rgba(15,23,42,0.026)]">
                <div className="flex items-center gap-2 text-[10.5px] font-semibold uppercase tracking-[0.18em] text-[#b99577]">
                  <span className="h-2 w-2 rounded-full bg-[#ef9c63]" />
                </div>
                <div className="mt-[1.32rem] space-y-[1.3rem]" aria-hidden>
                  <span className="block h-2 rounded-full bg-[#eceff3]" />
                  <span className="block h-2 w-11/12 rounded-full bg-[#eceff3]" />
                  <span className="block h-2 w-10/12 rounded-full bg-[#eceff3]" />
                  <span className="block h-2 w-7/12 rounded-full bg-[#f4d3bb]" />
                </div>
              </div>
              <div className="grid gap-[1.24rem] sm:grid-cols-2" aria-hidden>
                {previewContent.chartLabels.slice(0, 2).map((label) => (
                  <div
                    key={`${activeFeature.id}-${label}`}
                    className="rounded-[1.2rem] border border-[#ebe0d5] bg-white/94 px-4 py-[1.08rem] shadow-[0_7px_14px_rgba(15,23,42,0.022)]"
                  >
                    <div className="space-y-[0.96rem]">
                      <span className="block h-[1.5px] w-[4.8rem] rounded-full bg-[#eadccf]" />
                      <span className="block h-[1.5px] w-full rounded-full bg-[#eceff3]" />
                      <span className="block h-[1.5px] w-10/12 rounded-full bg-[#eceff3]" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.44rem] border border-[#d7c9bb] bg-white/98 p-[1.34rem] shadow-[0_14px_28px_rgba(15,23,42,0.06),inset_0_1px_0_rgba(255,255,255,0.86)]">
              <div className="space-y-[1.54rem]">
                <div className="flex items-center justify-between text-[10.7px] uppercase tracking-[0.205em] text-[#687587]" aria-hidden>
                  <span className="h-[1.5px] w-[3.2rem] rounded-full bg-[#d7dfe7]" />
                  <span className="h-[1.5px] w-[2.7rem] rounded-full bg-[#e3e8ee]" />
                </div>
                <div className="space-y-[1.24rem]" aria-hidden>
                  <div className="h-2 rounded-full bg-[#eceff4]" />
                  <div className="h-2 w-5/6 rounded-full bg-[#eceff4]" />
                  <div className="h-2 w-4/6 rounded-full bg-[#f6d9c2]" />
                </div>
                <div
                  data-testid="feature-preview-chart-label-row"
                  className={`mt-[1.46rem] grid ${chartGridClass} gap-[2.18rem] px-[1.08rem] pt-[1.12rem] sm:gap-[2.34rem]`}
                >
                  {visibleBars.map((height, index) => (
                    <div key={`${activeFeature.id}-${index}`} className="flex min-w-[0] flex-1 flex-col items-center gap-[0.68rem] text-center sm:gap-[0.76rem]">
                      <div className="flex h-[152px] w-full items-end gap-[0.86rem] rounded-[1.3rem] bg-[linear-gradient(180deg,#f7fafc_0%,#f1f5f8_100%)] px-[1.42rem] pb-[1.04rem] pt-[1.04rem]">
                        <span
                          className="flex-1 rounded-full bg-[linear-gradient(180deg,#f7c69c_0%,#eb8854_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.35)]"
                          style={{ height }}
                        />
                      </div>
                      <span className="flex min-h-[2.92rem] w-full min-w-0 items-start justify-center px-[0.44rem] pb-[0.04rem] text-center text-[11.1px] font-medium uppercase leading-[1.06] tracking-[0.018em] text-[#6b8191] sm:min-h-[3.04rem] sm:text-[11.2px] sm:tracking-[0.022em]">
                        <span className="block max-w-[5.5rem] text-balance break-words">{visibleChartLabels[index] ?? `Q${index + 1}`}</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div data-testid="feature-auth-wrapper" className="order-3 mx-auto -mt-[0.82rem] w-full max-w-[332px] sm:max-w-[344px] lg:-mt-[5.58rem] lg:max-w-[588px] xl:-mt-[5.88rem] xl:max-w-[604px]">
        <AuthCard onApplyNow={onApplyNow} />
      </div>
    </div>
  );
}

function FeatureRotator({
  activeIndex,
  onSelect,
  onGetStarted,
  onApplyNow,
}: {
  activeIndex: number;
  onSelect: (index: number) => void;
  onGetStarted: () => void;
  onApplyNow: () => void;
}) {
  return (
    <section
      id="feature-rotator"
      data-testid="feature-rotator"
      className="grid gap-4 lg:grid-cols-[minmax(0,328px)_minmax(0,1fr)] lg:items-start lg:gap-[0.04rem] xl:grid-cols-[minmax(0,342px)_minmax(0,1fr)] xl:gap-[0.08rem]"
    >
      <div className="overflow-visible rounded-[2.05rem] bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.46),_rgba(255,255,255,0)_66%)] pl-[0.18rem] pr-0 py-1 sm:px-1 lg:-mt-[2.46rem] lg:mr-0 lg:px-0 lg:pl-[0.2rem] xl:-mt-[2.72rem] xl:mr-0 xl:px-1 xl:pl-[0.24rem]">
        <FeatureNetwork activeIndex={activeIndex} onSelect={onSelect} />
      </div>
      <FeaturePreview activeIndex={activeIndex} onGetStarted={onGetStarted} onApplyNow={onApplyNow} />
    </section>
  );
}

function AuthCard({
  onApplyNow,
}: {
  onApplyNow: () => void;
}) {
  const [activeMode, setActiveMode] = useState<AuthMode>("onboard");
  const [returnMode, setReturnMode] = useState<AuthTab>("onboard");

  return (
    <div
      id="auth-card"
      data-testid="landing-auth-card"
      className="mx-auto w-full max-w-[268px] rounded-[0.98rem] border border-[rgba(236,242,247,0.98)] bg-[linear-gradient(180deg,rgba(255,255,255,0.997)_0%,rgba(251,246,240,0.885)_100%)] px-[0.32rem] py-[0.36rem] shadow-[0_4px_10px_rgba(15,23,42,0.018),0_2px_5px_rgba(241,180,135,0.007)] backdrop-blur-[0.44px] sm:px-[0.36rem] sm:py-[0.4rem] lg:max-w-[588px] xl:max-w-[604px]"
    >
      <div className="mx-auto w-full max-w-[300px] lg:max-w-[588px] xl:max-w-[604px]">
        <div className="rounded-[0.94rem] border border-[rgba(252,252,253,0.9)] bg-[linear-gradient(180deg,rgba(255,255,255,0.95)_0%,rgba(250,245,238,0.74)_100%)] p-[0.3rem] shadow-[0_4px_10px_rgba(15,23,42,0.01)]">
          <div role="tablist" className="grid grid-cols-2 rounded-[0.68rem] bg-[rgba(247,241,234,0.76)] p-[0.22rem] text-sm text-[#6b7480]">
            {[
              { key: "onboard", label: "Onboard", panelId: "auth-panel-onboard" },
              { key: "login", label: "Login", panelId: "auth-panel-login" },
            ].map((tab) => {
              const selected = activeMode === "apply" ? returnMode === tab.key : activeMode === tab.key;

              return (
                <button
                  key={tab.key}
                  type="button"
                  role="tab"
                  id={`auth-tab-${tab.key}`}
                  aria-selected={selected}
                  aria-controls={tab.panelId}
                  onClick={() => {
                    setActiveMode(tab.key as AuthTab);
                    setReturnMode(tab.key as AuthTab);
                  }}
                  className={`rounded-[0.72rem] px-3.5 py-[0.34rem] font-medium transition ${
                    selected
                      ? "bg-[linear-gradient(180deg,#ead0ba_0%,#e2bfa4_100%)] text-[#65412b] shadow-[0_4px_10px_rgba(241,176,126,0.085)]"
                      : "text-[#6e7682] hover:text-[#222933]"
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
            role={activeMode === "apply" ? undefined : "tabpanel"}
            id={activeMode === "onboard" ? "auth-panel-onboard" : activeMode === "login" ? "auth-panel-login" : "auth-panel-apply"}
            aria-labelledby={activeMode === "onboard" ? "auth-tab-onboard" : activeMode === "login" ? "auth-tab-login" : undefined}
            className="rounded-[1.06rem] border border-[rgba(244,247,250,0.93)] bg-[linear-gradient(180deg,rgba(255,255,255,0.978)_0%,rgba(251,247,241,0.89)_100%)] p-[0.64rem] shadow-[inset_0_1px_0_rgba(255,255,255,0.88),0_5px_12px_rgba(15,23,42,0.012)] sm:p-[0.68rem]"
          >
            {activeMode === "onboard" ? (
              <div className="space-y-[0.96rem]">
                <p className="text-center text-sm text-[#68707c]">Enter your access code to begin</p>
                <div className="block text-sm text-[#4f5661]">
                  <input
                    id="invite-code"
                    placeholder="SC-XXXXXXXX"
                    className="w-full rounded-[1.12rem] border border-[rgba(225,211,198,0.92)] bg-[linear-gradient(180deg,#ffffff_0%,#fbf7f2_100%)] px-3.5 py-[0.72rem] text-center text-sm font-medium uppercase tracking-[0.26em] text-[#5f6773] outline-none shadow-[inset_0_1px_0_rgba(255,255,255,0.92),0_3px_8px_rgba(15,23,42,0.01)] transition placeholder:text-[#b2bac5] focus:border-[#e3a675]"
                  />
                </div>
                <button
                  type="button"
                  disabled
                  className="w-full whitespace-nowrap rounded-[1.12rem] border border-[rgba(233,212,194,0.98)] bg-[linear-gradient(180deg,#f6ebe0_0%,#efe0d2_100%)] px-3 py-[0.72rem] text-[0.74rem] font-semibold uppercase tracking-[0.06em] text-[#6b5d52] shadow-[inset_0_1px_0_rgba(255,255,255,0.78),0_6px_14px_rgba(15,23,42,0.014)] transition disabled:cursor-not-allowed disabled:border-[rgba(233,212,194,0.98)] disabled:bg-[linear-gradient(180deg,#f6ebe0_0%,#efe0d2_100%)] disabled:text-[#6b5d52] disabled:opacity-100"
                >
                  VERIFY ACCESS CODE
                </button>
              </div>
            ) : activeMode === "login" ? (
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
                      className="w-full rounded-[1.08rem] border border-[#eceff3] bg-white px-3.5 py-[0.72rem] text-sm text-[#20242b] outline-none transition placeholder:text-[#b0b6bf] focus:border-[#ebb284]"
                    />
                  </label>
                  <button
                    type="button"
                    disabled
                    className="self-end rounded-[1.08rem] border border-[#edf0f4] bg-[#f4f6f9] px-3.5 py-[0.72rem] text-[0.94rem] font-medium uppercase tracking-[0.12em] text-[#b4bac3]"
                  >
                    Send code
                  </button>
                </div>
                <button
                  type="submit"
                  disabled
                  className="w-full rounded-[1.12rem] bg-[#f2a467] px-4 py-[0.74rem] text-sm font-semibold uppercase tracking-[0.14em] text-white shadow-[0_14px_28px_rgba(242,164,103,0.26)] transition disabled:cursor-not-allowed disabled:bg-[#f2a467] disabled:text-white"
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
                  className="w-full rounded-[1.12rem] border border-[#eceff3] bg-white px-4 py-[0.74rem] text-sm font-medium uppercase tracking-[0.12em] text-[#31363d] shadow-[0_10px_20px_rgba(15,23,42,0.035)] transition hover:border-[#dce1e8]"
                >
                  Continue with Google
                </button>
              </form>
            ) : (
              <div className="space-y-[1.08rem]">
                <p className="text-center text-sm text-[#7a8088]">
                  Leave your email and intended use case. We will review it for early access.
                </p>
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
                    SEND CODE
                  </button>
                </div>
                <label className="block space-y-2 text-sm text-[#5f646d]">
                  <span className="sr-only">Tell us what you research and how SciClaw would help.</span>
                  <textarea
                    aria-label="Tell us what you research and how SciClaw would help."
                    placeholder="Tell us what you research and how SciClaw would help."
                    className="min-h-[7.75rem] w-full rounded-[1.2rem] border border-[#eceff3] bg-white px-4 py-3 text-sm leading-6 text-[#20242b] outline-none transition placeholder:text-[#b0b6bf] focus:border-[#ebb284]"
                  />
                </label>
                <button
                  type="button"
                  disabled
                  className="w-full rounded-[1.2rem] bg-[#f2a467] px-4 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white shadow-[0_16px_32px_rgba(242,164,103,0.3)] transition disabled:cursor-not-allowed disabled:bg-[#f2a467] disabled:text-white"
                >
                  ENTER YOUR EMAIL FIRST
                </button>
                <button
                  type="button"
                  onClick={() => setActiveMode(returnMode)}
                  className="inline-flex w-full items-center justify-center rounded-[1.2rem] border border-[#eceff3] bg-white px-4 py-3 text-sm font-medium lowercase text-[#626973] shadow-[0_12px_24px_rgba(15,23,42,0.04)] transition hover:border-[#dce1e8]"
                >
                  back
                </button>
              </div>
            )}
          </div>

          {activeMode !== "apply" ? (
            <button
              type="button"
              onClick={() => {
                setActiveMode("apply");
                setReturnMode(activeMode === "login" ? "login" : "onboard");
                onApplyNow();
              }}
              className="inline-flex w-full items-center justify-center rounded-[1.2rem] border border-[rgba(242,216,195,0.98)] bg-[linear-gradient(180deg,#fdf5ee_0%,#f9eadc_100%)] px-4 py-3 text-sm font-medium text-[#87522e] shadow-[0_10px_22px_rgba(241,180,135,0.06)] transition hover:border-[#efcaa9] hover:bg-[linear-gradient(180deg,#fdf0e4_0%,#f8e6d5_100%)]"
            >
              No account yet? Apply Now →
            </button>
          ) : null}

          {activeMode === "login" ? (
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
    </div>
  );
}

function BestCases({
  activeIndex,
  onSelect,
}: {
  activeIndex: number;
  onSelect: (index: number) => void;
}) {
  const carouselFrames = [
    {
      summaryTitle: bestCases[0]?.title ?? "Automated Report Generation",
      summaryText: bestCases[0]?.description ??
        "Automatically integrates historical tasks, literature, and experimental data into clear, presentation-ready materials, significantly improving the efficiency of research reporting.",
      bars: [48, 70, 98],
    },
    {
      summaryTitle: bestCases[1]?.title ?? "Peer Review Response Support",
      summaryText: bestCases[1]?.description ??
        "Automatically retrieves relevant data, manuscript content, and past task records in response to reviewer comments, helping researchers quickly draft evidence-based replies.",
      bars: [64, 96, 118],
    },
    {
      summaryTitle: bestCases[2]?.title ?? "Accelerated Paper Reproduction",
      summaryText: bestCases[2]?.description ??
        "Provides end-to-end support for environment setup, workflow construction, and error handling in paper reproduction, enabling faster validation of methods and results.",
      bars: [72, 106, 82],
    },
    {
      summaryTitle: bestCases[3]?.title ?? "Deep Literature Analysis",
      summaryText: bestCases[3]?.description ??
        "Upload a PDF, and SciClaw automatically extracts the core arguments, research methods, and key data, then independently designs plans to reproduce and extend the published results.",
      bars: [58, 78, 108],
    },
  ] as const;
  const activeFrame = carouselFrames[activeIndex] ?? carouselFrames[0];

  const nextSlide = () => {
    onSelect((activeIndex + 1) % bestCases.length);
  };

  const previousSlide = () => {
    onSelect((activeIndex - 1 + bestCases.length) % bestCases.length);
  };

  return (
    <section className="mt-[1.48rem] sm:mt-[1.9rem]">
      <div className="mb-7 flex flex-col items-center gap-2.5 text-center">
        <h2 className="text-[2rem] font-semibold tracking-[-0.03em] text-[#1f232a] sm:text-[2.4rem]">
          Best <span className="text-[#ec8a44]">Cases</span>
        </h2>
        <p className="text-base text-[#747a83] sm:text-lg">Real research results powered by SciClaw</p>
      </div>

      <div className="overflow-hidden rounded-[2rem] bg-[linear-gradient(180deg,#f7efe5_0%,#fbf7f1_12%,#ffffff_36%)] shadow-[0_26px_80px_rgba(15,23,42,0.08)]">
        <div className="grid lg:grid-cols-[1.06fr_0.94fr]">
          <div className="relative min-h-[276px] bg-[radial-gradient(circle_at_20%_20%,rgba(244,162,95,0.14),transparent_28%),linear-gradient(180deg,#12161d_0%,#0d1016_100%)] p-5 sm:p-6">
            <div className="absolute inset-x-7 top-7 flex items-center justify-between text-[11px] uppercase tracking-[0.22em] text-[#6a7180]" aria-hidden>
              <span className="h-[1.5px] w-16 rounded-full bg-[#4e5562]" />
              <span className="h-[1.5px] w-11 rounded-full bg-[#343945]" />
            </div>
            <div className="mx-auto mt-11 max-w-[498px] rounded-[1.72rem] border border-white/10 bg-[#161a22]/92 p-4 shadow-[0_24px_70px_rgba(0,0,0,0.28)] sm:p-5">
              <div className="flex items-center justify-between border-b border-white/8 pb-3">
                <div aria-hidden className="space-y-[0.52rem]">
                  <span className="block h-[1.5px] w-24 rounded-full bg-[#8e95a2]/55" />
                  <span className="block h-[1.5px] w-16 rounded-full bg-[#6d7481]/55" />
                </div>
                <span
                  className="rounded-full border border-[#f0a467]/16 bg-[#f0a467]/8 px-3 py-1"
                  aria-hidden
                >
                  <span className="block h-[1.5px] w-12 rounded-full bg-[#f3b07e]/65" />
                </span>
              </div>
              <div className="mt-4 grid gap-3 md:grid-cols-[1.1fr_0.9fr]">
                <div className="space-y-[0.92rem]">
                  <div className="rounded-[1.25rem] border border-white/6 bg-white/4 p-4" aria-hidden>
                    <span className="block h-[1.5px] w-12 rounded-full bg-[#778090]/75" />
                    <div className="mt-3 space-y-2">
                      <span className="block h-[1.5px] w-full rounded-full bg-[#c7ccd6]/35" />
                      <span className="block h-[1.5px] w-[92%] rounded-full bg-[#c7ccd6]/28" />
                      <span className="block h-[1.5px] w-[78%] rounded-full bg-[#c7ccd6]/24" />
                    </div>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2" aria-hidden>
                    <div className="rounded-[1.1rem] border border-white/6 bg-white/4 p-4">
                      <span className="block h-[1.5px] w-14 rounded-full bg-[#c7ccd6]/65" />
                    </div>
                    <div className="rounded-[1.1rem] border border-white/6 bg-white/4 p-4">
                      <span className="block h-[1.5px] w-16 rounded-full bg-[#c7ccd6]/5" />
                    </div>
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
                <h3 className="mt-4 text-[2rem] font-semibold tracking-[-0.03em] text-[#1f232a] sm:text-[2.1rem]">{activeFrame.summaryTitle}</h3>
                <p className="mt-4 max-w-[390px] text-[0.98rem] leading-7 text-[#6c727b] sm:text-[1.02rem]">{activeFrame.summaryText}</p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={previousSlide}
                  aria-label="Previous"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-black/8 bg-white text-[#42474f] shadow-[0_10px_25px_rgba(15,23,42,0.05)] transition hover:-translate-y-0.5 hover:text-[#1f232a]"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5" aria-hidden>
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                </button>
                <div className="flex items-center gap-2">
                  {bestCases.map((item, index) => {
                    const isActive = index === activeIndex;
                    return (
                      <button
                        key={item.title}
                        type="button"
                        onClick={() => onSelect(index)}
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
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5" aria-hidden>
                    <path d="m9 18 6-6-6-6" />
                  </svg>
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
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);

  const handleGetStarted = () => {
    const dataMiningIndex = featureItems.findIndex((feature) => feature.id === "data-mining");
    setActiveFeatureIndex(dataMiningIndex >= 0 ? dataMiningIndex : 0);
    setActiveCaseIndex(0);
  };

  const handleApplyNow = () => {
    const outcomePresentIndex = featureItems.findIndex((feature) => feature.id === "outcome-present");
    setActiveFeatureIndex(outcomePresentIndex >= 0 ? outcomePresentIndex : 0);
    setActiveCaseIndex(0);
  };

  return (
    <main
      id="top"
      className="min-h-screen bg-[linear-gradient(180deg,#f4f5f8_0%,#f1f3f7_100%)] text-[#1f232a]"
    >
      <Header />

      <section className="mx-auto max-w-[1240px] px-6 pb-16 pt-4 sm:px-8 sm:pt-5 lg:px-10 lg:pt-6">
        <div className="space-y-5 text-center sm:space-y-6">
          <div className="space-y-3 sm:space-y-[0.82rem]">
            <h1 className="text-5xl font-semibold tracking-[-0.055em] text-[#1f232a] sm:text-6xl lg:text-[5.2rem]">
              Sci<span className="text-[#eb8a3c]">Claw</span>
            </h1>
            <p className="text-[11.5px] font-semibold tracking-[0.28em] text-[#767d87] sm:text-[12.5px]">
              AI co-worker for scientific research.
            </p>
            <p className="mx-auto max-w-[860px] text-base leading-[1.95] tracking-[0.003em] text-[#5c626c] sm:text-[1.18rem] sm:leading-[2.1] lg:max-w-[920px]">
              SciClaw connects inspiration generation, experimental execution, and iterative optimization, ushering in a new paradigm of scientific discovery
            </p>
          </div>

          <div className="grid gap-3 sm:gap-[0.82rem] lg:-mt-[1.78rem]" data-testid="landing-hero">
            <FeatureRotator
              activeIndex={activeFeatureIndex}
              onSelect={setActiveFeatureIndex}
              onGetStarted={handleGetStarted}
              onApplyNow={handleApplyNow}
            />
          </div>
        </div>

        <BestCases activeIndex={activeCaseIndex} onSelect={setActiveCaseIndex} />
      </section>

      <Footer />
    </main>
  );
}
