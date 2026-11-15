/* ===== 观测空间 · AI 热门资讯 · 收录数据 =====
   口径：2026-07-01 起收录，截至 2026-11-15。全部是公开信息，每条附来源链接；2026-11-15 检索并读过原文或报道正文。
   范围：模型发布、新产品、新功能、新趋势、资本动向、监管与行业事件，重点是前三类和趋势。
   「官方」= 公司自己的博客或新闻稿；「媒体」= 新闻报道、周报或第三方索引。
   周报类来源（Tech Startups、Digital Applied、AI Funding）只用于它们明确写出日期和主体的条目。
   OpenAI 官方页面检索时返回 403，相关条目用媒体报道或发布说明索引。 */
(window.CW_SPACES = window.CW_SPACES || {}).news = (function () {
const RLS = ['ChatGPT Business 发布说明（releases.sh 索引）', 'https://releases.sh/openai/chatgpt-business'];
const TS  = ['Tech Startups · 10 月 5–9 日周报', 'https://techstartups.com/2026/10/09/top-ai-news-stories-this-week-october-5-9-2026/'];
const DA  = ['Digital Applied · 7 月模型发布周', 'https://www.digitalapplied.com/blog/seven-days-seven-releases-july-2026-model-wave'];
const TC55 = ['TechCrunch', 'https://techcrunch.com/2026/09/22/anthropic-releases-opus-5.5-with-lower-prices-and-fable-level-performance/'];
const FS8 = ['科技日报', 'https://www.stdaily.com/web/gdxw/2026-09/16/content_581901.html'];

/* [日期, 主体, 主题, 来源类型, 标题, 摘要, [来源名, 链接]]，按日期倒序 */
const U = [
  /* ---------- 11 月（截至 11-15） ---------- */
  ['11-12','other','event','media','英伟达 CEO 黄仁勋辞职，CFO 暂代','TechCrunch 报道，黄仁勋承认与一名被指为中国间谍的人有婚外关系后辞职，英伟达任命 CFO Colette Kress 为临时 CEO；报道认为英伟达对开源 AI 的支持存在变数，约 130 亿美元收购 Hugging Face 一事尚未完成。',['TechCrunch','https://techcrunch.com/2026/11/12/jensen-huangs-exit-puts-nvidias-support-for-open-source-in-question']],
  ['11-12','byte','feature','media','豆包工作接入 Kimi、GLM、DeepSeek 等第三方模型','新增 Kimi 3.1 Pro、GLM 5.3、DeepSeek V4.1 Flash 等模型，此前已先向企业客户开放；选择页标出各模型的额度消耗倍率，豆包 2.1 Lite 和 DeepSeek V4.1 Flash 的倍率下调。',['新浪科技 · 爱范儿','https://finance.sina.com.cn/tech/roll/2026-11-12/doc-iniynaxi3809511.shtml']],
  ['11-11','google','product','off','Google 推出 Gemini Decisions API，专做打分和判断','由新模型 Gemini Decision 1 驱动，用于路由、规则检查、评分这类有限选项的判断：一次给候选项打分，返回概率和确定度，单次最多 1000 个问题；输入每百万 token 0.1 美元，输出免费。',['Google 博客','https://blog.google/innovation-and-ai/technology/developers-tools/gemini-decisions-api']],
  ['11-09','anthropic','model','media','Anthropic 发布 Claude Fable 5.2 和 Mythos 5.2','编码、推理和视觉能力提升，速度比 5.1 快最多 30%；价格为每百万 token 输入 8 美元、输出 40 美元，当周付费用户有额外用量。',['9to5Mac','https://9to5mac.com/2026/11/09/anthropic-upgrades-claude-with-new-fable-5-2-model-details-here/']],
  ['11-02','google','model','off','Google 10 月发布 Gemini 4 Argon，两周后公布 Gemini 4 Carbon','Argon 是前沿推理模型，面向复杂编程、金融分析和法律工作流，已进入 AI Studio、Gemini API、Google Cloud、搜索和 Gemini App；Carbon 主打长程工程和网络安全防御，先给美国政府和可信防御方测试；同期发布实时交互世界模型 Genie 4。',['Google 博客 · 10 月 AI 动态汇总','https://blog.google/innovation-and-ai/technology/ai/google-ai-updates-october-2026/']],

  /* ---------- 10 月 ---------- */
  ['10-26','anthropic','money','media','Anthropic 提交上市申请，股票代码 ANT','上半年收入同比增长 1300% 至 163 亿美元，调整后经营利润 16 亿美元；报道称估值可能在 1.5 万亿到 2 万亿美元之间，最快 11 月上市。',['NPR（KUOW 转载）','https://www.kuow.org/npr-news/2026-10-26/ai-giant-anthropic-files-for-an-ipo-that-could-break-records']],
  ['10-17','deepseek','model','media','DeepSeek 发布 V4.1-Flash-1017','作为 V4.1-Flash 的小幅更新，各项基准测试明显提升；DeepSeek 称它在多个 Harness 下达到新的性能与费用帕累托最优，即最佳性价比。',['财新','https://www.caixin.com/2026-10-19/102494713.html']],
  ['10-14','tencent','product','media','WorkBuddy 进入企业微信通讯录，在聊天里就能派任务','企业微信 5.0.12 里，WorkBuddy 以可对话机器人的身份进入企业联系人列表；WorkBuddy 5.8.0 支持企业微信账号登录，管理员可按组织角色设权限、限制 AI 接触高敏信息。',['科技日报','https://www.stdaily.com/web/gdxw/2026-10/14/content_595889.html']],
  ['10-09','meta','trend','media','Meta 与 Sierra 推出个人 AI Agent 开放标准','这项开放标准让个人 AI 助手能与企业安全交互，是 Agent 代人办事之后出现的「接口」需求。',TS],
  ['10-09','other','event','media','中国出台指导意见抑制 AI 投资泡沫；欧盟向 30 多家 AI 公司要合规信息','中国政府发布指导意见，在抑制 AI 投资泡沫的同时推动自主可控；欧盟委员会为 AI 法案辩护，并要求 30 多家 AI 公司提交合规信息。',TS],
  ['10-08','openai','money','media','Axios：OpenAI 年化收入约 500 亿美元','不是此前流传的 700 亿美元。',TS],
  ['10-08','other','money','media','Manus 解除与 Meta 的收购后融资超过 5 亿美元','开发 Manus 的 Butterfly Effect 在收购取消后完成新一轮融资。',TS],
  ['10-08','other','trend','media','美联社民调：64% 的美国人认为 AI 发展太快','AP-NORC 民调结果，同一周还有多家公司转向大额举债建设 AI 基础设施。',TS],
  ['10-07','anthropic','model','media','Anthropic 发布 Claude Haiku 5.5','Claude 5.5 系列的又一款模型；9 月 22 日发布的 Opus 5.5 是这个系列的第一款。',TS],
  ['10-07','openai','feature','media','GPT-6 和 Intelligent UI 进入 ChatGPT Business','向符合条件的 Business 工作区陆续推出；10 月 26 日 GPT-6.1 Terra 也在 Work 和 Codex 中推出。',RLS],

  /* ---------- 9 月 ---------- */
  ['09-29','openai','product','media','OpenAI DevDay：ChatGPT 推出团队空间 Space 和协作文档 Pages','Space 是带助手的团队共享空间，面向 Pro、Business、Enterprise；Pages 是人和 Agent 共同编辑的文档；协作版 Slides 宣布将在几周内上线。',['The Decoder','https://the-decoder.com/openais-reveals-a-new-chatgpt-that-looks-less-like-a-chatbot-and-more-like-an-operating-system/']],
  ['09-29','openai','model','media','GPT-6.1 Sol 在 ChatGPT Work 和 Codex 推出','先向 Pro 用户推出；同日 @ChatGPT 进入 Slack 和 Teams，团队可以共享定期任务。',RLS],
  ['09-29','meta','product','off','Meta 推出 Muse 小企业版','给 Muse 一个经营目标，它用你已有的工具去推进，可连接 Shopify、Slack、QuickBooks 等；发布内容、发送消息和花钱都要先经用户批准。',['Meta 新闻室','https://about.fb.com/news/2026/09/introducing-muse-small-business/']],
  ['09-28','meta','trend','media','Meta 成立企业平台，做消费级 Agent 的公司开始卖给企业','Meta Enterprise Platform 首批包含 Muse Agent、Meta Business Agent、Muse API 和编程工具 Muse Code；扎克伯格称企业 AI 会成为公司的下一个主要业务。',['The Neuron','https://www.theneuron.ai/news/muse-is-a-hit-now-meta-wants-an-enterprise-ai-business/']],
  ['09-22','anthropic','model','media','Anthropic 发布 Claude Opus 5.5，价格下调','Anthropic 称它是测过的最强模型，多项基准超过更大的 Fable；输出价格从每百万 token 25 美元降到 20 美元，速度更快。上一代 Opus 5 在 7 月 24 日发布。',TC55],
  ['09-15','byte','product','media','飞书 8.0 发布，推出团队智能体「豆包工作伙伴」','飞书 8.0 为 Agent 重构，Agent 的权限始终和使用者一致；豆包工作伙伴有独立的身份、权限和记忆，企业统一配置。',FS8],
  ['09-15','other','feature','off','Slackbot 能把对话变成可交互的仪表盘和演示','Slackforce Surfaces 从对话生成团队可以筛选、评论、操作的实时界面；Slack Code 让人和第三方 Agent 在代码频道里协作。',['Slack 博客','https://slack.com/intl/en-ie/blog/news/ai-powered-interface-for-work']],
  ['09-10','deepseek','model','media','DeepSeek 发布 V4.1 Flash，合并快速、专家和识图模式','开放平台通知称 V4.1 Flash 在 9 月 10 日前后发布、原生支持多模态；V4 Pro 于 9 月 14 日下线，请求改由 V4.1 Flash 处理并按它的价格计费。',['科创板日报','https://www.chinastarmarket.cn/detail/2479030']],
  ['09-08','meta','product','media','Meta 发布个人 Agent Muse','能读邮件、订行程、填表、谈价并用你的卡付款；在美国的 iOS、安卓和网页上推出，免费版之外有 20 和 100 美元两档订阅，产品里没有广告。',['The Next Web','https://thenextweb.com/news/meta-muse-personal-ai-agent-launch']],
  ['09-03','xai','product','off','Grok Bot 向企业开放','每个 Bot 有自己的云电脑，像同事一样接收消息、汇报进度；默认没有任何权限，只能进入你为它登录的账号，企业可统一管理访问、网络和审计。',['xAI 新闻','https://x.ai/news/grok-bot-for-enterprise']],

  /* ---------- 8 月 ---------- */
  ['08-19','other','money','media','Nebius 发行 43 亿美元可转债，是 8 月最大一笔 AI 融资','据 AI Funding 月报，8 月较大的几笔还有 Firmus 20 亿美元、Thrive Holdings 20 亿美元（估值 120 亿美元）、Hadrian 14 亿美元。',['AI Funding · 2026 年 8 月融资月报','https://aifunding.me/newsletters/august-2026']],
  ['08-13','openai','feature','media','ChatGPT 能在对话旁打开 Google 文档、表格和幻灯片','网页端可以把 Google 文档、表格或幻灯片放在对话旁阅读、总结和修改，需要先连接 Google Drive。',['Nerdschalk','https://nerdschalk.com/chatgpt-can-now-open-google-docs-sheets-and-slides-side-by-side-in-chat/']],
  ['08-13','google','feature','off','Google 会议笔记支持线下会议','在 Meet 首页点「记笔记」即可为线下会议录音，结束后 Gemini 把摘要、待办和完整转写整理成 Google 文档。',['Google Workspace Updates','https://workspaceupdates.googleblog.com/2026/08/take-notes-with-me-for-in-person-meetings-is-now-available.html']],
  ['08-12','xai','model','media','xAI 发布 Grok 4.6：50 万 token 上下文，面向长任务','为多步骤复杂任务调优，提供 low 到 xhigh 四档推理；20 万 token 以内每百万输入 2 美元、输出 6 美元；当天进入 xAI API、Cursor 和 Grok Build。',['Enterprise DNA','https://enterprisedna.co/resources/news/spacexai-grok-4-6-enterprise-agents-august-2026/']],
  ['08-12','xai','product','media','Grok Bot 测试版：常驻 Agent 用云电脑登录工作应用','能登录没有 API 或 MCP 接口的应用和网站，看一遍就能学会流程；测试版面向 SuperGrok Heavy、Cursor Ultra 和 Cursor Teams Premium 订阅用户。',['eWEEK','https://www.eweek.com/news/grok-bot-ai-agent/']],

  /* ---------- 7 月 ---------- */
  ['07-23','byte','product','media','飞书 aily 升级为能主动干活的「AI 同事」','基于消息、文档、日历、会议和多维表格主动跟进任务；「智能体队长」拆分任务交给不同 Agent 再汇总，预置上百个专业 Agent。',['新华网','https://www.news.cn/tech/20260723/5a84c09560134a5c9937a825773fba95/c.html']],
  ['07-23','other','trend','media','一周七个模型：7 月 17–23 日模型密集发布','Kimi K3、千问三款、Gemini 3.6 Flash 等三款、poolside Laguna S 2.1、蚂蚁 Ling-3.0-flash 在七天内相继发布，Black Forest Labs 预告 FLUX 3。',DA],
  ['07-21','google','model','media','Google 发布 Gemini 3.6 Flash、3.5 Flash-Lite 和 3.5 Flash Cyber','三款模型在同一份公告中发布。',DA],
  ['07-21','ali','model','media','千问三天发布三款模型','7 月 19 日 Qwen3.8-Max-Preview，20 日 Qwen-Audio-3.0-TTS，21 日 Qwen-Image-3.0。',DA],
  ['07-18','tencent','product','media','腾讯 WorkBuddy 推出独立 App','iOS、安卓、鸿蒙同步上线，支持连接电脑和云端工作两种模式；可连接腾讯文档与 ima 知识库。',['DoNews · WAIC 2026 报道','https://www.donews.com/news/detail/1/6645946.html']],
  ['07-17','kimi','model','media','月之暗面发布 Kimi K3','7 月中旬模型密集发布周里的第一款。',DA],
  ['07-09','openai','model','media','OpenAI 发布 GPT-5.6：Sol、Terra、Luna 三档','全面进入 ChatGPT、Codex 和 API；ultra 模式默认并行跑四个 Agent，max 模式给模型更多推理和自查时间；能把 Slack、Notion、Microsoft 365、Google Drive 里的资料做成演示、文档和表格。',['IT Brief UK','https://itbrief.co.uk/story/openai-launches-gpt-5-6-models-with-new-coding-push']],
  ['07-09','openai','product','media','ChatGPT Work 上线：交代目标，Agent 产出文档、表格和演示','连接应用和文件后，Agent 分步完成多步骤项目，可产出文档、表格、演示、网页和报告；先向 Pro、Enterprise、Edu 开放。',['JustAINews','https://justainews.com/companies/chatgpt-work-brings-ai-agents-into-everyday-office-tasks/']],
];

const REPORT = {
  11: {
    partial: true,
    h1: '11 月进行中，<mark>已收录 5 条</mark>',
    lead: '截至 11 月 15 日：Anthropic 发布 Fable 5.2 和 Mythos 5.2；Google 公布 10 月发布的 Gemini 4 Argon，又推出专做打分判断的 Gemini Decisions API；豆包工作接入 Kimi、GLM、DeepSeek；英伟达 CEO 黄仁勋辞职。完整月报在 11 月 30 日 18:00 生成。',
    sum: {
      model:   'Anthropic 发布 Fable 5.2 和 Mythos 5.2，价格下调、速度更快；Google 汇总了 10 月发布的 Gemini 4 Argon 和随后公布的 Carbon。',
      product: 'Google 推出 Gemini Decisions API，输出免费。',
      feature: '豆包工作接入 Kimi、GLM、DeepSeek 等第三方模型，并标出额度倍率。',
      event:   '英伟达 CEO 黄仁勋辞职，CFO 暂代。',
    },
  },
  10: {
    h1: '10 月，AI 公司开始<mark>亮出账本</mark>',
    lead: '10 月收了 10 条，资本类占 3 条：Anthropic 提交上市申请，上半年收入 163 亿美元；Axios 报道 OpenAI 年化收入约 500 亿美元；Manus 解除与 Meta 的收购后融资超 5 亿美元。模型方面，Anthropic 发布 Haiku 5.5，GPT-6 进入 ChatGPT Business，DeepSeek 更新 V4.1-Flash。',
    sum: {
      money:   'Anthropic 提交上市申请，股票代码 ANT；OpenAI 年化收入约 500 亿美元；Manus 融资超 5 亿美元。',
      model:   'Anthropic 发布 Claude Haiku 5.5；DeepSeek 发布 V4.1-Flash-1017，称性价比最优。',
      trend:   'Meta 与 Sierra 推出个人 Agent 开放标准；美联社民调显示 64% 的美国人认为 AI 发展太快。',
      feature: 'GPT-6 和 Intelligent UI 进入 ChatGPT Business。',
      product: 'WorkBuddy 进入企业微信通讯录，在聊天里派任务。',
      event:   '中国出台指导意见抑制 AI 投资泡沫，欧盟向 30 多家 AI 公司要合规信息。',
    },
  },
  9: {
    h1: '9 月，个人 Agent <mark>开始收费、开始卖给企业</mark>',
    lead: 'Meta 9 月 8 日发布个人 Agent Muse，免费版之外设 20 和 100 美元两档订阅，月底推出小企业版和企业平台；Grok Bot 向企业开放；飞书 8.0 推出团队智能体。模型方面，Anthropic 发布 Opus 5.5 并降价，DeepSeek 发布 V4.1 Flash，OpenAI 在 DevDay 推出 GPT-6.1 Sol、团队空间和协作文档。',
    sum: {
      product: 'Meta 发布 Muse 和小企业版；Grok Bot 向企业开放；ChatGPT 推出 Space 和 Pages；飞书 8.0 推出团队智能体「豆包工作伙伴」。',
      model:   'Anthropic 发布 Opus 5.5，输出价格降到每百万 token 20 美元；DeepSeek 发布原生多模态的 V4.1 Flash；GPT-6.1 Sol 在 Work 和 Codex 推出。',
      trend:   'Meta 成立企业平台，做消费级 Agent 的公司开始卖给企业。',
      feature: 'Slackbot 能把对话变成可交互的仪表盘和演示。',
    },
  },
  8: {
    h1: '8 月，Agent <mark>有了自己的电脑</mark>',
    lead: 'xAI 发布 Grok 4.6，同时推出 Grok Bot 测试版：每个 Bot 有一台云电脑，能登录没有 API 的应用。资本方面，Nebius 发行 43 亿美元可转债，是当月最大的一笔。ChatGPT 能在对话旁直接改 Google 文档，Google 会议笔记扩展到线下会议。',
    sum: {
      model:   'xAI 发布 Grok 4.6，50 万 token 上下文，四档推理。',
      product: 'Grok Bot 测试版用云电脑登录工作应用。',
      feature: 'ChatGPT 能在对话旁打开 Google 文件；Google 会议笔记支持线下会议。',
      money:   'Nebius 43 亿美元可转债，Firmus、Thrive Holdings 各 20 亿美元。',
    },
  },
  7: {
    h1: '7 月，<mark>一周七个模型</mark>',
    lead: 'OpenAI 7 月 9 日发布 GPT-5.6 三档模型和 ChatGPT Work；7 月 17 日到 23 日，Kimi K3、千问三款、Gemini 3.6 Flash 等七个模型在一周内相继发布。产品方面，飞书 aily 升级为能主动干活的「AI 同事」，腾讯 WorkBuddy 推出独立 App。',
    sum: {
      model:   'GPT-5.6 分 Sol、Terra、Luna 三档；Kimi K3、千问三款、Gemini 3.6 Flash 等相继发布。',
      product: 'ChatGPT Work 上线；飞书 aily 升级为「AI 同事」；腾讯 WorkBuddy 推出独立 App。',
      trend:   '7 月 17–23 日一周内有七个模型发布。',
    },
  },
};

return { NOW: '2026-11-15', START: '2026-07-01', MONTHS: [11, 10, 9, 8, 7], LATEST_FULL: 10, U, REPORT };
})();
