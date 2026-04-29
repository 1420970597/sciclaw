"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  bestCases,
  featureItems,
  navLinks,
  type AuthTab,
} from "@/app/landing-data";

function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/8 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5 sm:px-8 lg:px-10">
        <a href="#top" className="flex items-center gap-3 text-sm font-medium text-slate-100">
          <span className="flex h-9 w-9 items-center justify-center rounded-2xl border border-cyan-300/30 bg-cyan-300/10 text-base font-semibold text-cyan-200">
            S
          </span>
          <span className="text-base font-semibold tracking-[0.08em] text-white">
            SciClaw
          </span>
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function FeatureRotator() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % featureItems.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  const activeFeature = featureItems[activeIndex];

  return (
    <section
      id="feature-rotator"
      className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_20px_80px_rgba(2,6,23,0.45)] backdrop-blur-xl sm:p-8"
    >
      <div className="flex flex-wrap gap-3">
        {featureItems.map((feature, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={feature.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                isActive
                  ? "bg-white text-slate-950 shadow-lg shadow-cyan-500/20"
                  : "border border-white/10 bg-slate-900/70 text-slate-300 hover:border-cyan-300/40 hover:text-white"
              }`}
              aria-pressed={isActive}
            >
              {feature.eyebrow}
            </button>
          );
        })}
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <div className="space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200/80">
            {activeFeature.eyebrow}
          </p>
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {activeFeature.title}
          </h2>
          <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            {activeFeature.description}
          </p>
        </div>

        <div
          className={`relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br ${activeFeature.accent} p-5`}
        >
          <div className="absolute inset-x-6 top-6 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          <div className="rounded-[1.4rem] border border-white/10 bg-slate-950/80 p-5 shadow-inner shadow-slate-950/80">
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.22em] text-slate-400">
              <span>Workspace signal</span>
              <span>{String(activeIndex + 1).padStart(2, "0")}</span>
            </div>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-200">
              {activeFeature.metrics.map((metric) => (
                <li key={metric} className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.75)]" />
                  <span>{metric}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function AuthCard() {
  const [activeTab, setActiveTab] = useState<AuthTab>("onboard");

  return (
    <aside
      id="auth-card"
      className="rounded-[2rem] border border-white/10 bg-slate-950/85 p-6 shadow-[0_24px_80px_rgba(8,15,32,0.65)] backdrop-blur-xl sm:p-7"
    >
      <div className="inline-flex rounded-full border border-white/10 bg-white/5 p-1 text-sm">
        {[
          { key: "onboard", label: "Onboard" },
          { key: "login", label: "Login" },
        ].map((tab) => {
          const selected = activeTab === tab.key;

          return (
            <button
              key={tab.key}
              type="button"
              aria-pressed={selected}
              onClick={() => setActiveTab(tab.key as AuthTab)}
              className={`rounded-full px-4 py-2 font-medium transition ${
                selected
                  ? "bg-white text-slate-950"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div className="mt-6 space-y-5">
        <div>
          <h3 className="text-2xl font-semibold text-white">
            {activeTab === "onboard" ? "Get started with your invite" : "Welcome back"}
          </h3>
          <p className="mt-2 text-sm leading-6 text-slate-400">
            {activeTab === "onboard"
              ? "Create a scientific productivity workspace with invite code onboarding and email verification."
              : "Log in with your email verification code or continue with Google."}
          </p>
        </div>

        <form
          className="space-y-4"
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          {activeTab === "onboard" ? (
            <label className="block space-y-2 text-sm text-slate-300">
              <span>Invite code</span>
              <input
                readOnly
                value="GL-0G1IPALU"
                className="w-full rounded-2xl border border-cyan-300/30 bg-cyan-300/10 px-4 py-3 text-sm text-cyan-50 outline-none"
              />
            </label>
          ) : null}

          <label className="block space-y-2 text-sm text-slate-300">
            <span>Email</span>
            <input
              type="email"
              placeholder="researcher@lab.ai"
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/50"
            />
          </label>

          <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
            <label className="block space-y-2 text-sm text-slate-300">
              <span>Verification code</span>
              <input
                placeholder="6-digit code"
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/50"
              />
            </label>
            <button
              type="button"
              className="self-end rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-slate-100 transition hover:border-cyan-300/40 hover:text-white"
            >
              Send code
            </button>
          </div>

          <button
            type="submit"
            className="w-full rounded-2xl bg-gradient-to-r from-cyan-300 via-sky-300 to-violet-300 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:brightness-105"
          >
            {activeTab === "onboard" ? "Start with invite" : "Login to workspace"}
          </button>
        </form>

        <div className="relative py-1 text-center text-xs uppercase tracking-[0.28em] text-slate-500">
          <span className="relative z-10 bg-slate-950 px-3">or</span>
          <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-white/10" />
        </div>

        <button
          type="button"
          className="flex w-full items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white transition hover:border-white/20"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-slate-950">
            G
          </span>
          Continue with Google
        </button>
      </div>
    </aside>
  );
}

function BestCases() {
  return (
    <section className="mt-10 rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">
            Best Cases
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Built for teams navigating scientific complexity.
          </h2>
        </div>
        <p className="max-w-xl text-sm leading-6 text-slate-400 sm:text-right">
          A first landing slice inspired by SciClaw&apos;s public narrative: cross-source research, evidence-backed reasoning, and fast stakeholder communication.
        </p>
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        {bestCases.map((item) => (
          <article
            key={item.title}
            className="rounded-[1.6rem] border border-white/10 bg-slate-950/70 p-5 transition hover:border-cyan-300/30 hover:bg-slate-950"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-right">
                <p className="text-[10px] uppercase tracking-[0.24em] text-slate-500">
                  {item.statLabel}
                </p>
                <p className="mt-1 text-sm font-semibold text-cyan-200">
                  {item.statValue}
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-300">
              {item.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mt-16 border-t border-white/8 bg-slate-950/90">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 text-sm text-slate-400 sm:px-8 lg:grid-cols-[1.4fr_0.6fr] lg:px-10">
        <div>
          <p className="text-base font-semibold text-white">SciClaw</p>
          <p className="mt-3 max-w-2xl leading-6">
            Scientific productivity for literature analysis, data mining, and outcome presentation — reinterpreted here as a polished public landing prototype.
          </p>
        </div>
        <div className="grid gap-2 sm:justify-items-end">
          <Link href="/help/getting-started" className="transition hover:text-white">
            User Guide
          </Link>
          <a href="mailto:hello@sciclaw.ai" className="transition hover:text-white">
            Contact Us
          </a>
          <Link href="/privacy" className="transition hover:text-white">
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
}

export function LandingPage() {
  return (
    <main
      id="top"
      className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_26%),radial-gradient(circle_at_80%_20%,_rgba(129,140,248,0.18),_transparent_24%),linear-gradient(180deg,_#020617_0%,_#07101f_42%,_#020617_100%)] text-slate-50"
    >
      <Header />

      <section className="mx-auto max-w-7xl px-6 pb-14 pt-10 sm:px-8 lg:px-10 lg:pt-16">
        <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
          <div className="space-y-8">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100/90">
              Scientific AI Workspace
            </div>

            <div className="space-y-6">
              <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
                Research, reason, and present outcomes from one evidence-backed workflow.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                SciClaw brings literature review, data mining, and stakeholder-ready outputs into a unified workspace for scientific and legal productivity.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ["Workstreams", "Literature analysis, structured mining, polished briefs"],
                ["Grounding", "Keep every summary tethered to source material"],
                ["Handoff", "Move from investigation to presentation without context loss"],
              ].map(([label, copy]) => (
                <div
                  key={label}
                  className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
                >
                  <p className="text-sm font-semibold text-white">{label}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{copy}</p>
                </div>
              ))}
            </div>
          </div>

          <AuthCard />
        </div>

        <div className="mt-10">
          <FeatureRotator />
        </div>

        <BestCases />
      </section>

      <Footer />
    </main>
  );
}
