# 郭峻宇的个人网站

纯 HTML、CSS、JavaScript，无构建步骤或第三方依赖。支持桌面和手机、作品筛选、项目详情弹窗、深浅色主题和复制邮箱。

## 预览

直接用浏览器打开 `index.html`。也可以在当前目录运行：

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

然后访问 http://127.0.0.1:4173 。本地 HTTP 预览通常比直接打开文件更好地支持复制邮箱。剪贴板权限不可用时，按钮会选中邮箱供手动复制。

## 修改内容

- `index.html`：姓名、职业、首页介绍、作品卡片、联系方式。
- `app.js`：作品详情、主题、筛选、复制邮箱和原创 SVG 图形。
- `styles.css`：颜色、布局、手机适配。
- `assets/favicon.svg`：网站图标。

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
git add index.html styles.css app.js assets README.md robots.txt sitemap.xml .nojekyll .gitignore
git commit -m "Update personal website"
git push origin main
```

GitHub Pages 会自动构建并更新网站。构建状态可在仓库的 Actions 页面查看。
