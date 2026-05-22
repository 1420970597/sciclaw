import { cookies } from "next/headers";
import { SESSION_COOKIE } from "@/lib/auth";
import {
  createTask,
  DataStoreValidationError,
  findProjectById,
  findSession,
  findTaskById,
  findUserById,
  setTaskStatus,
} from "@/lib/data-store";

async function requireWorkspaceUser() {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get(SESSION_COOKIE)?.value;

  if (!sessionId) {
    return null;
  }

  const session = await findSession(sessionId);
  if (!session) {
    return null;
  }

  const user = await findUserById(session.userId);
  return user ?? null;
}

export async function POST(request: Request) {
  const user = await requireWorkspaceUser();
  if (!user) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = (await request.json()) as {
    projectId?: string;
    title?: string;
    summary?: string;
  };

  const projectId = String(body.projectId ?? "").trim();
  const title = String(body.title ?? "").trim();
  const summary = String(body.summary ?? "").trim();

  if (!projectId || !title || !summary) {
    return Response.json({ error: "Project, title, and summary are required." }, { status: 400 });
  }

  if (!(await findProjectById(projectId))) {
    return Response.json({ error: "Selected project no longer exists." }, { status: 404 });
  }

  try {
    const task = await createTask({
      projectId,
      title,
      summary,
      owner: user.name,
    });

    return Response.json({ task }, { status: 201 });
  } catch (error) {
    if (error instanceof DataStoreValidationError) {
      if (error.message === "PROJECT_NOT_FOUND") {
        return Response.json({ error: "Selected project no longer exists." }, { status: 404 });
      }

      if (error.message === "TASK_FIELDS_REQUIRED") {
        return Response.json({ error: "Project, title, and summary are required." }, { status: 400 });
      }
    }

    throw error;
  }
}

export async function PATCH(request: Request) {
  const user = await requireWorkspaceUser();
  if (!user) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = (await request.json()) as {
    taskId?: string;
    status?: string;
  };

  const taskId = String(body.taskId ?? "").trim();
  const status = String(body.status ?? "").trim();

  if (!taskId || !status) {
    return Response.json({ error: "Task id and status are required." }, { status: 400 });
  }

  if (status !== "queued" && status !== "in-progress" && status !== "done") {
    return Response.json({ error: "Task status is invalid." }, { status: 400 });
  }

  if (!(await findTaskById(taskId))) {
    return Response.json({ error: "Task not found." }, { status: 404 });
  }

  const task = await setTaskStatus(taskId, status);
  if (!task) {
    return Response.json({ error: "Task not found." }, { status: 404 });
  }

  return Response.json({ task });
}
