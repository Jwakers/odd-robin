import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function ProjectScreenshot({
  src,
  alt,
  className = "",
  surface = "#ffffff",
  sizes = "(min-width: 1440px) 1280px, calc(100vw - 48px)",
}: {
  src: string;
  alt: string;
  className?: string;
  surface?: string;
  sizes?: string;
}) {
  return (
    <div
      className={`project-screenshot relative h-[330px] w-full ${className}`}
      style={{ backgroundColor: surface }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className="object-contain"
      />
    </div>
  );
}

export function ProjectContact() {
  return (
    <section className="border-b border-outline-variant bg-surface px-6 py-12 md:px-16 md:py-16">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
        <div className="max-w-xl space-y-3">
          <h2 className="text-[28px] leading-9 font-extrabold tracking-tight md:text-[32px] md:leading-[38px]">
            Have a website or product in mind?
          </h2>
          <p className="text-base leading-[26px] text-outline">
            I design and build the work myself. Book a short chat and we will
            see if it is a fit.
          </p>
        </div>
        <Link
          href="/contact"
          className="inline-flex shrink-0 items-center gap-2 bg-primary px-6 py-3.5 font-mono text-[13px] font-bold uppercase tracking-[0.12em] text-surface hover:bg-primary-fixed"
        >
          Book a chat <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}

export function ProjectNavigation({
  next,
}: {
  next?: { href: string; name: string };
}) {
  return (
    <nav
      aria-label="Project navigation"
      className="border-b border-outline-variant bg-background px-6 py-8 md:px-16"
    >
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6">
        {next ? (
          <Link
            href={next.href}
            className="flex flex-wrap items-center gap-4 hover:text-primary"
          >
            <span className="font-mono text-xs uppercase tracking-widest text-outline">
              Next
            </span>
            <span className="text-xl font-bold">{next.name}</span>
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        ) : null}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-[15px] font-semibold text-primary hover:underline"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          All projects
        </Link>
      </div>
    </nav>
  );
}
