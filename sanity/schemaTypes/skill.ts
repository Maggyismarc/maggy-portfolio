import { defineField, defineType } from "sanity";

export const skillType = defineType({ name: "skill", title: "技能与资质", type: "document", fields: [
  defineField({ name: "title", title: "技能名称", type: "string" }),
  defineField({ name: "category", title: "技能分类", type: "string" }),
  defineField({ name: "level", title: "熟悉程度", type: "string", options: { list: ["擅长", "熟练", "熟悉", "持续学习中"] } }),
  defineField({ name: "items", title: "技能条目", type: "array", of: [{ type: "string" }] }),
  defineField({ name: "description", title: "说明", type: "text" }),
  defineField({ name: "accent", title: "卡片撞色", type: "string" }),
  defineField({ name: "order", title: "展示顺序", type: "number" }),
  defineField({ name: "published", title: "公开展示", type: "boolean", initialValue: true }),
] });
