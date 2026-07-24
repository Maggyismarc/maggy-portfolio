import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { EditorialGrid } from "@/components/editorial-grid";
import { getJournalEntries } from "@/lib/content";

export const metadata: Metadata = { title: "日常分享", description: "Maggy的日常记录与学习片段。" };
export default async function JournalPage() { const journalEntries = await getJournalEntries(); return <main className="archive-page"><Navigation /><header className="archive-hero"><p>JOURNAL / 日常分享</p><h1>记录那些看起来很小，<br /><i>却构成生活的瞬间。</i></h1><Link href="/">← 返回首页</Link></header><EditorialGrid entries={journalEntries} type="journal" /></main>; }
