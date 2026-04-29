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
- [~] 继续对齐头部、细节间距、轮播表现、图像/GIF 占位与 hover/active 状态（本轮已进一步对齐公开站：移除本地化 header wordmark、将右上角入口压缩为悬浮圆形图标组、重排 hero 与 auth card 的纵向节奏、把 Login 卡片改为橙色主按钮 + Google/Apply Now 分层结构，并把 Best Cases 标题切成官方的黑橙组合；后续又补强 hero 左侧网络图的同心光晕、连接线、节点高亮与右侧 feature preview 的分层 mockup，使左侧 cluster 收敛在独立列内、视觉更接近公开站；本轮继续补齐 landing 顶部圆形入口与 docs 顶部 Appearance/Language 的首层弹层态，并保留原有帮助/隐私/设置入口的可达性；本轮进一步将顶部 Contact Us 图标改为更接近公开站的耳机/支持语义，且把 hero 默认右侧 preview 切换为公开站可见的 Autonomous Experiment Execution 任务列表卡片，补齐 33% 进度与橙色首行高亮；本轮继续把首屏默认 feature 状态固定到公开站当前首见的 Autonomous Experiment Execution，并已通过浏览器复核公开站首屏/轮播真实顺序差异，确认本地当前仍需继续收敛 hero 默认态与 Best Cases 默认首屏；本轮改为以公开站 fresh load 为准，将首屏默认态重新切回 Deep Literature Analysis，修正默认 preview 判定与内容映射漂移，并补上首屏默认态回归测试；本轮继续用浏览器复核公开站与本地 fresh load，确认公开站当前默认 preview 实际为摘要/图表式 Deep Literature Analysis，因此移除本地误加的 33% 任务列表默认态，使首屏结构重新与公开站一致；本轮进一步确认公开站 hero 自动轮播会造成 fresh-load 默认态漂移，因此本地改为锁定默认 Literature Analysis/Deep Literature Analysis 首屏，同时保留点击切换交互；本轮继续收紧首屏标题段落宽度、hero 与 auth card 横向/纵向间距、auth 卡片内边距，以及 Best Cases 与 hero 之间的留白，整体 fresh-load 构图更接近公开站；本轮继续依据浏览器视觉复核收紧 hero 纵向节奏、feature rotator 列宽与 auth 卡片宽度，并把 Best Cases 首屏卡片上移，减少首屏空白；本轮新增浏览器复核后把 Best Cases fresh-load 默认首屏切换为公开站当前可见的 Automated Report Generation，并同步校正下一张为 Peer Review Response Support 的顺序与回归测试；本轮继续补齐 Contact Us 弹层的 Discord / Email 外链文案断言，并将页脚两行文案改为居中布局，使本地公开页更贴近 live site 当前表现；本轮继续基于 fresh-load 视觉复核收紧左侧 hero network 的包围盒、连接线与节点位置，缩窄 auth card 宽度与 hero 间距、强化顶部圆形按钮的奶白玻璃质感，并同步压缩 Best Cases 模块高度与右侧文案纵向节奏；本轮继续以浏览器比对 live site 与本地，改把顶部三枚入口从圆形收敛为更接近公开站的圆角方形按钮，缩小图标尺度并进一步压紧 hero 左侧 feature cluster 与右侧 auth card 的 gutter，同时补充对应回归断言；本轮重新对照 live site fresh load 视觉与浏览器分析，确认公开站当前顶部三枚入口实际仍为圆形按钮，因此将本地 utility triggers 改回更贴近 live site 的小尺寸圆形外观，同时略微收窄 auth card、放大 hero/auth gutter，并继续压缩 Best Cases 前导留白；本轮再次用 fresh-load 浏览器比对 live site 与本地，确认公开站顶部圆形入口之间更紧凑、hero/auth 之间留白更宽而 Best Cases 区块相对更靠下，因此继续缩小三枚顶部圆形 trigger、收紧它们的水平间距、进一步放大 hero/auth gutter，并把 Best Cases 顶部外边距调回更 airy 的公开站节奏，同时补齐对应回归断言；本轮继续复核 live site 与本地 fresh load，对齐结果为：顶部三枚入口进一步收紧为更小尺寸/更紧间距；本轮继续根据 live site fresh-load 浏览器视觉复核，进一步把左侧 radial cluster 收窄为更紧凑的独立构图：缩小节点与主圆尺寸、左移上/下节点、减弱中心光晕与连接线强度、压缩标签字号，并为该列宽度增加回归断言；本轮再基于 live site 与本地 fresh-load 浏览器视觉对比，连续两次调小并重排 radial cluster：先缩小空白包围盒、收紧三枚外圈节点与中心主圆的相对距离、提高连线/标签对比，再回调外圈 spread 让 footprint 更接近公开站；验证后当前主要差距已从“过小过散”收敛到“footprint 仍略紧、connector geometry 仍可更自然”，下一轮优先继续扩展左侧 spread 与连线角度，而非先动整体色彩体系）
- [x] 增加更多贴近公开站点的案例轮播视觉与动画细节
- [~] 继续精修左侧 hero radial cluster 的节点位置、标签层次与连接线精致度，减少当前 live-site 对比下最明显的视觉偏差（本轮基于 live site 与本地 fresh-load 浏览器视觉对比，连续两次调小并重排 radial cluster：先缩小空白包围盒、收紧三枚外圈节点与中心主圆的相对距离、提高连线/标签对比，再回调外圈 spread 让 footprint 更接近公开站；验证后当前主要差距已从“过小过散”收敛到“footprint 仍略紧、connector geometry 仍可更自然”，下一轮优先继续扩展左侧 spread 与连线角度，而非先动整体色彩体系）

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
