"use client";

import { ArrowRight, Code2, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type SiteHeaderProps = {
  currentPage?: "home" | "who" | "services" | "projects" | "contact";
};

const links = [
  { href: "/who-am-i", label: "Who am I?", page: "who" },
  { href: "/services", label: "Services", page: "services" },
  { href: "/projects", label: "Projects", page: "projects" },
] as const;

export function SiteHeader({ currentPage = "home" }: SiteHeaderProps) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const resolvedCurrentPage = pathname.startsWith("/projects")
    ? "projects"
    : pathname === "/services"
      ? "services"
      : pathname === "/who-am-i"
        ? "who"
        : pathname === "/contact"
          ? "contact"
          : currentPage;

  return (
    <header
      className="sticky top-0 z-50 border-b border-outline-variant bg-background/95 backdrop-blur"
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          setMenuOpen(false);
          event.currentTarget
            .querySelector<HTMLButtonElement>("button")
            ?.focus();
        }
      }}
    >
      <nav
        aria-label="Main navigation"
        className="flex items-center justify-between gap-4 px-6 py-4"
      >
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="flex shrink-0 items-center gap-2"
        >
          <Code2 className="size-5 text-primary" aria-hidden="true" />
          <span className="text-base font-semibold tracking-tight sm:text-lg">
            Odd Robin
          </span>
        </Link>
        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={
                resolvedCurrentPage === link.page ? "page" : undefined
              }
              className={`inline-flex items-center text-sm transition-colors hover:text-primary ${resolvedCurrentPage === link.page ? "font-semibold text-primary" : "font-medium"}`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            aria-current={
              resolvedCurrentPage === "contact" ? "page" : undefined
            }
            className="inline-flex items-center rounded-sm bg-primary px-4 py-2 text-sm font-semibold text-surface transition-colors hover:bg-primary-fixed"
          >
            Book a chat <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
        <button
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
          className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary md:hidden"
        >
          {menuOpen ? "Close" : "Menu"}
          {menuOpen ? (
            <X className="size-4" aria-hidden="true" />
          ) : (
            <Menu className="size-4" aria-hidden="true" />
          )}
        </button>
      </nav>
      {menuOpen ? (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="flex flex-col gap-1 border-t border-outline-variant px-6 py-3 md:hidden"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              aria-current={
                resolvedCurrentPage === link.page ? "page" : undefined
              }
              className="py-3 text-base font-semibold hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="py-3 font-semibold text-primary"
          >
            Book a chat{" "}
            <ArrowRight className="ml-1 inline size-4" aria-hidden="true" />
          </Link>
        </nav>
      ) : null}
    </header>
  );
}
