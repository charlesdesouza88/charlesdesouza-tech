"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import CmdMark from "./CmdMark";

const links = [
  { href: "/#work", id: "work", label: "Work" },
  { href: "/#method", id: "method", label: "Method" },
  { href: "/#facets", id: "facets", label: "Facets" },
  { href: "/#contact", id: "contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = links.map((l) => l.id);
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    if (els.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-30% 0px -50% 0px", threshold: [0, 0.25, 0.5] }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid
          ? "border-b border-[var(--line)] bg-[color-mix(in_srgb,var(--bg)_88%,transparent)] backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8"
      >
        <Link href="/#top" className="group flex items-center gap-2.5">
          <CmdMark
            title="CMD — Charles M. DeSouza"
            className="h-7 w-7 text-ember transition-transform duration-300 group-hover:rotate-90"
          />
          <span className="font-mono text-xs tracking-wider text-muted">
            charles<span className="text-faint">desouza.tech</span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              data-active={active === l.id ? "true" : "false"}
              className="nav-link py-2 font-mono text-xs uppercase tracking-[0.15em] text-muted transition-colors hover:text-ink data-[active=true]:text-ink"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="mailto:charlesdesouza88@gmail.com"
            className="btn-glow btn-glow-ghost rounded-full border border-ember/40 bg-ember/10 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.15em] text-ember transition-colors hover:bg-ember hover:text-bg"
          >
            Hire me
          </a>
        </div>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="-mr-2 grid h-11 w-11 place-items-center rounded-full text-ink md:hidden"
        >
          <span className="relative block h-3.5 w-5" aria-hidden="true">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 rounded bg-current transition-transform duration-200 ${
                open ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[6px] h-0.5 w-5 rounded bg-current transition-opacity duration-200 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[12px] h-0.5 w-5 rounded bg-current transition-transform duration-200 ${
                open ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-[var(--line)] px-5 pb-6 pt-2 md:hidden"
      >
        <ul>
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3.5 font-mono text-sm uppercase tracking-[0.15em] text-muted transition-colors hover:text-ink"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <a
          href="mailto:charlesdesouza88@gmail.com"
          onClick={() => setOpen(false)}
          className="mt-3 block rounded-full bg-ember px-5 py-3 text-center font-mono text-sm font-medium text-bg"
        >
          Hire me
        </a>
      </div>
    </header>
  );
}
