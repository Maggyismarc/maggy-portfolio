import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { Reveal } from "@/components/reveal";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { EditorialGrid } from "@/components/editorial-grid";
import { SkillDeck } from "@/components/skill-deck";
import { Contact } from "@/components/contact";
import { awards } from "@/data/content";
import { getExperiences, getJournalEntries, getSiteProfile, getSkills, getTravelEntries } from "@/lib/content";

export default async function Home() {
  const [experiences, journalEntries, travelEntries, skills, profile] = await Promise.all([getExperiences(), getJournalEntries(), getTravelEntries(), getSkills(), getSiteProfile()]);
  return (
    <main>
      <Navigation />
      <Hero profile={profile} />
      <section className="about-section" id="about">
        <Reveal className="section-heading"><p>02 — ABOUT</p><h2>我喜欢问“为什么”，<br />也相信一句话可以<br /><i>抵达另一个人。</i></h2></Reveal>
        <Reveal className="about-copy" delay={.12}>
          <p className="lead">{profile.aboutLead || "我是一名关注语言、翻译、跨文化沟通与国际交流的翻译专业研究生。"}</p>
          <p>{profile.aboutBody || "从课堂教学到国际赛事接待，从英文主持到商务沟通，我持续练习的不只是准确表达，更是理解不同语境中的人。"}</p>
          <div className="about-labels"><span>TRANSLATION</span><span>CROSS-CULTURE</span><span>STORYTELLING</span></div>
        </Reveal>
        <div className="about-photo-fragment" aria-hidden="true" />
      </section>
      <ExperienceTimeline items={experiences} />
      <section className="content-section journal-section" id="journal">
        <Reveal className="section-heading"><p>04 — JOURNAL</p><h2>日常没有宏大叙事，<br /><i>但有值得保存的光。</i></h2></Reveal>
        <EditorialGrid entries={journalEntries} type="journal" />
        <Link className="section-link" href="/journal">查看全部日常 →</Link>
      </section>
      <section className="content-section travel-section" id="travel">
        <Reveal className="section-heading inverse"><p>05 — TRAVEL</p><h2>去远一点的地方，<br /><i>重新认识自己。</i></h2></Reveal>
        <EditorialGrid entries={travelEntries} type="travel" />
        <Link className="section-link light" href="/travel">打开旅行档案 →</Link>
      </section>
      <SkillDeck items={skills} />
      <section className="awards-section">
        <div className="section-heading inverse"><p>07 — HONORS</p><h2>认真做过的事，<br />留下了一些回声。</h2></div>
        <div className="awards-list">{awards.map(([number, title, detail]) => <article key={title}><strong>{number}</strong><h3>{title}</h3><p>{detail}</p><span>↗</span></article>)}</div>
      </section>
      <Contact profile={profile} />
    </main>
  );
}
