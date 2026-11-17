/* ===== 竞品观测 · 共享框架 =====
   图标、侧栏、7 月数据都从 竞品观测-总览.html 原样搬来；每个子页面引用本文件。 */
(function () {
const SPRITE = `
  <symbol id="i-grid" viewBox="0 0 24 24"><rect x="3.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="13.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="3.5" y="13.5" width="7" height="7" rx="1.5"/><rect x="13.5" y="13.5" width="7" height="7" rx="1.5"/></symbol>
  <symbol id="i-feed" viewBox="0 0 24 24"><path d="M5 5h14M5 10h14M5 15h9M5 20h6"/></symbol>
  <symbol id="i-cal" viewBox="0 0 24 24"><rect x="3.5" y="5" width="17" height="15.5" rx="2"/><path d="M3.5 10h17M8 3v4M16 3v4"/></symbol>
  <symbol id="i-book" viewBox="0 0 24 24"><path d="M5 4.5h10.5a3 3 0 0 1 3 3V20H8a3 3 0 0 1-3-3z"/><path d="M5 17a3 3 0 0 1 3-3h10.5"/></symbol>
  <symbol id="i-bell" viewBox="0 0 24 24"><path d="M6 16.5V11a6 6 0 0 1 12 0v5.5l1.5 2h-15z"/><path d="M10 20.5a2 2 0 0 0 4 0"/></symbol>
  <symbol id="i-clock" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/></symbol>
  <symbol id="i-gear" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-2.7 1.1V21a2 2 0 1 1-4 0v-.1a1.6 1.6 0 0 0-2.7-1.1l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1A1.6 1.6 0 0 0 3.6 15H3.5a2 2 0 1 1 0-4h.1a1.6 1.6 0 0 0 1.1-2.7l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1A1.6 1.6 0 0 0 10 4.4V4.5a2 2 0 1 1 4 0v.1a1.6 1.6 0 0 0 2.7 1.1l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0 1.1 2.7h.1a2 2 0 1 1 0 4z"/></symbol>
  <symbol id="i-chev" viewBox="0 0 24 24"><path d="M8 10l4 4 4-4"/></symbol>
  <symbol id="i-right" viewBox="0 0 24 24"><path d="M10 7l5 5-5 5"/></symbol>
  <symbol id="i-out" viewBox="0 0 24 24"><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/></symbol>
  <symbol id="i-refresh" viewBox="0 0 24 24"><path d="M20 11a8 8 0 0 0-14.5-4.5L4 8M4 4v4h4M4 13a8 8 0 0 0 14.5 4.5L20 16M20 20v-4h-4"/></symbol>
  <symbol id="i-send" viewBox="0 0 24 24"><path d="M4 12l16-8-6 16-2.5-6.5z"/></symbol>
  <symbol id="i-check" viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"/></symbol>
  <!-- 平台标志（备选 A · 取景框）：四个角框住一个信号点 -->
  <symbol id="mark" viewBox="0 0 32 32">
    <rect width="32" height="32" rx="9" fill="#15182e"/>
    <path d="M8 12.5V9a1 1 0 0 1 1-1h3.5M19.5 8H23a1 1 0 0 1 1 1v3.5M24 19.5V23a1 1 0 0 1-1 1h-3.5M12.5 24H9a1 1 0 0 1-1-1v-3.5" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round"/>
    <circle cx="16" cy="16" r="3.4" fill="#ff5a2c"/>
  </symbol>
  <symbol id="i-search" viewBox="0 0 24 24"><circle cx="11" cy="11" r="6.5"/><path d="M16 16l4 4"/></symbol>
  <symbol id="i-plus" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></symbol>
  <symbol id="i-download" viewBox="0 0 24 24"><path d="M12 4v11M7.5 10.5L12 15l4.5-4.5M5 19.5h14"/></symbol>
  <symbol id="i-edit" viewBox="0 0 24 24"><path d="M14.5 5.5l4 4L8 20H4v-4z"/><path d="M12.5 7.5l4 4"/></symbol>
  <symbol id="i-left" viewBox="0 0 24 24"><path d="M14 7l-5 5 5 5"/></symbol>
  <symbol id="i-alert" viewBox="0 0 24 24"><path d="M12 4l9 16H3z"/><path d="M12 10v4M12 17.2v.3"/></symbol>
  <symbol id="i-spark" viewBox="0 0 24 24"><path d="M12 3.5l1.8 5.2 5.2 1.8-5.2 1.8L12 17.5l-1.8-5.2L5 10.5l5.2-1.8z"/><path d="M18.5 16v4M16.5 18h4"/></symbol>
  <symbol id="i-copy" viewBox="0 0 24 24"><rect x="8.5" y="8.5" width="11" height="11" rx="2"/><path d="M15.5 8.5V6a1.5 1.5 0 0 0-1.5-1.5H6A1.5 1.5 0 0 0 4.5 6v8A1.5 1.5 0 0 0 6 15.5h2.5"/></symbol>
  <symbol id="i-more" viewBox="0 0 24 24"><circle cx="6" cy="12" r="1.2"/><circle cx="12" cy="12" r="1.2"/><circle cx="18" cy="12" r="1.2"/></symbol>
  <symbol id="i-users" viewBox="0 0 24 24"><circle cx="9" cy="8.5" r="3.5"/><path d="M3 19.5a6 6 0 0 1 12 0M15.5 5.2a3.5 3.5 0 0 1 0 6.6M17.5 14a6 6 0 0 1 3.5 5.5"/></symbol>
  <symbol id="i-doc" viewBox="0 0 24 24"><path d="M6.5 3.5h7l4 4V20a.5.5 0 0 1-.5.5h-10.5a.5.5 0 0 1-.5-.5V4a.5.5 0 0 1 .5-.5z"/><path d="M13.5 3.5v4h4M9 12h6M9 15.5h6"/></symbol>
  <symbol id="i-x" viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></symbol>
  <symbol id="i-filter" viewBox="0 0 24 24"><path d="M4 6h16M7 12h10M10 18h4"/></symbol>`;
document.body.insertAdjacentHTML('afterbegin', `<svg width="0" height="0" style="position:absolute" aria-hidden="true">${SPRITE}</svg>`);

/* ---------- 数据：当前观测空间（spaces.js 选定；动态来自 data*.js，7–11 月真实收录） ---------- */
const SP = window.CW_SPACE, SPACES = window.CW_SPACE_LIST;
const D = SP, P = SP.P, ORDER = SP.ORDER, T = SP.T;
const U = D.U;
/* 日期：一切「今天」「本月」都从数据截止日 D.NOW 推算，定时更新只改数据文件 */
const pad2 = n => String(n).padStart(2, '0');
const CUR = +D.NOW.slice(5, 7), DAY = +D.NOW.slice(8, 10), TODAY = D.NOW.slice(5);
const lastDay = m => new Date(2026, m, 0).getDate();
const mmdd = (m, d) => `${pad2(m)}-${pad2(d)}`;
const shiftDay = n => { const x = new Date(2026, CUR - 1, DAY + n); return mmdd(x.getMonth() + 1, x.getDate()); };
const FULL = D.LATEST_FULL, MONTH_END = mmdd(CUR, lastDay(CUR)), FULL_END = mmdd(FULL, lastDay(FULL));
/* 带上当前空间的站内链接：index.html → index.html?s=b2b（CCM 是默认空间，不加参数） */
const withSpace = (href, k = SP.key) => {
  const m = /^([\w-]+\.html)(\?[^#]*)?(#.*)?$/.exec(href || '');
  if (!m) return href;
  return m[1] + (k === 'ccm' ? '' : '?s=' + k) + (m[3] || '');
};
const monthOf = i => +U[i][0].slice(0, 2);
const inMonth = m => U.map((_, i) => i).filter(i => m === 'all' || monthOf(i) === +m);
const count = (idx, f) => idx.filter(f).length;
const KIND = { off: '官方', media: '媒体', relay: '转引' };
const WEEK = '日一二三四五六';
const esc = s => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;');
const md = d => { const [m, day] = d.split('-').map(Number); return { m, day, w: WEEK[new Date(2026, m - 1, day).getDay()] }; };

const kindHTML = k => k === 'off'
  ? `<span class="kind off"><svg class="i"><use href="#i-check"/></svg>官方</span>`
  : `<span class="kind">${KIND[k]}</span>`;
const dayHTML = d => { const { m, day, w } = md(d); return `<div class="day"><b class="num">${m}月${day}日</b><span>周${w}</span></div>`; };
const logoHTML = (p, sm) => `<div class="logo${sm ? ' sm' : ''} ${P[p].cls}">${P[p].mark}</div>`;
const tagHTML = t => `<span class="tag"><i style="background:${T[t][1]}"></i>${T[t][0]}</span>`;

/* 动态条目：结构与首页 .item 完全一致，标题可点进解读页 */
function itemHTML(i, opts = {}) {
  const [d, p, t, k, title, body, [srcName, srcUrl]] = U[i];
  return `<article class="item">
    ${logoHTML(p)}
    <div>
      <div class="meta"><span class="who">${P[p].name}</span>${tagHTML(t)}${kindHTML(k)}</div>
      <h3><a href="detail.html#u${i}">${esc(title)}</a></h3>
      <p>${esc(body)}</p>
      <div class="item-links">
        <a class="src" href="${srcUrl}" target="_blank" rel="noopener">${esc(srcName)}<svg class="i"><use href="#i-out"/></svg></a>
        ${opts.read ? `<a class="src read" href="detail.html#u${i}">阅读解读<svg class="i"><use href="#i-right"/></svg></a>` : ''}
      </div>
    </div>
  </article>`;
}
function feedHTML(idx, opts) {
  let html = '', last = '';
  for (const i of idx) {
    if (U[i][0] !== last) { html += dayHTML(U[i][0]); last = U[i][0]; }
    html += itemHTML(i, opts);
  }
  return html;
}

/* ---------- 侧栏：与首页一致，只换选中项 ---------- */
const NAV = [
  ['index',     '总览', 'i-grid',  'index.html'],
  ['feed',      '动态', 'i-feed',  'feed.html', inMonth(CUR).length],
  ['monthly',   '月报', 'i-cal',   'monthly.html'],
  ['annual',    '年报', 'i-book',  'annual.html'],
  ['subscribe', '订阅', 'i-bell',  'subscribe.html'],
  ['tasks',     '任务', 'i-clock', 'tasks.html'],
  ['config',    '配置', 'i-gear',  'config.html'],
];
function side(active) {
  const el = document.querySelector('.side');
  if (!el) return;
  el.innerHTML = `
    <div class="brand">
      <svg class="brand-mark" viewBox="0 0 32 32" role="img" aria-label="竞品观测标志"><use href="#mark"/></svg>
      <div class="brand-name">竞品观测</div>
    </div>
    <div class="space-wrap">
      <div class="space" role="button" tabindex="0" aria-haspopup="menu" aria-expanded="false" id="space-btn">
        <div><small>观测空间</small>${esc(SP.name)}</div>
        <svg class="i"><use href="#i-chev"/></svg>
      </div>
      <div class="space-menu" role="menu" id="space-menu" hidden>
        ${SPACES.map(s => `<a role="menuitemradio" aria-checked="${s.key === SP.key}" href="${withSpace(active + '.html', s.key)}" data-space="${s.key}"${s.key === SP.key ? ' class="on"' : ''}>
          <span class="av">${esc(s.av)}</span><span><b>${esc(s.name)}</b><small>${s.comps} 个${s.unit} · ${s.total} 条</small></span>${s.key === SP.key ? '<svg class="i"><use href="#i-check"/></svg>' : ''}</a>`).join('')}
        <a href="${withSpace('config.html')}#spaces-label" class="space-menu-foot"><svg class="i"><use href="#i-gear"/></svg>管理和新建空间</a>
      </div>
    </div>
    <nav class="nav">
      ${NAV.map(([k, label, ico, href, n]) => `<a href="${href}"${k === active ? ' class="on" aria-current="page"' : ''}><svg class="i"><use href="#${ico}"/></svg>${label}${n ? `<span class="count num">${n}</span>` : ''}</a>`).join('')}
    </nav>
    <div class="side-foot"><span class="pulse"></span><div>数据截至 <b class="num">${D.NOW}</b><br>每条动态均附原始来源</div></div>`;

  /* 空间切换菜单 */
  const btn = el.querySelector('#space-btn'), menu = el.querySelector('#space-menu');
  const open = v => { menu.hidden = !v; btn.setAttribute('aria-expanded', v); if (v) (menu.querySelector('a.on') || menu.querySelector('a')).focus(); };
  btn.addEventListener('click', () => open(menu.hidden));
  btn.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown') { e.preventDefault(); open(true); } });
  menu.addEventListener('keydown', e => {
    const items = [...menu.querySelectorAll('a')], k = items.indexOf(document.activeElement);
    if (e.key === 'Escape') { open(false); btn.focus(); }
    if (e.key === 'ArrowDown') { e.preventDefault(); items[(k + 1) % items.length].focus(); }
    if (e.key === 'ArrowUp') { e.preventDefault(); items[(k - 1 + items.length) % items.length].focus(); }
  });
  document.addEventListener('click', e => { if (!menu.hidden && !e.target.closest('.space-wrap')) open(false); });
  menu.addEventListener('click', e => { const a = e.target.closest('[data-space]'); if (a) store.raw('space', a.dataset.space); });

  /* 窄屏没有侧栏：顶部放一个下拉框切换空间 */
  const main = document.querySelector('.main');
  if (main && !main.querySelector('.m-space')) {
    main.insertAdjacentHTML('afterbegin', `<label class="m-space">观测空间<select aria-label="切换观测空间">${SPACES.map(s => `<option value="${s.key}"${s.key === SP.key ? ' selected' : ''}>${esc(s.name)}</option>`).join('')}</select></label>`);
    main.querySelector('.m-space select').addEventListener('change', e => { store.raw('space', e.target.value); location.href = withSpace(active + '.html', e.target.value); });
  }

  /* 顶栏面包屑里的空间名和说明 */
  document.querySelectorAll('.crumb a[href="index.html"], .crumb > b').forEach(n => { if (n.textContent.trim() === 'CCM 云文档') n.textContent = SP.name; });
  document.querySelectorAll('.crumb > span').forEach(n => { if (n.textContent.includes('在线文档、表格、幻灯片')) n.textContent = '· ' + SP.desc; });
}

/* 站内链接带上空间参数（本机存储不可用时也能保持在同一个空间） */
document.addEventListener('click', e => {
  const a = e.target.closest('a[href]');
  if (!a || a.target === '_blank' || a.hasAttribute('data-space')) return;
  const href = a.getAttribute('href'), next = withSpace(href);
  if (next !== href) a.setAttribute('href', next);
}, true);

/* 「AI 热门资讯」不是竞品分析：页面上的「竞品」改称「主体」（平台名「竞品观测」不改） */
if (SP.unit !== '竞品') {
  const swap = s => s.replace(/竞品月报/g, '资讯月报').replace(/竞品新动态/g, 'AI 新动态').replace(/竞品(?!观测)/g, SP.unit);
  /* 别的空间的名片（空间菜单、配置页空间卡片）保留它们自己的叫法 */
  const keep = n => { const el = n.nodeType === 1 ? n : n.parentElement; return !!(el && el.closest('[data-keep], .space-menu')); };
  const fix = root => {
    if (keep(root)) return;
    const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    for (let n = w.nextNode(); n; n = w.nextNode()) if (n.nodeValue.includes('竞品') && !keep(n)) { const v = swap(n.nodeValue); if (v !== n.nodeValue) n.nodeValue = v; }
    if (root.querySelectorAll) root.querySelectorAll('[aria-label*="竞品"],[placeholder*="竞品"],[title*="竞品"]').forEach(el => ['aria-label', 'placeholder', 'title'].forEach(a => { const v = el.getAttribute(a); if (v && v.includes('竞品')) el.setAttribute(a, swap(v)); }));
  };
  const run = () => { fix(document.body); new MutationObserver(ms => ms.forEach(m => { if (m.type === 'characterData') { if (m.target.nodeValue.includes('竞品') && !keep(m.target)) m.target.nodeValue = swap(m.target.nodeValue); } else m.addedNodes.forEach(n => n.nodeType === 3 ? (n.nodeValue.includes('竞品') && !keep(n) && (n.nodeValue = swap(n.nodeValue))) : n.nodeType === 1 && fix(n)); })).observe(document.body, { childList: true, subtree: true, characterData: true }); };
  document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', run) : setTimeout(run);
  document.title = swap(document.title);
}


/* ---------- 提示条 ---------- */
function toast(msg, tone) {
  let el = document.getElementById('cw-toast');
  if (!el) { el = document.createElement('div'); el.id = 'cw-toast'; el.setAttribute('role', 'status'); document.body.appendChild(el); }
  el.className = 'toast' + (tone ? ' ' + tone : '');
  el.innerHTML = `<svg class="i"><use href="#${tone === 'warn' ? 'i-alert' : 'i-check'}"/></svg><span>${msg}</span>`;
  el.classList.remove('show'); void el.offsetWidth; el.classList.add('show');
  clearTimeout(el._t); el._t = setTimeout(() => el.classList.remove('show'), 2600);
}

/* ---------- 弹窗：onOk 返回 false 时不关闭 ---------- */
function modal({ title, sub, body, ok = '保存', danger, onOk, wide }) {
  const back = document.createElement('div');
  back.className = 'modal-back';
  back.innerHTML = `<form class="modal${wide ? ' wide' : ''}" role="dialog" aria-modal="true" aria-labelledby="m-title" novalidate>
    <div class="modal-head"><div><h2 id="m-title">${title}</h2>${sub ? `<p>${sub}</p>` : ''}</div><button type="button" class="icon-btn" data-close aria-label="关闭"><svg class="i"><use href="#i-x"/></svg></button></div>
    <div class="modal-body">${body}</div>
    <div class="modal-foot"><span class="modal-err" aria-live="polite"></span><button type="button" class="btn" data-close>取消</button><button type="submit" class="btn primary${danger ? ' danger' : ''}">${ok}</button></div>
  </form>`;
  const last = document.activeElement;
  const close = () => { back.classList.remove('show'); setTimeout(() => back.remove(), 180); document.removeEventListener('keydown', esc); last && last.focus && last.focus(); };
  const esc = e => { if (e.key === 'Escape') close(); };
  document.addEventListener('keydown', esc);
  back.addEventListener('click', e => { if (e.target === back || e.target.closest('[data-close]')) close(); });
  const form = back.querySelector('form');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const err = onOk ? onOk(form, msg => { form.querySelector('.modal-err').textContent = msg; }) : true;
    if (err !== false) close();
  });
  document.body.appendChild(back);
  requestAnimationFrame(() => back.classList.add('show'));
  const first = form.querySelector('input:not([type=hidden]),select,textarea,button[type=submit]');
  setTimeout(() => first && first.focus(), 30);
  return { form, close };
}
const val = (form, name) => { const el = form.elements[name]; return el ? (el.value || '').trim() : ''; };
const checked = (form, name) => [...form.querySelectorAll(`[name="${name}"]:checked`)].map(x => x.value);

/* 按钮忙碌态 */
function busy(btn, text, ms, done) {
  const html = btn.innerHTML; btn.disabled = true; btn.classList.add('busy');
  btn.innerHTML = `<svg class="i spin"><use href="#i-refresh"/></svg>${text}`;
  setTimeout(() => { btn.disabled = false; btn.classList.remove('busy'); btn.innerHTML = html; done && done(); }, ms);
}

/* 本机记住的轻量偏好（读写失败时忽略） */
/* 各空间分开存（CCM 沿用原来的键名，已保存的筛选和订阅不丢） */
const NS = SP.key === 'ccm' ? 'cw:' : `cw:${SP.key}:`;
const store = {
  get(k, d) { try { const v = localStorage.getItem(NS + k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem(NS + k, JSON.stringify(v)); } catch (e) {} },
  raw(k, v) { try { localStorage.setItem('cw:' + k, v); } catch (e) {} },
};

/* 推送到飞书（各页通用，接收方为示意：取当前空间的订阅群） */
const GROUPS = SP.SEED.filter(s => s.kind === 'group' && s.on).map(s => [s.name, s.size]);
function pushDialog(what) {
  modal({
    title: '推送到飞书', sub: what, ok: '推送',
    body: `<div class="check-list">${GROUPS.map(([g, n], i) => `<label class="check"><input type="checkbox" name="g" value="${g}"${i === 0 ? ' checked' : ''}><span>${g}</span><small>${n} 人</small></label>`).join('')}</div>
      <p class="note">接收方为示意数据；真实环境里读取订阅设置中的飞书群。</p>`,
    onOk(f, err) { const g = checked(f, 'g'); if (!g.length) { err('至少选一个群'); return false; } toast(`已推送到 ${g.length} 个群`); },
  });
}

/* 开关、分段：点击切换选中态 */
document.addEventListener('click', e => {
  const sw = e.target.closest('.switch');
  if (sw) sw.setAttribute('aria-checked', sw.getAttribute('aria-checked') === 'true' ? 'false' : 'true');
  const seg = e.target.closest('.seg button');
  if (seg) { seg.parentElement.querySelectorAll('button').forEach(b => b.classList.toggle('on', b === seg)); }
});

/* 当前空间的订阅是否会收到某条动态（订阅页、解读页共用） */
const subHits = (s, i) => (!s.ps.length || s.ps.includes(U[i][1])) && (!s.ts.length || s.ts.includes(U[i][2]));
/* 数据源：某个竞品对应的来源名，以及当前处于故障状态的来源 */
const srcOf = p => SP.SRC.filter(s => s[1] === p).map(s => s[0]);
const FAILING = SP.SRC.find(s => s[3]);

window.CW = { CUR, DAY, TODAY, FULL, MONTH_END, FULL_END, lastDay, mmdd, shiftDay, SP, SPACES, HEX: window.CW_HEX, withSpace, subHits, srcOf, FAILING, D, P, ORDER, T, U, KIND, esc, md, monthOf, inMonth, count, kindHTML, dayHTML, logoHTML, tagHTML, itemHTML, feedHTML, side, toast, modal, val, checked, busy, store, pushDialog, GROUPS };
})();
