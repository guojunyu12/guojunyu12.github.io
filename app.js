'use strict';

// 内容来自两个公开仓库的 README。更新作品介绍时同步修改这里和首页卡片。
const projects = {
  video: {
    title: '电商视频拆解 Skill',
    category: 'AI 工具 / 内容创作',
    summary: '从一条参考视频出发，拆解结构、对比差距，再组织适合自己商品的新脚本。',
    sections: [
      { title: '它解决什么问题', text: '看到一条值得参考的带货视频后，如何弄清它的开场、卖点和节奏，并把这些结构用到自己的素材中？这个 Skill 将分析整理成拆解报告、对比建议与拍摄脚本。' },
      { title: '从分析到创作', items: ['按策略、节拍、镜头和元素四个层级拆解视频，输出时间轴与分镜表。', '对比参考视频与自家素材，整理差距和优先改法。', '结合商品信息，生成创作角度、分镜与口播脚本。', '整理花字、静音可看性和多视频共性，并提示表达风险。'] },
      { title: '项目状态', text: '开源 Skill。README 标注：示例为虚构，真实视频完整流程及部分转写、下载路径仍待验证；对比评分不预测播放量或成交额。' }
    ],
    repo: 'https://github.com/guojunyu12/ecom-video-breakdown',
    demo: 'https://guojunyu12.github.io/ecom-video-breakdown/'
  },
  music: {
    title: '音乐，也可以被看见',
    category: '交互设计 / 视觉探索',
    summary: '一个以音乐为主题的独立展示设计，用黑胶、频谱与滚动编排构建完整的单页体验。',
    sections: [
      { title: '一次音乐体验实验', text: '项目以 QQ 音乐为主题，探索杂志式排版、三维黑胶和互动舞台。这是独立展示设计，不代表与 QQ 音乐的官方合作。' },
      { title: '设计与实现', items: ['杂志式字体与 12 栏网格组织页面。', 'Three.js 黑胶、反射舞台与配乐频谱形成视听联动。', 'GSAP / Lenis 编排滚动叙事，支持三色主题。', '为手机与减少动态模式提供简化效果，为不可用的媒体和 WebGL 提供降级。'] },
      { title: '项目状态', text: '静态展示页。README 将人物素材标记为 MVP，并提供素材处理与验证记录。项目资源和第三方许可说明保存在仓库内。' }
    ],
    repo: 'https://github.com/guojunyu12/qq-music-universe',
    demo: 'https://guojunyu12.github.io/qq-music-universe/'
  }
};

const root = document.documentElement;
const themeButton = document.querySelector('.theme-toggle');
function applyTheme(theme) {
  root.dataset.theme = theme;
  const dark = theme === 'dark';
  themeButton.setAttribute('aria-pressed', String(dark));
  themeButton.setAttribute('aria-label', dark ? '切换到浅色模式' : '切换到深色模式');
  document.querySelector('meta[name="theme-color"]').content = dark ? '#20241f' : '#f8f8f4';
}
try { applyTheme(localStorage.getItem('junyu-theme') === 'dark' ? 'dark' : 'light'); } catch { applyTheme('light'); }
themeButton.addEventListener('click', () => {
  const theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  applyTheme(theme);
  try { localStorage.setItem('junyu-theme', theme); } catch { /* 受限存储不影响当前主题切换。 */ }
});

const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
function closeMenu() {
  nav.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', '打开导航');
}
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? '关闭导航' : '打开导航');
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && nav.classList.contains('is-open')) { closeMenu(); menuButton.focus(); }
});
document.addEventListener('click', event => {
  if (!event.target.closest('.site-header')) closeMenu();
});
window.matchMedia('(min-width: 601px)').addEventListener('change', event => { if (event.matches) closeMenu(); });

document.querySelectorAll('.filter').forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    document.querySelectorAll('.filter').forEach(item => {
      const selected = item === button;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    let count = 0;
    document.querySelectorAll('.project').forEach(project => {
      project.hidden = filter !== 'all' && project.dataset.category !== filter;
      if (!project.hidden) count++;
    });
    document.querySelector('.work-count').textContent = `${count} 个公开项目`;
  });
});

const dialog = document.querySelector('.project-dialog');
let lastProjectButton;
document.querySelectorAll('[data-project]').forEach(button => {
  button.addEventListener('click', () => {
    const project = projects[button.dataset.project];
    if (!project) return;
    lastProjectButton = button;
    document.getElementById('dialog-title').textContent = project.title;
    document.getElementById('dialog-category').textContent = project.category;
    document.getElementById('dialog-summary').textContent = project.summary;
    const body = document.getElementById('dialog-body');
    body.replaceChildren();
    project.sections.forEach(section => {
      const heading = document.createElement('h3');
      heading.textContent = section.title;
      body.append(heading);
      if (section.text) {
        const paragraph = document.createElement('p');
        paragraph.textContent = section.text;
        body.append(paragraph);
      }
      if (section.items) {
        const list = document.createElement('ul');
        section.items.forEach(text => { const item = document.createElement('li'); item.textContent = text; list.append(item); });
        body.append(list);
      }
    });
    document.getElementById('dialog-repo').href = project.repo;
    document.getElementById('dialog-demo').href = project.demo;
    dialog.showModal();
    dialog.scrollTop = 0;
    document.body.classList.add('modal-open');
  });
});
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  const box = dialog.getBoundingClientRect();
  if (event.target === dialog && (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom)) dialog.close();
});
dialog.addEventListener('close', () => {
  document.body.classList.remove('modal-open');
  lastProjectButton?.focus({ preventScroll: true });
});

let toastTimer;
function showToast(message) {
  const toast = document.querySelector('.toast');
  toast.textContent = message;
  toast.classList.add('visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('visible'), 3500);
}
document.querySelector('.copy-email').addEventListener('click', async () => {
  const email = 'guojunyu202109@163.com';
  try {
    if (!navigator.clipboard?.writeText) throw new Error('Clipboard API unavailable');
    await navigator.clipboard.writeText(email);
    showToast('邮箱已复制，期待你的来信。');
  } catch {
    const range = document.createRange();
    range.selectNodeContents(document.querySelector('.copy-email span'));
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    showToast('邮箱已选中，请按 ⌘C 或 Ctrl+C 复制。');
  }
});
document.getElementById('year').textContent = new Date().getFullYear();

// 原创 SVG 环形雕塑：用投影后的环面构建静态曲面，不依赖图片或 WebGL。
function buildSculpture() {
  const mesh = document.getElementById('sculpture-mesh');
  const ns = 'http://www.w3.org/2000/svg';
  const major = 119, minor = 46;
  const segments = 96, sides = 26;
  function transform(x, y, z) {
    const ax = 0.67, az = -0.51;
    const y1 = y * Math.cos(ax) - z * Math.sin(ax);
    const z1 = y * Math.sin(ax) + z * Math.cos(ax);
    return [x * Math.cos(az) - y1 * Math.sin(az), x * Math.sin(az) + y1 * Math.cos(az), z1];
  }
  function point(u, v) {
    const radius = major + minor * Math.cos(v);
    return transform(radius * Math.cos(u), radius * Math.sin(u), minor * Math.sin(v));
  }
  const faces = [];
  for (let i = 0; i < segments; i++) {
    for (let j = 0; j < sides; j++) {
      const u = i * Math.PI * 2 / segments, v = j * Math.PI * 2 / sides;
      const du = Math.PI * 2 / segments, dv = Math.PI * 2 / sides;
      const vertices = [point(u,v),point(u+du,v),point(u+du,v+dv),point(u,v+dv)];
      const n = transform(Math.cos(u+du/2)*Math.cos(v+dv/2),Math.sin(u+du/2)*Math.cos(v+dv/2),Math.sin(v+dv/2));
      const light = Math.max(0, n[0]*-.45+n[1]*-.6+n[2]*.66);
      const rib = i % 3 === 0 ? -5 : 1;
      faces.push({ vertices, depth: vertices.reduce((sum,p)=>sum+p[2],0)/4, light: 36 + 25*light + rib });
    }
  }
  faces.sort((a,b)=>a.depth-b.depth);
  const fragment = document.createDocumentFragment();
  faces.forEach(face => {
    const path = document.createElementNS(ns, 'path');
    path.setAttribute('d',face.vertices.map((p,i)=>`${i?'L':'M'}${(260+p[0]*1.13).toFixed(2)},${(228+p[1]*1.37).toFixed(2)}`).join(' ')+'Z');
    const color = `hsl(20 88% ${face.light}%)`;
    path.setAttribute('fill',color);path.setAttribute('stroke',color);path.setAttribute('stroke-width','.6');
    fragment.append(path);
  });
  mesh.append(fragment);
}
buildSculpture();
