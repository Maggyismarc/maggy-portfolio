import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots { return { rules: { userAgent: "*", allow: "/", disallow: "/studio/" }, sitemap: "https://maggys-world.vercel.app/sitemap.xml" }; }
