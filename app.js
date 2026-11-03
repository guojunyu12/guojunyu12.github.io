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
window.matchMedia('(min-width: 761px)').addEventListener('change', event => { if (event.matches) closeMenu(); });

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

document.querySelector('.artifact-video').addEventListener('click', () => {
  document.querySelector('[data-filter="ai"]').click();
});
document.querySelector('.artifact-music').addEventListener('click', () => {
  document.querySelector('[data-filter="web"]').click();
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
    range.selectNodeContents(document.querySelector('.contact-email'));
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    showToast('邮箱已选中，请按 ⌘C 或 Ctrl+C 复制。');
  }
});
document.getElementById('year').textContent = new Date().getFullYear();

// 只打开访客的邮件应用；本站不发送或存储消息。

// 只打开访客的邮件应用；本站不发送或存储消息。
const ideaForm = document.getElementById('idea-form');
const ideaMessage = document.getElementById('idea-message');
ideaMessage.addEventListener('input', () => ideaMessage.setCustomValidity(''));
ideaForm.addEventListener('submit', event => {
  event.preventDefault();
  const message = ideaMessage.value.trim();
  if (!message) {
    ideaMessage.setCustomValidity('请先写下你想聊的内容。');
    ideaMessage.reportValidity();
    return;
  }
  const subject = encodeURIComponent('来自个人网站的一点想法');
  const body = encodeURIComponent(message);
  window.location.href = `mailto:guojunyu202109@163.com?subject=${subject}&body=${body}`;
  showToast('正在打开邮件应用；你可以在那里确认并发送。');
});
