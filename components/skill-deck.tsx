"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { skills as fallbackSkills, type SkillGroup } from "@/data/content";

export function SkillDeck({ items = fallbackSkills }: { items?: SkillGroup[] }) {
  const skills = items.length ? items : fallbackSkills;
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();
  const current = skills[active];
  const move = (direction: number) => setActive((value) => (value + direction + skills.length) % skills.length);

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") move(1);
      if (event.key === "ArrowLeft") move(-1);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <section className="skills-section" id="skills">
      <div className="section-heading">
        <p>06 — SKILLS</p>
        <h2>我带在身上的，<br /><i>不只是一种语言。</i></h2>
      </div>
      <div className="skill-stage">
        <div className="skill-shadow-card one" />
        <div className="skill-shadow-card two" />
        <AnimatePresence mode="wait">
          <motion.article
            key={current.title}
            className="skill-card"
            style={{ background: current.color }}
            initial={false}
            animate={{ opacity: 1, x: 0, rotate: -1 }}
            exit={reduceMotion ? undefined : { opacity: 0, x: -80, rotate: -6 }}
            transition={{ duration: .42, ease: [0.22, 1, 0.36, 1] }}
          >
            <small>{current.category}</small>
            <h3>{current.title}</h3>
            <strong>{current.level}</strong>
            <ul>{current.items.map((item) => <li key={item}>{item}</li>)}</ul>
            <span>MAGGY / 肖尧</span>
          </motion.article>
        </AnimatePresence>
      </div>
      <div className="deck-controls">
        <button onClick={() => move(-1)} aria-label="上一张技能卡">←</button>
        <span>{active + 1} / {skills.length}</span>
        <button onClick={() => move(1)} aria-label="下一张技能卡">→</button>
      </div>
    </section>
  );
}
