"use client";

import { useActionState } from "react";
import { registerAction, type AuthActionState } from "@/app/auth-actions";

const initialState: AuthActionState = {};

export function RegisterForm() {
  const [state, formAction, pending] = useActionState(registerAction, initialState);

  return (
    <form action={formAction} className="mt-6 space-y-4" data-testid="register-form">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block space-y-2">
          <span className="text-sm font-medium text-[#475569]">Name</span>
          <input
            name="name"
            required
            placeholder="Research lead"
            className="w-full rounded-[1.1rem] border border-[#dbe3ed] bg-white px-4 py-3 text-sm text-[#1f2937] outline-none transition placeholder:text-[#94a3b8] focus:border-[#ebb284]"
          />
        </label>
        <label className="block space-y-2">
          <span className="text-sm font-medium text-[#475569]">Email</span>
          <input
            name="email"
            type="email"
            required
            placeholder="name@example.com"
            className="w-full rounded-[1.1rem] border border-[#dbe3ed] bg-white px-4 py-3 text-sm text-[#1f2937] outline-none transition placeholder:text-[#94a3b8] focus:border-[#ebb284]"
          />
        </label>
      </div>
      <label className="block space-y-2">
        <span className="text-sm font-medium text-[#475569]">Password</span>
        <input
          name="password"
          type="password"
          required
          minLength={8}
          placeholder="At least 8 characters"
          className="w-full rounded-[1.1rem] border border-[#dbe3ed] bg-white px-4 py-3 text-sm text-[#1f2937] outline-none transition placeholder:text-[#94a3b8] focus:border-[#ebb284]"
        />
      </label>
      <label className="block space-y-2">
        <span className="text-sm font-medium text-[#475569]">Research intent</span>
        <textarea
          name="intent"
          required
          placeholder="What are you trying to research, validate, or package with SciClaw?"
          className="min-h-[8rem] w-full rounded-[1.2rem] border border-[#dbe3ed] bg-white px-4 py-3 text-sm leading-7 text-[#1f2937] outline-none transition placeholder:text-[#94a3b8] focus:border-[#ebb284]"
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
        {pending ? "Creating account..." : "Create account"}
      </button>
    </form>
  );
}
