"use client";

import { useActionState } from "react";
import {
  createWorkspaceMessageAction,
  createWorkspaceThreadAction,
  type AuthActionState,
} from "@/app/auth-actions";
import type { StoredChatMessage, StoredChatThread } from "@/lib/data-store";

const initialState: AuthActionState = {};

type WorkspaceChatPanelProps = {
  currentUserName: string;
  threads: StoredChatThread[];
  messages: StoredChatMessage[];
  activeThreadId: string | null;
};

function formatMessageRole(role: StoredChatMessage["role"]) {
  switch (role) {
    case "assistant":
      return "Assistant";
    case "system":
      return "System";
    default:
      return "Researcher";
  }
}

export function WorkspaceChatPanel({
  currentUserName,
  threads,
  messages,
  activeThreadId,
}: WorkspaceChatPanelProps) {
  const [threadState, createThreadAction, creatingThread] = useActionState(
    createWorkspaceThreadAction,
    initialState,
  );
  const [messageState, createMessageAction, creatingMessage] = useActionState(
    createWorkspaceMessageAction,
    initialState,
  );

  const activeThread = threads.find((thread) => thread.id === activeThreadId) ?? null;

  return (
    <section
      className="rounded-[1.6rem] border border-[rgba(148,163,184,0.16)] bg-white/92 p-6 shadow-[0_20px_50px_rgba(15,23,42,0.06)]"
      data-testid="workspace-chat-panel"
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#eb8a3c]">
            Protected threads
          </p>
          <h2 className="mt-2 text-[1.3rem] font-semibold tracking-[-0.03em] text-[#1f2937]">
            Persistent workspace chat
          </h2>
          <p className="mt-2 max-w-[40rem] text-sm leading-7 text-[#475569]">
            Start a private research thread, keep the prompt history inside the authenticated shell, and replay the latest request with a conservative stored response.
          </p>
        </div>
        <span className="rounded-full bg-[#eef2ff] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#334155]">
          {threads.length} live threads
        </span>
      </div>

      <div className="mt-5 grid gap-4 xl:grid-cols-[0.78fr_1.22fr]">
        <div className="space-y-4">
          <form
            action={createThreadAction}
            className="rounded-[1.25rem] border border-[rgba(226,232,240,0.92)] bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] p-4 shadow-[0_12px_28px_rgba(15,23,42,0.04)]"
            data-testid="workspace-thread-form"
          >
            <label className="block space-y-2">
              <span className="text-sm font-medium text-[#475569]">Thread title</span>
              <input
                name="title"
                required
                placeholder="Queue a new protected research thread"
                className="w-full rounded-[1.05rem] border border-[#dbe3ed] bg-white px-4 py-3 text-sm text-[#1f2937] outline-none transition placeholder:text-[#94a3b8] focus:border-[#ebb284]"
              />
            </label>
            {threadState.error ? (
              <p
                className="mt-3 rounded-[1rem] border border-[#fecaca] bg-[#fef2f2] px-4 py-3 text-sm text-[#b91c1c]"
                role="alert"
              >
                {threadState.error}
              </p>
            ) : null}
            {threadState.success ? (
              <p
                className="mt-3 rounded-[1rem] border border-[#d1fae5] bg-[#ecfdf5] px-4 py-3 text-sm text-[#047857]"
                role="status"
              >
                {threadState.success}
              </p>
            ) : null}
            <button
              type="submit"
              disabled={creatingThread}
              className="mt-4 w-full rounded-[1.1rem] bg-[#f2a467] px-4 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white shadow-[0_16px_32px_rgba(242,164,103,0.3)] transition hover:brightness-[1.02] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {creatingThread ? "Adding thread..." : "Add workspace thread"}
            </button>
          </form>

          <div className="space-y-3" data-testid="workspace-thread-list">
            {threads.map((thread) => {
              const isActive = thread.id === activeThreadId;
              return (
                <article
                  key={thread.id}
                  className={[
                    "rounded-[1.2rem] border p-4 shadow-[0_12px_28px_rgba(15,23,42,0.04)] transition",
                    isActive
                      ? "border-[rgba(235,138,60,0.32)] bg-[#fff7ed]"
                      : "border-[rgba(226,232,240,0.92)] bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)]",
                  ].join(" ")}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-sm font-semibold text-[#1f2937]">{thread.title}</h3>
                      <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[#94a3b8]">
                        {isActive ? "Active thread" : "Available thread"}
                      </p>
                    </div>
                    <span className="rounded-full bg-white/90 px-2.5 py-1 text-xs font-medium text-[#475569]">
                      {new Date(thread.updatedAt).toLocaleString()}
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="rounded-[1.25rem] border border-[rgba(226,232,240,0.92)] bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] p-4 shadow-[0_12px_28px_rgba(15,23,42,0.04)]">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h3 className="text-sm font-semibold text-[#1f2937]">
                {activeThread?.title ?? "No thread selected"}
              </h3>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[#94a3b8]">
                {activeThread ? "Stored message timeline" : "Create a thread to begin"}
              </p>
            </div>
            {activeThread ? (
              <span className="rounded-full bg-[#eef2ff] px-2.5 py-1 text-xs font-medium text-[#334155]">
                {messages.length} messages
              </span>
            ) : null}
          </div>

          <div className="mt-4 space-y-3" data-testid="workspace-message-list">
            {activeThread ? (
              messages.map((message) => (
                <article
                  key={message.id}
                  className="rounded-[1rem] border border-[rgba(226,232,240,0.92)] bg-white px-4 py-3"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#94a3b8]">
                      {formatMessageRole(message.role)}
                    </p>
                    <p className="text-xs text-[#94a3b8]">{new Date(message.createdAt).toLocaleString()}</p>
                  </div>
                  <p className="mt-2 text-sm font-medium text-[#334155]">{message.author}</p>
                  <p className="mt-2 text-sm leading-7 text-[#475569]">{message.content}</p>
                </article>
              ))
            ) : (
              <p className="rounded-[1rem] border border-dashed border-[rgba(148,163,184,0.4)] bg-white/70 px-4 py-5 text-sm leading-7 text-[#64748b]">
                Add a protected thread to keep research prompts, reviewer asks, and follow-up responses persisted in this workspace clone.
              </p>
            )}
          </div>

          <form
            action={createMessageAction}
            className="mt-4 space-y-3"
            data-testid="workspace-message-form"
          >
            <input type="hidden" name="threadId" value={activeThreadId ?? ""} />
            <label className="block space-y-2">
              <span className="text-sm font-medium text-[#475569]">Next protected message</span>
              <textarea
                name="content"
                required
                disabled={!activeThread || creatingMessage}
                placeholder="Capture the next scientific question, evidence request, or reviewer handoff."
                className="min-h-[7rem] w-full rounded-[1.1rem] border border-[#dbe3ed] bg-white px-4 py-3 text-sm leading-7 text-[#1f2937] outline-none transition placeholder:text-[#94a3b8] focus:border-[#ebb284] disabled:cursor-not-allowed disabled:bg-[#f8fafc]"
              />
            </label>
            {messageState.error ? (
              <p className="rounded-[1rem] border border-[#fecaca] bg-[#fef2f2] px-4 py-3 text-sm text-[#b91c1c]" role="alert">
                {messageState.error}
              </p>
            ) : null}
            {messageState.success ? (
              <p className="rounded-[1rem] border border-[#d1fae5] bg-[#ecfdf5] px-4 py-3 text-sm text-[#047857]" role="status">
                {messageState.success}
              </p>
            ) : null}
            <button
              type="submit"
              disabled={!activeThread || creatingMessage}
              className="w-full rounded-[1.1rem] border border-[rgba(15,23,42,0.1)] bg-[#0f172a] px-4 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#111c30] disabled:cursor-not-allowed disabled:bg-[#94a3b8]"
            >
              {creatingMessage ? "Persisting message..." : activeThread ? `Send as ${currentUserName}` : "Select a thread first"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
