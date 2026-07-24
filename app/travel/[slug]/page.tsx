import { notFound } from "next/navigation";
import Link from "next/link";
import { travelEntries } from "@/data/content";
import { getTravelEntries } from "@/lib/content";

export function generateStaticParams() { return travelEntries.map(({ slug }) => ({ slug })); }
export default async function TravelDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = (await getTravelEntries()).find((item) => item.slug === slug);
  if (!entry) notFound();
  return <main className="detail-page travel-detail"><Link className="back-link" href="/travel">← 返回旅行</Link><header className={`detail-hero color-${entry.color}`}><small>{entry.place} · {entry.date}</small><h1>{entry.title}</h1><p>{entry.excerpt}</p><div className="detail-art"><span>{entry.index}</span><b>YOUR TRAVEL PHOTO</b></div></header><article className="detail-body"><p className="dropcap">这里将展示你的目的地、旅行日期、大幅封面照片和完整游记。当前没有使用公开图库，避免让陌生图片被误认为你的真实旅程。</p><h2>抵达之后</h2><p>接入内容管理后台后，可以添加横版、竖版或方形照片，调整顺序，并为每张照片填写说明。</p><blockquote>“旅行让我们暂时离开熟悉的语言，也重新听见自己。”</blockquote></article></main>;
}
