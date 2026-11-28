/* ===== 竞品观测 · 收录数据 =====
   口径：2026-07-01 起收录，截至 2026-11-28。全部是公开信息，每条附来源链接。
   2026-11-17 补收 11-16 的 1 条（Google Docs 对比 Word 文件）。
   7 月 15 条沿用 2026-11-07 检索结果；8–11 月 45 条于 2026-11-15 检索并逐条读过原文（含补查的 Google 8、9 月上中旬 7 条）。
   「官方」= 厂商自己的更新日志或博客；「媒体」= 新闻报道或转载（官方原文没能读到时使用）。
   WPS 8–11 月、钉钉文档除 9/23 外，没有检索到可核实的新发布，如实留空。 */
window.CW_DATA = (function () {
const GWU7 = ['Google Workspace Updates', 'https://workspaceupdates.googleblog.com/2026/07'];
const gw = (slug) => ['Google Workspace Updates', 'https://workspaceupdates.googleblog.com/' + slug];
const MSR = ['Microsoft 365 Copilot 发布说明', 'https://learn.microsoft.com/en-us/microsoft-365/copilot/release-notes'];
const MSA = ['Microsoft Copilot 博客 · 8 月更新', 'https://techcommunity.microsoft.com/blog/microsoft365copilotblog/what%E2%80%99s-new-in-microsoft-copilot--august-2026/4551960'];
const MSS = ['Microsoft Copilot 博客 · 9 月更新', 'https://techcommunity.microsoft.com/blog/microsoft-copilot-blog/what-s-new-in-microsoft-copilot-september-2026/4559107'];
const MSO = ['Microsoft Copilot 博客 · 10 月更新', 'https://techcommunity.microsoft.com/blog/microsoft-copilot-blog/what%27s-new-in-microsoft-copilot--october-2026/4568528'];
const NTN = (d, v) => [v ? `Notion ${v} 发布说明` : 'Notion 发布说明', `https://www.notion.com/releases/2026-${d}`];
const CLG = ['Claude 更新日志', 'https://claude.com/docs/cowork/changelog'];

/* [日期, 竞品, 主题, 来源类型, 标题, 摘要, [来源名, 链接]]，按日期倒序 */
const U = [
  /* ---------- 11 月（截至 11-28） ---------- */
  ['11-24','claude','ship','off','Claude 可以把产物安装成 Mac 和 Windows 应用','在 Claude 桌面版里把产物装成独立应用，有自己的窗口和图标，改产物后应用会自动更新；可使用 Claude 和已连接的应用，调用计入套餐额度。权限分默认（仅浏览器能力）、应用权限和完全访问三档，每次更新后要重新授权。测试版向各档用户开放，需桌面版 6.28899.0 或更高；Team 默认开启但完全访问默认关闭，Enterprise 需所有者打开。Claude Docs、Slides 和 Sheets 不能这样安装。',['Claude 官方文章','https://claude.com/resources/articles/install-as-app']],
  ['11-20','ms','scope','off','Copilot 在 Word、Excel、PowerPoint 里可用 GPT-6.2','GPT-6.2 Sol 向符合条件的用户在 Copilot Chat、Cowork、Copilot Studio，以及 Excel、PowerPoint、Word 中全球推开；Astra 先在 Cowork 和 Studio 推开，Frontier 用户还能在 Chat 和这三款应用里使用。管理员可在 Microsoft 365 管理中心配置开放范围。',['Microsoft Copilot 博客','https://techcommunity.microsoft.com/blog/microsoft-copilot-blog/available-today-openais-gpt-6-2-sol-and-gpt-6-2-astra-in-microsoft-copilot/4574229']],
  ['11-20','google','ship','off','加密的 Google 文档可以多人同时编辑和评论','客户端加密的文档此前一次只能一个人改。Enterprise Plus 等符合条件的客户申请加入测试后，新建的加密文档默认可以多人实时一起写、改、评论，密钥仍只由客户掌握。',gw('2026/11/now-available-in-beta-collaborate-in-real-time-on-client-side-encrypted-Google-Docs.html')],
  ['11-20','gpt','scope','off','ChatGPT Space 开始向 Plus 用户开放','18 岁及以上的 Plus 用户可以在 Space 里做出可交互的页面和演示，并邀请同样开通了 Space 的人一起改；页面和幻灯片还能按已连接的应用自动更新。免费用户打不开别人分享的页面或演示。',['ChatGPT 发布说明','https://help.openai.com/en/articles/6825453-chatgpt-release-notes']],
  ['11-19','google','meet','off','Meet 演示时可以直接分享文档、表格和幻灯片链接','演示者可以把正在放的 Docs、Sheets、Slides 链接发到会中，并在画面上显示文件卡片；也可以不离开会议就改 Drive 权限。只发链接不会自动改权限。这项能力默认关闭。',gw('2026/11/seamlessly-share-presented-file-links-with-viewers-in-Google-Meet.html')],
  ['11-18','google','ship','off','Google Docs 新增图注、交叉引用和图注目录','可插入自动编号的图、表、公式标签，增删后自动重新排序；交叉引用的显示文字随图注更新；还能生成带页码的可点击图注目录；与 Word（.docx）导入导出兼容；面向所有 Workspace 和个人账号，默认开启。',gw('2026/11/add-inline-captions-cross-references-and-tables-of-captions-in-Google-Docs.html')],
  ['11-16','google','ship','off','Google Docs 可以直接对比两个 Word 文件，不用先转换','文档对比工具支持 .docx，比较 Word 文件时不必先转成 Google 文档，Drive 里不会多出重复文件；面向所有 Workspace 和个人账号，默认开启。',gw('2026/11/review-edits-across-microsoft-word-docx-and-Google-Docs-files.html')],
  ['11-12','claude','ship','off','Claude 任务里的文件可直接下载，Markdown 预览支持 Mermaid 图','在电脑上运行的任务产出的文件新增下载选项；回复和 Markdown 文件预览会渲染 Mermaid 图。',CLG],
  ['11-11','google','ship','off','Sheets 画布可以发布成独立的只读链接','把 Sheets 画布发布到单独的链接，访问权限与原表格的共享设置分开；目前仅限网页版。',gw('2026/11/publish-sheets-canvas-as-standalone-link.html')],
  ['11-09','google','agent','off','Gemini 技能在 Docs、Slides、Drive 等应用上线','可复用的自定义指令在 Workspace Studio、Docs、Gmail、Slides、Drive、Chat 中上线，Sheets 和 Meet 暂不支持；仅限 18 岁以上用户。',gw('2026/11/skills-in-workspace.html')],

  /* ---------- 10 月 ---------- */
  ['10-30','google','inline','off','Gemini 在 Slides 里一次修改多页或整份演示','在侧栏用一句话修改多页或整份演示，改动直接作用于原生幻灯片，可以撤销；面向 Business、Enterprise 和 Google AI Pro/Ultra 用户。',gw('2026/10/edit-entire-presentations-with-gemini-in-Google-Slides.html')],
  ['10-30','ms','deck','off','PowerPoint 换用 Sonnet 5.5，能生成交互式页面','新模型改善生成演示的版式、视觉层级和模板套用；可从提示词或现有内容生成仪表盘、时间线、对比等交互式页面。',MSO],
  ['10-30','ms','agent','off','Copilot Notebooks 升级为 Copilot Workspaces，可多人实时共编','团队共享的空间汇集上下文、成员和工作文件，带实时光标；可在空间里创建和编辑 Word、Excel、PPT，先向 Frontier 用户开放。',MSO],
  ['10-30','ms','inline','off','Excel 新增「清理数据」技能','扫描工作簿里的重复项、格式不一致和错误的数据类型，给出修复建议，由用户审阅确认后再改。',MSO],
  ['10-30','ms','ship','off','Word 支持 Markdown 快捷键和与 Markdown 互贴','可用 Markdown 快捷键排版，Word 与 Markdown 之间复制粘贴保留格式，网页版可以互转 .md 和 .docx 文件。',MSO],
  ['10-29','tx','agent','media','腾讯文档重做编辑器，让 Agent 与人围绕同一份文档协作','在腾讯全球数字生态大会上发布：AI 和 Agent 可以直接读取上下文、编辑内容，与人共用一份文档并实时同步修改；兼容 DOCX、XLSX、PPTX，也支持 Markdown、HTML。',['网易 · AI前线','https://www.163.com/dy/article/LB0I6C9D05566ZHB.html']],
  ['10-29','claude','ship','off','Claude Docs 可从分享菜单发送到 Canva 等应用','在独立页面打开 Claude Doc 时，分享菜单新增「发送到」合作应用的选项，例如 Canva。',CLG],
  ['10-28','google','inline','off','「Fill with Gemini」给每个单元格标出网页来源','Sheets 的 AI 填充会在每个生成的单元格里标出引用的网页来源，单次请求最多可覆盖 3000 个单元格。',gw('2026/10/fill-with-gemini-now-provides-cell-level-citations-for-web-sources-and-supports-larger-requests.html')],
  ['10-21','google','deck','off','Docs Live：在手机上用语音写出结构化文档','Docs 移动端的语音协作写作，可结合 Gmail、Drive、Chat 和网页内容起草结构化文档；已开启 Gemini in Docs 的用户默认可用。',gw('2026/10/create-structured-documents-using-just-your-voice-with-Docs-Live-in-Google-Docs-on-mobile.html')],
  ['10-19','notion','agent','off','Notion 重做 Agent：自带电脑和浏览器，可连续工作 24 小时','Agent 有自己的电脑和浏览器，单个任务最长可以跑 24 小时；模型路由 Auto 宣称以约九成更低的成本达到前沿模型的效果。',NTN('10-19')],
  ['10-19','google','inline','off','Gemini in Sheets 用自然语言分析整个 BigQuery 数据集','在连接表格里提问，Gemini 直接查询 BigQuery 的全量数据，而不只是表格里可见的部分，并能生成可刷新的看板。',gw('2026/10/analyze-bigquery-data-using-natural-language-with-Gemini-in-Google-Sheets.html')],
  ['10-19','google','meet','off','会议结束后，Google Chat 自动发出会议回顾卡片','开启「帮我记笔记」的会议结束后，会议的 Chat 空间会收到一张卡片，包含摘要、关键决定、待办和笔记链接。',gw('2026/10/follow-through-on-your-meeting-tasks-with-meeting-recaps-in-Google-Chat.html')],
  ['10-16','gpt','deck','media','ChatGPT Slides 上线：从对话或文件生成演示，可导出 PPT','可从对话、文件或大纲生成演示并直接编辑，在共享评论里 @ChatGPT 协同修改；网页版可导出 PowerPoint、PDF 和 Google 幻灯片。',['BigGo Finance','https://finance.biggo.com/news/b520b65b-a354-4029-9b83-27ccbb38ad95']],
  ['10-13','notion','agent','off','Notion 3.8：Agent 可连接 150 多个工具，可用 ChatGPT 套餐驱动','Notion Agent 和自定义 Agent 能连接 150 多个工具，管理员可以查看和撤销 AI 工具连接；可以用 ChatGPT Plus 或 Pro 套餐驱动 Notion AI。',NTN('10-13', '3.8')],

  /* ---------- 9 月 ---------- */
  ['09-30','ms','inline','off','PowerPoint Copilot 加入技能，管理员可向全公司下发','把多步骤流程打包成可复用的技能，预置「讲解这份演示」「优化标题」等；管理员可以把批准的技能发布给指定用户、群组或全组织。',MSS],
  ['09-30','ms','inline','off','Word 里 Copilot 的回答标出网页和工作文件来源','Copilot 在回答里显示所依据的网页和工作来源，还能帮忙排列文档中的图片和形状。',MSS],
  ['09-30','google','inline','off','Docs、Sheets、Slides 的 API 开放评论和修改建议','开发者可通过 API 创建、读取和管理评论；Docs 还支持以「建议」形式提交修改，由用户审阅后再接受。',gw('2026/09/programmatic-comment-and-suggestion.html')],
  ['09-29','gpt','agent','media','OpenAI DevDay：ChatGPT 推出团队空间 Space 和协作文档 Pages','Space 是带助手的团队共享空间，面向 Pro、Business、Enterprise；Pages 是人和 Agent 共同编辑的文档；协作版 Slides 宣布将在几周内上线。',['The Decoder','https://the-decoder.com/openais-reveals-a-new-chatgpt-that-looks-less-like-a-chatbot-and-more-like-an-operating-system/']],
  ['09-29','claude','ship','off','Claude 可从新对话直接创建 Google 文档、表格和幻灯片','连接 Google Drive 后，新对话的输出选择器可以直接创建 Google 文档、表格或幻灯片。',CLG],
  ['09-23','google','inline','off','Docs 里的 Gemini 可引用 Gemini Notebook 的资料并标出处','在 Docs 中引用一个 Gemini Notebook，Gemini 起草时会基于其中的资料，并在正文里附上行内引用。',gw('2026/09/ground-ai-prompts-in-google-docs-on-existing-sources-from-Gemini-Notebook.html')],
  ['09-23','dd','scope','media','钉钉发布四个 AI 商业版本，10 月 21 日起生效','新增 AI 基础版、AI 高级版、AI 尊享版、AI 旗舰版，均接入千问办公；Office 套件、AI 表格高级功能并入商业版本，免费标准版保留。',['腾讯新闻','https://news.qq.com/rain/a/20260924A0CADK00']],
  ['09-22','google','meet','off','Google 会议笔记新增一页式 Quick notes','用一页概括会议要点、待办和结论，成为「帮我记笔记」文档的默认标签页和会后邮件的默认摘要。',gw('2026/09/quick-notes-in-take-notes-for-me.html')],
  ['09-16','claude','deck','media','Claude Docs 上线：对话里生成可编辑文档，可导出 Word 和 PPT','在对话中创建、修改和分享文档，可导出 Word 和 PowerPoint；同时推出 Claude Slides，先向 Pro、Max 用户逐步开放。',['Windows Forum','https://windowsforum.com/news/claude-docs-adds-in-chat-editing-and-word-powerpoint-export.444692/']],
  ['09-15','google','agent','off','Docs、Sheets、Slides 侧栏的 Gemini 可通过 MCP 连接外部工具','Gemini 能使用 Asana、Atlassian Rovo、HubSpot、Salesforce 等工具的 MCP 集成，入口在 Docs、Sheets、Slides 侧栏和 Chat，默认开启。',gw('2026/09/connect-to-more-tools-with-gemini-in-Google-Workspace.html')],
  ['09-15','notion','agent','off','Notion 3.7：团队共享技能库，会议总结完成后自动触发 Agent','技能是教 AI 按团队方式做事的可复用说明，可以在团队里共享；自定义 Agent 能在会议总结完成后自动运行，也能调用其他 Agent。',NTN('09-15', '3.7')],
  ['09-10','google','scope','off','Google Sheets 单个表格上限翻倍到 2000 万个单元格','新建、已有和导入的表格都支持最多 2000 万个单元格（原为 1000 万），面向所有 Workspace 和个人账号。',gw('2026/09/doubled-cell-limits-in-google-sheets-now-generally-available.html')],
  ['09-09','google','deck','off','在 Gmail、Chat、Drive 里就能让 Gemini 生成文档、表格和幻灯片','Gemini 可以跨应用创建 Docs、Sheets、Slides，也能做深度研究、起草和发送邮件、安排会议；邮件和日程操作先预览再确认，目前仅支持英文。',gw('2026/09/create-content-schedule-events-and-coordinate-tasks-across-Workspace-regardless-of-what-app-you-are-in.html')],
  ['09-08','tx','agent','media','腾讯文档上线「AI 工作台」，AI 的修改直接写回原文件','可以选一份或多份腾讯文档作为任务上下文；AI 的修改直接写入原文件并可回溯，复杂任务可以转交 WorkBuddy 继续。',['新浪科技','https://finance.sina.com.cn/tech/roll/2026-09-08/doc-inircmes5969963.shtml']],
  ['09-02','google','inline','off','Gemini 自定义指令扩展到 Sheets、Slides、Gmail 侧栏和 Drive','此前只在 Docs 里可用的长期自定义指令，扩展到 Drive 和 Chat 的 Ask Gemini，以及 Gmail、Sheets、Slides 的 Gemini 侧栏。',gw('2026/09/custom-instructions-for-gemini-in-Workspace-now-available-in-more-apps.html')],
  ['09-02','google','ship','off','Google Vids 能把文档、PDF、Word 文件转成视频摘要','AI 写脚本、配旁白和画面，把 Docs、PDF 或 Word 文件变成讲解视频；Rapid Release 域已可用，管理员没有开关。',gw('2026/09/turn-google-docs-pdfs-and-word-files-into-video-summaries-in-Google-Vids.html')],
  ['09-02','claude','ship','off','Claude 桌面端可直接预览 Word、Excel、PPT','文件窗格改为标签页，可内联预览 PDF、Word、Excel、PowerPoint 文件；Claude 加入系统的「打开方式」菜单。',CLG],

  /* ---------- 8 月 ---------- */
  ['08-31','ms','inline','off','Word 只高亮 Copilot 改过的词，PowerPoint 能在评论里分派任务','Word 的修改高亮从整段缩小到被改动的词；PowerPoint Copilot 能在评论串里拉进相关人、分派后续任务，还能严格限定只用批准的模板和母版版式。',MSA],
  ['08-31','ms','inline','off','Excel 新增「变更历史」技能，能看出改动来自人还是 AI','汇总工作簿最近的修改，标出修改者是人还是 AI，可以撤销修改或恢复公式；Copilot in Excel 也开始保留历史对话。',MSA],
  ['08-31','ms','deck','off','Copilot Notebooks 按笔记内容推荐生成 Word、Excel、PPT','结合 WorkIQ 和笔记本内容推荐要生成的文档；笔记本同时出现在 Copilot 应用和 OneNote 里并保持同步。',MSA],
  ['08-31','ms','scope','off','Cowork 可选投入程度，/cost 显示任务消耗的额度','用户可以在 Light 到 Max 之间选择质量、速度和额度消耗的平衡；/cost 显示预计额度、本月剩余比例和重置日期。',MSA],
  ['08-28','notion','inline','off','Notion Agent 改为逐条提修改建议，由人批准','Agent 可以只提出修改而不直接改动页面，用户逐条确认，适合语法检查这类逐行修改。',NTN('08-28')],
  ['08-25','google','ship','off','Sheets 数据透视表的分组字段可保存复用，导入 Excel 也保留','分组后的字段作为可复用字段留在编辑器侧栏，从 Excel 导入的分组设置也会保留；面向所有 Workspace 和个人账号。',gw('2026/08/preserve-and-reuse-grouped-pivot-table-fields-in-Google-Sheets.html')],
  ['08-20','google','ship','off','Google Slides 新增录制入口，由 Vids 生成演示录像','Slides 右侧菜单新增「录制」，进入由 Vids 驱动的引导式录制并生成可分享的链接，旧的录制入口移到「查看」菜单。',gw('2026/08/record-presentations-in-google-slides-with-Google-Vids.html')],
  ['08-13','google','deck','off','Sheets 画布：用一句话把表格变成可读写的交互小应用','Gemini 按自然语言把表格数据做成看板、财务预测面板等交互视图，与原表双向同步并沿用原表权限；目前仅限网页端和英文界面。',gw('2026/08/use-google-sheets-canvas-to-visualize-data.html')],
  ['08-13','google','meet','off','Google 会议笔记支持线下会议','在 Meet 首页点「记笔记」即可为线下会议录音，结束后 Gemini 把结构化摘要、待办和完整转写整理成 Google 文档存进 Drive；安卓 8 月 11 日起陆续上线。',gw('2026/08/take-notes-with-me-for-in-person-meetings-is-now-available.html')],
  ['08-13','gpt','inline','media','ChatGPT 能在对话旁打开 Google 文档、表格和幻灯片','网页端可以把 Google 文档、表格或幻灯片放在对话旁阅读、总结和修改，需要先连接 Google Drive；共享云端硬盘暂不支持，移动端之后跟进。',['Nerdschalk','https://nerdschalk.com/chatgpt-can-now-open-google-docs-sheets-and-slides-side-by-side-in-chat/']],
  ['08-07','notion','agent','off','Notion 可从分享菜单直接把文档交给自定义 Agent','在分享菜单里就能把文档或数据库共享给自定义 Agent，不必再进 Agent 的设置页。',NTN('08-07')],

  /* ---------- 7 月（与首页原稿相同） ---------- */
  ['07-31','ms','inline','off','PowerPoint Copilot 能套用品牌素材、直接处理评论','可从 Microsoft 365 品牌套件调用 logo、图标、主题和字体；Copilot 能在演示里写评论、回复并标记解决。Excel 也新增品牌配色技能。',['Microsoft Copilot 博客 · 7 月更新','https://techcommunity.microsoft.com/blog/microsoft-copilot-blog/what%E2%80%99s-new-in-microsoft-365-copilot--july-2026/4538332']],
  ['07-28','google','inline','off','Docs 里的 Gemini 接管评论：总结讨论、起草回复、提修改建议','有编辑权限的用户可以让 Gemini 归纳评论串、代拟回复、添加评论，并给出文档修改建议。',GWU7],
  ['07-28','google','inline','off','Gemini 在 Docs 里按上下文生成和修改配图','用一句话生成或修改图片、图示和信息图，会参考文档已有内容；目前仅限网页端。',GWU7],
  ['07-27','google','meet','off','Meet 的 AI 会议笔记会把演示截图插进生成的文档','会议中共享的幻灯片截图会自动放进 Gemini 生成的 Google 文档笔记；即将正式发布，管理员可提前配置。',GWU7],
  ['07-18','tx','agent','media','腾讯 WorkBuddy 推出独立 App，可导入腾讯文档作资料','iOS、安卓、鸿蒙同步上线，支持连接电脑和云端工作两种模式；通过资料库连接腾讯文档与 ima 知识库。',['DoNews · WAIC 2026 报道','https://www.donews.com/news/detail/1/6645946.html']],
  ['07-16','google','scope','off','Docs 的 Gemini 写作功能新增 11 种语言','「帮我写」「帮我创建」「匹配文风」等能力扩展到 11 种新语言。',GWU7],
  ['07-15','wps','agent','media','金山办公发布灵犀专业版与 WPS Comate','灵犀专业版能调用个人文档和工作上下文，直接交付可继续编辑的成果；WPS Comate 作为组织级 AI 入口并入 WPS 365。',['新华网','http://www.news.cn/finance/20260717/006e0852cda042b880fd029554947189/c.html']],
  ['07-14','claude','ship','off','Claude 交付的 Markdown 直接在文档编辑器里打开','Cowork 交付的 Markdown 文件改为在文档编辑器中打开；输入框上方的文档栏新增实时字数和复制按钮。',CLG],
  ['07-09','gpt','deck','media','ChatGPT Work 上线：交代目标，Agent 产出文档、表格和演示','连接应用和文件后，Agent 分步完成多步骤项目，可产出文档、表格、演示、网页和报告；先向 Pro、Enterprise、Edu 开放。',['JustAINews','https://justainews.com/companies/chatgpt-work-brings-ai-agents-into-everyday-office-tasks/']],
  ['07-06','gpt','inline','media','ChatGPT for PowerPoint 对 Business 工作区正式可用','以侧栏形式在 PowerPoint 里起草初稿、改写现有页面、回答结构问题，并保留可编辑的页面结构；8 月 6 日前免费。',['Let’s Data Science','https://letsdatascience.com/news/openai-makes-chatgpt-for-powerpoint-generally-available-a5fc0a3e']],
  ['07-01','notion','agent','off','Notion 3.6：Claude、Cursor 能作为外部 Agent 在看板上领任务','可以在团队共享看板里给外部 Agent 派任务、像同事一样 @ 它们，并实时查看执行过程。',NTN('07-01', '3.6')],
  ['07-01','notion','ship','off','Notion Agent 能读写 Word、Excel、PPT 文件','Agent 可把 PPTX、XLSX、DOCX、PDF 当作上下文，也能从 Notion 页面或数据库直接生成这些文件。',NTN('07-01', '3.6')],
  ['07-01','notion','meet','off','AI 会议笔记按麦克风识别发言人','总结和待办能对应到具体的人；在别处录的音频也可以上传，由 Notion 转写和总结。',NTN('07-01', '3.6')],
  ['07-01','ms','deck','off','Copilot Notebooks 一键生成 Word 文档和 Excel 表格','根据笔记本里的内容和参考资料，起草结构化的 Word 文档或 Excel 表格，再到对应应用里继续编辑。',MSR],
  ['07-01','ms','inline','off','PowerPoint Copilot 接入 MAI-Image-2-Efficient 生图模型','在 PowerPoint 里快速生成配图，不用离开演示就能做图和改页面。',MSR],
];

/* 月报：标题、导语、各主题小结（由 AI 根据当月动态写成，只用上面出现过的事实） */
const REPORT = {
  11: {
    partial: true,
    h1: '11 月至今，AI 做出的东西<mark>能直接拿走</mark>',
    lead: '截至 11 月 28 日：Claude 可以把产物安装成 Mac 和 Windows 应用；加密的 Google 文档可以多人同时编辑；Meet 演示时可以直接把文档、表格和幻灯片的链接发给与会者；Copilot 在 Word、Excel、PowerPoint 里可用 GPT-6.2。完整月报在 11 月 30 日 18:00 生成。',
    sum: {
      agent: 'Google 的 Gemini 技能在 Docs、Gmail、Slides、Drive、Chat 中上线，Sheets 和 Meet 暂不支持。',
      ship:  'Claude 可以把产物安装成 Mac 和 Windows 应用；加密的 Google 文档开放多人实时协作测试；Google Docs 可直接对比 .docx，并支持图注、交叉引用和图注目录；Sheets 画布可以单独发布为只读链接。',
      meet:  'Meet 演示时可以分享 Docs、Sheets、Slides 链接，并在会议里调整 Drive 权限。',
      scope: 'Copilot 在 Word、Excel、PowerPoint 中接入 GPT-6.2；ChatGPT Space 开始向 Plus 用户开放。',
    },
  },
  10: {
    h1: '10 月，人和 Agent 开始<mark>改同一份文件</mark>',
    lead: '14 条新动态里，Agent 协作和正文内联各 4 条。腾讯文档重做编辑器，让 Agent 和人围绕同一份文档协作；微软把 Copilot Notebooks 升级为可多人共编的 Workspaces；Notion 的 Agent 能连续工作 24 小时。演示文稿这边，Gemini 能一次改整份幻灯片，ChatGPT Slides 上线，PowerPoint 能生成交互式页面。',
    sum: {
      inline: 'Gemini 能一次修改多页或整份演示，在 Sheets 里直接分析整个 BigQuery 数据集，「Fill with Gemini」给每个单元格标出网页来源；Excel 新增「清理数据」技能。',
      agent:  '腾讯文档重做编辑器，让 Agent 直接读写文档并与人同步修改；微软推出可多人实时共编的 Copilot Workspaces；Notion 3.8 让 Agent 连接 150 多个工具，随后重做 Agent 架构，单个任务可跑 24 小时。',
      deck:   'ChatGPT Slides 上线，可导出 PowerPoint、PDF 和 Google 幻灯片；PowerPoint 换用 Sonnet 5.5，能生成交互式页面；Google Docs 手机端可以用语音写出结构化文档。',
      ship:   'Word 支持 Markdown 快捷键和与 Markdown 互贴；Claude Docs 可以从分享菜单发送到 Canva 等应用。',
      meet:   '开启「帮我记笔记」的会议结束后，Google Chat 会自动发出会议回顾卡片。',
    },
  },
  9: {
    h1: '9 月，AI 厂商开始<mark>自己做文档</mark>',
    lead: 'Anthropic 推出 Claude Docs，在对话里直接生成可编辑、可导出 Word 和 PPT 的文档；OpenAI 在 DevDay 发布协作文档 Pages 和团队空间 Space。办公厂商这边，腾讯文档上线 AI 工作台，AI 的修改直接写回原文件；Google 和微软继续往 Docs、PowerPoint 里加引用来源和可复用的技能。',
    sum: {
      inline: 'Docs 里的 Gemini 可以引用 Gemini Notebook 的资料并给出行内引用，自定义指令也扩展到 Sheets、Slides 侧栏；Docs、Sheets、Slides 的 API 开放评论和修改建议；PowerPoint 加入可复用技能，Word 的回答标出来源。',
      agent:  '腾讯文档 AI 工作台把文件当上下文，修改直接写回原文件；Notion 3.7 推出团队共享技能，会议总结完成后能自动触发 Agent；ChatGPT 发布团队空间 Space 和人与 Agent 共写的 Pages；Docs、Sheets、Slides 侧栏的 Gemini 能通过 MCP 连接外部工具。',
      deck:   'Claude Docs 在对话里生成可编辑文档，可导出 Word 和 PPT，先向 Pro、Max 用户开放；Gemini 能在 Gmail、Chat、Drive 里直接生成文档、表格和幻灯片。',
      ship:   'Claude 桌面端能直接预览 Word、Excel、PPT，并能从新对话直接创建 Google 文档、表格或幻灯片；Google Vids 能把文档转成视频摘要。',
      meet:   'Google 会议笔记新增一页式的 Quick notes，成为默认首页。',
      scope:  '钉钉发布 AI 基础版到 AI 旗舰版四个商业版本，10 月 21 日起逐步生效；Google Sheets 单表上限翻倍到 2000 万个单元格。',
    },
  },
  8: {
    h1: '8 月，AI 的改动要<mark>看得见、改得回</mark>',
    lead: '11 条新动态里有 4 条是「正文内联」，重点从「能改」转向「改了什么」：Word 只高亮 Copilot 改过的词，Excel 能看出每处修改来自人还是 AI 并能撤回，Notion 的 Agent 改为逐条提建议、由人批准。ChatGPT 也能在对话旁打开 Google 文档、表格和幻灯片直接修改；Google 推出 Sheets 画布，一句话就能把表格做成交互小应用。',
    sum: {
      inline: 'AI 的修改变得可追溯：Word 精确高亮改动，Excel 区分人和 AI 的修改并能撤回，Notion Agent 改为提建议待批准；ChatGPT 能在对话旁直接打开并修改 Google 文件。',
      agent:  'Notion 可以从分享菜单把文档或数据库直接共享给自定义 Agent。',
      deck:   'Google Sheets 画布能按一句话把表格做成看板等交互小应用；Copilot Notebooks 会根据笔记内容推荐要生成的 Word、Excel 或 PPT。',
      meet:   'Google 会议笔记扩展到线下会议，结束后自动整理成带待办和转写的文档。',
      ship:   'Google Slides 新增录制入口，由 Vids 生成可分享的演示录像；Sheets 数据透视表的分组在导入 Excel 后也能保留。',
      scope:  '微软 Cowork 让用户自己选投入程度，并能查看每个任务消耗的额度。',
    },
  },
  7: {
    h1: '7 月，AI 开始<mark>住进原文件里</mark>',
    lead: '15 条新动态里有 5 条是「正文内联」：Google Docs 的 Gemini 能处理评论、画配图；微软给 PowerPoint 里的 Copilot 加了品牌素材、评论处理和生图，ChatGPT 也以侧栏形式进了 PowerPoint。另一条主线是 Agent：Notion 让 Claude、Cursor 进团队看板领任务，金山发布灵犀专业版，腾讯 WorkBuddy 推出独立 App。',
    sum: {
      inline: 'AI 不再停在独立入口，而是直接处理文档里的评论、配图和品牌素材。Google 和微软在 7 月最后一周先后让 AI 进评论区；ChatGPT 以侧栏形式进了 PowerPoint。',
      agent:  'AI 开始以「同事」或独立 App 的身份出现：Notion 让外部 Agent 在看板上领任务，金山和腾讯都把 Agent 和自家文档打通。',
      deck:   '从资料直接产出整份文件：ChatGPT Work 交代目标就能出文档、表格和演示，Copilot Notebooks 一键起草 Word 和 Excel。',
      ship:   'AI 产出物的去向更顺：Claude 交付的 Markdown 直接在编辑器里打开，Notion Agent 能读写 Office 文件。',
      meet:   '会议内容沉淀成文档时更完整：Meet 笔记带上演示截图，Notion 按麦克风区分发言人。',
      scope:  'Google 把 Docs 的 Gemini 写作功能扩展到 11 种新语言。',
    },
  },
};

return { NOW: '2026-11-28', START: '2026-07-01', MONTHS: [11, 10, 9, 8, 7], LATEST_FULL: 10, U, REPORT };
})();

/* 注册为「CCM 云文档」空间的数据 */
(window.CW_SPACES = window.CW_SPACES || {}).ccm = window.CW_DATA;
