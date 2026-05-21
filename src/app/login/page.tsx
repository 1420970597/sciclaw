import Link from "next/link";
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/auth";
import { LoginForm } from "@/components/login-form";

export default async function LoginPage() {
  const user = await getCurrentUser();
  if (user) {
    redirect("/workspace");
  }

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f4f6fb_0%,#eef2f7_100%)] px-6 py-8 text-[#17202a] sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-[1180px] gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
        <section className="rounded-[1.8rem] border border-[rgba(148,163,184,0.18)] bg-[linear-gradient(180deg,#1d2733_0%,#0f1720_100%)] p-7 text-white shadow-[0_32px_80px_rgba(15,23,42,0.28)]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#f2a467]">SciClaw access</p>
          <h1 className="mt-4 text-[2.4rem] font-semibold tracking-[-0.05em]">Enter the private research shell.</h1>
          <p className="mt-4 max-w-[34rem] text-[1rem] leading-8 text-[#d8e1ea]">
            This protected route is the first non-marketing product slice in the replica. It turns the live-looking access card into a working login, persistent session, and gated workspace.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              ["Cookie session", "14-day persistent access"],
              ["Seed admin", "admin@sciclaw.local"],
              ["Next target", "Projects, sessions, Foundry"],
            ].map(([label, detail]) => (
              <div key={label} className="rounded-[1.25rem] border border-white/10 bg-white/6 p-4">
                <p className="text-sm font-semibold text-white">{label}</p>
                <p className="mt-2 text-sm leading-6 text-[#c0ccda]">{detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[1.8rem] border border-[rgba(148,163,184,0.16)] bg-white/92 p-6 shadow-[0_24px_70px_rgba(15,23,42,0.08)] sm:p-7">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#eb8a3c]">Login</p>
              <h2 className="mt-2 text-[1.8rem] font-semibold tracking-[-0.04em] text-[#1f2937]">Sign in</h2>
            </div>
            <Link href="/" className="text-sm font-medium text-[#64748b] transition hover:text-[#0f172a]">
              Back to landing
            </Link>
          </div>
          <LoginForm />
        </section>
      </div>
    </main>
  );
}
