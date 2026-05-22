import { promises as fs } from "node:fs";
import * as path from "node:path";
import * as crypto from "node:crypto";

export type UserRole = "researcher" | "admin";
export type TaskStatus = "queued" | "in-progress" | "done";

export type StoredUser = {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
  role: UserRole;
  intent: string;
  accessCode?: string;
  createdAt: string;
};

export type StoredSession = {
  id: string;
  userId: string;
  createdAt: string;
};

export type WorkspaceProject = {
  id: string;
  title: string;
  stage: string;
  summary: string;
  updatedAt: string;
  sources: number;
  tasksOpen: number;
};

export type WorkspaceTask = {
  id: string;
  projectId: string;
  title: string;
  summary: string;
  owner: string;
  status: TaskStatus;
  updatedAt: string;
};

export class DataStoreValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "DataStoreValidationError";
  }
}

type DataStore = {
  users: StoredUser[];
  sessions: StoredSession[];
  projects: WorkspaceProject[];
  tasks: WorkspaceTask[];
};

const DATA_DIR = path.join(process.cwd(), ".data");
const STORE_PATH = path.join(DATA_DIR, "app-state.json");

const defaultProjects: WorkspaceProject[] = [
  {
    id: "proj-patent-overlap",
    title: "Patent overlap review",
    stage: "Live comparison",
    summary: "Grounding claim charts against prior filings and source exhibits.",
    updatedAt: "Updated 12m ago",
    sources: 18,
    tasksOpen: 2,
  },
  {
    id: "proj-trial-replay",
    title: "Clinical trial replay",
    stage: "Replication queued",
    summary: "Preparing statistical reruns, chart exports, and reviewer-facing notes.",
    updatedAt: "Updated 34m ago",
    sources: 24,
    tasksOpen: 1,
  },
  {
    id: "proj-reg-memo",
    title: "Regulatory memo packet",
    stage: "Foundry handoff",
    summary: "Packaging evidence, risks, and next actions into a publishable brief.",
    updatedAt: "Updated 2h ago",
    sources: 9,
    tasksOpen: 3,
  },
];

const defaultTasks: WorkspaceTask[] = [
  {
    id: "task-claim-chart",
    projectId: "proj-patent-overlap",
    title: "Draft claim chart skeleton",
    summary: "Pull the first comparison table into the workspace so reviewers can verify the overlap call.",
    owner: "SciClaw Admin",
    status: "in-progress",
    updatedAt: "Updated 8m ago",
  },
  {
    id: "task-review-notes",
    projectId: "proj-trial-replay",
    title: "Assemble reviewer notes",
    summary: "Package the latest statistical checks and note the next replay steps.",
    owner: "SciClaw Admin",
    status: "queued",
    updatedAt: "Updated 26m ago",
  },
  {
    id: "task-evidence-brief",
    projectId: "proj-reg-memo",
    title: "Package evidence brief",
    summary: "Move source extracts and risk notes into the foundry handoff packet.",
    owner: "SciClaw Admin",
    status: "done",
    updatedAt: "Updated 1h ago",
  },
];

function sha256(input: string) {
  return crypto.createHash("sha256").update(input).digest("hex");
}

function makeId(prefix: string) {
  return `${prefix}_${crypto.randomUUID()}`;
}

async function ensureDataDir() {
  await fs.mkdir(DATA_DIR, { recursive: true });
}

async function seedStore(): Promise<DataStore> {
  const now = new Date().toISOString();
  return {
    users: [
      {
        id: "user_admin_seed",
        name: "SciClaw Admin",
        email: "admin@sciclaw.local",
        passwordHash: sha256("Admin123!"),
        role: "admin",
        intent: "Operations oversight and replica verification",
        accessCode: "SC-ADMIN-2026",
        createdAt: now,
      },
    ],
    sessions: [],
    projects: defaultProjects,
    tasks: defaultTasks,
  };
}

export async function readStore(): Promise<DataStore> {
  await ensureDataDir();
  try {
    const raw = await fs.readFile(STORE_PATH, "utf8");
    const parsed = JSON.parse(raw) as Partial<DataStore>;
    return {
      users: parsed.users ?? [],
      sessions: parsed.sessions ?? [],
      projects: parsed.projects?.length ? parsed.projects : defaultProjects,
      tasks: parsed.tasks?.length ? parsed.tasks : defaultTasks,
    };
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code !== "ENOENT") {
      throw error;
    }
    const seeded = await seedStore();
    await writeStore(seeded);
    return seeded;
  }
}

export async function writeStore(store: DataStore) {
  await ensureDataDir();
  await fs.writeFile(STORE_PATH, JSON.stringify(store, null, 2));
}

export async function listProjects() {
  const store = await readStore();
  return store.projects;
}

export async function findProjectById(projectId: string) {
  const store = await readStore();
  return store.projects.find((project) => project.id === projectId) ?? null;
}

export async function listTasks() {
  const store = await readStore();
  return store.tasks;
}

export async function findTaskById(taskId: string) {
  const store = await readStore();
  return store.tasks.find((task) => task.id === taskId) ?? null;
}

export async function createTask(input: {
  projectId: string;
  title: string;
  summary: string;
  owner: string;
}) {
  const store = await readStore();
  const project = store.projects.find((item) => item.id === input.projectId);
  if (!project) {
    throw new DataStoreValidationError("PROJECT_NOT_FOUND");
  }

  const title = input.title.trim();
  const summary = input.summary.trim();
  const owner = input.owner.trim();
  if (!title || !summary || !owner) {
    throw new DataStoreValidationError("TASK_FIELDS_REQUIRED");
  }

  const task: WorkspaceTask = {
    id: makeId("task"),
    projectId: input.projectId,
    title,
    summary,
    owner,
    status: "queued",
    updatedAt: new Date().toISOString(),
  };

  store.tasks = [task, ...store.tasks];
  await writeStore(store);
  return task;
}

export async function setTaskStatus(taskId: string, status: TaskStatus) {
  const store = await readStore();
  const index = store.tasks.findIndex((task) => task.id === taskId);
  if (index === -1) {
    return null;
  }

  const current = store.tasks[index];
  const updated: WorkspaceTask = {
    ...current,
    status,
    updatedAt: new Date().toISOString(),
  };
  store.tasks.splice(index, 1);
  store.tasks.unshift(updated);
  await writeStore(store);
  return updated;
}

export async function findUserByEmail(email: string) {
  const store = await readStore();
  return store.users.find((user) => user.email.toLowerCase() === email.trim().toLowerCase()) ?? null;
}

export async function findUserByAccessCode(accessCode: string) {
  const store = await readStore();
  return (
    store.users.find(
      (user) => user.accessCode && user.accessCode.toLowerCase() === accessCode.trim().toLowerCase(),
    ) ?? null
  );
}

export async function createUser(input: {
  name: string;
  email: string;
  password: string;
  intent: string;
}) {
  const store = await readStore();
  const normalizedEmail = input.email.trim().toLowerCase();
  if (store.users.some((user) => user.email.toLowerCase() === normalizedEmail)) {
    throw new Error("EMAIL_EXISTS");
  }

  const user: StoredUser = {
    id: makeId("user"),
    name: input.name.trim(),
    email: normalizedEmail,
    passwordHash: sha256(input.password),
    role: "researcher",
    intent: input.intent.trim(),
    createdAt: new Date().toISOString(),
  };

  store.users.push(user);
  await writeStore(store);
  return user;
}

export async function verifyUserPassword(email: string, password: string) {
  const user = await findUserByEmail(email);
  if (!user) {
    return null;
  }
  return user.passwordHash === sha256(password) ? user : null;
}

export async function createSession(userId: string) {
  const store = await readStore();
  const session: StoredSession = {
    id: makeId("session"),
    userId,
    createdAt: new Date().toISOString(),
  };
  store.sessions = store.sessions.filter((item) => item.userId !== userId);
  store.sessions.push(session);
  await writeStore(store);
  return session;
}

export async function findSession(sessionId: string) {
  const store = await readStore();
  return store.sessions.find((session) => session.id === sessionId) ?? null;
}

export async function deleteSession(sessionId: string) {
  const store = await readStore();
  store.sessions = store.sessions.filter((session) => session.id !== sessionId);
  await writeStore(store);
}

export async function findUserById(userId: string) {
  const store = await readStore();
  return store.users.find((user) => user.id === userId) ?? null;
}
