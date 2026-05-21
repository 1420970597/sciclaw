"use client";

import { useActionState } from "react";
import { loginAction, type AuthActionState } from "@/app/auth-actions";

const initialState: AuthActionState = {};

export function LoginForm() {
  const [state, formAction, pending] = useActionState(loginAction, initialState);

  return (
    <form action={formAction} className="mt-6 space-y-4" data-testid="login-form">
      <label className="block space-y-2">
        <span className="text-sm font-medium text-[#475569]">Email</span>
        <input
          name="email"
          type="email"
          required
          placeholder="admin@sciclaw.local"
          className="w-full rounded-[1.1rem] border border-[#dbe3ed] bg-white px-4 py-3 text-sm text-[#1f2937] outline-none transition placeholder:text-[#94a3b8] focus:border-[#ebb284]"
        />
      </label>
      <label className="block space-y-2">
        <span className="text-sm font-medium text-[#475569]">Password</span>
        <input
          name="password"
          type="password"
          required
          placeholder="Admin123!"
          className="w-full rounded-[1.1rem] border border-[#dbe3ed] bg-white px-4 py-3 text-sm text-[#1f2937] outline-none transition placeholder:text-[#94a3b8] focus:border-[#ebb284]"
        />
      </label>
      {state.error ? (
        <p className="rounded-[1rem] border border-[#fecaca] bg-[#fef2f2] px-4 py-3 text-sm text-[#b91c1c]" role="alert">
          {state.error}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-[1.15rem] bg-[#f2a467] px-4 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white shadow-[0_16px_32px_rgba(242,164,103,0.3)] transition hover:brightness-[1.02] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {pending ? "Signing in..." : "Enter workspace"}
      </button>
    </form>
  );
}
