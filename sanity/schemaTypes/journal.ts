import { defineField, defineType } from "sanity";

export const journalType = defineType({ name: "journal", title: "日常分享", type: "document", fields: [
  defineField({ name: "title", title: "标题", type: "string", validation: (rule) => rule.required() }),
  defineField({ name: "slug", title: "页面地址", type: "slug", options: { source: "title" }, validation: (rule) => rule.required() }),
  defineField({ name: "index", title: "装饰序号", type: "string" }),
  defineField({ name: "color", title: "卡片颜色", type: "string", options: { list: ["pink", "blue", "lime", "orange", "purple"] } }),
  defineField({ name: "date", title: "日期", type: "date" }),
  defineField({ name: "location", title: "地点", type: "string" }),
  defineField({ name: "excerpt", title: "摘要", type: "text", rows: 3 }),
  defineField({ name: "body", title: "正文", type: "array", of: [{ type: "block" }, { type: "image", options: { hotspot: true } }] }),
  defineField({ name: "cover", title: "封面图片", type: "image", options: { hotspot: true } }),
  defineField({ name: "imageRatio", title: "封面比例", type: "string", initialValue: "auto", options: { list: [{ title: "自动", value: "auto" }, { title: "竖屏 4:5", value: "portrait" }, { title: "横屏 16:10", value: "landscape" }, { title: "方形 1:1", value: "square" }] } }),
  defineField({ name: "gallery", title: "图片集", type: "array", of: [{ type: "image", options: { hotspot: true } }] }),
  defineField({ name: "featured", title: "首页精选", type: "boolean" }),
  defineField({ name: "published", title: "公开展示", type: "boolean", initialValue: true }),
] });
