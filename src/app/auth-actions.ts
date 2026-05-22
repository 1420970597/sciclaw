"use server";

import { redirect } from "next/navigation";
import {
  createUser,
  createTask,
  DataStoreValidationError,
  findProjectById,
  findUserByAccessCode,
  setTaskStatus,
  verifyUserPassword,
} from "@/lib/data-store";
import { endUserSession, getCurrentUser, startUserSession } from "@/lib/auth";

export type AuthActionState = {
  error?: string;
  success?: string;
};

function value(formData: FormData, key: string) {
  return String(formData.get(key) ?? "").trim();
}

export async function loginAction(_prevState: AuthActionState, formData: FormData): Promise<AuthActionState> {
  const email = value(formData, "email").toLowerCase();
  const password = value(formData, "password");

  if (!email || !password) {
    return { error: "Email and password are required." };
  }

  const user = await verifyUserPassword(email, password);
  if (!user) {
    return { error: "Invalid email or password." };
  }

  await startUserSession(user.id);
  redirect("/workspace");
}

export async function registerAction(_prevState: AuthActionState, formData: FormData): Promise<AuthActionState> {
  const name = value(formData, "name");
  const email = value(formData, "email").toLowerCase();
  const password = value(formData, "password");
  const intent = value(formData, "intent");

  if (!name || !email || !password || !intent) {
    return { error: "Name, email, password, and research intent are required." };
  }

  if (password.length < 8) {
    return { error: "Password must be at least 8 characters." };
  }

  try {
    const user = await createUser({ name, email, password, intent });
    await startUserSession(user.id);
  } catch (error) {
    if ((error as Error).message === "EMAIL_EXISTS") {
      return { error: "That email is already registered." };
    }
    throw error;
  }

  redirect("/workspace");
}

export async function accessCodeAction(_prevState: AuthActionState, formData: FormData): Promise<AuthActionState> {
  const accessCode = value(formData, "accessCode");
  if (!accessCode) {
    return { error: "Access code is required." };
  }

  const user = await findUserByAccessCode(accessCode);
  if (!user) {
    return { error: "Access code not recognized." };
  }

  await startUserSession(user.id);
  redirect("/workspace");
}

export async function logoutAction() {
  await endUserSession();
  redirect("/");
}

export async function createWorkspaceTaskAction(
  _prevState: AuthActionState,
  formData: FormData,
): Promise<AuthActionState> {
  const user = await getCurrentUser();
  if (!user) {
    return { error: "You must be signed in to create tasks." };
  }

  const projectId = value(formData, "projectId");
  const title = value(formData, "title");
  const summary = value(formData, "summary");

  if (!projectId || !title || !summary) {
    return { error: "Project, title, and summary are required." };
  }

  if (!(await findProjectById(projectId))) {
    return { error: "Selected project no longer exists." };
  }

  try {
    await createTask({
      projectId,
      title,
      summary,
      owner: user.name,
    });
  } catch (error) {
    if (error instanceof DataStoreValidationError) {
      if (error.message === "PROJECT_NOT_FOUND") {
        return { error: "Selected project no longer exists." };
      }

      if (error.message === "TASK_FIELDS_REQUIRED") {
        return { error: "Project, title, and summary are required." };
      }
    }

    throw error;
  }

  return { success: "Task queued in the protected workspace." };
}

export async function updateWorkspaceTaskStatusAction(taskId: string, formData: FormData): Promise<void> {
  const user = await getCurrentUser();
  if (!user) {
    redirect("/login");
  }

  const status = value(formData, "status");
  if (status !== "queued" && status !== "in-progress" && status !== "done") {
    throw new DataStoreValidationError("INVALID_TASK_STATUS");
  }

  const updated = await setTaskStatus(taskId, status);
  if (!updated) {
    throw new DataStoreValidationError("TASK_NOT_FOUND");
  }
}
