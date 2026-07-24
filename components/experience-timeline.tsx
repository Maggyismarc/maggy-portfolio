"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { experiences as fallbackExperiences, type Experience } from "@/data/content";

function circularOffset(index: number, active: number, length: number) {
  let offset = index - active;
  if (offset > length / 2) offset -= length;
  if (offset < -length / 2) offset += length;
  return offset;
}

export function ExperienceTimeline({ items = fallbackExperiences }: { items?: Experience[] }) {
  const experiences = items.length ? items : fallbackExperiences;
  const [active, setActive] = useState(Math.min(3, experiences.length - 1));
  const [flipped, setFlipped] = useState(false);
  const move = useCallback((direction: number) => {
    setFlipped(false);
    setActive((value) => (value + direction + experiences.length) % experiences.length);
  }, [experiences.length]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") move(1);
      if (event.key === "ArrowLeft") move(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [move]);

  return (
    <section className="experience-section" id="experience">
      <div className="section-heading">
        <p>03 — EXPERIENCE</p>
        <h2>经历不是一条直线，<br />而是一组彼此连接的画面。</h2>
      </div>

      <div className="experience-fan" aria-label="扇形经历相册">
        {experiences.map((item, index) => {
          const offset = circularOffset(index, active, experiences.length);
          const distance = Math.abs(offset);
          return (
            <button
              className={`fan-card ratio-${item.imageRatio ?? "portrait"} ${offset === 0 ? "active" : ""} ${offset === 0 && flipped ? "flipped" : ""}`}
              key={`${item.period}-${item.title}`}
              onClick={() => {
                if (offset === 0) setFlipped((value) => !value);
                else {
                  setActive(index);
                  setFlipped(false);
                }
              }}
              aria-label={`查看${item.title}`}
              aria-pressed={offset === 0}
              style={{
                "--offset": offset,
                "--fan-x": `${offset * 280}px`,
                "--fan-x-tablet": `${offset * 174}px`,
                "--fan-x-mobile": `${offset * 100}px`,
                "--fan-y": `${distance * 54}px`,
                "--fan-r": `${offset * 8.5}deg`,
                "--fan-scale": offset === 0 ? 1 : distance === 1 ? .92 : .84,
                "--fan-opacity": distance > 2 ? 0 : distance === 0 ? 1 : distance === 1 ? .58 : .24,
                "--fan-z": 10 - distance,
              } as React.CSSProperties}
            >
              <AnimatePresence mode="wait" initial={false}>
                {offset === 0 && flipped ? (
                  <motion.div
                    className="fan-info-card"
                    key="information"
                    initial={{ opacity: 0, scale: .94, y: 12 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: .96, y: -8 }}
                    transition={{ duration: .35, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <small><i /> {item.year} · {item.place}</small>
                    <h3>{item.title}</h3>
                    <strong>{item.role}</strong>
                    <p>{item.summary}</p>
                    <div>{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                    <em>{item.period}</em>
                    <b>← FLIP BACK</b>
                  </motion.div>
                ) : (
                  <motion.div
                    className="fan-card-front"
                    key="photograph"
                    initial={{ opacity: 0, scale: .96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: .96 }}
                    transition={{ duration: .3 }}
                  >
                    <div className={`fan-photo crop-${(index % 5) + 1}`}>
                      <Image src="/images/maggy-portrait.jpg" alt="临时经历图片，后续可在后台替换" fill sizes="(max-width: 700px) 70vw, 320px" />
                      <span>{item.year} · {String(index + 1).padStart(2, "0")}</span>
                      <small>WHERE I GREW</small>
                    </div>
                    <div className="fan-card-copy">
                      <p>{item.place}</p>
                      <h3>{item.title}</h3>
                      <strong>{item.role}</strong>
                      <span>{item.period} <b>{offset === 0 ? "FLIP →" : "VIEW →"}</b></span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          );
        })}
      </div>

      <div className="experience-arc-timeline" aria-label="经历时间轴">
        <div className="arc-track" aria-hidden="true" />
        {experiences.map((item, index) => {
          const progress = experiences.length === 1 ? .5 : index / (experiences.length - 1);
          const angle = Math.PI + progress * Math.PI;
          const left = 50 + Math.cos(angle) * 46;
          const top = 220 + Math.sin(angle) * 165;
          return (
            <button
              className={index === active ? "active" : ""}
              key={`${item.year}-timeline`}
              onClick={() => { setActive(index); setFlipped(false); }}
              style={{ left: `${left}%`, top: `${top}px` }}
              aria-label={`切换到${item.year}年经历`}
            >
              <span>{item.year}</span><i />
            </button>
          );
        })}
      </div>

      <div className="fan-controls">
        <button onClick={() => move(-1)} aria-label="上一段经历">← PREV</button>
        <span>{String(active + 1).padStart(2, "0")} / {String(experiences.length).padStart(2, "0")}</span>
        <button onClick={() => move(1)} aria-label="下一段经历">NEXT →</button>
      </div>
    </section>
  );
}
