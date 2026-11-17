/* 数据自检：node tools/check-data.js
   检查三个空间的数据文件：日期倒序、在收录范围内、竞品和主题键存在、来源类型和链接合法、标题不重复、每个月都有月报。 */
const fs = require('fs'), path = require('path'), vm = require('vm');
const dir = path.join(__dirname, '..');
const ctx = { window: {}, location: { search: '' }, localStorage: { getItem() { return null; }, setItem() {} }, URLSearchParams };
vm.createContext(ctx);
for (const f of ['data.js', 'data-b2b.js', 'data-news.js', 'spaces.js']) vm.runInContext(fs.readFileSync(path.join(dir, f), 'utf8'), ctx, { filename: f });
const META_SRC = fs.readFileSync(path.join(dir, 'spaces.js'), 'utf8');
let bad = 0; const err = m => { bad++; console.log('✗ ' + m); };
for (const k of ['ccm', 'b2b', 'news']) {
  const d = ctx.window.CW_SPACES[k];
  ctx.location.search = '?s=' + k; vm.runInContext(META_SRC, ctx);
  const sp = ctx.window.CW_SPACE;
  if (!/^2026-\d\d-\d\d$/.test(d.NOW)) err(`${k}: NOW 格式不对 ${d.NOW}`);
  const titles = new Set(); let prev = '99-99';
  d.U.forEach((u, i) => {
    const [dt, p, t, kind, title, body, src] = u, at = `${k} #${i} ${dt} ${title}`;
    if (!/^\d\d-\d\d$/.test(dt)) err(`${at}: 日期格式`);
    if (dt > prev) err(`${at}: 没有按日期倒序`); prev = dt;
    if ('2026-' + dt > d.NOW || '2026-' + dt < d.START) err(`${at}: 日期超出 ${d.START}–${d.NOW}`);
    if (!sp.P[p]) err(`${at}: 未知竞品键 ${p}`);
    if (!sp.T[t]) err(`${at}: 未知主题键 ${t}`);
    if (!['off', 'media'].includes(kind)) err(`${at}: 来源类型应为 off 或 media`);
    if (!title || !body) err(`${at}: 标题或摘要为空`);
    if (!Array.isArray(src) || !/^https?:\/\//.test(src[1] || '')) err(`${at}: 来源链接不合法`);
    if (titles.has(title)) err(`${at}: 标题重复`); titles.add(title);
  });
  for (const m of d.MONTHS) { const r = d.REPORT[m]; if (!r || !r.h1 || !r.lead) err(`${k}: ${m} 月缺月报标题或导语`); else if (/月报正文待生成/.test(r.lead)) err(`${k}: ${m} 月月报还是占位`); }
  console.log(`${k}: ${d.U.length} 条，截至 ${d.NOW}，月份 ${d.MONTHS.join('/')}`);
}
console.log(bad ? `共 ${bad} 个问题` : '全部通过'); process.exit(bad ? 1 : 0);
