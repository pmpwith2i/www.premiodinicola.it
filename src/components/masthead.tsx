"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  currentEdition,
  currentEditionVenueCities,
} from "@/data/edition";

const nav = [
  { href: "/partecipazione", label: "Partecipazione" },
  { href: "/premio",         label: "Premio" },
  { href: "/edizioni-passate", label: "Vincitori" },
];

export function Masthead() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-paper/95 backdrop-blur-md border-b border-ink/10 shadow-[0_1px_0_rgba(0,0,0,0.04)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      {/* tiny info ribbon */}
      <div className="bg-blu text-paper">
        <div className="mx-auto flex max-w-[1320px] items-center justify-between gap-4 px-5 py-1.5 text-[11px] font-medium sm:px-8">
          <span className="hidden items-center gap-2 sm:flex">
            <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-saffron animate-live" />
            {currentEdition.numberLabel} · {currentEdition.eventDateDisplay}
          </span>
          <span className="font-hand text-base leading-none text-saffron">
            Si può volare alto ✦
          </span>
          <span className="hidden md:inline opacity-80">
            {currentEditionVenueCities} · Abruzzo
          </span>
        </div>
      </div>

      {/* main bar */}
      <div className={`mx-auto max-w-[1320px] px-5 sm:px-8 transition-all ${scrolled ? "py-2.5" : "py-4"}`}>
        <div className="flex items-center justify-between gap-6">
          {/* Logo — sticker badge */}
          <Link href="/" className="group flex items-center gap-3" aria-label="Premio Di Nicola — Home">
            <span
              aria-hidden
              className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blu text-paper font-display text-base font-bold shadow-[3px_3px_0_var(--ink)] transition-transform duration-300 group-hover:rotate-[-6deg]"
            >
              {currentEdition.numberArabic}
              <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-saffron border border-ink" />
            </span>
            <span className="hidden sm:flex flex-col leading-none">
              <span className="font-display text-base font-semibold tracking-tight text-ink">
                Premio Di Nicola
              </span>
              <span className="text-[11px] text-ink-mute mt-0.5">
                Matematica · Abruzzo · {currentEdition.year}
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Navigazione principale">
            {nav.map((item) => {
              const active = pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative rounded-full px-4 py-2 text-[14px] font-medium transition-colors ${
                    active
                      ? "bg-ink text-paper"
                      : "text-ink hover:bg-blu-soft"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/registrazione"
              className="ml-2 group inline-flex items-center gap-2 rounded-full bg-saffron px-5 py-2 text-[14px] font-semibold text-ink border-[1.5px] border-ink shadow-[3px_3px_0_var(--ink)] transition-all hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[5px_5px_0_var(--ink)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0_var(--ink)]"
            >
              Iscriviti
              <span aria-hidden className="text-base leading-none transition-transform group-hover:translate-x-0.5">→</span>
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex md:hidden h-10 w-10 items-center justify-center rounded-lg border-[1.5px] border-ink bg-paper shadow-[2px_2px_0_var(--ink)]"
            aria-label="Apri menu"
            aria-expanded={open}
          >
            <span className="relative flex h-3.5 w-5 flex-col justify-between">
              <span className={`h-[2px] w-full bg-ink transition-all duration-300 ${open ? "translate-y-[6px] rotate-45" : ""}`} />
              <span className={`h-[2px] w-full bg-ink transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
              <span className={`h-[2px] w-full bg-ink transition-all duration-300 ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden bg-paper border-b border-ink/10 transition-[max-height,opacity] duration-400 ease-out ${
          open ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto max-w-[1320px] px-5 sm:px-8 py-5">
          <ul className="space-y-2">
            {nav.map((item) => {
              const active = pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`flex items-center justify-between rounded-xl border-[1.5px] border-ink px-4 py-3 font-display text-lg font-semibold ${
                      active ? "bg-ink text-paper" : "bg-paper text-ink"
                    }`}
                  >
                    <span>{item.label}</span>
                    <span aria-hidden className="text-xl">→</span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link
            href="/registrazione"
            className="mt-4 flex items-center justify-between rounded-xl border-[1.5px] border-ink bg-saffron px-4 py-3.5 font-display text-lg font-bold shadow-[3px_3px_0_var(--ink)]"
          >
            <span>Iscriviti — entro 5 giu</span>
            <span aria-hidden className="text-xl">→</span>
          </Link>
          <p className="mt-4 text-center font-hand text-lg text-blu">
            ✦ vol{currentEdition ? "" : ""}are alto ✦
          </p>
        </nav>
      </div>
    </header>
  );
}
