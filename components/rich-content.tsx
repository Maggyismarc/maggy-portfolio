import Image from "next/image";
import type { GalleryImage, PortableContent } from "@/data/content";

function textOf(children: NonNullable<PortableContent[number]["children"]>) {
  return children.map((child) => child.text || "").join("");
}

export function RichContent({ value }: { value?: PortableContent }) {
  if (!value?.length) return null;

  return (
    <>
      {value.map((item, index) => {
        if (item._type === "image" && item.assetUrl) {
          return (
            <figure className="rich-image" key={item._key || `${item.assetUrl}-${index}`}>
              <Image src={item.assetUrl} alt={item.alt || "文章图片"} fill sizes="(max-width: 900px) 90vw, 820px" unoptimized />
              {item.caption && <figcaption>{item.caption}</figcaption>}
            </figure>
          );
        }

        const text = textOf(item.children || []);
        if (!text) return null;
        if (item.style === "h2") return <h2 key={item._key || index}>{text}</h2>;
        if (item.style === "h3") return <h3 key={item._key || index}>{text}</h3>;
        if (item.style === "blockquote") return <blockquote key={item._key || index}>{text}</blockquote>;
        return <p className={index === 0 ? "dropcap" : undefined} key={item._key || index}>{text}</p>;
      })}
    </>
  );
}

export function PhotoGallery({ images }: { images?: GalleryImage[] }) {
  if (!images?.length) return null;
  return (
    <div className="detail-gallery">
      {images.map((image, index) => (
        <figure key={`${image.url}-${index}`}>
          <div><Image src={image.url} alt={image.alt || `图片 ${index + 1}`} fill sizes="(max-width: 700px) 90vw, 42vw" unoptimized /></div>
          {image.caption && <figcaption>{image.caption}</figcaption>}
        </figure>
      ))}
    </div>
  );
}
