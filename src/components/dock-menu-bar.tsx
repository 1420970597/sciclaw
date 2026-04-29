"use client";

import Link from "next/link";
import type { KeyboardEvent as ReactKeyboardEvent, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

type DockMenuItem = {
  id: string;
  label: string;
  description?: string;
  href?: string;
};

type DockMenuGroup = {
  id: string;
  triggerId?: string;
  triggerLabel: string;
  triggerAriaLabel: string;
  items: DockMenuItem[];
  icon: ReactNode;
};

type DockMenuBarProps = {
  groups: DockMenuGroup[];
  className?: string;
  buttonClassName?: string;
  panelClassName?: string;
  itemClassName?: string;
};

function mergeClasses(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function DockMenuBar({
  groups,
  className,
  buttonClassName,
  panelClassName,
  itemClassName,
}: DockMenuBarProps) {
  const [openGroupId, setOpenGroupId] = useState<string | null>(null);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const triggerRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const itemRefs = useRef<Record<string, Array<HTMLAnchorElement | HTMLButtonElement | null>>>({});

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpenGroupId(null);
      }
    }

    function handleFocusIn(event: FocusEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpenGroupId(null);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        const activeGroupId = openGroupId;
        setOpenGroupId(null);
        if (activeGroupId) {
          triggerRefs.current[activeGroupId]?.focus();
        }
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("focusin", handleFocusIn);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("focusin", handleFocusIn);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [openGroupId]);

  const focusMenuItem = (groupId: string, index: number) => {
    const target = itemRefs.current[groupId]?.[index];
    target?.focus();
  };

  return (
    <div ref={rootRef} className={mergeClasses("flex items-center gap-[0.22rem]", className)}>
      {groups.map((group) => {
        const isOpen = openGroupId === group.id;
        const triggerId = group.triggerId ?? `dock-menu-trigger-${group.id}`;
        const menuId = `${group.id}-menu`;
        const handleTriggerKeyDown = (event: ReactKeyboardEvent<HTMLButtonElement>) => {
          if (event.key === "ArrowDown" || event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            setOpenGroupId(group.id);
            queueMicrotask(() => focusMenuItem(group.id, 0));
          }
        };
        return (
          <div key={group.id} className="relative">
            <button
              type="button"
              id={triggerId}
              aria-label={group.triggerAriaLabel}
              aria-expanded={isOpen}
              aria-haspopup="menu"
              aria-controls={menuId}
              ref={(node) => {
                triggerRefs.current[group.id] = node;
              }}
              onClick={() => setOpenGroupId((current) => (current === group.id ? null : group.id))}
              onKeyDown={handleTriggerKeyDown}
              className={mergeClasses(
                "inline-flex h-[2.36rem] w-[2.36rem] items-center justify-center rounded-full border transition sm:h-[2.44rem] sm:w-[2.44rem]",
                buttonClassName,
                isOpen && "shadow-[0_16px_32px_rgba(15,23,42,0.12)]",
              )}
            >
              {group.icon}
            </button>

            {isOpen ? (
              <div
                id={menuId}
                role="menu"
                tabIndex={-1}
                aria-label={group.triggerLabel}
                aria-labelledby={triggerId}
                className={mergeClasses(
                  "absolute right-0 top-[calc(100%+0.65rem)] min-w-[168px] overflow-hidden rounded-[1.1rem] border bg-white p-2 shadow-[0_18px_42px_rgba(15,23,42,0.12)]",
                  panelClassName,
                )}
              >
                {group.items.map((item, index) => {
                  const sharedProps = {
                    role: "menuitem" as const,
                    className: mergeClasses(
                      "flex w-full items-center justify-between gap-3 rounded-[0.9rem] px-3 py-2.5 text-left transition",
                      itemClassName,
                    ),
                    ref: (node: HTMLAnchorElement | HTMLButtonElement | null) => {
                      itemRefs.current[group.id] ??= [];
                      itemRefs.current[group.id][index] = node;
                    },
                    onKeyDown: (event: ReactKeyboardEvent<HTMLAnchorElement | HTMLButtonElement>) => {
                      if (event.key === "ArrowDown") {
                        event.preventDefault();
                        focusMenuItem(group.id, (index + 1) % group.items.length);
                      }
                      if (event.key === "ArrowUp") {
                        event.preventDefault();
                        focusMenuItem(group.id, (index - 1 + group.items.length) % group.items.length);
                      }
                      if (event.key === "Escape") {
                        event.preventDefault();
                        setOpenGroupId(null);
                        triggerRefs.current[group.id]?.focus();
                      }
                    },
                  };

                  const content = (
                    <>
                      <span>
                        <span className="block text-sm font-medium">{item.label}</span>
                        {item.description ? (
                          <span className="mt-0.5 block text-[11px] leading-4 opacity-75">{item.description}</span>
                        ) : null}
                      </span>
                      <span aria-hidden className="text-sm opacity-55">
                        ›
                      </span>
                    </>
                  );

                  return item.href ? (
                    <Link key={item.id} href={item.href} {...sharedProps} onClick={() => setOpenGroupId(null)}>
                      {content}
                    </Link>
                  ) : (
                    <button key={item.id} type="button" {...sharedProps} onClick={() => setOpenGroupId(null)}>
                      {content}
                    </button>
                  );
                })}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
