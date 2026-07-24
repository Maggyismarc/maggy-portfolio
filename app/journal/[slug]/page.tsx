import { notFound } from "next/navigation";
import Link from "next/link";
import { journalEntries } from "@/data/content";
import { getJournalEntries } from "@/lib/content";

export function generateStaticParams() { return journalEntries.map(({ slug }) => ({ slug })); }
export default async function JournalDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = (await getJournalEntries()).find((item) => item.slug === slug);
  if (!entry) notFound();
  return <main className="detail-page"><Link className="back-link" href="/journal">← 返回日常</Link><header className={`detail-hero color-${entry.color}`}><small>{entry.date} · {entry.location}</small><h1>{entry.title}</h1><p>{entry.excerpt}</p><div className="detail-art"><span>{entry.index}</span><b>IMAGE PLACEHOLDER</b></div></header><article className="detail-body"><p className="dropcap">这里已经为你的真实文字和照片准备好完整的详情页结构。之后接入 Sanity 后，你可以在后台直接上传封面图、添加多张照片、填写图片说明和正文。</p><h2>留给这篇记录的标题</h2><p>当前内容是明确标记的占位文字，不代表你的真实经历。替换时无需修改页面代码，只需要进入内容管理后台编辑对应文章。</p><blockquote>“日常不是空白，它是我们真正生活过的证据。”</blockquote></article></main>;
}
