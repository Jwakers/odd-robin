import {
  ProjectNavigation,
  ProjectScreenshot,
} from "@/components/project-detail";
import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";

const description =
  "A website designed and built for Mike Hamer Gardens in Stroud, with clear services, project photography, before-and-after comparisons and direct enquiries.";
export const metadata: Metadata = {
  title: "Mike Hamer Gardens — Website design and build",
  description,
  alternates: { canonical: "/projects/mike-hamer-gardens" },
  openGraph: {
    title: "Mike Hamer Gardens | Odd Robin",
    description,
    url: "/projects/mike-hamer-gardens",
    images: [
      {
        url: "/projects/mike-hamer-home.webp",
        alt: "Mike Hamer Gardens website",
      },
    ],
  },
  twitter: {
    title: "Mike Hamer Gardens | Odd Robin",
    description,
    images: ["/projects/mike-hamer-home.webp"],
  },
};

export default function MikeHamerPage() {
  return (
    <main className="flex-1 bg-surface">
      <section className="mike-project-hero">
        <div className="mike-project-hero-image" aria-hidden="true">
          <Image
            src="/projects/mike-hamer-garden.webp"
            alt=""
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            loading="eager"
            className="object-cover"
          />
        </div>
        <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-5 py-12 md:py-[72px]">
          <p className="project-eyebrow !text-[#3d5c3a]">
            Client website · Landscaping
          </p>
          <h1 className="max-w-[520px] text-[40px] leading-[46px] font-extrabold tracking-[-0.04em] md:text-[56px] md:leading-[62px]">
            Mike Hamer Gardens
          </h1>
          <p className="max-w-[480px] text-xl leading-[30px] font-medium">
            A website for a Stroud landscaping business, built around clear
            services, completed projects and an easy route to enquire.
          </p>
          <p className="max-w-[600px] font-mono text-xs leading-5 font-semibold uppercase tracking-[0.08em] text-outline">
            Design and development · Stroud, Gloucestershire
          </p>
        </div>
      </section>
      <section className="border-b border-outline-variant px-6 py-12 md:px-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-4">
          <p className="project-eyebrow">What I delivered</p>
          <h2 className="max-w-[940px] text-[28px] leading-9 font-extrabold tracking-tight md:text-[30px] md:leading-[38px]">
            A practical website for a local business.
          </h2>
          <p className="max-w-[850px] text-lg leading-[30px] text-outline">
            I designed and built the site around clear services, real project
            photography and a direct enquiry route. Before-and-after comparisons
            help homeowners see the work in context.
          </p>
          <a
            href="https://www.mikehamergardens.co.uk/"
            className="inline-flex w-fit items-center gap-1 font-bold text-primary underline underline-offset-4"
          >
            Visit mikehamergardens.co.uk{" "}
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </section>
      <section
        aria-label="Website screenshots"
        className="px-6 py-12 md:px-16 md:py-16"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-5">
          <p className="project-eyebrow !text-[#3d5c3a]">
            The website · Live homepage
          </p>
          <figure className="space-y-5">
            <ProjectScreenshot
              src="/projects/mike-hamer-home.webp"
              alt="Mike Hamer Gardens homepage with services, completed work and quote requests"
              className="md:h-[600px]"
              surface="#f3f0e6"
            />
            <figcaption className="max-w-[820px] text-base leading-[26px] text-outline">
              The homepage puts services, completed work and quote requests in a
              clear order, with Stroud and the surrounding service area stated
              upfront.
            </figcaption>
          </figure>
          <figure className="space-y-5">
            <ProjectScreenshot
              src="/projects/mike-hamer-gallery.webp"
              alt="Mike Hamer Gardens gallery showing a before-and-after comparison of an overgrown garden and a finished lawn"
              className="md:h-[520px]"
              surface="#f3f0e6"
            />
            <figcaption className="max-w-[820px] text-base leading-[26px] text-outline">
              Before-and-after comparisons make the transformation visible. The
              gallery gives completed projects their own space, beyond the
              homepage highlights.
            </figcaption>
          </figure>
        </div>
      </section>
      <ProjectNavigation />
    </main>
  );
}
