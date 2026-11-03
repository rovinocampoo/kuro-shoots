"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/layout/container";
import { Wordmark } from "@/components/ui/wordmark";
import { cn } from "@/lib/cn";
import { navItems, site } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    const firstLink = panelRef.current?.querySelector<HTMLElement>("a");
    firstLink?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-500",
        scrolled || open
          ? "border-hairline/80 bg-void/85 backdrop-blur-xl"
          : "border-transparent bg-gradient-to-b from-void/70 to-transparent",
      )}
    >
      <Container className="flex h-20 items-center justify-between gap-6">
        <Link
          href="/"
          aria-label={`${site.name} — home`}
          className="group shrink-0"
        >
          <Wordmark />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[0.6rem] font-medium uppercase tracking-[0.26em] text-muted transition-colors duration-300 hover:text-bone"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/#contact"
          className="hidden shrink-0 rounded-full border border-bone/20 px-5 py-2.5 text-[0.58rem] font-medium uppercase tracking-[0.26em] text-bone transition-colors duration-300 hover:border-moss/70 hover:bg-moss/10 md:inline-flex"
        >
          Inquire
        </Link>

        <button
          ref={toggleRef}
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((current) => !current)}
          className="relative grid size-10 place-items-center rounded-full border border-bone/15 text-bone transition-colors duration-300 hover:border-moss/70 md:hidden"
        >
          <span className="relative block h-4 w-5" aria-hidden="true">
            <span
              className={cn(
                "absolute inset-x-0 top-0 h-px bg-current transition-transform duration-300",
                open && "translate-y-[7px] rotate-45",
              )}
            />
            <span
              className={cn(
                "absolute inset-x-0 bottom-0 h-px bg-current transition-transform duration-300",
                open && "-translate-y-[7px] -rotate-45",
              )}
            />
          </span>
        </button>
      </Container>

      {open ? (
        <div
          id="mobile-nav"
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className="fixed inset-x-0 bottom-0 top-20 z-40 overflow-y-auto border-t border-hairline bg-void md:hidden"
        >
          <Container className="flex min-h-full flex-col justify-between py-10">
            <nav aria-label="Mobile primary">
              <ul className="flex flex-col">
                {navItems.map((item, index) => (
                  <li key={item.href} className="border-b border-hairline">
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex items-baseline justify-between gap-6 py-6 font-display text-4xl font-light text-bone transition-colors duration-300 hover:text-sage"
                    >
                      {item.label}
                      <span className="text-[0.6rem] uppercase tracking-[0.3em] text-moss">
                       0{index + 1}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-12 border-t border-hairline pt-6">
              <p className="text-[0.6rem] uppercase tracking-[0.3em] text-muted">
                {site.supportingName}
              </p>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted/70">
                Placeholder portfolio — final photography and project pages are
                still to be supplied.
              </p>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
