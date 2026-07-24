import { defineField, defineType } from "sanity";

export const travelType = defineType({ name: "travel", title: "旅行记录", type: "document", fields: [
  defineField({ name: "title", title: "目的地名称", type: "string", validation: (rule) => rule.required() }),
  defineField({ name: "slug", title: "页面地址", type: "slug", options: { source: "title" }, validation: (rule) => rule.required() }),
  defineField({ name: "index", title: "装饰序号", type: "string" }),
  defineField({ name: "color", title: "卡片颜色", type: "string", options: { list: ["pink", "blue", "lime", "orange", "purple"] } }),
  defineField({ name: "country", title: "国家或地区", type: "string" }),
  defineField({ name: "city", title: "城市", type: "string" }),
  defineField({ name: "startDate", title: "开始日期", type: "date" }),
  defineField({ name: "endDate", title: "结束日期", type: "date" }),
  defineField({ name: "excerpt", title: "摘要", type: "text", rows: 3 }),
  defineField({ name: "body", title: "游记正文", type: "array", of: [{ type: "block" }, { type: "image", options: { hotspot: true }, fields: [{ name: "alt", title: "图片说明", type: "string" }, { name: "caption", title: "图片下方文字", type: "string" }] }] }),
  defineField({ name: "cover", title: "封面图片", type: "image", options: { hotspot: true }, fields: [{ name: "alt", title: "图片说明", type: "string" }] }),
  defineField({ name: "imageRatio", title: "封面比例", type: "string", initialValue: "auto", options: { list: [{ title: "自动", value: "auto" }, { title: "竖屏 4:5", value: "portrait" }, { title: "横屏 16:10", value: "landscape" }, { title: "方形 1:1", value: "square" }] } }),
  defineField({ name: "gallery", title: "旅行图片集", type: "array", of: [{ type: "image", options: { hotspot: true }, fields: [{ name: "alt", title: "图片说明", type: "string" }, { name: "caption", title: "图片下方文字", type: "string" }] }] }),
  defineField({ name: "coordinates", title: "经纬度", type: "geopoint" }),
  defineField({ name: "featured", title: "首页精选", type: "boolean" }),
  defineField({ name: "published", title: "公开展示", type: "boolean", initialValue: true }),
] , preview: { select: { title: "title", subtitle: "city", media: "cover" } } });
