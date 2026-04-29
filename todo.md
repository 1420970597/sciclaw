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
- [~] 继续对齐头部、细节间距、轮播表现、图像/GIF 占位与 hover/active 状态（本轮已进一步对齐公开站：移除本地化 header wordmark、将右上角入口压缩为悬浮圆形图标组、重排 hero 与 auth card 的纵向节奏、把 Login 卡片改为橙色主按钮 + Google/Apply Now 分层结构，并把 Best Cases 标题切成官方的黑橙组合；本轮继续补齐 landing 顶部圆形入口与 docs 顶部 Appearance/Language 的首层弹层态，并保留原有帮助/隐私/设置入口的可达性；下一轮继续补 hero 左侧网络图与 feature preview 的图形细节）
- [x] 增加更多贴近公开站点的案例轮播视觉与动画细节

## Phase C — Help shell 与公开文档（P1）
- [x] 建立 `/help/[slug]` 文档路由与 docs shell 三栏结构
- [x] 完成已知 help 路由：getting-started / projects / chat / skills / library / tasks / foundry / persona / im / settings
- [x] 加入顶部 search / appearance / language 控件占位与右侧 TOC
- [~] 继续根据公开文案与页面细节补全文档内容、排版层次、滚动状态与交互微调（本轮已对齐接近公开站的浅色 docs shell、图标化侧栏、Chat/Settings 文案与 `/chat` 回流）

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
