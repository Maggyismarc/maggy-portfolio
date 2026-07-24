import type { MetadataRoute } from "next";
import { journalEntries, travelEntries } from "@/data/content";
export default function sitemap(): MetadataRoute.Sitemap { const base = "https://maggy-portfolio-bay.vercel.app"; return ["", "/journal", "/travel", ...journalEntries.map((x) => `/journal/${x.slug}`), ...travelEntries.map((x) => `/travel/${x.slug}`)].map((path) => ({ url: `${base}${path}`, lastModified: new Date() })); }
