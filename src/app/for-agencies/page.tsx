import { ContactForm } from "@/components/contact-form";
import {
  agencyOffer,
  agencyProcess,
  agencyProjects,
  agencyServices,
} from "@/content/agency-partnership";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import portrait from "../../../public/profile-image.png";

const title = "Development Partner for Agencies";
const description =
  "Senior freelance development for design, branding, SEO and marketing agencies. White-label builds, integrations and technical advice, priced per project.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/for-agencies" },
  openGraph: {
    title: `${title} | ${agencyOffer.businessName}`,
    description,
    url: "/for-agencies",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | ${agencyOffer.businessName}`,
    description,
  },
};

const container = "mx-auto w-full max-w-[1312px]";
const label = "font-mono text-xs font-semibold uppercase leading-[18px] tracking-[0.12em] text-primary";
const heading = "text-[32px] font-extrabold leading-[39px] tracking-[-0.04em] md:text-5xl md:leading-[56px]";

export default function ForAgenciesPage() {
  return (
    <main className="flex-1 bg-background text-foreground">
      <section aria-labelledby="agency-heading" className="px-6 py-12 md:px-16 md:pb-14 md:pt-20">
        <div className={`${container} flex flex-col gap-8`}>
          <p className={label}>Independent development partner / For agencies</p>
          <h1 id="agency-heading" className="max-w-[1100px] text-[clamp(36px,9.75vw,38px)] font-extrabold leading-[44px] tracking-[-0.05em] text-primary-fixed md:text-[64px] md:leading-[72px] lg:text-[80px] lg:leading-[86px] lg:tracking-[-0.055em]">
            Your creative team.<br />A safe pair of dev hands.
          </h1>
          <p className="max-w-[720px] text-lg leading-[29px] md:text-[21px] md:leading-[33px]">
            Great client work. A stretched team. A build that needs more technical depth. I help design, branding, SEO and marketing agencies turn ambitious ideas into dependable websites and web apps.
          </p>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
            <Link href="#project-enquiry" className="inline-flex min-h-14 items-center justify-center gap-1 bg-primary px-6 py-[17px] text-[15px] font-bold leading-[22px] text-surface transition-colors hover:bg-primary-fixed">
              Let’s chat about your project <ArrowUpRight className="size-4 shrink-0" aria-hidden="true" />
            </Link>
            <Link href="#selected-work" className="inline-flex min-h-11 items-center gap-1 py-2.5 text-[15px] font-bold text-primary hover:underline">
              Explore selected work <ArrowDown className="size-4" aria-hidden="true" />
            </Link>
          </div>
          <ul className="flex flex-col gap-3 border-t border-outline-variant pt-5 text-sm font-semibold leading-[22px] md:flex-row md:flex-wrap md:gap-x-10">
            <li>~10 years’ commercial experience</li>
            <li>White-label by default</li>
            <li>Scoped and priced per project</li>
          </ul>
        </div>
      </section>

      <section aria-labelledby="agency-services" className="border-t border-outline-variant bg-surface px-6 py-14 md:px-16 md:py-20">
        <div className={`${container} flex flex-col gap-8 md:gap-12`}>
          <p className={label}>01 / Extra capacity. Deeper expertise.</p>
          <h2 id="agency-services" className={`${heading} max-w-[760px]`}>Keep the creative ambition.<br />Bring in the development.</h2>
          <ol className="flex flex-col gap-8 md:gap-12">
            {agencyServices.map((service, index) => (
              <li key={service.title} className="flex gap-4 border-t border-outline-variant pt-6 md:gap-10">
                <span aria-hidden="true" className={`${label} w-7 shrink-0 md:w-12`}>{String(index + 1).padStart(2, "0")}</span>
                <div className="flex min-w-0 flex-1 flex-col gap-2.5 lg:flex-row lg:gap-12">
                  <h3 className="text-[21px] font-bold leading-7 tracking-[-0.02em] lg:w-[min(32vw,420px)] lg:shrink-0 lg:text-2xl lg:leading-[33px]">{service.title}</h3>
                  <p className="max-w-[640px] flex-1 text-lg leading-[29px]">{service.description}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="font-mono text-sm leading-6">The toolkit, when it helps: React · Next.js · Headless CMS · APIs · E-commerce</p>
        </div>
      </section>

      <section id="selected-work" aria-labelledby="agency-work" className="scroll-mt-24 px-6 py-14 md:px-16 md:py-20">
        <div className={`${container} flex flex-col gap-8`}>
          <p className={label}>02 / Selected work</p>
          <h2 id="agency-work" className={heading}>Different briefs. The same care.</h2>
          <p className="max-w-[720px] text-lg leading-[29px]">From bespoke websites to a product I run myself: a few examples of the work behind the offer.</p>
          <div className="grid gap-12 md:grid-cols-3 md:gap-8">
            {agencyProjects.map((project) => (
              <article key={project.name} className="flex min-w-0 flex-col gap-5">
                <div className={`relative flex h-[220px] items-center justify-center overflow-hidden border border-outline-variant md:h-[250px] ${project.imageClass}`}>
                  <Image src={project.image} alt={project.alt} width={project.name === "The Vault Gym" ? 1024 : project.name === "Foodedo" ? 740 : 1800} height={project.name === "The Vault Gym" ? 767 : project.name === "Foodedo" ? 712 : 1270} sizes="(min-width: 1440px) 416px, (min-width: 768px) 30vw, calc(100vw - 48px)" className={`h-full w-full ${project.fit}`} />
                </div>
                <div className="flex flex-col gap-3 md:min-h-[166px]">
                  <p className={`${label} text-[11px]`}>{project.category}</p>
                  <h3 className="text-[26px] font-extrabold leading-[34px] tracking-[-0.03em]">{project.name}</h3>
                  <p className="text-base leading-[26px]">{project.description}</p>
                </div>
                <div className="flex flex-col gap-3 border-t border-outline-variant pt-5">
                  <p className="font-mono text-xs font-semibold uppercase leading-[18px] tracking-[0.08em] text-primary-fixed">{project.proofLabel}</p>
                  <p className="text-base font-semibold leading-[26px]">{project.proof}</p>
                </div>
                {project.href ? <a href={project.href} className="inline-flex min-h-11 items-center gap-1 self-start text-[15px] font-bold leading-6 text-primary hover:underline">{project.linkLabel} <ArrowUpRight className="size-4 shrink-0" aria-hidden="true" /></a> : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="agency-process" className="bg-primary-fixed px-6 py-14 text-surface md:px-16 md:py-20">
        <div className={`${container} flex flex-col gap-8`}>
          <p className={`${label} text-surface`}>03 / A straightforward partnership</p>
          <h2 id="agency-process" className="max-w-[880px] text-[34px] font-extrabold leading-[41px] tracking-[-0.04em] md:text-[56px] md:leading-[64px]">Your client relationship.<br />My development expertise.</h2>
          <p className="max-w-[720px] text-lg leading-[29px]">White-label by default. I can work quietly behind your agency, or join a client conversation when you want technical input. You stay in control of the relationship.</p>
          <ol className="flex flex-col gap-8">
            {agencyProcess.map((step, index) => (
              <li key={step.title} className="flex gap-4 border-t border-[#6385C4] pt-6 md:gap-10">
                <span aria-hidden="true" className="w-7 shrink-0 font-mono text-sm leading-6 md:w-12">{String(index + 1).padStart(2, "0")}</span>
                <div className="flex min-w-0 flex-1 flex-col gap-2.5 lg:flex-row lg:gap-12">
                  <h3 className="text-[21px] font-bold leading-[31px] lg:w-[min(32vw,420px)] lg:shrink-0 lg:text-2xl">{step.title}</h3>
                  <p className="max-w-[640px] flex-1 text-[17px] leading-7">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="flex flex-col gap-3 border-t border-[#6385C4] pt-6 text-sm font-semibold leading-[23px] md:flex-row md:gap-10">
            <p>Confidentiality respected. NDAs welcome.</p>
            <p>Project-based support, shaped around your brief.</p>
          </div>
          <div className="flex flex-col gap-3 border-t border-[#6385C4] pt-6">
            <h3 className="text-[21px] font-bold leading-[31px] md:text-2xl">Your workflow, with me in it.</h3>
            <p className="max-w-[880px] text-[17px] leading-7">From Figma handoff to your Git repositories and project tools, I fit around the way your team already works. We agree communication and review points up front.</p>
          </div>
        </div>
      </section>

      <section aria-labelledby="agency-developer" className="border-b border-outline-variant bg-surface px-6 py-14 md:px-16 md:py-16">
        <div className={`${container} flex flex-col gap-6 md:flex-row md:items-center md:gap-16`}>
          <figure className="flex w-[200px] shrink-0 flex-col gap-3 md:w-[280px]">
            <div className="h-[210px] bg-background md:h-[300px]"><Image src={portrait} alt="Jack Wakeham, developer behind Odd Robin" sizes="(min-width: 768px) 280px, 200px" className="h-full w-full object-contain object-bottom" /></div>
            <figcaption className="font-mono text-xs font-semibold leading-5">Jack Wakeham / Developer</figcaption>
          </figure>
          <div className="flex min-w-0 flex-1 flex-col gap-6">
            <div className="flex flex-col gap-4">
              <div aria-hidden="true" className="h-1 w-10 bg-accent" />
              <h2 id="agency-developer" className="text-[30px] font-extrabold leading-[38px] tracking-[-0.035em] md:text-4xl md:leading-[44px]">One senior developer.<br />A direct line.</h2>
            </div>
            <p className="max-w-[760px] text-lg leading-[29px]">I’m Jack, the developer behind {agencyOffer.businessName}. With around 10 years’ commercial front-end experience, I bring senior judgement to the work as well as the build. You work directly with me, from the first technical question to the final handover.</p>
            <p className="text-lg leading-[29px]">Based in Gloucestershire. Working with agencies wherever they’re based.</p>
          </div>
        </div>
      </section>

      <section id="project-enquiry" aria-labelledby="agency-contact" className="scroll-mt-24 px-6 py-14 md:px-16 md:py-[88px]">
        <div className={`${container} flex flex-col gap-10 lg:flex-row lg:gap-24`}>
          <div className="flex min-w-0 flex-1 flex-col gap-6">
            <p className={label}>04 / Start with a conversation</p>
            <h2 id="agency-contact" className="text-4xl font-extrabold leading-[43px] tracking-[-0.04em] md:text-5xl md:leading-[56px]">Have a project that needs extra dev capacity?<br />Let’s chat.</h2>
            <p className="max-w-[520px] text-lg leading-[29px]">Send me a little about the brief, your timings and where you need a hand. No polished specification needed.</p>
            <p className="text-sm leading-[23px]">Just exploring a future partnership? You’re welcome to get in touch.</p>
            <p className="border-t border-outline-variant pt-5 text-base leading-[26px]"><strong className="font-bold text-primary-fixed">Fixed project quotes from {agencyOffer.startingPrice}.</strong><br />Scoped to your brief, with any changes agreed in advance.</p>
          </div>
          <div className="w-full lg:w-[480px] lg:shrink-0"><ContactForm idPrefix="agency-" variant="agency" /></div>
        </div>
      </section>
    </main>
  );
}
