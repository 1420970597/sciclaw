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
- [~] 继续对齐头部、细节间距、轮播表现、图像/GIF 占位与 hover/active 状态；本轮已完成一个更小步的 landing hero fidelity slice：在不改动 `/root/nexus-mail` 任意服务/端口的前提下，仅于 `/root/sciclaw` 收紧 top utility triggers 的存在感与间距，轻推 radial cluster 靠近中心 preview 并增强 bridge 感，同时放松 preview 底部 micro labels 与正文下方 `Get started` 的垂直呼吸。该里程碑已通过 `pnpm --dir /root/sciclaw test -- src/app/page.test.tsx`（实际仍复跑 4 个 Vitest 文件 / 21 tests 全绿）、`pnpm --dir /root/sciclaw lint`、`pnpm --dir /root/sciclaw build`、`docker compose config`、`docker compose up -d --build`（继续仅发布到 `3001`，未碰现有业务端口）、Python HTTP 200 校验 `/` `/chat` `/help/getting-started`、`git diff --check`、静态安全扫描 0 命中、独立 reviewer 复审与 fresh-load live/local browser QA。最新 QA 认为 top utility triggers 更易感知、`Get started` 层级更干净、micro labels 比上一轮更不拥挤；当前最明显剩余差距仍是 radial cluster 与主 preview 之间的横向桥接感仍略松，底部 micro labels 也还有轻微偏紧，下一轮继续优先做 cluster→preview cohesion 与 preview 内部微密度收敛，而不是大改整体骨架。

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
- [~] 让 landing 与 docs 导航正确串联到 app shell 占位；本轮已完成一次更偏 `/chat` 密度治理的小步 vertical slice：在不影响 `/root/nexus-mail` 任何现有服务/端口、继续仅使用 `3001` 的前提下，收短 Tasks / Session output / Foundry handoff 的局部文案，为 task rows 增加可扫描的 meta pills（如 `12 PDFs queued`、`Owner · Research lead`、`Export lane`），放大 right rail 间距与导出行内留白，并把中心两组三列卡片在 `xl` 下改为固定更宽列宽+`justify-between`，同时让卡片顶部 meta badges 使用 `self-start` 避免视觉挤压。该里程碑已通过 `pnpm --dir /root/sciclaw test -- src/app/chat/page.test.tsx`（实际仍复跑 4 个 Vitest 文件 / 21 tests 全绿）、`pnpm --dir /root/sciclaw lint`、`pnpm --dir /root/sciclaw build`、`docker compose config`、`docker compose up -d --build`、Python HTTP 200 校验 `/` `/chat` `/help/getting-started`、`git diff --check`、静态安全扫描 0 命中、独立 reviewer 复审，以及 fresh-load local browser QA。最新 QA 认为 right rail 继续保持更 breathable、export/handoff 区域较上一轮更不 boxed-in，中心列也比上一轮更不 jammed，且未见明显 overlap/clipping；当前剩余最明显差距收敛为中心窄列中的少数 tiny pills/badges 仍略显紧、整页中心信息密度仍高于 live marketing landing，下一轮继续优先减少中心卡片的同屏文字负荷与 pill 数量，而不是扩张 IA。
- [~] 执行检查点：在继续保持 live `https://sciclaw.ai/chat` fresh-load 仍为 marketing landing、且不影响 `/root/nexus-mail` 任意现有服务/端口的前提下，本轮对本地 `/chat` 做了一次更聚焦的密度收敛 vertical slice：将中心区下半部三张 flow cards 收敛为两张主卡，并新增 `View all flow checkpoints` 折叠提示卡，把更多 flow checkpoint 显式回收到 Tasks / Foundry 语义里，避免桥接预览继续堆叠窄卡；同时把右侧 `Evidence chain / Open risk / Handoff route` 三块小卡合并成单一 `Status board` 分组卡，并让 `signals` 数量从 `group.items.length` 派生，减少 right rail 的碎片感。该里程碑已通过 `pnpm --dir /root/sciclaw test -- src/app/chat/page.test.tsx`（实际仍复跑 4 个 Vitest 文件 / 21 tests 全绿）、`pnpm --dir /root/sciclaw lint`、`pnpm --dir /root/sciclaw build`、`docker compose config`、`docker compose up -d --build`、Python HTTP 200 校验 `/` `/chat` `/help/getting-started`、`git diff --check`、静态安全扫描 0 命中、独立 reviewer 复审，以及 fresh-load local browser QA。最新 QA 认为中心区比上一轮更易扫读、right rail 也比上一轮更不 cramped；当前最明显剩余密度问题已收敛为中心列上/中段若干窄卡仍有较多换行，以及 `Active sessions` 列表仍是整页阅读负荷最高的区域，下一轮优先继续减少这些中心窄卡与 session list 的同屏文字压力。

## Validation / review cadence
- [x] 本地参考资料保留在 `docs/reference-local/` 并通过 `.git/info/exclude` 忽略
- [x] 每个里程碑后执行 docker compose config / tests / build / compose up -d --build
- [x] 每个里程碑后执行 3 轮评审并提交中文 commit + push
