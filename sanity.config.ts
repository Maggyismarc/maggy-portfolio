"use client";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemaTypes";

export default defineConfig({
  name: "maggy-portfolio",
  title: "Maggy / 肖尧内容管理",
  basePath: "/studio",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "placeholder",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  plugins: [
    structureTool({
      structure: (structure) => structure.list().title("内容管理").items([
        structure.listItem().title("网站设置").child(structure.document().schemaType("siteSettings").documentId("siteSettings")),
        structure.divider(),
        ...structure.documentTypeListItems().filter((item) => item.getId() !== "siteSettings"),
      ]),
    }),
    visionTool(),
  ],
  schema: { types: schemaTypes },
});
