import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { travelEntries } from "@/data/content";
import { getTravelEntries } from "@/lib/content";
import { PhotoGallery, RichContent } from "@/components/rich-content";

export function generateStaticParams() { return travelEntries.map(({ slug }) => ({ slug })); }
export default async function TravelDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = (await getTravelEntries()).find((item) => item.slug === slug);
  if (!entry) notFound();
  return <main className="detail-page travel-detail"><Link className="back-link" href="/travel">← 返回旅行</Link><header className={`detail-hero color-${entry.color}`}><small>{entry.place} · {entry.date}</small><h1>{entry.title}</h1><p>{entry.excerpt}</p>{entry.coverUrl ? <div className="detail-cover"><Image src={entry.coverUrl} alt={entry.coverAlt || `${entry.title}封面`} fill priority sizes="(max-width: 900px) 88vw, 42vw" unoptimized /></div> : <div className="detail-art"><span>{entry.index}</span><b>YOUR TRAVEL PHOTO</b></div>}</header><article className="detail-body">{entry.body?.length ? <RichContent value={entry.body} /> : <p className="dropcap">{entry.excerpt}</p>}<PhotoGallery images={entry.gallery} /></article></main>;
}
