# SciClaw Clone Execution Todo

## Status legend
- [x] completed
- [~] in progress
- [ ] pending

## Phase A — 基础初始化
- [x] 初始化 Next.js 16 + React 19 + TypeScript + Tailwind 4 项目骨架
- [x] 补齐 Dockerfile、docker-compose.yml、Vitest、ESLint、README
- [x] 建立 landing 页面首版与基础测试

## Phase B — Landing 高保真复刻（P0）
- [x] 持续推进 hero / utility controls / radial cluster / micro-label 的高保真小步收敛，保留既有执行记录与验证结论
- [~] 继续对齐头部、细节间距、轮播表现、图像/GIF 占位与 hover/active 状态；下一轮继续优先做 radial cluster 与 preview 的最终桥接感、tiny labels 与整体 crispness 的更小步收敛，而不是大改整体骨架

## Phase C — Help shell 与公开文档（P1）
- [x] 建立 `/help/[slug]` 文档路由与 docs shell 三栏结构
- [x] 完成已知 help 路由：getting-started / projects / chat / skills / library / tasks / foundry / persona / im / settings
- [x] 加入顶部 search / appearance / language 控件占位与右侧 TOC
- [~] 继续根据公开文案与页面细节补全文档内容、排版层次、滚动状态与交互微调

## Phase D — Privacy / 公共交互细节（P2/P3 部分）
- [x] 完成 `/privacy` 页面公开信息摘要复刻
- [~] 继续补齐公共 auth 卡片的更细粒度状态、表单提示与视觉拟真
- [~] 引入更多 settings / theme / language 菜单交互细节

## Phase E — App shell 占位 IA（P4）
- [x] 建立 `/chat` 公共 app shell 占位页与 project / session / library / tasks / foundry / persona / im / settings 的应用内 IA 占位
- [x] 多轮将 `/chat` 从 docs 风格说明块收敛为 docs→workspace bridge：补齐 sticky shell、Project memory rail、Session timeline、Tasks、Session output、Foundry handoff 与对应路由/测试
- [x] 本轮继续完成一次更偏 `/chat` right-rail breathing-room 与 export copy tightening 的小步收敛：保持 live `https://sciclaw.ai/chat` fresh-load 仍是公开 marketing landing 的前提下，继续将本地 `/chat` 作为 docs→workspace bridge，并把主区栅格扩展为 `xl:grid-cols-[minmax(0,1.04fr)_minmax(500px,0.96fr)]` / `2xl:grid-cols-[minmax(0,1fr)_minmax(528px,1fr)]`，同时把右侧 rail 调整为 `xl:grid-cols-[1.06fr_0.94fr]` / `2xl:grid-cols-[1.04fr_0.96fr]`，让 Tasks 与 Session output 的视觉负载更均衡；再将 `Session output` / `Foundry handoff` 文案收短为更紧凑但仍保留语义的 product copy（如 `Keep the current answer... visible in one bridge card.`、`Foundry reviewer packet`、`Keep citations and checkpoints attached to the draft.`、`Presentation-ready talking points for Foundry.`），并同步收紧 export/summary 文案容器宽度，减少右侧 rail 的 cramped feeling 而不丢失 Foundry destination 与 review/traceability 语义。该里程碑已通过 `pnpm --dir /root/sciclaw test -- src/app/chat/page.test.tsx`（实际仍复跑 4 个 Vitest 文件 / 21 tests 全绿）、`pnpm --dir /root/sciclaw lint`、`pnpm --dir /root/sciclaw build`、`docker compose config`、`docker compose up -d --build`、Python HTTP 200 校验 `/` `/chat` `/help/getting-started`、`git diff --check`、静态安全扫描 0 命中、独立 reviewer 复审与 fresh-load local browser QA。最新 QA 认为 `/chat` 右侧 rail 比上一轮更不拥挤、Tasks/right-rail balance 更均衡，页面无明显 clipping/overlap；当前剩余最明显密度问题继续收敛为中心下方三张 flow cards 与顶部窄卡仍是整页最密区域，下一轮继续优先减少这些窄卡的同屏说明密度，而不是扩张新模块。
- [~] 让 landing 与 docs 导航正确串联到 app shell 占位；下一轮继续优先减少 `/chat` 顶部 summary cards 与下方 flow cards 的同屏密度，并保持 bridge 语气诚实、不把本地占位页误写成真实 workspace

## Validation / review cadence
- [x] 本地参考资料保留在 `docs/reference-local/` 并通过 `.git/info/exclude` 忽略
- [x] 每个里程碑后执行 docker compose config / tests / build / compose up -d --build
- [x] 每个里程碑后执行 3 轮评审并提交中文 commit + push
