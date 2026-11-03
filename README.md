# 郭峻宇的个人网站

纯 HTML、CSS、JavaScript，无构建步骤或第三方依赖。采用用户提供的 dope.security 深色设计参考：近黑画布、发丝线分区、等宽盖章式标题与单一紫罗兰强调。版式沿用首屏悬浮卡、作品界面示意与两栏介绍。支持桌面和手机、作品筛选、项目详情弹窗、复制邮箱与邮件想法输入框。

## 预览

直接用浏览器打开 `index.html`。也可以在当前目录运行：

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

然后访问 http://127.0.0.1:4173 。本地 HTTP 预览通常比直接打开文件更好地支持复制邮箱。剪贴板权限不可用时，按钮会选中邮箱供手动复制。

## 修改内容

- `index.html`：姓名、职业、首页介绍、作品卡片、联系方式。
- `app.js`：作品详情、筛选、移动导航、复制邮箱和邮件输入交互。
- `styles.css`：颜色、布局、手机适配。
- `assets/favicon.svg`：网站图标。
- `assets/fonts/`：旧版本地字体（Source Serif 4），当前页面已改用 Google Fonts，未引用该目录。
- `DESIGN.md`：本次采用的设计约定。

## 内容来源

姓名、职业、邮箱由本人提供。GitHub 账户通过连接器核对为 `guojunyu12`，邮箱与提供的信息一致。只展示以下公开仓库：

- https://github.com/guojunyu12/ecom-video-breakdown
- https://github.com/guojunyu12/qq-music-universe

作品介绍依据 2026-11-02 读取的公开 README，未进行这些项目本身的功能验证。封面是原创概念排版，不是项目截图。自我介绍为基于已提供身份与公开项目撰写的初稿，没有添加公司、学历、年限、业务成绩或客户背书。随笔保留为空状态。

## GitHub Pages

- 网站：https://guojunyu12.github.io/
- 源码：https://github.com/guojunyu12/guojunyu12.github.io
- 发布来源：`main` 分支根目录，使用 `.nojekyll` 直接发布静态资源。

修改后，在项目目录执行：

```sh
node --check app.js
git add index.html styles.css app.js assets README.md DESIGN.md PRODUCT.md robots.txt sitemap.xml .nojekyll .gitignore
git commit -m "Update personal website"
git push origin main
```

GitHub Pages 会自动构建并更新网站。构建状态可在仓库的 Actions 页面查看。

邮件输入框只打开访客本地的邮件应用，不连接模型、不自动发送邮件，也不存储访客输入。
