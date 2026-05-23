import { cookies } from "next/headers";
import { SESSION_COOKIE } from "@/lib/auth";
import {
  findSession,
  findUserById,
  listChatMessages,
  listChatThreads,
  listProjects,
  listTasks,
} from "@/lib/data-store";

export async function GET() {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get(SESSION_COOKIE)?.value;

  if (!sessionId) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const session = await findSession(sessionId);
  if (!session) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const user = await findUserById(session.userId);
  if (!user) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const [projects, tasks, threads] = await Promise.all([
    listProjects(),
    listTasks(),
    listChatThreads(user.id),
  ]);
  const activeThread = threads[0] ?? null;
  const activeMessages = activeThread ? await listChatMessages(activeThread.id) : [];

  return Response.json({
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      intent: user.intent,
    },
    projects,
    tasks,
    threads,
    activeThreadId: activeThread?.id ?? null,
    messages: activeMessages,
  });
}
