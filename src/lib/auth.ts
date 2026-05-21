import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  createSession,
  deleteSession,
  findSession,
  findUserById,
  type StoredUser,
} from "@/lib/data-store";

export const SESSION_COOKIE = "sciclaw_session";

const cookieOptions = {
  httpOnly: true,
  sameSite: "lax" as const,
  path: "/",
  secure: false,
  maxAge: 60 * 60 * 24 * 14,
};

export async function startUserSession(userId: string) {
  const session = await createSession(userId);
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE, session.id, cookieOptions);
  return session;
}

export async function endUserSession() {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get(SESSION_COOKIE)?.value;
  if (sessionId) {
    await deleteSession(sessionId);
  }
  cookieStore.delete(SESSION_COOKIE);
}

export async function getCurrentUser(): Promise<StoredUser | null> {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get(SESSION_COOKIE)?.value;
  if (!sessionId) {
    return null;
  }

  const session = await findSession(sessionId);
  if (!session) {
    cookieStore.delete(SESSION_COOKIE);
    return null;
  }

  return findUserById(session.userId);
}

export async function requireUser() {
  const user = await getCurrentUser();
  if (!user) {
    redirect("/login");
  }
  return user;
}
