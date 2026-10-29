import {
  ProjectContact,
  ProjectNavigation,
} from "@/components/project-detail";
import type { Metadata } from "next";
import Image from "next/image";

const description =
  "Aster Hall is a wedding venue Framer template designed and built by me. A fictional venue showcasing spaces, stays, wedding information and a clear route to enquire.";

export const metadata: Metadata = {
  title: "Aster Hall — Wedding venue Framer template",
  description,
  alternates: { canonical: "/projects/aster-hall" },
  openGraph: {
    title: "Aster Hall | Odd Robin",
    description,
    url: "/projects/aster-hall",
    images: [{ url: "/projects/aster-hall-home.webp", alt: "Aster Hall wedding venue Framer template" }],
  },
  twitter: {
    title: "Aster Hall | Odd Robin",
    description,
    images: ["/projects/aster-hall-home.webp"],
  },
};

const screenshots = [
  {
    label: "First impressions",
    src: "/projects/aster-hall-home.webp",
    width: 1440,
    height: 900,
    alt: "Aster Hall homepage featuring a country house and meadow, navigation and an invitation to book a viewing",
    caption:
      "The homepage opens with a sense of place. Large photography, restrained typography and a clear viewing invitation set the tone for the rest of the template.",
  },
  {
    label: "Exploring the spaces",
    src: "/projects/aster-hall-spaces.webp",
    width: 1440,
    height: 1040,
    alt: "Aster Hall spaces section showing a glasshouse dining room and an outdoor ceremony space on a dark background",
    caption:
      "The spaces section pairs atmosphere with useful detail, giving couples a way to picture different parts of their day within the venue.",
  },
  {
    label: "From interest to enquiry",
    src: "/projects/aster-hall-weddings.webp",
    width: 1440,
    height: 880,
    alt: "Aster Hall wedding pricing layout with example packages, a floral table setting and brochure and enquiry buttons",
    caption:
      "Example packages and inclusions sit alongside brochure and enquiry actions. All venue details and prices shown are illustrative template content.",
  },
] as const;

export default function AsterHallPage() {
  return (
    <main className="flex-1 bg-surface">
      <section className="project-theme-aster border-b border-outline-variant bg-[var(--project-surface)] px-6 py-12 text-[var(--project-ink)] md:px-16 md:py-[72px]">
        <div className="mx-auto flex max-w-7xl flex-col gap-5">
          <p className="project-category">Framer template · Wedding venue</p>
          <h1 className="text-[40px] leading-[46px] font-extrabold tracking-[-0.04em] md:text-[56px] md:leading-[62px]">
            Aster Hall
          </h1>
          <p className="max-w-3xl text-xl leading-[30px] font-medium">
            A complete wedding venue template, designed and built in Framer to
            bring the place, the experience and the practical details together.
          </p>
          <p className="max-w-2xl text-base leading-[26px] text-[var(--project-muted)]">
            Aster Hall is a fictional venue. This is a self-directed template
            project, with all design and Framer development by me.
          </p>
        </div>
      </section>
      <section className="border-b border-outline-variant px-6 py-12 md:px-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-4">
          <p className="project-eyebrow">What I built</p>
          <h2 className="max-w-3xl text-[28px] leading-9 font-extrabold tracking-tight md:text-[32px] md:leading-[38px]">
            Room for the whole wedding experience.
          </h2>
          <p className="max-w-3xl text-lg leading-[30px] text-outline">
            The template spans the homepage, venue, weddings, stays, journal,
            articles and contact pages. I designed it to balance the feeling of
            a country house wedding with the information couples need: spaces,
            accommodation, example pricing and ways to get in touch.
          </p>
          <p className="max-w-3xl text-lg leading-[30px] text-outline">
            For wedding venues, it shows how a website can help people imagine
            celebrating there while making the next step easy to find.
          </p>
        </div>
      </section>
      <section aria-label="Framer template design screenshots" className="px-6 py-12 md:px-16 md:py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-12 md:gap-16">
          {screenshots.map((screenshot, index) => (
            <figure key={screenshot.src} className="space-y-5">
              <p className="project-eyebrow">{screenshot.label}</p>
              <Image
                src={screenshot.src}
                alt={screenshot.alt}
                width={screenshot.width}
                height={screenshot.height}
                sizes="(min-width: 1440px) 1280px, (min-width: 768px) calc(100vw - 128px), calc(100vw - 48px)"
                loading={index === 0 ? "eager" : "lazy"}
                className="h-auto w-full border border-outline-variant"
              />
              <figcaption className="max-w-3xl text-base leading-[26px] text-outline">
                {screenshot.caption}
              </figcaption>
            </figure>
          ))}
          <p className="text-sm leading-6 text-outline">
            Screenshots from the Aster Hall design file in Paper.
          </p>
        </div>
      </section>
      <ProjectContact />
      <ProjectNavigation next={{ href: "/projects/foodedo", name: "Foodedo" }} />
    </main>
  );
}
