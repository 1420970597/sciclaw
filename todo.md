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
- [x] 完成 dark hero、feature rotator、嵌入式 auth card、best-cases 区块、footer 首版
- [~] 继续对齐头部、细节间距、轮播表现、图像/GIF 占位与 hover/active 状态（已多轮对齐公开站：移除本地化 header wordmark、将右上角入口改为公开站风格的悬浮 utility controls、反复收敛 hero 与 auth card 的横纵节奏、Login 卡层次、Best Cases 标题样式、Contact Us 外链弹层、fresh-load 默认 hero/Best Cases 状态与相应测试；上一轮继续把顶部三枚圆形入口轻微缩小并上提、收紧组内间距，同时缩窄 auth card、增大 hero/auth gutter、略微放大 Best Cases 顶部留白，并拉开 hero preview 文案与 CTA 的留白；上一轮后又继续把 utility controls 略微放大并加深描边/阴影，同时保留圆形命中区与菜单 contract，避免与 live site 对比时过于发虚；本轮进一步把三枚 utility controls 再轻微做实并收紧分组、略微缩窄并下压 auth card、减少 hero/auth 横向脱节，同时继续拉开 preview 内部 micro-layout（summary/evidence block、柱状图底部 tiny labels、正文与 CTA 留白），并保持测试与菜单交互 contract 同步。所有改动均已通过 Vitest（`pnpm test -- src/app/page.test.tsx`）、ESLint、Next build、docker compose config、docker compose up -d --build、127.0.0.1:3001 HTTP 200、静态安全检查、独立 reviewer 与浏览器 fresh-load QA。当前页面 coherent 且无明显炸版，但与 live site 相比，radial cluster 的标签锚点与层次仍是最明显剩余差距，后续继续做小步视觉精修。）
- [x] 增加更多贴近公开站点的案例轮播视觉与动画细节
- [~] 继续精修左侧 hero radial cluster 的节点位置、标签层次与连接线精致度，减少当前 live-site 对比下最明显的视觉偏差（上一轮继续依据 fresh-load live/local 浏览器比对做更克制的收敛：把三枚外圈节点进一步外推、上提或下沉，缩窄标签宽度、增加行高，并细化连接线与中心光晕，使 radial cluster 的连接关系更轻、更不发雾；本轮继续做 cluster crispness 小步收敛：进一步把左上/左下/右上节点外推，微调连接线长度和角度、提高非激活标签对比度、降低中心光晕雾感，并把 preview 柱状图底部 tiny labels 加字距与对比度，减少 live-site 对比下的拥挤感。Vitest（`pnpm test -- src/app/page.test.tsx`）、ESLint、Next build、docker compose config、docker compose up -d --build、127.0.0.1:3001 HTTP 200、静态安全扫描、独立 reviewer 与 fresh-load browser QA 均已复跑。当前剩余最明显差距仍集中在 radial cluster 仍略软、preview 正文/标签空气感仍稍紧；下一轮优先继续做 connector crispness、label avoidance 与 preview microcopy 拆分的小步精修，而不是大改整体布局。）

## Phase C — Help shell 与公开文档（P1）
- [x] 建立 `/help/[slug]` 文档路由与 docs shell 三栏结构
- [x] 完成已知 help 路由：getting-started / projects / chat / skills / library / tasks / foundry / persona / im / settings
- [x] 加入顶部 search / appearance / language 控件占位与右侧 TOC
- [~] 继续根据公开文案与页面细节补全文档内容、排版层次、滚动状态与交互微调（本轮已对齐接近公开站的浅色 docs shell、图标化侧栏、Chat/Settings 文案与 `/chat` 回流；本轮继续把 getting-started 正文首段与 live site 一致地保留为导语段，同时新增独立的 `What is SciClaw` 目录锚点，避免 TOC 出现无正文锚点）

## Phase D — Privacy / 公共交互细节（P2/P3 部分）
- [x] 完成 `/privacy` 页面公开信息摘要复刻
- [~] 继续补齐公共 auth 卡片的更细粒度状态、表单提示与视觉拟真（本轮已对齐 Login 面板的 Email address / Verification code 占位、disabled CTA、Google 按钮大小写与 Privacy Policy 提示）
- [~] 引入更多 settings / theme / language 菜单交互细节（本轮已把 docs/settings 文案与浅色 legal shell 对齐公开站信息架构）

## Phase E — App shell 占位 IA（P4）
- [x] 建立 `/chat` 公共 app shell 占位页（当前先无缝跳转至 `/help/chat`，避免空白路由）
- [x] 建立 project / session / library / tasks / foundry / persona / im / settings 的应用内 IA 占位
- [~] 让 landing 与 docs 导航正确串联到 app shell 占位（本轮已把 `/chat` 从简单回流升级为浅色 app shell 占位，下一轮继续补齐更多内部入口与 role-specific 细节）

## Validation / review cadence
- [x] 本地参考资料保留在 `docs/reference-local/` 并通过 `.git/info/exclude` 忽略
- [x] 每个里程碑后执行 docker compose config / tests / build / compose up -d --build
- [x] 每个里程碑后执行 3 轮评审并提交中文 commit + push
