"use client";

import { useEffect, useMemo, useState } from "react";
import type { HelpSection } from "@/app/landing-data";

type HelpTocProps = {
  sections: HelpSection[];
};

export function HelpToc({ sections }: HelpTocProps) {
  const sectionIds = useMemo(() => sections.map((section) => section.id), [sections]);
  const initialActiveId = useMemo(() => sections[0]?.id ?? "", [sections]);
  const [activeId, setActiveId] = useState(initialActiveId);

  useEffect(() => {
    const syncFromHash = () => {
      const hashId = window.location.hash.replace(/^#/, "");
      if (hashId && sectionIds.includes(hashId)) {
        setActiveId(hashId);
        return;
      }

      setActiveId(initialActiveId);
    };

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);

    return () => {
      window.removeEventListener("hashchange", syncFromHash);
    };
  }, [initialActiveId, sectionIds]);

  const scrollToSection = (sectionId: string) => {
    const target = document.getElementById(sectionId);
    if (!target) {
      return;
    }

    setActiveId(sectionId);
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `#${sectionId}`);
  };

  return (
    <aside className="lg:sticky lg:top-8 lg:self-start">
      <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#b9b9b9]">
        On this page
      </p>
      <ol className="mt-4 space-y-2 text-sm">
        {sections.map((section, index) => {
          const isActive = section.id === activeId || (!activeId && index === 0);

          return (
            <li key={section.id}>
              <button
                type="button"
                onClick={() => scrollToSection(section.id)}
                className={`relative block pl-4 text-left transition ${
                  isActive ? "text-[#e98532]" : "text-[#949494] hover:text-[#343434]"
                }`}
              >
                {isActive ? (
                  <span className="absolute inset-y-1 left-0 w-0.5 rounded-full bg-[#ed8a3a]" aria-hidden />
                ) : null}
                {section.title}
              </button>
            </li>
          );
        })}
      </ol>
    </aside>
  );
}
