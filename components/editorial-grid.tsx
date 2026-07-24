import Link from "next/link";
import Image from "next/image";

type Entry = {
  slug: string;
  index: string;
  title: string;
  excerpt: string;
  color: string;
  date?: string;
  location?: string;
  place?: string;
  imageRatio?: "auto" | "portrait" | "landscape" | "square";
};

export function EditorialGrid({ entries, type }: { entries: Entry[]; type: "journal" | "travel" }) {
  return (
    <div className={`editorial-grid ${type}`}>
      {entries.map((entry, index) => (
        <Link className={`editorial-card color-${entry.color} ratio-${entry.imageRatio ?? "landscape"}`} href={`/${type}/${entry.slug}`} key={entry.slug}>
          <div className={`editorial-art crop-${(index % 5) + 1}`} aria-label="待替换的图片占位区域">
            <Image
              src="/images/maggy-portrait.jpg"
              alt="临时展示图片，后续可自由替换"
              fill
              sizes="(max-width: 900px) 88vw, 32vw"
            />
            <span>{entry.index}</span>
            <b>{type === "journal" ? "DAILY NOTE" : "TRAVEL STORY"}</b>
            <small>临时图片 · 待替换</small>
          </div>
          <div className="editorial-copy">
            <div>
              <small>{entry.location ?? entry.place} · {entry.date}</small>
              <h3>{entry.title}</h3>
            </div>
            <span>打开详情 →</span>
          </div>
          <em>{String(index + 1).padStart(2, "0")}</em>
        </Link>
      ))}
    </div>
  );
}
