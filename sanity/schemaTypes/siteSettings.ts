import { defineField, defineType } from "sanity";

export const siteSettingsType = defineType({ name: "siteSettings", title: "网站设置", type: "document", fields: [
  defineField({ name: "displayName", title: "英文名", type: "string", initialValue: "Maggy" }),
  defineField({ name: "chineseName", title: "中文名", type: "string", initialValue: "肖尧" }),
  defineField({ name: "intro", title: "首页介绍", type: "text" }),
  defineField({ name: "portrait", title: "首页形象照", type: "image", options: { hotspot: true } }),
  defineField({ name: "email", title: "邮箱", type: "string" }),
  defineField({ name: "phone", title: "电话", type: "string" }),
  defineField({ name: "wechat", title: "微信", type: "string" }),
  defineField({ name: "showPhone", title: "公开电话", type: "boolean", initialValue: true }),
  defineField({ name: "showWechat", title: "公开微信", type: "boolean", initialValue: true }),
] });
