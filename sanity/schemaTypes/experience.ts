import { defineField, defineType } from "sanity";

export const experienceType = defineType({ name: "experience", title: "个人经历", type: "document", fields: [
  defineField({ name: "title", title: "经历标题", type: "string", validation: (rule) => rule.required() }),
  defineField({ name: "year", title: "节点年份", type: "string" }),
  defineField({ name: "period", title: "时间范围", type: "string" }),
  defineField({ name: "place", title: "地点", type: "string" }),
  defineField({ name: "role", title: "身份或职位", type: "string" }),
  defineField({ name: "summary", title: "简短摘要", type: "text", rows: 4 }),
  defineField({ name: "cover", title: "封面图片", type: "image", options: { hotspot: true }, fields: [{ name: "alt", title: "替代文本", type: "string" }] }),
  defineField({ name: "imageRatio", title: "图片比例", type: "string", initialValue: "auto", options: { list: [{ title: "自动", value: "auto" }, { title: "竖屏 4:5", value: "portrait" }, { title: "横屏 16:10", value: "landscape" }, { title: "方形 1:1", value: "square" }] } }),
  defineField({ name: "tags", title: "标签", type: "array", of: [{ type: "string" }] }),
  defineField({ name: "accent", title: "节点撞色", type: "string" }),
  defineField({ name: "order", title: "展示顺序", type: "number" }),
  defineField({ name: "published", title: "公开展示", type: "boolean", initialValue: true }),
] });
