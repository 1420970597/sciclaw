"use client";

import { useActionState } from "react";
import { createWorkspaceTaskAction, type AuthActionState } from "@/app/auth-actions";
import type { WorkspaceProject } from "@/lib/data-store";

const initialState: AuthActionState = {};

type WorkspaceTaskFormProps = {
  projects: WorkspaceProject[];
};

export function WorkspaceTaskForm({ projects }: WorkspaceTaskFormProps) {
  const [state, formAction, pending] = useActionState(createWorkspaceTaskAction, initialState);

  return (
    <form action={formAction} className="mt-4 space-y-4" data-testid="workspace-task-form">
      <label className="block space-y-2">
        <span className="text-sm font-medium text-[#475569]">Project</span>
        <select
          name="projectId"
          required
          defaultValue={projects[0]?.id ?? ""}
          className="w-full rounded-[1.05rem] border border-[#dbe3ed] bg-white px-4 py-3 text-sm text-[#1f2937] outline-none transition focus:border-[#ebb284]"
        >
          {projects.map((project) => (
            <option key={project.id} value={project.id}>
              {project.title}
            </option>
          ))}
        </select>
      </label>
      <label className="block space-y-2">
        <span className="text-sm font-medium text-[#475569]">Task title</span>
        <input
          name="title"
          required
          placeholder="Summarize the next protected workspace task"
          className="w-full rounded-[1.1rem] border border-[#dbe3ed] bg-white px-4 py-3 text-sm text-[#1f2937] outline-none transition placeholder:text-[#94a3b8] focus:border-[#ebb284]"
        />
      </label>
      <label className="block space-y-2">
        <span className="text-sm font-medium text-[#475569]">Task summary</span>
        <textarea
          name="summary"
          required
          placeholder="Describe the runtime-backed task, evidence needed, and expected handoff."
          className="min-h-[7rem] w-full rounded-[1.2rem] border border-[#dbe3ed] bg-white px-4 py-3 text-sm leading-7 text-[#1f2937] outline-none transition placeholder:text-[#94a3b8] focus:border-[#ebb284]"
        />
      </label>
      {state.error ? (
        <p className="rounded-[1rem] border border-[#fecaca] bg-[#fef2f2] px-4 py-3 text-sm text-[#b91c1c]" role="alert">
          {state.error}
        </p>
      ) : null}
      {state.success ? (
        <p className="rounded-[1rem] border border-[#d1fae5] bg-[#ecfdf5] px-4 py-3 text-sm text-[#047857]" role="status">
          {state.success}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-[1.15rem] bg-[#f2a467] px-4 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white shadow-[0_16px_32px_rgba(242,164,103,0.3)] transition hover:brightness-[1.02] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {pending ? "Queueing task..." : "Queue workspace task"}
      </button>
    </form>
  );
}
