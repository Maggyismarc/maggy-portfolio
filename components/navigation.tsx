"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const links = [
  ["关于", "#about"],
  ["经历", "#experience"],
  ["日常", "#journal"],
  ["旅行", "#travel"],
  ["技能", "#skills"],
  ["联系", "#contact"],
];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
      let current = "";
      for (const [, href] of links) {
        const section = document.querySelector(href);
        if (section && section.getBoundingClientRect().top <= 180) current = href;
      }
      setActiveHref(current);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <Link className="brand" href="/" aria-label="返回首页">
        Maggy <span>肖尧</span>
      </Link>
      <nav className="desktop-nav" aria-label="主导航">
        {links.map(([label, href]) => (
          <Link className={activeHref === href ? "active" : ""} aria-current={activeHref === href ? "location" : undefined} key={href} href={href}>{label}</Link>
        ))}
      </nav>
      <button className="menu-button" type="button" aria-expanded={open} aria-label="打开菜单" onClick={() => setOpen(!open)}>
        <span />
        <span />
      </button>
      {open && (
        <div className="mobile-menu">
          {links.map(([label, href], index) => (
            <Link className={activeHref === href ? "active" : ""} aria-current={activeHref === href ? "location" : undefined} key={href} href={href} onClick={() => setOpen(false)}>
              <small>0{index + 1}</small>{label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
