import Link from "next/link";
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/auth";
import { RegisterForm } from "@/components/register-form";

export default async function RegisterPage() {
  const user = await getCurrentUser();
  if (user) {
    redirect("/workspace");
  }

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f7f4ef_0%,#f4f7fb_100%)] px-6 py-8 text-[#17202a] sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-[1180px] gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <section className="rounded-[1.8rem] border border-[rgba(148,163,184,0.16)] bg-white/92 p-6 shadow-[0_24px_70px_rgba(15,23,42,0.08)] sm:p-7">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#eb8a3c]">Early access</p>
          <h1 className="mt-2 text-[2rem] font-semibold tracking-[-0.05em] text-[#1f2937]">Create a runnable replica account.</h1>
          <p className="mt-4 max-w-[36rem] text-[1rem] leading-8 text-[#475569]">
            The public landing previously stopped at an inert apply form. This route turns that flow into a conservative but working equivalent: register, persist your profile locally, establish a session, and continue into the protected workspace.
          </p>
          <RegisterForm />
        </section>

        <aside className="rounded-[1.8rem] border border-[rgba(148,163,184,0.18)] bg-[linear-gradient(180deg,#1d2733_0%,#0f1720_100%)] p-7 text-white shadow-[0_32px_80px_rgba(15,23,42,0.28)]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#f2a467]">Why this matters</p>
          <ul className="mt-5 space-y-4 text-sm leading-7 text-[#d8e1ea]">
            <li>The full-site clone needs real user journeys, not just public marketing shells.</li>
            <li>Registration now writes to repo-local persistence so later protected routes can share identity state.</li>
            <li>Next iterations can replace this local store with a real database while preserving the route contract.</li>
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/login" className="rounded-full border border-white/14 bg-white/8 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/14">
              Already have an account?
            </Link>
            <Link href="/privacy" className="rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-[#d8e1ea] transition hover:border-white/18 hover:text-white">
              Privacy policy
            </Link>
          </div>
        </aside>
      </div>
    </main>
  );
}
