import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://maggy-portfolio-bay.vercel.app"),
  title: {
    default: "Maggy / 肖尧｜翻译、跨文化沟通与生活记录",
    template: "%s｜Maggy / 肖尧",
  },
  description:
    "Maggy肖尧的个人网站，记录翻译学习、国际交流、项目实践、日常生活与旅行故事。",
  openGraph: {
    title: "Maggy / 肖尧",
    description: "语言、文化与生活之间的个人叙事。",
    images: ["/images/maggy-portrait.jpg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
