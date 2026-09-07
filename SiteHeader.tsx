import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const primaryLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/#estimate", label: "Estimate" },
  { to: "/booking", label: "Book / Quote" },
];

const moreLinks = [
  { to: "/mobile-paint", label: "Mobile Car Painting" },
  { to: "/motorbike", label: "Motorbike Painting" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact Us" },
  { to: "/terms", label: "Terms & Conditions" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/90 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] w-full max-w-6xl items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2.5 sm:gap-3" onClick={() => setOpen(false)}>
          <img
            src="/logo.jpg"
            alt="Auto Paint Lab Auckland"
            className="h-11 w-auto rounded bg-white object-contain sm:h-12"
          />
          <span className="hidden font-display text-base font-bold tracking-[0.04em] sm:inline sm:text-lg">
            AUTO <span className="text-accent">PAINT</span> LAB
          </span>
        </Link>
        <nav className="hidden items-center gap-5 lg:flex">
          {primaryLinks.map((l) =>
            l.to.includes("#") ? (
              <a key={l.to} href={l.to} className="text-sm text-muted hover:text-fg">
                {l.label}
              </a>
            ) : (
              <Link key={l.to} to={l.to} className="text-sm text-muted hover:text-fg">
                {l.label}
              </Link>
            ),
          )}
          <div className="relative">
            <button
              type="button"
              className="flex items-center gap-1 text-sm text-muted hover:text-fg"
              onClick={() => setMoreOpen((v) => !v)}
              onBlur={() => setTimeout(() => setMoreOpen(false), 150)}
            >
              More <ChevronDown className="size-4" />
            </button>
            {moreOpen ? (
              <div className="absolute right-0 top-full z-50 mt-2 min-w-[220px] rounded-lg border border-border bg-surface py-2 shadow-lg">
                {moreLinks.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    className="block px-4 py-2.5 text-sm text-muted hover:bg-elevated hover:text-fg"
                    onClick={() => setMoreOpen(false)}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
        </nav>
        <div className="flex items-center gap-2">
          <a href="tel:+642041104094" className="hidden items-center gap-2 text-sm text-muted md:flex">
            <Phone className="size-4 text-accent" />
            020 411 04094
          </a>
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link to="/booking">Get a quote</Link>
          </Button>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      <div className={cn("border-t border-border bg-surface lg:hidden", open ? "block" : "hidden")}>
        <div className="flex flex-col gap-1 px-4 py-4">
          {[...primaryLinks, ...moreLinks].map((l) =>
            l.to.includes("#") ? (
              <a
                key={l.to}
                href={l.to}
                className="flex h-11 items-center text-sm"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ) : (
              <Link
                key={l.to}
                to={l.to}
                className="flex h-11 items-center text-sm"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ),
          )}
          <a href="tel:+642041104094" className="flex h-11 items-center text-sm">
            Call Anthony — 020 411 04094
          </a>
        </div>
      </div>
    </header>
  );
}
