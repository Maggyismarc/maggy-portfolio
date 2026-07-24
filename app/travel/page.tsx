import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { EditorialGrid } from "@/components/editorial-grid";
import { getTravelEntries } from "@/lib/content";

export const metadata: Metadata = { title: "旅行", description: "Maggy的旅行照片与目的地故事。" };
export default async function TravelPage() { const travelEntries = await getTravelEntries(); return <main className="archive-page dark-archive"><Navigation /><header className="archive-hero"><p>TRAVEL / 旅行</p><h1>把世界收进照片，<br /><i>再把故事慢慢写下。</i></h1><Link href="/">← 返回首页</Link></header><EditorialGrid entries={travelEntries} type="travel" /></main>; }
