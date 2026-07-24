import fs from "node:fs";
import vm from "node:vm";
import ts from "typescript";
import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_WRITE_TOKEN;

if (!projectId || !token) throw new Error("Missing Sanity project ID or write token");

const source = fs.readFileSync(new URL("../data/content.ts", import.meta.url), "utf8");
const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
const module = { exports: {} };
vm.runInNewContext(`(function(exports,module){${compiled}\n})(module.exports,module);`, { module, exports: module.exports });

const { experiences, journalEntries, siteProfile, skills, travelEntries } = module.exports;
const client = createClient({ projectId, dataset, token, apiVersion: "2026-07-01", useCdn: false });
const block = (text) => [{ _key: "intro", _type: "block", style: "normal", markDefs: [], children: [{ _key: "text", _type: "span", marks: [], text }] }];

const documents = [
  {
    _id: "siteSettings",
    _type: "siteSettings",
    ...siteProfile,
    headline: "我在语言、文化与真实生活之间寻找连接。",
    intro: "喜欢把复杂的表达整理得清晰、温柔，也保留一点好奇心和创造力。",
    aboutLead: "我是一名关注语言、翻译、跨文化沟通与国际交流的翻译专业研究生。",
    aboutBody: "从课堂教学到国际赛事接待，从英文主持到商务沟通，我持续练习的不只是准确表达，更是理解不同语境中的人。",
  },
  ...experiences.map((item, order) => ({ _id: `experience-${order + 1}`, _type: "experience", ...item, order, published: true })),
  ...journalEntries.map((item, order) => ({ _id: `journal-${item.slug}`, _type: "journal", ...item, slug: { _type: "slug", current: item.slug }, body: block(item.excerpt), featured: order < 3, published: true })),
  ...travelEntries.map((item, order) => ({ _id: `travel-${item.slug}`, _type: "travel", title: item.title, slug: { _type: "slug", current: item.slug }, index: item.index, color: item.color, city: item.place, startDate: null, excerpt: item.excerpt, body: block(item.excerpt), imageRatio: item.imageRatio, featured: order < 3, published: true })),
  ...skills.map((item, order) => ({ _id: `skill-${order + 1}`, _type: "skill", title: item.title, category: item.category, level: item.level, accent: item.color, items: item.items, order, published: true })),
];

for (const document of documents) await client.createOrReplace(document);
console.log(`Seeded ${documents.length} documents.`);
