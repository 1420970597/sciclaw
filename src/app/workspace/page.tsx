import Link from "next/link";
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/auth";
import { listProjects, listTasks } from "@/lib/data-store";
import { logoutAction, updateWorkspaceTaskStatusAction } from "@/app/auth-actions";
import { WorkspaceTaskForm } from "@/components/workspace-task-form";

export default async function WorkspacePage() {
  const user = await getCurrentUser();
  if (!user) {
    redirect("/login");
    return null;
  }

  const [projects, tasks] = await Promise.all([listProjects(), listTasks()]);

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#eef2f7_0%,#f8fafc_100%)] px-6 py-6 text-[#17202a] sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-8">
        <header className="rounded-[1.6rem] border border-[rgba(148,163,184,0.18)] bg-white/88 p-6 shadow-[0_24px_70px_rgba(15,23,42,0.08)] backdrop-blur-sm">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#eb8a3c]">
                Protected workspace
              </p>
              <h1 className="text-[2.1rem] font-semibold tracking-[-0.04em] text-[#1c2430]">
                SciClaw workspace
              </h1>
              <p className="max-w-[54rem] text-[0.98rem] leading-7 text-[#5c6774]">
                This private shell turns the public replica into a runnable product slice: authenticated users can enter a persistent workspace, keep a session cookie, and review the same project lanes that were previously exposed only as marketing or help previews.
              </p>
            </div>
            <div className="flex flex-col items-start gap-3 rounded-[1.2rem] border border-[rgba(226,232,240,0.9)] bg-[#f8fafc] px-4 py-4 sm:min-w-[19rem]">
              <p className="text-sm font-semibold text-[#1f2937]">{user.name}</p>
              <p className="text-sm text-[#64748b]">{user.email}</p>
              <p className="text-xs uppercase tracking-[0.2em] text-[#94a3b8]">{user.role}</p>
              <p className="text-sm leading-6 text-[#475569]">{user.intent}</p>
              <form action={logoutAction}>
                <button
                  type="submit"
                  className="rounded-full border border-[rgba(15,23,42,0.12)] bg-white px-4 py-2 text-sm font-medium text-[#334155] transition hover:border-[rgba(15,23,42,0.24)] hover:text-[#0f172a]"
                >
                  Sign out
                </button>
              </form>
            </div>
          </div>
        </header>

        <section className="grid gap-4 lg:grid-cols-[1.35fr_0.65fr]">
          <div className="rounded-[1.6rem] border border-[rgba(148,163,184,0.16)] bg-white/92 p-6 shadow-[0_20px_50px_rgba(15,23,42,0.06)]">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#eb8a3c]">
                  Projects
                </p>
                <h2 className="mt-2 text-[1.45rem] font-semibold tracking-[-0.03em] text-[#1f2937]">
                  Active research lanes
                </h2>
              </div>
              <Link
                href="/help/projects"
                className="rounded-full border border-[rgba(15,23,42,0.1)] bg-[#f8fafc] px-4 py-2 text-sm font-medium text-[#475569] transition hover:border-[rgba(15,23,42,0.22)] hover:text-[#0f172a]"
              >
                View public guide
              </Link>
            </div>
            <div className="mt-5 grid gap-4">
              {projects.map((project) => (
                <article
                  key={project.id}
                  className="rounded-[1.35rem] border border-[rgba(226,232,240,0.92)] bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] p-5 shadow-[0_14px_32px_rgba(15,23,42,0.04)]"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <h3 className="text-[1.05rem] font-semibold text-[#1f2937]">{project.title}</h3>
                      <p className="mt-1 text-sm text-[#64748b]">{project.stage}</p>
                    </div>
                    <p className="text-xs uppercase tracking-[0.18em] text-[#94a3b8]">{project.updatedAt}</p>
                  </div>
                  <p className="mt-4 max-w-[48rem] text-sm leading-7 text-[#475569]">{project.summary}</p>
                  <div className="mt-4 flex flex-wrap gap-3 text-sm text-[#334155]">
                    <span className="rounded-full bg-[#eef2ff] px-3 py-1">{project.sources} sources</span>
                    <span className="rounded-full bg-[#fff7ed] px-3 py-1">{project.tasksOpen} tasks open</span>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className="grid gap-4">
            <section className="rounded-[1.6rem] border border-[rgba(148,163,184,0.16)] bg-white/92 p-6 shadow-[0_20px_50px_rgba(15,23,42,0.06)]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#eb8a3c]">
                Session state
              </p>
              <h2 className="mt-2 text-[1.3rem] font-semibold tracking-[-0.03em] text-[#1f2937]">
                Auth + persistence baseline
              </h2>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-[#475569]">
                <li>Cookie-backed session lives under `sciclaw_session`.</li>
                <li>Users and projects persist to repo-local `.data/app-state.json`.</li>
                <li>Seed admin login: `admin@sciclaw.local` / `Admin123!`.</li>
              </ul>
            </section>
            <section className="rounded-[1.6rem] border border-[rgba(148,163,184,0.16)] bg-white/92 p-6 shadow-[0_20px_50px_rgba(15,23,42,0.06)]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#eb8a3c]">
                Task queue
              </p>
              <div className="mt-2 flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h2 className="text-[1.3rem] font-semibold tracking-[-0.03em] text-[#1f2937]">
                    Runtime-backed work items
                  </h2>
                  <p className="mt-2 max-w-[24rem] text-sm leading-7 text-[#475569]">
                    Queue new protected-workspace tasks against a real project lane, then promote or close them without leaving the authenticated shell.
                  </p>
                </div>
                <span className="rounded-full bg-[#fff7ed] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#c2410c]">
                  {tasks.length} live tasks
                </span>
              </div>
              <WorkspaceTaskForm projects={projects} />
              <div className="mt-5 space-y-4">
                {tasks.map((task) => {
                  const setQueuedAction = updateWorkspaceTaskStatusAction.bind(null, task.id);
                  const setInProgressAction = updateWorkspaceTaskStatusAction.bind(null, task.id);
                  const setDoneAction = updateWorkspaceTaskStatusAction.bind(null, task.id);

                  return (
                    <article
                      key={task.id}
                      className="rounded-[1.2rem] border border-[rgba(226,232,240,0.92)] bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] p-4 shadow-[0_12px_28px_rgba(15,23,42,0.04)]"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="text-sm font-semibold text-[#1f2937]">{task.title}</h3>
                          <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[#94a3b8]">
                            {task.status}
                          </p>
                        </div>
                        <span className="rounded-full bg-[#eef2ff] px-2.5 py-1 text-xs font-medium text-[#334155]">
                          {task.updatedAt}
                        </span>
                      </div>
                      <p className="mt-3 text-sm leading-6 text-[#475569]">{task.summary}</p>
                      <p className="mt-3 text-xs uppercase tracking-[0.18em] text-[#94a3b8]">
                        Owner: {task.owner}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <form action={setQueuedAction}>
                          <input type="hidden" name="status" value="queued" />
                          <button
                            type="submit"
                            className="rounded-full border border-[rgba(148,163,184,0.28)] bg-white px-3 py-1.5 text-xs font-medium text-[#475569] transition hover:border-[rgba(148,163,184,0.46)] hover:text-[#0f172a]"
                          >
                            Move to queued
                          </button>
                        </form>
                        <form action={setInProgressAction}>
                          <input type="hidden" name="status" value="in-progress" />
                          <button
                            type="submit"
                            className="rounded-full border border-[rgba(235,138,60,0.24)] bg-[#fff7ed] px-3 py-1.5 text-xs font-medium text-[#c2410c] transition hover:border-[rgba(235,138,60,0.38)] hover:text-[#9a3412]"
                          >
                            Mark in progress
                          </button>
                        </form>
                        <form action={setDoneAction}>
                          <input type="hidden" name="status" value="done" />
                          <button
                            type="submit"
                            className="rounded-full border border-[rgba(16,185,129,0.24)] bg-[#ecfdf5] px-3 py-1.5 text-xs font-medium text-[#047857] transition hover:border-[rgba(16,185,129,0.36)] hover:text-[#065f46]"
                          >
                            Mark done
                          </button>
                        </form>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
            <section className="rounded-[1.6rem] border border-[rgba(148,163,184,0.16)] bg-white/92 p-6 shadow-[0_20px_50px_rgba(15,23,42,0.06)]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#eb8a3c]">
                Next gaps
              </p>
              <h2 className="mt-2 text-[1.3rem] font-semibold tracking-[-0.03em] text-[#1f2937]">
                Full-site replica backlog
              </h2>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-[#475569]">
                <li>Replace file store with real database-backed domain models.</li>
                <li>Expand role-specific task/session/foundry routes behind auth.</li>
                <li>Promote public `/chat` and `/help/projects` previews into runtime-backed private surfaces.</li>
              </ul>
            </section>
          </aside>
        </section>
      </div>
    </main>
  );
}
