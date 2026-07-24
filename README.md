# Maggy / 肖尧个人网站

以杂志排版、艺术撞色和交互时间轴为核心的中文个人网站。

## 本地运行

```bash
pnpm install
pnpm dev
```

打开 `http://localhost:3000`。

## 当前内容状态

- 首页使用 `public/images/maggy-portrait.jpg` 作为形象照。
- 个人经历来自真实简历信息。
- 日常和旅行使用明确标记的艺术占位内容，没有虚构真实经历。
- 联系方式默认公开。

## 替换首页照片

可将新照片覆盖到 `public/images/maggy-portrait.jpg`。推荐使用竖版 4:5、宽度 1600px 以上的高清照片。正式接入 Sanity 后，可直接在后台上传并设置人物焦点。

## 配置 Sanity CMS

1. 在 Sanity 创建项目与 `production` dataset。
2. 复制 `.env.example` 为 `.env.local`。
3. 填写：

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=你的项目ID
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-07-01
```

4. 重新启动开发服务器，访问 `/studio`。

Schema 位于 `sanity/schemaTypes/`，包含网站设置、经历、日常、旅行和技能。CMS 未配置时，网站使用 `data/content.ts` 的本地数据兜底。

## 主要文件

- 内容数据：`data/content.ts`
- 首页结构：`app/page.tsx`
- 全局视觉：`app/globals.css`
- 经历时间轴：`components/experience-timeline.tsx`
- 技能卡片：`components/skill-deck.tsx`
- 联系方式：`components/contact.tsx`

## 部署到 Vercel

1. 将项目推送到 GitHub。
2. 在 Vercel 导入仓库。
3. 添加 Sanity 环境变量。
4. 部署。

## 图片建议

- 首页形象照：4:5。
- 经历封面：3:2 或 4:3。
- 日常图片：横版、竖版、方形均可。
- 旅行封面：3:2。
