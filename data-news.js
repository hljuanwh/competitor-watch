/* ===== 观测空间 · AI 热门资讯 · 收录数据 =====
   口径：2026-07-01 起收录，截至 2026-11-27。全部是公开信息，每条附来源链接；2026-11-15 检索并读过原文或报道正文。
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
  /* ---------- 11 月（截至 11-27） ---------- */
  ['11-26','openai','feature','media','OpenAI 修正 GPT-6.2 计费错误，Astra 和 Sol 会更快用完额度','OpenAI 称 GPT-6.2 上线时计费有误，Astra 和 Sol 的用量被少计。纠正后，同样的工作会比上周更快用完套餐额度：Astra 约快 40%，Sol 约快 25%。不会追溯补收已发生的用量，订阅价格和其他模型不受影响；Go、Plus、Pro 和 Business 用户获赠一次预存重置，从 11 月 26 日起可用。',['Decrypt','https://decrypt.co/384053/openai-fixes-chatgpt-billing-error-promises-to-make-it-40-worse']],
  ['11-26','tencent','model','media','腾讯混元开源草稿模型 DFly2，Hy4 flash 长文本生成最高提速 4.2 倍','混元宣布开源新一代草稿模型 DFly2，面向长文本和智能体任务，用投机采样在不改 Hy4 flash 权重和输出结果的前提下加快生成；长文本场景加速约 3.2 倍，AgentLongBench 上最高 4.2 倍。它可共享目标模型的 KV 缓存和稀疏索引。权重已随 Hy4 及 Hy4 flash 开源，训练代码集成在 AngelSpec 框架中。',['凤凰网','https://news.qq.com/rain/a/20261126A0AP2700']],
  ['11-26','kimi','product','off','Kimi 发布游戏开发与创意工作解决方案','基于 K3.1 系列模型、Kimi Code 和 Kimi Work，以及 Unity、Unreal Engine、Blender 等插件，帮助游戏团队做可玩原型、改现有工程和美术资产，并把玩家反馈带回迭代。立项前可用 Godot 在一两天内做出试玩 Demo；正式开发时可在 Unity、虚幻引擎里改工程并留下差异和验证记录。',['Kimi 官方','https://www.kimi.com/news/kimi-game-solutions']],
  ['11-26','other','event','media','美国联邦通信委员会批准 SpaceX 建设最多 100 万颗轨道数据中心卫星','FCC 在感恩节前一天发布命令，授权 SpaceX 建设并运营名为 Starmind 的轨道计算星座，规模最多 100 万颗卫星。命令要求 2033 年 11 月 25 日前发射首批、2038 年部署一半、2040 年完成全部部署。SpaceX 与英伟达合作制造；马斯克称预计 2027 年第三季度首次发射。',['Spaceflight Now','https://spaceflightnow.com/2026/11/26/fcc-green-lights-spacexs-plan-to-launch-1-million-starmind-data-center-satellites/']],
  ['11-25','anthropic','trend','off','Anthropic 把 Messages API 从 Python 迁到 Rust，未中断服务','官方称这是客户和 Claude Code、Cowork 访问 Claude 的主接口。Claude 约一周写出核心请求路径初版，团队用生产流量对照新旧实现，并派 Agent 修复差异。迁成 Rust 后，单次请求 CPU 约降 70%，首个 token 的中位等待时间约短 20%，过程中服务没有停机。',['Anthropic 官方','https://www.anthropic.com/research/migrating-api-to-rust']],
  ['11-24','anthropic','feature','off','Claude 可以把产物安装成 Mac 和 Windows 应用','在 Claude 桌面版里把产物装成独立应用，有自己的窗口和图标，改产物后应用会自动更新；可使用 Claude 和已连接的应用，调用计入套餐额度。测试版向各档用户开放；Team 默认开启但完全访问默认关闭，Enterprise 需所有者打开。Claude Docs、Slides 和 Sheets 不能这样安装。',['Claude 官方文章','https://claude.com/resources/articles/install-as-app']],
  ['11-24','anthropic','feature','off','MCP 服务器可以向 Claude 下发技能，长任务和中途询问正式可用','Skills over MCP 进入公开测试：服务器可以把技能和工具一起提供，Claude 用到时再加载；Shopify、HubSpot、Atlassian 等已接入。默认对 Pro、Max、Ultra 开启，Team 需管理员打开，Enterprise 即将支持。Tasks 和 Elicitation 在 Claude 和 Claude Code 正式可用。',['Claude 官方文章','https://claude.com/resources/articles/skills-over-mcp-tasks-and-more']],
  ['11-24','byte','product','media','豆包推出个人 AI 助理「小豆」，邀请制公测','豆包官方账号 11 月 24 日宣布，小豆是能主动帮用户办事的个人 AI 助理，公测期间凭邀请码开通并赠送一定免费额度；其能力和体验之后会逐步上线豆包 App。',['腾讯新闻 · 安溪报转述豆包官方','https://news.qq.com/rain/a/20261124A0AW0500']],
  ['11-24','tencent','model','media','腾讯混元发布并开源第三代翻译模型 Hy MT3','包含 1.8B、7B、30B-A3B（MoE）三个尺寸，面向 PC、手机等端侧场景；已在腾讯 Hy 翻译 App 和小程序上线，开源模型可自行下载部署。',['腾讯新闻 · 界面新闻','https://news.qq.com/rain/a/20261124A0AWGA00']],
  ['11-23','google','feature','off','Gemini API 上线文件切片控制，并原生支持 Office 文件','开发者可只让模型读取 PDF 的指定页、表格的指定工作表和单元格范围、音视频的指定片段，只按实际读取的部分计费；同时可以直接上传 Word、Excel、PowerPoint 和 OpenDocument 文件。适用于全部 Gemini 4 模型，已在 AI Studio 和 Gemini 平台可用。',['Google 官方博客','https://blog.google/innovation-and-ai/technology/developers-tools/file-slicing-controls/']],
  ['11-23','other','model','off','Z.ai 发布 GLM-5.4：首个基于循环 Transformer 的旗舰模型','把 GLM-5 底座的 28 层循环跑两遍，参数规模 7500 亿；官方称智能水平相当于 2T–3T 参数的模型，高峰期约 70–80 token/秒；API 即将开放，权重计划在安全加固后开源。官方也提到模型容易陷入过长的「马拉松式思考」。',['Z.ai 官方博客','https://z.ai/blog/glm-5.4']],
  ['11-23','openai','product','off','OpenAI 与思科推出开源运行时 Shirudo：不重启就能给在跑的 Linux 系统加防护','基于 eBPF，把临时「护盾」挂到运行中的服务上，在补丁上线前挡住漏洞利用；官方演示由 Codex 生成的护盾拦下了针对运行中 Elasticsearch 的 Java4Shell 攻击。护盾需签名并经运维批准，项目采用 BSD 2-Clause 协议开源。',['OpenAI 官方博客','https://openai.com/index/introducing-shirudo/']],
  ['11-23','anthropic','product','off','Claude 平台上线 Enterprise Frontier Safeguards 测试版：零数据留存','符合条件的组织使用最强模型时，Anthropic 不留存提示和回复；加密副本（Sealed Safety Data）存进客户自己云账号的存储桶。在 Claude 平台、AWS 上的 Claude 平台和 Google Cloud 上的 Claude 模型（Anthropic 托管）开放测试。',['Claude 平台发布说明','https://platform.claude.com/docs/en/release-notes/overview']],
  ['11-23','google','feature','off','Google 搜索的个性化 AI 模式可连接 Wallet，Drive 和 Gemini 应用随后跟进','用户自愿开启后，AI 模式可读取 Google Wallet 里的消费和银行卡信息来给出省钱、用卡建议，只读、不能转账；Drive 和 Gemini 应用的连接将在未来几周上线，与已有的 Gmail、日历、照片并列。',['Google 官方博客','https://blog.google/products-and-platforms/products/search/google-search-personal-intelligence-apps/']],
  ['11-20','other','model','off','Thinking Machines 发布 Inkling 2 Mini，约 20GB 可在笔记本上跑','循环混合专家模型，总参数 264 亿、每 token 激活 34 亿，中间层对每个 token 跑三遍；权重大约 20GB，开放权重，当天可在 Tinker 上推理和定制。官方称在 1000 亿参数以下的开放模型里，DeepSWE v1.1 为 48.2%。',['Thinking Machines Lab','https://thinkingmachines.ai/news/inkling-2-mini/']],
  ['11-20','anthropic','feature','off','Claude 电脑操作向 Team 和 Enterprise 开放测试','电脑操作让 Claude 看见用户允许的屏幕，并在这些桌面应用里干活；可在新的 Claude 桌面体验里使用，网页版和手机版需打开电脑访问。正在按组织陆续开放。',['Claude 帮助中心发布说明','https://support.claude.com/en/articles/12138966-release-notes']],
  ['11-20','openai','feature','off','ChatGPT Space 开始向 Plus 用户开放','18 岁及以上的 Plus 用户可以在 Space 里做出可交互的页面和演示，并邀请同样开通了 Space 的人一起改；页面和幻灯片可以按已连接的应用自动更新。免费用户打不开别人分享的页面或演示。',['ChatGPT 发布说明','https://help.openai.com/en/articles/6825453-chatgpt-release-notes']],
  ['11-20','anthropic','money','off','Anthropic 完成 IPO 交割：每股 83 美元发行约 11.27 亿股','承销商全额行使超额配售权，一并完成同期私募；Anthropic 公告称 IPO 总募资约 935 亿美元（含现有股东出售的股份），另有 260 亿美元私募。',['Anthropic 公告','https://www.anthropic.com/news/ipo-close']],
  ['11-19','google','product','off','Genie 4 进入 Gemini API 和 AI Studio','开发者可以用文字、参考图或两者，生成连续的 720p、每秒 24 帧互动世界，并带同步的原生音频；键盘和实时文字提示可以改天气、光线、物体或事件。Google 称由 Gemini 的推理保持世界状态连贯，输出带 SynthID 水印。',['Google 博客','https://blog.google/innovation-and-ai/technology/developers-tools/genie-4-in-gemini-api/']],
  ['11-19','google','feature','off','Gemini Mac 版上线 computer use：在后台窗口替你点选、输入、跨应用做事','可跨本地文件、桌面应用和网页完成多步任务，在独立窗口运行、聊天里实时预览；由用户选择可访问的应用，关键操作需确认；目前仅限美国英文、个人账号的 Google AI Plus/Pro/Ultra 用户，需 Apple 芯片 Mac。',['Google 博客','https://blog.google/innovation-and-ai/products/gemini-app/computer-use-mac/']],
  ['11-19','ali','model','media','Qwen4-Max 正式上线，输入价每百万 token 0.075 美元','2.4 万亿参数、每个 token 激活 710 亿，原生支持视觉，上下文 100 万 token；通过 QwenCloud Token Plan、API 以及 QwenWork、QwenStudio 使用；阿里称较 Qwen3.8-Max 高强度推理少用 35% token、单任务成本降约 60%，并计划稍后发布更小的开源 Qwen4 模型。',['TokenPost','https://www.tokenpost.com/news/technology/61191']],
  ['11-18','meta','feature','off','Muse 在加拿大接上 Loblaw，并上线语音','Loblaw 是首家接入 Muse 的加拿大零售商，用户可以在 Muse 里规划餐食、建立购物车并结账；语音在加拿大的手机、网页和 Mac 上线，也可以用一句话做自己的 space。发信和付款前仍要本人确认。',['Meta 新闻室','https://about.fb.com/news/2026/11/meta-welcomes-loblaw-as-first-canadian-retail-partner-to-muse/']],
  ['11-18','byte','money','media','豆包工作日活破 800 万，企业 ARR 破 20 亿元','第一财经称，11 月 18 日字节跳动宣布，豆包工作上线三个月，日活突破 800 万，企业客户年度经常性收入突破 20 亿元。',['第一财经','https://www.yicai.com/news/103446257.html']],
  ['11-18','tencent','money','media','腾讯称 WorkBuddy 日活超 1000 万，七日收入年化超 5 亿美元','同一报道称，腾讯披露截至 11 月初 WorkBuddy 日活超过 1000 万，日均 token 调用超过 100 万亿；按最近七天收入年化，规模超过 5 亿美元。',['第一财经','https://www.yicai.com/news/103446257.html']],
  ['11-18','google','model','off','Google 发布 Gemini 4 Neon：定位介于 Carbon 与 Hydrogen 之间的前沿模型','面向复杂编程、知识工作和科研，上下文 100 万 token，价格每百万 token 输入 3 美元、输出 15 美元；Google 称在 Artificial Analysis 智能指数得 61 分、排第三；已在 Gemini API、Gemini for business、Antigravity 和 Gemini App（Pro/Ultra）上线，Gemini 里的任务也可以用它跑。',['Google 博客','https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-neon/']],
  ['11-17','openai','model','off','OpenAI 发布 GPT-6.2 Astra 和 Sol，Astra API 价格下调 20%','Astra 面向最难的专业任务，Sol 面向日常工作，两者用更少输出 token 完成任务；Astra 每百万 token 输入 8 美元、缓存输入 0.4 美元、输出 40 美元，Sol 沿用 GPT-6.1 Sol 的价格；ChatGPT Work、Codex 和 API 同日上线。OpenAI 称 Astra 生成的幻灯片、表格和文档更贴合用户模板与行业惯例。',['OpenAI','https://openai.com/index/introducing-gpt-6-2-astra-sol']],
  ['11-15','other','model','media','美团开源 LongCat-2.5：1.6 万亿参数的 Agent 模型','混合专家架构，每个 token 激活约 480 亿参数；权重以 MIT 许可开放，可商用；报道称完全在国产硬件上训练，示例部署用的是华为昇腾。',['The Decoder','https://the-decoder.com/meituan-releases-a-1-6-trillion-parameter-agent-model-that-never-touched-an-nvidia-gpu/']],
  ['11-13','other','trend','media','Sierra 发布个人 Agent 协议 Poppy 1.0，Shopify 全站启用','企业用这个协议告诉来访的 Agent 它在替谁办事、可以做什么；Shopify 为平台上所有店铺开启，Meta Muse 访问网站时会先找 Poppy；100 多家公司参与设计，规范仍标为草案。',['The Next Web','https://thenextweb.com/news/sierra-poppy-1-0-shopify-meta-muse-personal-agents']],
  ['11-12','other','event','media','英伟达 CEO 黄仁勋辞职，CFO 暂代','TechCrunch 报道，黄仁勋承认与一名被指为中国间谍的人有婚外关系后辞职，英伟达任命 CFO Colette Kress 为临时 CEO；报道认为英伟达对开源 AI 的支持存在变数，约 130 亿美元收购 Hugging Face 一事尚未完成。',['TechCrunch','https://techcrunch.com/2026/11/12/jensen-huangs-exit-puts-nvidias-support-for-open-source-in-question']],
  ['11-12','byte','feature','media','豆包工作接入 Kimi、GLM、DeepSeek 等第三方模型','新增 Kimi 3.1 Pro、GLM 5.3、DeepSeek V4.1 Flash 等模型，此前已先向企业客户开放；选择页标出各模型的额度消耗倍率，豆包 2.1 Lite 和 DeepSeek V4.1 Flash 的倍率下调。',['新浪科技 · 爱范儿','https://finance.sina.com.cn/tech/roll/2026-11-12/doc-iniynaxi3809511.shtml']],
  ['11-11','google','product','off','Google 推出 Gemini Decisions API，专做打分和判断','由新模型 Gemini Decision 1 驱动，用于路由、规则检查、评分这类有限选项的判断：一次给候选项打分，返回概率和确定度，单次最多 1000 个问题；输入每百万 token 0.1 美元，输出免费。',['Google 博客','https://blog.google/innovation-and-ai/technology/developers-tools/gemini-decisions-api']],
  ['11-11','ali','model','media','Qwen4-Max 预览版先上线阿里 Token Plan','新一代千问大模型 Qwen4 即将发布，旗舰版 Qwen4-Max 预览版先在阿里 Token Plan 上线，限时最低 1 折；千问办公、Qoder、千问 App、QwenStudio 等已接入。',['财联社','https://m.cls.cn/detail/2531047']],
  ['11-09','ali','product','media','千问办公 2.0：多人和 Agent 在同一个协作空间干活','号称首个支持多人与 Agent 协作的办公 Agent：协作空间关联钉钉群聊、文档、AI 表格，可给数字员工派任务；新增按事件触发的自动任务；已在客户端全量上线。',['科技日报','https://www.stdaily.com/web/gdxw/2026-11/09/content_610951.html']],
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
    h1: '11 月至今，新模型<mark>更快、更省</mark>',
    lead: '截至 11 月 27 日：OpenAI 修正 GPT-6.2 计费错误；腾讯混元开源草稿模型 DFly2；Kimi 发布游戏开发解决方案；美国 FCC 批准 SpaceX 轨道数据中心卫星；Anthropic 把 Messages API 迁到 Rust。完整月报在 11 月 30 日 18:00 生成。',
    sum: {
      model:   'Google 发布 Gemini 4 Neon；OpenAI 发布 GPT-6.2 Astra 和 Sol，Astra 的 API 输入价下调；Qwen4-Max 正式上线；Thinking Machines 发布 Inkling 2 Mini；Anthropic 发布 Fable 5.2 和 Mythos 5.2。',
      money:   'Anthropic 完成 IPO 交割；豆包工作宣布日活破 800 万、企业 ARR 破 20 亿元；腾讯称 WorkBuddy 日活超 1000 万，按最近七天收入年化超过 5 亿美元。',
      product: 'Genie 4 进入 Gemini API 和 AI Studio；Google 推出输出不收费的 Gemini Decisions API；千问办公 2.0 推出多人与 Agent 协作空间。',
      feature: 'Claude 可以把产物安装成桌面应用，MCP 服务器可向 Claude 下发技能；Claude 电脑操作向 Team 和 Enterprise 开放测试；ChatGPT Space 向 Plus 开放。',
      trend:   'Sierra 发布个人 Agent 协议 Poppy 1.0，Shopify 全站启用。',
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

return { NOW: '2026-11-27', START: '2026-07-01', MONTHS: [11, 10, 9, 8, 7], LATEST_FULL: 10, U, REPORT };
})();
