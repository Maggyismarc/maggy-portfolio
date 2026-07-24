"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { siteProfile as fallbackProfile, type SiteProfile } from "@/data/content";

export function Hero({ profile = fallbackProfile }: { profile?: SiteProfile }) {
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const portraitY = useTransform(scrollY, [0, 800], [0, reduceMotion ? 0 : 70]);

  return (
    <section className="hero" id="home">
      <div className="hero-doodle" aria-hidden="true"><span /><small>a little curious,<br />always learning</small></div>
      <motion.div className="hero-intro" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, ease: [0.22, 1, 0.36, 1] }}>
        <p className="hero-kicker">HELLO, NICE TO MEET YOU.</p>
        <h1><small>Hello, I&apos;m</small>{profile.displayName}<i>.</i></h1>
        <p className="hero-cn">{profile.chineseName} · 翻译 · 跨文化沟通 · 国际交流</p>
        <h2>{profile.headline || "我在语言、文化与真实生活之间寻找连接。"}</h2>
        <p className="hero-description">{profile.intro || "喜欢把复杂的表达整理得清晰、温柔，也保留一点好奇心和创造力。"}</p>
        <div className="hero-actions">
          <Link className="pill dark" href="#experience">查看我的经历 →</Link>
          <Link className="text-link" href="#contact">联系我 →</Link>
        </div>
      </motion.div>

      <motion.div className="hero-badge" style={{ y: portraitY }} initial={{ opacity: 0, rotate: 4 }} animate={{ opacity: 1, rotate: 0 }} transition={{ duration: 1, delay: .2, ease: [0.22, 1, 0.36, 1] }}>
        <motion.div className="hero-strap" aria-hidden="true" animate={reduceMotion ? undefined : { rotate: [-1.5, 1.5, -1.5] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}><span /></motion.div>
        <div className="hero-id-card">
          <div className="hero-portrait">
            <Image src={profile.portraitUrl || "/images/maggy-portrait.jpg"} alt={`${profile.displayName} ${profile.chineseName}的个人形象照`} fill priority sizes="(max-width: 800px) 78vw, 30vw" unoptimized={Boolean(profile.portraitUrl)} />
          </div>
          <div className="hero-id-copy">
            <strong>{profile.displayName}</strong>
            <span>ID · 2026</span>
          </div>
          <small>HELLO!</small>
          <i aria-hidden="true">✦</i>
        </div>
      </motion.div>
      <div className="section-number">01 — INTRO</div>
    </section>
  );
}
