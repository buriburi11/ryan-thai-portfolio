"use client";

import { useEffect, useRef, useState } from "react";
import { portfolio } from "@/content/portfolio";

export function Navigation() {
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    function escape(event: KeyboardEvent) {
      if (event.key === "Escape" && open) { setOpen(false); button.current?.focus(); }
    }
    window.addEventListener("keydown", escape);
    return () => window.removeEventListener("keydown", escape);
  }, [open]);
  return <header className="site-header">
    <div className="container header-inner">
      <a className="wordmark" href="#top" aria-label={`${portfolio.name}, back to top`}>
        <span className="monogram" aria-hidden="true">{portfolio.initials}<span>.</span></span>
        <span>{portfolio.name}</span>
      </a>
      <button ref={button} className="menu-toggle" type="button" aria-expanded={open} aria-controls="main-nav" onClick={() => setOpen(!open)}>
        {open ? "Close" : "Menu"}<span aria-hidden="true">{open ? "−" : "+"}</span>
      </button>
      <nav id="main-nav" aria-label="Main navigation" className={open ? "navigation is-open" : "navigation"}>
        {portfolio.navigation.map(item => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}
        <a className="nav-resume" href={portfolio.links.resume} download>Résumé <span aria-hidden="true">↗</span></a>
      </nav>
    </div>
  </header>;
}
