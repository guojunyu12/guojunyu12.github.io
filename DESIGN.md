---
name: Junyu — Personal Website
description: 保留原版版式的个人介绍页，换用近黑画布、发丝线与单一紫罗兰信号的视觉语言。
colors:
  near-black: "#090909"
  almost-white: "#f7f9fa"
  soft-white: "#f0f0f0"
  steel: "#828384"
  muted: "#9c9ca0"
  tertiary: "#77777b"
  graphite: "#474747"
  signal-violet: "#af50ff"
  lavender-mist: "#e1bdff"
typography:
  display:
    fontFamily: '"Instrument Serif", "Songti SC", "Noto Serif CJK SC", Georgia, serif'
    fontSize: "76px（桌面）/ clamp(41px, 7.6vw, 58px)（移动）"
    fontWeight: 400
    lineHeight: 1.13
    letterSpacing: "-0.02em"
    italic: "英文展示句用斜体，中文保持常规"
  section-heading:
    fontFamily: '"JetBrains Mono", ui-monospace, monospace'
    fontSize: "clamp(26px, 3.9vw, 46px)"
    fontWeight: 400
    textTransform: "uppercase"
    letterSpacing: "0.04em–0.06em"
    color: "{colors.soft-white}"
  body:
    fontFamily: '"Inter", "Helvetica Neue", "PingFang SC", "Microsoft YaHei", sans-serif'
    fontSize: "16px"
    fontWeight: 300
    lineHeight: 1.65
  label:
    fontFamily: '"JetBrains Mono", monospace'
    fontSize: "9px–12px"
    letterSpacing: "0.03em–0.16em"
    textTransform: "uppercase"
rounded:
  card: "19.2px"
  window: "16px"
  button: "1584px（胶囊）"
  smallControl: "8px"
spacing:
  page-max-width: "1200px"
  section: "80px"
  card-gap: "28px"
components:
  button-primary:
    backgroundColor: "{colors.signal-violet}"
    textColor: "{colors.near-black}"
    rounded: "1584px"
    padding: "11px 24px"
  button-ghost:
    backgroundColor: "transparent"
    border: "1px solid rgba(247,249,250,.3)"
    textColor: "{colors.almost-white}"
    rounded: "1584px"
  header-action:
    backgroundColor: "transparent"
    border: "1px solid #f7f9fa"
    rounded: "8px"
    padding: "9px 18px"
  filter-selected:
    backgroundColor: "{colors.almost-white}"
    textColor: "{colors.near-black}"
    rounded: "1584px"
  preview-card:
    backgroundColor: "#0c0c10"
    border: "1px solid rgba(247,249,250,.14)"
    rounded: "{rounded.card}"
  bloom-card:
    backgroundColor: "radial-gradient(#e1bdff → #af50ff)"
    textColor: "{colors.near-black}"
    rounded: "{rounded.card}"
---

# Design System: Junyu

## Overview

**Creative North Star: "凌晨两点的候机厅"**

版式沿用改版前的个人介绍页——居中首屏 + 四张悬浮小卡、作品区界面示意卡、个人宣言大卡、居中收尾——视觉语言则整体换成用户提供的 dope.security 参考：近黑画布、无阴影的发丝线分区、等宽盖章式大写标题，以及被严格配给的单一紫罗兰。

## Colors

画布 #090909，文字 #f7f9fa，次要文字 #9c9ca0，标签 #77777b。紫罗兰 #af50ff 是唯一的彩色声音，只出现在三处：主行动按钮填充、个人宣言绽放卡、以及图标/进度条/小圆点等强调笔画。除此之外全站无第三色相。

## Typography

英文展示句与「Good products start with good questions.」用 Instrument Serif（GrandSlang 的开源替身），中文回退宋体栈；正文 Inter 300 配系统中文无衬线；区段标题「IDEAS, MADE TANGIBLE.」「NOTES, IN PROGRESS.」用 JetBrains Mono 大写宽字距，承担参考中的「盖章」角色。小号元信息（分类、时间码、界面示意、坐标式脚注）统一走等宽，形成登机牌式的机械节奏。

## Layout

1200px 内容上限、桌面左右 48px。首屏保留原版构图：居中标题 + 左侧视频拆解卡、右侧音乐卡、左下工作流卡、中下想法输入卡，卡片保持原旋转角度。作品区 1.13:1 两栏、28px 间距。关于区与随笔区为等宽两栏、80px 间距。断点沿用原实现：1190 / 950 / 760 / 430 / 360px，760px 以下首屏小卡进入网格流、导航折叠。

## Elevation & Depth

全站无投影。层次由 1px 发丝线（rgba(247,249,250,.14–.3)）、半透明填充（rgba(247,249,250,.06–.08)）和卡片自身的深浅差完成；悬浮小卡用深色半透明底 + 发丝环。弹窗为 #0d0d11 + 发丝边，遮罩近黑半透明加 4px 模糊。

## Components

- **按钮：** 胶囊主按钮为紫罗兰填充；次要按钮为发丝描边胶囊；导航右侧「聊聊你的想法」用 8px 圆角白描边控件，区分层级。
- **导航：** 与内容同宽、底部一条发丝线；链接为等宽大写 12px，悬停转白并加下划线。
- **悬浮小卡：** 深色半透明（rgba(16,15,22,.86)）+ 8px 模糊 + 发丝环，保留原旋转角度与微交互。
- **作品卡：** #0c0c10 底 + 发丝边；内部「界面示意」窗口为 #121217，分隔线全为发丝，进度条用紫色单点提亮。
- **个人宣言卡：** 紫罗兰径向渐变（#e1bdff → #af50ff），近黑文字，全页唯一大面积紫色。
- **详情弹窗 / 提示条：** 深色面板 + 发丝边；提示条为胶囊形，从底部浮出。

键盘焦点为 2px 紫色轮廓、5px 偏移；颜色过渡 180ms，界面示意窗口过渡 350ms；减少动态偏好下关闭全部动画与过渡。

## Do's and Don'ts

- **Do** 用发丝线和留白分层，不加任何投影。
- **Do** 让等宽标题的宽字距承担区段标识，不额外加装饰线或图标。
- **Do** 把紫色限制在「主按钮 + 宣言卡 + 强调笔画」三类用途。
- **Don't** 引入第三种色相，或把紫色用于正文大段文字与普通卡片边框。
- **Don't** 改动原版版式结构（首屏悬浮卡、作品界面示意、两栏关于区）。
- **Don't** 把界面示意说成真实截图或已验证数据。
