export type Experience = {
  year: string;
  period: string;
  place: string;
  title: string;
  role: string;
  summary: string;
  tags: string[];
  accent: string;
  imageRatio?: "auto" | "portrait" | "landscape" | "square";
  coverUrl?: string;
  coverAlt?: string;
};

export type SiteProfile = {
  displayName: string; chineseName: string; email: string; phone: string; formattedPhone: string;
  showPhone: boolean; showWechat: boolean; intro?: string; portraitUrl?: string;
  headline?: string; aboutLead?: string; aboutBody?: string;
};

export const siteProfile: SiteProfile = {
  displayName: "Maggy",
  chineseName: "肖尧",
  email: "2984160322@qq.com",
  phone: "15928585561",
  formattedPhone: "159 2858 5561",
  showPhone: true,
  showWechat: true,
};

export const experiences: Experience[] = [
  {
    year: "2021",
    period: "2021.09 — 2025.06",
    place: "成都 · 四川师范大学",
    title: "英语专业本科",
    role: "国家首批一流本科建设点",
    summary: "GPA 3.51/4，年级前10%。在语言、文学与跨文化沟通之间，建立扎实的英语专业基础。",
    tags: ["英语", "语言学习", "跨文化"],
    accent: "var(--pink)",
  },
  {
    year: "2023",
    period: "2023.06 — 2023.08",
    place: "成都 · 世界大学生运动会",
    title: "外事双语接待",
    role: "国际赛事与嘉宾服务",
    summary: "覆盖24个国家和地区，累计服务500余人次，并参与200余份双语材料的翻译与校对。",
    tags: ["国际交流", "口译", "双语接待"],
    accent: "var(--blue)",
  },
  {
    year: "2024",
    period: "2024.03 — 2024.06",
    place: "成都 · 七中英才学校",
    title: "英语实习教师",
    role: "教学、班级管理与活动策划",
    summary: "独立完成多类型课程，统筹大型校园活动，并完成100余份英语教学文本的质量检查。",
    tags: ["英语教学", "活动策划", "文本校对"],
    accent: "var(--orange)",
  },
  {
    year: "2025",
    period: "2025.09 — 至今",
    place: "成都 · 电子科技大学",
    title: "翻译硕士",
    role: "语言、翻译与跨文化沟通",
    summary: "继续探索专业翻译、国际传播与真实交流场景中语言如何连接人与文化。",
    tags: ["翻译硕士", "国际传播", "研究生"],
    accent: "var(--lime)",
  },
  {
    year: "2026",
    period: "2026.03 — 2026.04",
    place: "成都 · 中法硕士答辩会",
    title: "英文主持",
    role: "学术活动现场统筹",
    summary: "负责英文主持、外方教授对接、答辩材料校对，以及设备和人员突发情况协调。",
    tags: ["英文主持", "学术活动", "现场统筹"],
    accent: "var(--red)",
  },
  {
    year: "NOW",
    period: "2026.07 — 至今",
    place: "成都 · 标准化研究院",
    title: "会议项目统筹助理",
    role: "国际会议、英文文案与口译",
    summary: "参与中国南亚标准化合作会议，建立外宾接待流程，并支持企业参访、英文推介与现场口译。",
    tags: ["国际会议", "项目统筹", "现场口译"],
    accent: "var(--purple)",
  },
];

export type PortableContent = Array<{
  _key?: string;
  _type: "block" | "image";
  style?: string;
  children?: Array<{ _key?: string; text?: string; marks?: string[] }>;
  assetUrl?: string;
  alt?: string;
  caption?: string;
}>;

export type GalleryImage = { url: string; alt?: string; caption?: string };

export type JournalEntry = { slug: string; index: string; title: string; date: string; location: string; excerpt: string; color: string; imageRatio?: "auto" | "portrait" | "landscape" | "square"; coverUrl?: string; coverAlt?: string; body?: PortableContent; gallery?: GalleryImage[] };
export const journalEntries: JournalEntry[] = [
  {
    slug: "slow-afternoon",
    index: "01",
    title: "把生活调成慢速",
    date: "待更新",
    location: "日常片段",
    excerpt: "留给未来的一页：一杯咖啡、一本书，或只是光落在桌面上的样子。",
    color: "pink",
  },
  {
    slug: "language-notes",
    index: "02",
    title: "语言之间的缝隙",
    date: "待更新",
    location: "学习笔记",
    excerpt: "记录翻译学习中那些无法被逐字对应、却值得被认真理解的瞬间。",
    color: "blue",
  },
  {
    slug: "weekend-walk",
    index: "03",
    title: "周末散步计划",
    date: "待更新",
    location: "成都",
    excerpt: "城市并不只存在于地标里，也存在于转角的小店和没有目的的步行中。",
    color: "lime",
  },
  {
    slug: "small-discoveries",
    index: "04",
    title: "最近发现的小事",
    date: "待更新",
    location: "生活切片",
    excerpt: "一张留给未来照片的位置，用来收藏最近喜欢的颜色、食物或街道。",
    color: "orange",
  },
  {
    slug: "reading-corner",
    index: "05",
    title: "我的阅读角落",
    date: "待更新",
    location: "阅读记录",
    excerpt: "之后可以在这里放书、电影、展览，以及你想分享给别人的一句话。",
    color: "purple",
  },
];

export type TravelEntry = { slug: string; index: string; title: string; place: string; date: string; excerpt: string; color: string; imageRatio?: "auto" | "portrait" | "landscape" | "square"; coverUrl?: string; coverAlt?: string; body?: PortableContent; gallery?: GalleryImage[] };
export const travelEntries: TravelEntry[] = [
  {
    slug: "first-destination",
    index: "A",
    title: "下一站，待抵达",
    place: "DESTINATION 01",
    date: "等待你的旅行照片",
    excerpt: "这里将成为第一段旅行故事：目的地、沿途风景，以及只有你记得的细节。",
    color: "orange",
  },
  {
    slug: "second-destination",
    index: "B",
    title: "风从另一座城市吹来",
    place: "DESTINATION 02",
    date: "等待你的旅行照片",
    excerpt: "保留坐标与日期的位置，之后可以从后台自由替换为真实旅程。",
    color: "purple",
  },
  {
    slug: "third-destination",
    index: "C",
    title: "在路上的第三页",
    place: "DESTINATION 03",
    date: "等待你的旅行照片",
    excerpt: "一张横版照片、一段路线和几句当时的心情，就能组成新的旅行卡片。",
    color: "pink",
  },
  {
    slug: "fourth-destination",
    index: "D",
    title: "离开熟悉的坐标",
    place: "DESTINATION 04",
    date: "等待你的旅行照片",
    excerpt: "这个位置可以记录城市、自然风景，或一次短暂但印象深刻的出发。",
    color: "blue",
  },
  {
    slug: "fifth-destination",
    index: "E",
    title: "下一次出发之前",
    place: "DESTINATION 05",
    date: "等待你的旅行照片",
    excerpt: "第五张图片已经预留，之后上传照片即可自动进入列表和独立详情页。",
    color: "lime",
  },
];

export type SkillGroup = { category: string; title: string; level: string; color: string; items: string[] };
export const skills: SkillGroup[] = [
  {
    category: "LANGUAGE / TRANSLATION",
    title: "语言与翻译",
    level: "擅长",
    color: "var(--red)",
    items: ["英语专业八级", "CATTI三级笔译", "英语翻译", "英语口译", "双语文本校对", "跨文化沟通"],
  },
  {
    category: "TEACHING / EXPRESSION",
    title: "教学与表达",
    level: "熟练",
    color: "var(--blue)",
    items: ["高中英语教师资格证", "英语教学", "英文主持", "活动策划与执行", "会议项目统筹"],
  },
  {
    category: "CERTIFICATES / PRACTICE",
    title: "实践与资质",
    level: "持续生长",
    color: "var(--lime)",
    items: ["普通话二级甲等", "计算机三级", "国际活动接待", "商务沟通", "英文文案"],
  },
];

export const awards = [
  ["03×", "校级奖学金", "持续学习与成长"],
  ["TOP 28", "外研社·国才杯", "阅读大赛省级铜奖"],
  ["TOP 18", "用外语讲好中国故事", "短视频大赛省二等奖"],
];
