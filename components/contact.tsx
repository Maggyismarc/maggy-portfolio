import { siteProfile as fallbackProfile, type SiteProfile } from "@/data/content";

export function Contact({ profile = fallbackProfile }: { profile?: SiteProfile }) {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-marquee" aria-hidden="true">LET&apos;S TALK · 保持好奇 · LET&apos;S TALK · 保持好奇 ·</div>
      <div className="contact-inner">
        <p>08 — CONTACT</p>
        <h2>如果你也相信语言<br />能够让世界靠近一点。</h2>
        <div className="contact-links">
          <a href={`mailto:${profile.email}`}>{profile.email} ↗</a>
          {profile.showPhone && <a href={`tel:${profile.phone}`}>{profile.formattedPhone || profile.phone} ↗</a>}
          {profile.showWechat && <span>微信与电话同号</span>}
        </div>
        <div className="contact-footer"><strong>{profile.displayName} / {profile.chineseName}</strong><span>CHENGDU · CHINA · 2026</span></div>
      </div>
    </section>
  );
}
