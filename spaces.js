/* ===== 观测空间 · 每个空间的竞品、主题和平台设置 =====
   动态数据在 data.js（CCM 云文档）、data-b2b.js、data-news.js；这里放每个空间的「配置」：
   竞品 / 主体、主题分类与判定说明、数据源、订阅（示意）、推送群（示意）、预设筛选、解读样例。
   订阅、推送群、数据源状态是平台内部数据，页面上继续标「示意」。 */
(function () {
const V = { inline: 'var(--t-inline)', agent: 'var(--t-agent)', deck: 'var(--t-deck)', ship: 'var(--t-ship)', meet: 'var(--t-meet)', scope: 'var(--t-scope)' };
const HEX = { 'var(--t-inline)': '#9a4fe0', 'var(--t-agent)': '#0e9a82', 'var(--t-deck)': '#3a40f0', 'var(--t-ship)': '#e8830c', 'var(--t-meet)': '#4f9a1e', 'var(--t-scope)': '#8a8da0' };

const META = {
  /* ---------------- CCM 云文档 ---------------- */
  ccm: {
    key: 'ccm', av: 'C', name: 'CCM 云文档', desc: '在线文档、表格、幻灯片与文档内 AI',
    unit: '竞品',
    P: {
      google: { name: 'Google Workspace', mark: 'G',   cls: 'l-google' },
      ms:     { name: 'Microsoft 365',   mark: 'M',   cls: 'l-ms' },
      notion: { name: 'Notion',          mark: 'N',   cls: 'l-notion' },
      tx:     { name: '腾讯文档',         mark: '腾',  cls: 'l-tx' },
      dd:     { name: '钉钉文档',         mark: '钉',  cls: 'l-dd' },
      wps:    { name: 'WPS',             mark: 'W',   cls: 'l-wps' },
      claude: { name: 'Claude',          mark: 'Cl',  cls: 'l-claude' },
      gpt:    { name: 'ChatGPT',         mark: 'GPT', cls: 'l-gpt' },
    },
    ORDER: ['google', 'ms', 'notion', 'gpt', 'claude', 'tx', 'wps', 'dd'],
    T: {
      inline: ['正文内联',   V.inline, 'AI 直接在文档、表格、幻灯片的正文或评论里工作，不用切到单独的窗口。'],
      agent:  ['Agent 协作', V.agent,  'AI 作为独立角色领任务、跨应用执行，或以独立 App 的形式出现。'],
      deck:   ['一键成片',   V.deck,   '从一句话或一组资料，直接生成完整的文档、表格或演示。'],
      ship:   ['交付导出',   V.ship,   'AI 产出物的格式、打开方式，以及导入导出。'],
      meet:   ['会议沉淀',   V.meet,   '会议录音、笔记、截图转成文档。'],
      scope:  ['覆盖与定价', V.scope,  '语言、地区、套餐、价格和开放范围的变化。'],
    },
    SRC: [
      ['Google Workspace Updates', 'google', 'Google Workspace · 官方'],
      ['Gemini for Workspace 博客', 'google', 'Google Workspace · 官方'],
      ['Microsoft 365 Copilot 发布说明', 'ms', 'Microsoft 365 · 官方'],
      ['Microsoft Copilot 博客', 'ms', 'Microsoft 365 · 官方'],
      ['Notion 发布说明', 'notion', 'Notion · 官方'],
      ['OpenAI 发布说明', 'gpt', 'ChatGPT · 官方'],
      ['Claude 更新日志', 'claude', 'Claude · 官方'],
      ['腾讯文档更新日志', 'tx', '腾讯文档 · 官方'],
      ['WPS 更新日志', 'wps', 'WPS · 官方'],
      ['钉钉文档更新日志', 'dd', '钉钉文档 · 官方', true],
      ['新闻检索 · 中文媒体', '', '全部竞品 · 媒体'],
      ['新闻检索 · 英文媒体', '', '全部竞品 · 媒体'],
    ],
    srcNote: '官方来源：Google Workspace Updates、Microsoft Copilot 博客、Notion 发布说明、Claude 更新日志。',
    SEED: [
      { id: 's1', av: '产', name: 'CCM 产品组', kind: 'group', size: 42, k: ['rt', 'mon'], ps: [], ts: [], on: true },
      { id: 's2', av: '设', name: '文档 AI 设计周会', kind: 'group', size: 18, k: ['mon'], ps: [], ts: [], on: true },
      { id: 's3', av: '幻', name: '幻灯片小组', kind: 'group', size: 12, k: ['rt'], ps: ['ms', 'google', 'gpt'], ts: ['deck', 'inline'], on: true },
      { id: 's4', av: '国', name: '国内竞品观察', kind: 'group', size: 26, k: ['daily', 'mon'], ps: ['tx', 'dd', 'wps'], ts: [], on: true },
      { id: 's5', av: '我', name: '我', kind: 'person', size: 1, k: ['year'], ps: [], ts: [], on: true },
      { id: 's6', av: '周', name: '周会归档群', kind: 'group', size: 9, k: ['mon'], ps: [], ts: [], on: false, pausedAt: '08-31 18:00' },
    ],
    PRESET: [
      { name: '国内竞品', desc: '腾讯、钉钉、WPS', f: { ps: ['tx', 'dd', 'wps'] } },
      { name: '幻灯片相关', desc: '标题或摘要含「演示」「幻灯片」「PowerPoint」「Slides」', f: { kw: ['演示', '幻灯片', 'PowerPoint', 'Slides', 'PPT'] } },
      { name: '只看官方日志', desc: '', f: { k: 'off' } },
    ],
    SAMPLE: {
      find: '接管评论',
      html: `<p>7 月有两家厂商把 AI 放进了评论区：7 月 28 日，Google Docs 的 Gemini 能归纳评论串、代拟回复；7 月 31 日，Microsoft 的 PowerPoint Copilot 能写评论、回复并标记解决。评论原本是协作者之间沟通的地方，现在 AI 也能参与进来。</p>
      <p>Google 把这项能力限定给有编辑权限的用户。谁能让 AI 改评论、改正文，是这类功能落地前要先回答的问题。</p>
      <p>可以拿来对照的问题：我们的文档评论里，AI 现在能做到哪一步？总结、代拟回复，还是直接改正文？</p>`,
    },
  },

  /* ---------------- B 端 AI 办公 ---------------- */
  b2b: {
    key: 'b2b', av: 'B', name: 'B 端 AI 办公', desc: '协同办公与企业 AI 助手、Agent 平台',
    unit: '竞品',
    P: {
      feishu:   { name: '飞书',                 mark: '飞',  cls: 'l-feishu' },
      dingtalk: { name: '钉钉',                 mark: '钉',  cls: 'l-dd' },
      wecom:    { name: '企业微信',             mark: '企',  cls: 'l-wecom' },
      m365:     { name: 'Microsoft 365 Copilot', mark: 'M',  cls: 'l-ms' },
      google:   { name: 'Google Workspace',     mark: 'G',   cls: 'l-google' },
      slack:    { name: 'Slack',                mark: 'S',   cls: 'l-slack' },
      notion:   { name: 'Notion',               mark: 'N',   cls: 'l-notion' },
      chatgpt:  { name: 'ChatGPT 企业版',        mark: 'GPT', cls: 'l-gpt' },
      claude:   { name: 'Claude 企业版',         mark: 'Cl',  cls: 'l-claude' },
      grok:     { name: 'Grok Bot',             mark: 'X',   cls: 'l-x' },
      muse:     { name: 'Meta Muse',            mark: 'Mu',  cls: 'l-meta' },
    },
    ORDER: ['m365', 'feishu', 'chatgpt', 'claude', 'google', 'notion', 'slack', 'grok', 'muse', 'wecom', 'dingtalk'],
    T: {
      agent:   ['AI 同事',   V.agent,  'Agent 以独立身份或独立电脑接活、跨应用执行、主动跟进工作，或以团队智能体的形式出现。'],
      entry:   ['入口与协作', V.inline, 'AI 出现在 IM、群聊、通讯录、共享空间里，或多人与 AI 在同一处协作。'],
      connect: ['连接与插件', V.deck,   '连接器、插件、MCP、CLI 等让 AI 调用外部应用和数据的能力。'],
      govern:  ['管控与安全', V.ship,   '管理员权限、审批、审计、数据防泄漏、用量上限等企业管控能力。'],
      price:   ['定价与额度', V.scope,  '商业版本、套餐、额度、计费方式和模型选择的变化。'],
      know:    ['知识与会议', V.meet,   '企业知识库、权威来源、会议纪要与回顾。'],
    },
    SRC: [
      ['飞书官网 · 产品动态', 'feishu', '飞书 · 官方'],
      ['钉钉更新日志', 'dingtalk', '钉钉 · 官方', true],
      ['企业微信更新日志', 'wecom', '企业微信 · 官方'],
      ['Microsoft Copilot 博客', 'm365', 'Microsoft 365 Copilot · 官方'],
      ['Google Workspace Updates', 'google', 'Google Workspace · 官方'],
      ['Slack 博客', 'slack', 'Slack · 官方'],
      ['Notion 发布说明', 'notion', 'Notion · 官方'],
      ['ChatGPT Business 发布说明', 'chatgpt', 'ChatGPT 企业版 · 官方'],
      ['Claude 更新日志', 'claude', 'Claude 企业版 · 官方'],
      ['xAI 新闻', 'grok', 'Grok Bot · 官方'],
      ['Meta 新闻室', 'muse', 'Meta Muse · 官方'],
      ['新闻检索 · 中文媒体', '', '全部竞品 · 媒体'],
      ['新闻检索 · 英文媒体', '', '全部竞品 · 媒体'],
    ],
    srcNote: '官方来源：Microsoft Copilot 博客、Google Workspace Updates、Slack 博客、Notion 发布说明、Claude 更新日志、xAI 新闻、Meta 新闻室。',
    SEED: [
      { id: 's1', av: '办', name: '办公产品组', kind: 'group', size: 35, k: ['rt', 'mon'], ps: [], ts: [], on: true },
      { id: 's2', av: '架', name: 'AI 平台架构', kind: 'group', size: 16, k: ['mon'], ps: [], ts: ['govern', 'connect'], on: true },
      { id: 's3', av: 'A', name: 'Agent 小组', kind: 'group', size: 14, k: ['rt'], ps: [], ts: ['agent'], on: true },
      { id: 's4', av: '国', name: '国内协同观察', kind: 'group', size: 22, k: ['daily', 'mon'], ps: ['feishu', 'dingtalk', 'wecom'], ts: [], on: true },
      { id: 's5', av: '我', name: '我', kind: 'person', size: 1, k: ['year'], ps: [], ts: [], on: true },
      { id: 's6', av: '季', name: '季度规划群', kind: 'group', size: 8, k: ['mon'], ps: [], ts: [], on: false, pausedAt: '09-30 18:00' },
    ],
    PRESET: [
      { name: '国内协同', desc: '飞书、钉钉、企业微信', f: { ps: ['feishu', 'dingtalk', 'wecom'] } },
      { name: '新玩家', desc: 'Grok Bot、Meta Muse', f: { ps: ['grok', 'muse'] } },
      { name: '管理员能管什么', desc: '「管控与安全」主题', f: { t: 'govern' } },
    ],
    SAMPLE: {
      find: 'Grok Bot 向企业开放',
      html: `<p>9 月有三家把 Agent 交到企业手里：9 月 3 日 Grok Bot 向企业开放，9 月 15 日飞书推出团队智能体「豆包工作伙伴」，9 月 29 日 Meta 推出 Muse 小企业版。三者的共同点是 Agent 有自己的身份或自己的云电脑，按账号授权去干活。</p>
      <p>管控方式各不相同：Grok Bot 默认没有任何权限，只能进入你为它登录的账号；飞书让 Agent 的权限始终和使用者一致；Muse 发布内容、发送消息、花钱之前都要用户批准。</p>
      <p>可以拿来对照的问题：我们的 Agent 以谁的身份干活？权限跟着人走，还是单独授权？哪些动作必须先让人确认？</p>`,
    },
  },

  /* ---------------- AI 热门资讯 ---------------- */
  news: {
    key: 'news', av: 'AI', name: 'AI 热门资讯', desc: '模型、新产品、新功能、新趋势与行业大事',
    unit: '主体',
    P: {
      openai:    { name: 'OpenAI',     mark: 'O',   cls: 'l-gpt' },
      anthropic: { name: 'Anthropic',  mark: 'A',   cls: 'l-claude' },
      google:    { name: 'Google',     mark: 'G',   cls: 'l-google' },
      meta:      { name: 'Meta',       mark: 'Me',  cls: 'l-meta' },
      xai:       { name: 'xAI',        mark: 'X',   cls: 'l-x' },
      deepseek:  { name: 'DeepSeek',   mark: 'DS',  cls: 'l-deepseek' },
      ali:       { name: '阿里 · 千问', mark: '千',  cls: 'l-ali' },
      byte:      { name: '字节 · 飞书豆包', mark: '字', cls: 'l-feishu' },
      tencent:   { name: '腾讯',       mark: '腾',  cls: 'l-tx' },
      kimi:      { name: '月之暗面',   mark: 'K',   cls: 'l-kimi' },
      other:     { name: '其他',       mark: '+',   cls: 'l-other' },
    },
    ORDER: ['openai', 'anthropic', 'google', 'meta', 'xai', 'deepseek', 'byte', 'ali', 'tencent', 'kimi', 'other'],
    T: {
      model:   ['模型发布', V.deck,   '新模型、新版本、价格和上下文等模型本身的变化。'],
      product: ['新产品',   V.agent,  '新推出的独立产品、App、API 或面向新人群的版本。'],
      feature: ['新功能',   V.inline, '已有产品里新增的能力、入口或可选模型。'],
      trend:   ['新趋势',   V.ship,   '多家公司同时出现的方向、行业标准、用户态度和市场信号。'],
      money:   ['资本动向', V.meet,   '融资、上市、收入、收购与基础设施投资。'],
      event:   ['监管与事件', V.scope, '政策法规、监管动作、诉讼和重大人事变动。'],
    },
    SRC: [
      ['OpenAI 新闻', 'openai', 'OpenAI · 官方'],
      ['Anthropic 新闻', 'anthropic', 'Anthropic · 官方'],
      ['Google AI 博客', 'google', 'Google · 官方'],
      ['Meta 新闻室', 'meta', 'Meta · 官方'],
      ['xAI 新闻', 'xai', 'xAI · 官方'],
      ['DeepSeek 开放平台公告', 'deepseek', 'DeepSeek · 官方', true],
      ['通义千问公告', 'ali', '阿里 · 官方'],
      ['飞书与豆包公告', 'byte', '字节 · 官方'],
      ['腾讯新闻稿', 'tencent', '腾讯 · 官方'],
      ['月之暗面公告', 'kimi', '月之暗面 · 官方'],
      ['科技媒体 · 英文', '', '全部主体 · 媒体'],
      ['科技媒体 · 中文', '', '全部主体 · 媒体'],
      ['融资与上市数据', '', '全部主体 · 媒体'],
    ],
    srcNote: '官方来源：Google 博客、Meta 新闻室、xAI 新闻、Slack 博客。OpenAI 官方页面检索时无法读取，相关条目用媒体报道。',
    SEED: [
      { id: 's1', av: '全', name: 'AI 资讯全员群', kind: 'group', size: 120, k: ['daily'], ps: [], ts: [], on: true },
      { id: 's2', av: '模', name: '模型评测组', kind: 'group', size: 15, k: ['rt'], ps: [], ts: ['model'], on: true },
      { id: 's3', av: '新', name: '产品创新组', kind: 'group', size: 28, k: ['rt', 'mon'], ps: [], ts: ['product', 'feature', 'trend'], on: true },
      { id: 's4', av: '战', name: '战略组', kind: 'group', size: 9, k: ['mon'], ps: [], ts: ['money', 'event', 'trend'], on: true },
      { id: 's5', av: '我', name: '我', kind: 'person', size: 1, k: ['year'], ps: [], ts: [], on: true },
      { id: 's6', av: '国', name: '国内模型观察', kind: 'group', size: 11, k: ['rt'], ps: ['deepseek', 'ali', 'byte', 'tencent', 'kimi'], ts: [], on: false, pausedAt: '10-31 18:00' },
    ],
    PRESET: [
      { name: '新产品 + 新功能 + 新趋势', desc: '重点关注的三类', f: { ts: ['product', 'feature', 'trend'] } },
      { name: '国内厂商', desc: 'DeepSeek、千问、字节、腾讯、月之暗面', f: { ps: ['deepseek', 'ali', 'byte', 'tencent', 'kimi'] } },
      { name: '只看模型发布', desc: '', f: { t: 'model' } },
    ],
    SAMPLE: {
      find: '一周七个模型',
      html: `<p>7 月 17 日到 23 日的七天里，Kimi K3、千问三款模型、Gemini 3.6 Flash 等三款、poolside Laguna S 2.1、蚂蚁 Ling-3.0-flash 相继发布。同月 9 日 OpenAI 刚发布 GPT-5.6 的三档模型。</p>
      <p>这种密度之后，9 月和 10 月又有 Opus 5.5、DeepSeek V4.1 Flash、Haiku 5.5 等更新，多家都在同一代模型里拆出不同价位的档位。</p>
      <p>可以拿来对照的问题：我们接入的模型多久评估一次？换模型的成本有多高，能不能像豆包工作那样让用户自己选？</p>`,
    },
  },
};

/* 当前空间：网址 ?s= 优先，其次本机记住的，默认 CCM */
const KEYS = ['ccm', 'b2b', 'news'];
let key = '';
try { key = new URLSearchParams(location.search).get('s') || ''; } catch (e) {}
if (!KEYS.includes(key)) { try { key = localStorage.getItem('cw:space') || ''; } catch (e) {} }
if (!KEYS.includes(key)) key = 'ccm';
try { localStorage.setItem('cw:space', key); } catch (e) {}

const DATA = window.CW_SPACES || {};
window.CW_SPACE = Object.assign({}, DATA[key], META[key]);
window.CW_SPACE_LIST = KEYS.map(k => ({ key: k, av: META[k].av, name: META[k].name, desc: META[k].desc, unit: META[k].unit, comps: META[k].ORDER.length, srcs: META[k].SRC.length, total: (DATA[k] && DATA[k].U.length) || 0 }));
window.CW_HEX = HEX;
})();
