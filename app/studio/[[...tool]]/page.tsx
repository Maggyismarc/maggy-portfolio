"use client";
import { NextStudio } from "next-sanity/studio";
import config from "@/sanity.config";

export default function StudioPage() {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) return <main className="studio-setup"><span>CMS SETUP</span><h1>内容后台已经准备好。</h1><p>在 <code>.env.local</code> 中填写 Sanity Project ID 和 Dataset 后，这里会显示可视化管理后台。</p><pre>NEXT_PUBLIC_SANITY_PROJECT_ID=你的项目ID{`\n`}NEXT_PUBLIC_SANITY_DATASET=production</pre></main>;
  return <NextStudio config={config} />;
}
