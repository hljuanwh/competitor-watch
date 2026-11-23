/* ===== 观测空间 · B 端 AI 办公 · 收录数据 =====
   口径：2026-07-01 起收录，截至 2026-11-23。全部是公开信息，每条附来源链接；2026-11-15 检索并读过原文或报道正文。
   「官方」= 厂商自己的博客、新闻稿或更新日志；「媒体」= 新闻报道、转载，或发布说明的第三方索引（官方页面无法直接读取时使用）。
   和「CCM 云文档」空间重叠的条目（Notion、Google、微软等）沿用那边已核实的文字和来源。
   没检索到可核实发布的月份如实留空：钉钉 9 月以外、Slack 9 月以外、企业微信 8 月（报道页无法打开，未收）。 */
(window.CW_SPACES = window.CW_SPACES || {}).b2b = (function () {
const gw = (slug) => ['Google Workspace Updates', 'https://workspaceupdates.googleblog.com/' + slug];
const MSA = ['Microsoft Copilot 博客 · 8 月更新', 'https://techcommunity.microsoft.com/blog/microsoft365copilotblog/what%E2%80%99s-new-in-microsoft-copilot--august-2026/4551960'];
const MSS = ['Microsoft Copilot 博客 · 9 月更新', 'https://techcommunity.microsoft.com/blog/microsoft-copilot-blog/what-s-new-in-microsoft-copilot-september-2026/4559107'];
const MSO = ['Microsoft Copilot 博客 · 10 月更新', 'https://techcommunity.microsoft.com/blog/microsoft-copilot-blog/what%27s-new-in-microsoft-copilot--october-2026/4568528'];
const NTN = (d, v) => [v ? `Notion ${v} 发布说明` : 'Notion 发布说明', `https://www.notion.com/releases/2026-${d}`];
const CLG = ['Claude 更新日志', 'https://claude.com/docs/cowork/changelog'];
const RLS = ['ChatGPT Business 发布说明（releases.sh 索引）', 'https://releases.sh/openai/chatgpt-business'];
const SLK = ['Slack 博客', 'https://slack.com/intl/en-ie/blog/news/ai-powered-interface-for-work'];
const XAI = ['xAI 新闻', 'https://x.ai/news/grok-bot-for-enterprise'];
const MSB = ['Meta 新闻室', 'https://about.fb.com/news/2026/09/introducing-muse-small-business/'];
const FS8 = ['科技日报', 'https://www.stdaily.com/web/gdxw/2026-09/16/content_581901.html'];
const WWB = ['科技日报', 'https://www.stdaily.com/web/gdxw/2026-10/14/content_595889.html'];

/* [日期, 产品, 主题, 来源类型, 标题, 摘要, [来源名, 链接]]，按日期倒序 */
const U = [
  /* ---------- 11 月（截至 11-23） ---------- */
  ['11-20','m365','price','off','Copilot 可用 GPT-6.2 Sol 和 Astra','Sol 向符合条件的用户在 Copilot Chat、Cowork、Copilot Studio，以及 Excel、PowerPoint、Word 中全球推开；Astra 先在 Cowork 和 Studio 推开，Frontier 用户还能在 Chat 和这三款应用里使用。Work IQ 只按本人已有权限取用文件、会议和聊天。管理员在 Microsoft 365 管理中心配置。',['Microsoft Copilot 博客','https://techcommunity.microsoft.com/blog/microsoft-copilot-blog/available-today-openais-gpt-6-2-sol-and-gpt-6-2-astra-in-microsoft-copilot/4574229']],
  ['11-20','claude','agent','off','Claude 电脑操作向 Team 和 Enterprise 开放测试','电脑操作让 Claude 看见用户允许的屏幕，并在这些桌面应用里干活；可在新的 Claude 桌面体验里使用，网页版和手机版需打开电脑访问。正在按组织陆续开放。',['Claude 帮助中心发布说明','https://support.claude.com/en/articles/12138966-release-notes']],
  ['11-20','chatgpt','price','off','ChatGPT Space 开始向 Plus 用户开放','18 岁及以上的 Plus 用户可以在 Space 里做出可交互的页面和演示，并邀请同样开通了 Space 的人一起改。打开别人分享的页面或演示，需要 Plus、Pro、Business 或 Enterprise 账号，且本人已开通 Space。',['ChatGPT 发布说明','https://help.openai.com/en/articles/6825453-chatgpt-release-notes']],
  ['11-19','google','govern','off','管理员可以限制 Workspace Studio 流程联系别人','新增「协作步骤」：可以允许流程发邮件、在 Chat 发消息、改共享文件，也可以收成只有创建者能看到的动作，例如通知、草稿和修改自己的文件。默认开启，可按网域、组织单位或群组调整。',gw('2026/11/new-admin-setting-to-control-collaboration-steps-in-Workspace-Studio-flows.html')],
  ['11-18','slack','agent','off','Slack 工作流可以直接交给 Slackbot 或其他 Agent','Workflow Builder 可以加入和 Slackbot 或第三方 Agent 的对话步骤；Slackbot 任务能在新消息或表情出现时启动，Agent 任务可以把一条提示词设成定时运行。AI 写出的内容会先停下给人改、给人批，通过后才写入 Jira、表格或 Salesforce。Workflow Builder 含在 Pro、Business+ 和 Enterprise 里。',['Slack 博客','https://slack.com/blog/news/agents-in-workflow-builder']],
  ['11-18','muse','connect','off','Muse 接上加拿大零售商 Loblaw，语音在加拿大上线','Loblaw 是首家接入 Muse 的加拿大零售商，用户可以在 Muse 里规划餐食、建立购物车并结账；语音在加拿大的手机、网页和 Mac 上线。用户也可以用一句话做自己的 space。发信和付款前仍要本人确认，密码和支付方式不进入 Agent 视野。',['Meta 新闻室','https://about.fb.com/news/2026/11/meta-welcomes-loblaw-as-first-canadian-retail-partner-to-muse/']],
  ['11-16','google','agent','off','Gemini 技能可以分享，还能带上 Drive 和 Notebook 文件','在 Gemini 网页版的技能页按查看或编辑权限分享技能，接收方确认后安装；创建技能时可加入 Drive、Gemini Notebook、Google Photos 里的文件，Drive 文件实时同步；管理员可在管理控制台关闭分享。',gw('2026/11/share-skills-add-files-from-Drive-Notebook-Photos-to-skills-Gemini-app.html')],
  ['11-16','google','connect','off','Apps Script 里的 Gemini 正式可用：一句话写脚本、一键修报错','描述需求即可生成脚本，改动逐块确认；「修复错误」会解释运行时报错并给出修法；面向 Business、Enterprise 的 Standard 和 Plus 版及 Google AI Pro、Ultra，11 月 12 日起陆续上线。',gw('2026/11/customize-and-extend-workspace-with-apps-script.html')],
  ['11-12','claude','govern','off','Claude 企业部署可按 Purview 敏感度标签拦截文件','管理员设置后，带 Microsoft Purview 标签的 OneDrive、SharePoint、Outlook 内容会被拦截；联网搜索和网页读取也能设为「每次询问」或「禁止」，用户不能自行放宽。',CLG],
  ['11-12','feishu','price','media','豆包工作接入 Kimi、GLM、DeepSeek，选模型时标出额度倍率','与飞书共用账号的豆包工作新增 Kimi 3.1 Pro、GLM 5.3、DeepSeek V4.1 Flash 等第三方模型，此前已先向企业客户开放；选择页标出每个模型的额度消耗倍率，并有限时优惠。',['新浪科技 · 爱范儿','https://finance.sina.com.cn/tech/roll/2026-11-12/doc-iniynaxi3809511.shtml']],
  ['11-12','chatgpt','govern','media','ChatGPT Business 管理员可以修改成员邮箱','全局管理员可以为符合条件的非 SCIM 用户更改邮箱，受域名和频率限制。',RLS],
  ['11-09','google','agent','off','Gemini 技能在 Docs、Slides、Drive 等应用上线','可复用的自定义指令在 Workspace Studio、Docs、Gmail、Slides、Drive、Chat 中上线，Sheets 和 Meet 暂不支持；仅限 18 岁以上用户。',gw('2026/11/skills-in-workspace.html')],
  ['11-09','dingtalk','entry','media','千问办公 2.0：多人和 Agent 在同一个协作空间干活','协作空间可关联多个钉钉群聊、文档、AI 表格和 AI 听记，可以给数字员工派任务；新增自动任务，按指定人消息、群内 @ 或审批事件触发；全部功能已在千问办公客户端全量上线。',['科技日报','https://www.stdaily.com/web/gdxw/2026-11/09/content_610951.html']],
  ['11-05','claude','price','off','Claude 网关管理员可设支出上限和共享预算','新增「Apps gateway admin」菜单，用来设置支出上限、共享预算并导出花费；设置页的用量卡片显示网关上报的额度。',CLG],

  /* ---------- 10 月 ---------- */
  ['10-30','m365','agent','off','Copilot 推出 Autopilot：有自己账号、邮箱和文件的常驻 Agent','在云端始终在线的个人 Agent，有独立的账号、邮箱和文件，受审批护栏约束，由 Agent 365 统一治理；11 月向 Frontier 用户开放。',MSO],
  ['10-30','m365','entry','off','Copilot Notebooks 升级为 Copilot Workspaces，可多人实时共编','团队共享的空间汇集上下文、成员和工作文件，带实时光标；可在空间里创建和编辑 Word、Excel、PPT，先向 Frontier 用户开放。',MSO],
  ['10-30','m365','govern','off','Purview 数据防泄漏覆盖 Cowork','一条策略同时管 Copilot Chat 和 Cowork，拦截含敏感信息的提示词和带标签的内容，10 月公开预览；Copilot 记住的内容也能按 Purview 保留策略留存。',MSO],
  ['10-30','m365','know','off','Teams 不保存转写也能出会议总结，SharePoint 新增知识库','智能会议回顾不再依赖保存的转写，10 月全球上线；SharePoint 知识库从 Microsoft 365 内容里整理共享知识，供人、Copilot 和 Agent 使用，先向 Frontier 开放。',MSO],
  ['10-26','chatgpt','govern','media','ChatGPT Business 工作区设置迁到独立管理控制台','所有者和管理员可以在 admin.openai.com 管理成员和工作区设置。',RLS],
  ['10-19','notion','agent','off','Notion 重做 Agent：自带电脑和浏览器，可连续工作 24 小时','Agent 有自己的电脑和浏览器，单个任务最长可以跑 24 小时；模型路由 Auto 宣称以约九成更低的成本达到前沿模型的效果。',NTN('10-19')],
  ['10-19','google','know','off','会议结束后，Google Chat 自动发出会议回顾卡片','开启「帮我记笔记」的会议结束后，会议的 Chat 空间会收到一张卡片，包含摘要、关键决定、待办和笔记链接。',gw('2026/10/follow-through-on-your-meeting-tasks-with-meeting-recaps-in-Google-Chat.html')],
  ['10-14','wecom','entry','media','WorkBuddy 进入企业微信通讯录，在聊天里就能派任务','企业微信 5.0.12 里，WorkBuddy 以可对话机器人的身份进入企业联系人列表；WorkBuddy 5.8.0 支持企业微信账号登录，获得消息、文档、会议、微盘等十项能力授权；面向已认证企业开放，有限免名额。',WWB],
  ['10-14','wecom','govern','media','企业微信可按岗位给 AI 设权限，限制它接触高敏信息','管理员可以配置企业的 WorkBuddy 机器人、分配账号、管理用量和购买算力；按组织角色设置权限，限制 AI 访问高敏感信息；支持多模型、多 Agent 按岗位组合。',WWB],
  ['10-13','notion','connect','off','Notion 3.8：Agent 可连接 150 多个工具，可用 ChatGPT 套餐驱动','Notion Agent 和自定义 Agent 能连接 150 多个工具，管理员可以查看和撤销 AI 工具连接；可以用 ChatGPT Plus 或 Pro 套餐驱动 Notion AI。',NTN('10-13', '3.8')],
  ['10-08','claude','entry','off','Claude 把 Chat 和 Cowork 合成一个应用','企业部署可以先行开启统一版（beta），也可以关掉 Chat 和 Cowork 只留 Code；没有设置的组织从 11 月 10 日起默认开启。',CLG],
  ['10-01','chatgpt','connect','media','ChatGPT Business 管理员统一管理插件和插件市场','所有者和管理员在管理控制台里控制插件和插件市场；10 月 15 日起可以一次批量处理最多 25 个插件。',RLS],
  ['10-01','claude','govern','off','标成「需询问」的连接器工具，跳过审批时也要人确认','连接器工具设为「Restrict to Ask」后，即使在「跳过所有审批」模式下也会弹出确认；Claude 创建的定时任务在组织允许时默认自动批准。',CLG],

  /* ---------- 9 月 ---------- */
  ['09-30','m365','connect','off','微软推出统一插件目录，在 Agent 365 里集中管理','汇集微软、合作伙伴和自建插件，供 Copilot 和 Microsoft 365 应用使用；IT 管理员通过 Microsoft 365 管理中心和 Agent 365 集中管理，9 月上线。',MSS],
  ['09-30','m365','entry','off','Teams Phone Agent：AI 接线员，支持 60 多种语言','回答常见问题、预约或改约，把来电连同摘要转给合适的人；在 Copilot 输入框里打「/」可以直接调用 Agent。',MSS],
  ['09-30','m365','know','off','管理员可把最多 100 个 SharePoint 站点标为权威来源','被标记的站点在 Copilot 搜索和对话中优先作为依据，9 月在 Microsoft 365 管理中心上线。',MSS],
  ['09-29','chatgpt','entry','media','@ChatGPT 进入 Slack 和 Microsoft Teams','组织安装并启用后，Business 用户可以在 Slack 和 Teams 里直接 @ChatGPT；同日上线共享的 Pages、Spaces、插件和定期任务。',RLS],
  ['09-29','chatgpt','agent','media','ChatGPT 团队任务：按时间或事件自动运行，可以共享','同事之间能共享按计划或触发条件运行的定期任务；管理员可以给团队配置共用的应用连接。',RLS],
  ['09-29','muse','connect','off','Meta 推出 Muse 小企业版，能连 Shopify、Slack、QuickBooks','给 Muse 一个经营目标，它用你已有的工具去推进；可连接 Asana、Box、Canva、Figma、Notion、Shopify、Slack、Stripe、Zoom、QuickBooks 等，以及 Facebook、Instagram 商家账号和广告账户。',MSB],
  ['09-29','muse','govern','off','Muse 小企业版：没有你批准，不发布、不发送、不花钱','Muse 会标出需要回复的邮件、写初稿、给建议，但发布内容、发送消息和花钱都要先经用户批准；多数需求免费，另有订阅档。',MSB],
  ['09-29','claude','connect','off','Claude 可从新对话直接创建 Google 文档、表格和幻灯片','连接 Google Drive 后，新对话的输出选择器可以直接创建 Google 文档、表格或幻灯片。',CLG],
  ['09-28','muse','agent','media','Meta 成立企业平台，把 Muse Agent 卖给企业','Meta Enterprise Platform 首批包含 Muse Agent、Meta Business Agent、Muse API 和编程工具 Muse Code；Model API 已在全球开放。',['The Neuron','https://www.theneuron.ai/news/muse-is-a-hit-now-meta-wants-an-enterprise-ai-business/']],
  ['09-24','chatgpt','govern','media','管理员决定 ChatGPT Sites 能不能调用已连接的应用','全局管理员可以控制 Sites 是否使用成员已连接的应用、应用能否访问 ChatGPT Ads；预览期两项默认关闭。',RLS],
  ['09-23','dingtalk','price','media','钉钉发布四个 AI 商业版本，10 月 21 日起生效','新增 AI 基础版、AI 高级版、AI 尊享版、AI 旗舰版，均接入千问办公；Office 套件、AI 表格高级功能并入商业版本，免费标准版保留。',['腾讯新闻','https://news.qq.com/rain/a/20260924A0CADK00']],
  ['09-15','feishu','agent','media','飞书 8.0 为 Agent 重构：Agent 的权限始终和使用者一致','飞书 8.0 向 Agent 开放数据与工具能力，让 Agent 能像人一样使用各类产品；员工看不到的信息，Agent 也拿不到；与豆包工作共用一套账号体系。',FS8],
  ['09-15','feishu','agent','media','飞书推出团队智能体「豆包工作伙伴」','有独立的身份、权限和记忆；企业统一设置它的权限、能力和用量，全员可以和同一个智能体协作，不用各自配置。',FS8],
  ['09-15','feishu','govern','media','飞书管理员可设 AI 用量上限，单独管控高消耗模型','管理员可以统一管理 Agent、追溯使用情况、设定 AI 用量上限，并对高消耗的模型和场景单独管控。',FS8],
  ['09-15','slack','entry','off','Slackbot 能把对话变成可交互的仪表盘、演示和报告','Slackforce Surfaces 从对话生成团队可以筛选、评论、操作的实时界面；Big mode 给 Slackbot 一个全屏工作区写长文、做研究；Slackbot 进频道还在早期试点。',SLK],
  ['09-15','slack','connect','off','Slack Code：人和第三方 Agent 在代码频道里协作','代码频道里可以接入 Cedar、Coderabbit、Datadog、Lovable、Mistral、Replit、Snowflake 等第三方 Agent，即日可用。',SLK],
  ['09-15','slack','price','off','Salesforce 里的 Slackbot 含在 Business+ 和 Enterprise+ 订阅里','在 Salesforce 记录旁打开 Slackbot 的能力包含在 Slack Business+ 和 Enterprise+ 里，其他客户用 Flex Credits；双向语音和视频生成今年秋天推出。',SLK],
  ['09-15','google','connect','off','Docs、Sheets、Slides 侧栏的 Gemini 可通过 MCP 连接外部工具','Gemini 能使用 Asana、Atlassian Rovo、HubSpot、Salesforce 等工具的 MCP 集成，入口在 Docs、Sheets、Slides 侧栏和 Chat，默认开启。',gw('2026/09/connect-to-more-tools-with-gemini-in-Google-Workspace.html')],
  ['09-15','notion','agent','off','Notion 3.7：团队共享技能库，会议总结完成后自动触发 Agent','技能是教 AI 按团队方式做事的可复用说明，可以在团队里共享；自定义 Agent 能在会议总结完成后自动运行，也能调用其他 Agent。',NTN('09-15', '3.7')],
  ['09-15','claude','govern','off','Claude 管理员可关闭定时任务，限定默认模型和投入上限','关闭后，Cowork 和 Code 里的定时任务停用、定时页隐藏；新增设置管理默认模型、默认投入程度和最高投入程度。',CLG],
  ['09-08','muse','agent','media','Meta 发布个人 Agent Muse，免费版加 20、100 美元两档订阅','Muse 能读邮件、订行程、填表、谈价并用你的卡付款，在美国的 iOS、安卓和网页上推出，AI 眼镜支持随后跟进；产品里没有广告。',['The Next Web','https://thenextweb.com/news/meta-muse-personal-ai-agent-launch']],
  ['09-03','grok','agent','off','Grok Bot 向企业开放：每个 Bot 有自己的云电脑','Bot 像同事一样接收消息、汇报进度，看一遍就能学会一个流程并独立重复，验证过的 Bot 可以作为模板分享；Grok 和 Cursor 企业客户两周免费，可邀请全组织。',XAI],
  ['09-03','grok','govern','off','Grok Bot 默认没有任何权限，企业统一管访问、网络和审计','每个用户的工作在隔离环境里运行，Bot 只能进入你为它登录的账号；这次发布加入访问、网络和审计控制，供企业规模化管理。',XAI],

  /* ---------- 8 月 ---------- */
  ['08-31','m365','agent','off','Outlook 能用自建 Agent，Planner Agent 生成状态报告','自定义引擎 Agent 可以在 Outlook 里使用；Planner Agent 生成包含进展、风险和下一步的状态报告，可调受众、语气和篇幅，先向 Frontier 开放。',MSA],
  ['08-31','m365','entry','off','Copilot 的对话可以按链接分享，对方能接着聊','可以分享整段对话或单条回答，接收方看到只读版本并能继续对话；手机上描述一封邮件，Copilot 直接生成 Outlook 草稿。',MSA],
  ['08-31','m365','price','off','Cowork 可选投入程度，/cost 显示任务消耗的额度','用户可以在 Light 到 Max 之间选择质量、速度和额度消耗的平衡；/cost 显示预计额度、本月剩余比例和重置日期。',MSA],
  ['08-31','m365','govern','off','Agent 365 和 Copilot 看板可导出去标识的用量数据','管理员可以导出逐行的使用指标做自定义报表，个人标识已去除，9 月陆续推出。',MSA],
  ['08-13','google','know','off','Google 会议笔记支持线下会议','在 Meet 首页点「记笔记」即可为线下会议录音，结束后 Gemini 把结构化摘要、待办和完整转写整理成 Google 文档存进 Drive；安卓 8 月 11 日起陆续上线。',gw('2026/08/take-notes-with-me-for-in-person-meetings-is-now-available.html')],
  ['08-13','chatgpt','connect','media','ChatGPT 能在对话旁打开 Google 文档、表格和幻灯片','网页端可以把 Google 文档、表格或幻灯片放在对话旁阅读、总结和修改，需要先连接 Google Drive；共享云端硬盘暂不支持，移动端之后跟进。',['Nerdschalk','https://nerdschalk.com/chatgpt-can-now-open-google-docs-sheets-and-slides-side-by-side-in-chat/']],
  ['08-12','grok','agent','media','xAI 推出 Grok Bot 测试版：常驻 Agent 自己登录工作应用','每个 Bot 有一台云电脑，能登录没有 API 或 MCP 接口的应用和网站，记得之前的对话；测试版面向 SuperGrok Heavy、Cursor Ultra 和 Cursor Teams Premium 订阅用户，团队和企业可以排队申请。',['eWEEK','https://www.eweek.com/news/grok-bot-ai-agent/']],
  ['08-07','notion','agent','off','Notion 可从分享菜单直接把文档交给自定义 Agent','在分享菜单里就能把文档或数据库共享给自定义 Agent，不必再进 Agent 的设置页。',NTN('08-07')],

  /* ---------- 7 月 ---------- */
  ['07-27','wecom','entry','media','企业微信 AI 助理「大圆」开启内测','在企业微信任意界面左滑，或点电脑端侧边栏「智能助理」即可唤起；能汇总聊天和文档写周报、提炼群聊要点生成待办，调用智能文档、表格、会议、日程等能力，还能根据和微信客户的聊天分析客户需求。',['36氪','https://www.36kr.com/p/3916363882387074']],
  ['07-23','feishu','agent','media','飞书 aily 升级：主动跟进工作，多个智能体分工协作','在授权范围内基于消息、文档、日历、会议、任务和多维表格主动跟进；团队可以共享智能体、拉进项目群；「智能体队长」拆分任务交给不同 Agent 再汇总；管理员能看到每个智能体的来源、负责人和使用情况。',['新华网','https://www.news.cn/tech/20260723/5a84c09560134a5c9937a825773fba95/c.html']],
  ['07-18','wecom','agent','media','腾讯 WorkBuddy 推出独立 App，可导入腾讯文档作资料','iOS、安卓、鸿蒙同步上线，支持连接电脑和云端工作两种模式；通过资料库连接腾讯文档与 ima 知识库。',['DoNews · WAIC 2026 报道','https://www.donews.com/news/detail/1/6645946.html']],
  ['07-09','chatgpt','agent','media','ChatGPT Work 上线：交代目标，Agent 产出文档、表格和演示','连接应用和文件后，Agent 分步完成多步骤项目，可产出文档、表格、演示、网页和报告；先向 Pro、Enterprise、Edu 开放。',['JustAINews','https://justainews.com/companies/chatgpt-work-brings-ai-agents-into-everyday-office-tasks/']],
  ['07-01','notion','agent','off','Notion 3.6：Claude、Cursor 能作为外部 Agent 在看板上领任务','可以在团队共享看板里给外部 Agent 派任务、像同事一样 @ 它们，并实时查看执行过程。',NTN('07-01', '3.6')],
];

/* 月报：标题、导语、各主题小结（只用上面出现过的事实） */
const REPORT = {
  11: {
    partial: true,
    h1: '11 月至今，管理员开始<mark>管预算、管敏感文件</mark>',
    lead: '截至 11 月 23 日：Copilot 接入 GPT-6.2 Sol 和 Astra，并接到 Word、Excel、PowerPoint；Claude 的电脑操作向 Team 和 Enterprise 开放测试；Slack 工作流可以把步骤交给 Slackbot 或其他 Agent，通过后才写入外部工具。管理员可以限制 Workspace Studio 流程能不能发消息、改共享文件。完整月报在 11 月 30 日 18:00 生成。',
    sum: {
      govern: 'Workspace Studio 可以限制流程只能做创建者自己看得见的动作；Claude 企业部署可按 Purview 标签拦截 OneDrive、SharePoint、Outlook 内容。',
      price:  'Copilot 可选 GPT-6.2 Sol 和 Astra；ChatGPT Space 开始向 Plus 开放；豆包工作接入第三方模型并标出额度倍率；Claude 网关管理员可以设支出上限和共享预算。',
      agent:  'Claude 电脑操作向 Team 和 Enterprise 开放测试；Slack 工作流可以直接交给 Slackbot 或第三方 Agent，并强制人工审阅；Google 的 Gemini 技能可分享给同事。',
      entry:  '千问办公 2.0 推出协作空间，关联钉钉群、文档和 AI 表格，多人和 Agent 一起干活。',
      connect: 'Muse 在加拿大接上 Loblaw，并可在当地用语音；Apps Script 里的 Gemini 正式可用，一句话写脚本、一键修报错。',
    },
  },
  10: {
    h1: '10 月，AI 同事开始<mark>有自己的账号</mark>',
    lead: '13 条新动态里，「管控与安全」4 条，是最多的一类。微软的 Autopilot 有独立的账号、邮箱和文件，WorkBuddy 以机器人身份进了企业微信通讯录，Notion 的 Agent 自带电脑和浏览器、能连续跑 24 小时。与此同时，管理员手里的开关变多了：Purview 防泄漏覆盖 Cowork，企业微信按岗位给 AI 设权限，ChatGPT 和 Claude 都把插件和连接器的审批收到管理员手里。',
    sum: {
      govern:  'Purview 防泄漏覆盖 Cowork；企业微信按组织角色给 AI 设权限、限制接触高敏信息；ChatGPT Business 把工作区设置迁到独立控制台；Claude 的「需询问」工具在跳过审批时也要人确认。',
      agent:   '微软推出有独立账号、邮箱和文件的 Autopilot；Notion 重做 Agent，单个任务可跑 24 小时。',
      entry:   'WorkBuddy 进入企业微信通讯录，在聊天里派任务；Copilot Workspaces 支持多人实时共编；Claude 把 Chat 和 Cowork 合成一个应用。',
      connect: 'Notion 3.8 让 Agent 连接 150 多个工具；ChatGPT Business 管理员统一管理插件和插件市场。',
      know:    'Teams 不保存转写也能出会议总结，SharePoint 新增知识库；Google Chat 在会议后自动发回顾卡片。',
    },
  },
  9: {
    h1: '9 月，各家把 Agent <mark>交到企业手里</mark>',
    lead: '9 月收了 23 条，是 7 月以来最多的一个月。Grok Bot 向企业开放，飞书 8.0 为 Agent 重构并推出团队智能体「豆包工作伙伴」，Meta 先发个人 Agent Muse，月底又推出小企业版和企业平台。几家都给出了管控答案：Grok Bot 默认没有任何权限，飞书让 Agent 的权限和使用者一致，Muse 发布、发送、花钱前都要用户批准。',
    sum: {
      agent:   'Grok Bot 向企业开放，每个 Bot 有自己的云电脑；飞书 8.0 让 Agent 像人一样使用飞书，并推出团队智能体；Meta 发布 Muse 并成立企业平台；ChatGPT 团队任务可共享；Notion 3.7 推出团队技能库。',
      govern:  'Grok Bot 默认无权限、加入审计控制；飞书管理员可设 AI 用量上限；Muse 小企业版的关键动作须用户批准；ChatGPT Sites 调用应用需管理员开启；Claude 管理员可关闭定时任务、限定投入上限。',
      connect: '微软推出统一插件目录；Muse 小企业版可连 Shopify、Slack、QuickBooks 等；Gemini 通过 MCP 连接外部工具；Slack Code 接入第三方 Agent；Claude 能直接创建 Google 文件。',
      entry:   '@ChatGPT 进入 Slack 和 Teams；Slackbot 能把对话变成可交互的仪表盘；Teams Phone Agent 当 AI 接线员。',
      price:   '钉钉发布四个 AI 商业版本，10 月 21 日起生效；Salesforce 里的 Slackbot 含在 Business+ 和 Enterprise+ 订阅里。',
      know:    '管理员可把最多 100 个 SharePoint 站点标为 Copilot 的权威来源。',
    },
  },
  8: {
    h1: '8 月，Agent 开始<mark>自己登录工作应用</mark>',
    lead: 'xAI 推出 Grok Bot 测试版，每个 Bot 有一台云电脑，能登录没有 API 的应用和网站。微软在 Outlook 里开放自建 Agent，Planner Agent 能写状态报告，Cowork 让用户自己选投入程度、看额度消耗。Google 会议笔记扩展到线下会议。',
    sum: {
      agent:   'Grok Bot 测试版用云电脑登录工作应用；Outlook 能用自建 Agent，Planner Agent 生成状态报告；Notion 可从分享菜单把文档交给自定义 Agent。',
      entry:   'Copilot 的对话可以按链接分享，接收方能接着聊。',
      connect: 'ChatGPT 能在对话旁打开并修改 Google 文档、表格和幻灯片。',
      govern:  'Agent 365 和 Copilot 看板可导出去标识的用量数据。',
      price:   '微软 Cowork 让用户选投入程度，并显示每个任务消耗的额度。',
      know:    'Google 会议笔记支持线下会议，结束后自动整理成文档。',
    },
  },
  7: {
    h1: '7 月，AI 从助手<mark>变成同事</mark>',
    lead: '7 月收了 5 条，方向一致：飞书 aily 升级为能主动跟进工作、多个智能体分工协作的「AI 同事」；Notion 让 Claude、Cursor 在团队看板上领任务；ChatGPT Work 交代目标就能产出文档、表格和演示；腾讯 WorkBuddy 推出独立 App，企业微信的 AI 助理「大圆」开启内测。',
    sum: {
      agent: '飞书 aily 主动跟进工作、由「智能体队长」分派任务；Notion 让外部 Agent 在看板领任务；ChatGPT Work 分步完成多步骤项目；腾讯 WorkBuddy 推出独立 App。',
      entry: '企业微信 AI 助理「大圆」开启内测，在任意界面左滑即可唤起。',
    },
  },
};

return { NOW: '2026-11-23', START: '2026-07-01', MONTHS: [11, 10, 9, 8, 7], LATEST_FULL: 10, U, REPORT };
})();
