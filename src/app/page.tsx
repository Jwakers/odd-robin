import { ContactForm } from "@/components/contact-form";
import { RecentProjects } from "@/components/project-panels";
import { serviceCategories } from "@/content/service-framework";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import profileImage from "../../public/profile-image.png";

export const metadata: Metadata = {
  title: "Get Seen in Gloucester",
  description:
    "Local digital support for Gloucester small businesses: websites, visibility improvements, and practical help for one-off projects or ongoing support.",
  keywords: [
    "gloucester web design",
    "gloucester digital support",
    "local seo gloucester",
    "small business website gloucester",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: "/",
    title: "Odd Robin | Get Seen in Gloucester",
    description:
      "Local digital support for Gloucester small businesses: websites, visibility improvements, and practical help for one-off projects or ongoing support.",
  },
  twitter: {
    title: "Odd Robin | Get Seen in Gloucester",
    description:
      "Local digital support for Gloucester small businesses: websites, visibility improvements, and practical help for one-off projects or ongoing support.",
  },
};

const valueStrip = [
  { title: "Get seen", label: "Business visibility" },
  { title: "Clear digital plan", label: "Practical next steps" },
  { title: "Easy updates", label: "Stay in control" },
  { title: "Direct support", label: "One local partner" },
];

const process = [
  {
    title: "20-minute first chat",
    text: "A relaxed call to understand your business, where leads come from, and what feels stuck right now.",
  },
  {
    title: "Simple action plan",
    text: "You get clear priorities in plain language, with recommended next steps and realistic effort.",
  },
  {
    title: "Build and launch",
    text: "I implement the agreed improvements and keep you updated so there are no surprises.",
  },
  {
    title: "Support when you need it",
    text: "After launch, you can choose a clean handover or ongoing support as your business evolves.",
  },
];

const proofPoints = [
  {
    title: "Gloucester-only focus",
    text: "I work exclusively with local small businesses, so every project gets direct attention.",
  },
  {
    title: "Monthly care plans",
    text: "Optional support, updates, monitoring, and improvements after launch.",
  },
  {
    title: "Training and handover",
    text: "Clear guidance so you and your team can confidently manage day-to-day updates.",
  },
  {
    title: "Honest fit first",
    text: "If something falls outside my best fit, I help you find the right specialist.",
  },
];

const faqs = [
  {
    question: "Do I need a full new website?",
    answer:
      "Not always. Sometimes a focused improvement is enough. I will recommend the simplest route that gets results.",
  },
  {
    question: "How quickly can we start?",
    answer:
      "Usually within a few days of our first call. You will get a clear next-step timeline straight away.",
  },
  {
    question: "Will I still get support after launch?",
    answer:
      "Yes. You can choose ongoing support after launch, or keep things as a one-off project with a clear handover.",
  },
];

const audienceLine =
  "Cafes and restaurants · Salons and barbers · Trades and local services · Gyms and wellness · Local shops · Therapists and consultants · Wedding businesses · Independent hospitality";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Odd Robin",
  url: "https://oddrobin.co.uk",
  email: "jackwakeham82@gmail.com",
  areaServed: {
    "@type": "City",
    name: "Gloucester",
  },
  description:
    "Local digital support for Gloucester small businesses, including websites, visibility, and practical help for one-off projects or ongoing support.",
};

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-background font-sans text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />

      <section className="relative overflow-hidden border-b border-outline-variant bg-background px-6 py-20 md:min-h-[720px] md:px-16 md:py-28">
        <div
          className="pointer-events-none absolute -right-20 top-10 size-[620px] rounded-full bg-[rgba(11,78,219,0.07)]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute right-[180px] -bottom-[120px] size-[340px] rounded-full bg-[rgba(255,122,24,0.12)]"
          aria-hidden="true"
        />
        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-7">
          <div className="h-1 w-12 shrink-0 bg-accent" aria-hidden="true" />
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-primary">
            Gloucester · Small business focus
          </p>
          <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight text-primary-fixed md:text-6xl lg:text-[72px] lg:leading-[78px] lg:tracking-[-0.04em]">
            Odd Robin Digital
          </h1>
          <p className="max-w-2xl text-xl font-medium tracking-tight text-foreground md:text-2xl md:leading-[34px]">
            Your local digital partner for small businesses in Gloucester.
          </p>
          <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center">
            <Link
              href="#contact"
              className="inline-flex w-fit items-center justify-center border border-primary bg-primary px-7 py-4 font-mono text-[13px] font-bold uppercase tracking-[0.12em] text-surface transition-colors hover:bg-primary-fixed"
            >
              Get a free website review
            </Link>
            <Link
              href="/services"
              className="inline-flex w-fit items-center justify-center border border-primary bg-transparent px-7 py-4 font-mono text-[13px] font-bold uppercase tracking-[0.12em] text-primary transition-colors hover:bg-outline-variant/20"
            >
              View services
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-outline-variant bg-surface">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-2 lg:grid-cols-4">
          {valueStrip.map((item, index) => (
            <div
              key={item.title}
              className={`flex flex-col gap-2 px-6 py-10 md:px-12 ${
                index < valueStrip.length - 1
                  ? "border-outline-variant lg:border-r"
                  : ""
              } ${index % 2 === 0 ? "border-outline-variant max-lg:border-r" : ""} ${
                index < 2 ? "max-lg:border-b" : ""
              }`}
            >
              <h2 className="text-lg font-bold tracking-tight text-foreground md:text-xl">
                {item.title}
              </h2>
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-outline">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section
        className="border-b border-outline-variant bg-background px-6 py-20 md:px-16 md:py-24"
        id="services"
      >
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-12">
          <div className="flex max-w-3xl flex-col gap-4">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              Services
            </p>
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-5xl md:leading-[54px] md:tracking-[-0.03em]">
              Practical support built around business outcomes.
            </h2>
            <p className="max-w-2xl text-lg leading-relaxed text-outline">
              Website, visibility, ecommerce, bespoke tools, and flexible
              support — whether you need a focused project or ongoing help.
            </p>
          </div>

          <div className="flex w-full flex-col border-t border-outline-variant">
            {serviceCategories.map((service, index) => (
              <article
                key={service.id}
                className="flex items-start gap-8 border-b border-outline-variant py-8 md:gap-12"
              >
                <span className="w-12 shrink-0 font-mono text-[13px] font-semibold tracking-[0.08em] text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-1 flex-col gap-2">
                  <h3 className="text-xl font-bold tracking-tight text-foreground md:text-[22px]">
                    {service.title}
                  </h3>
                  <p className="max-w-3xl text-base leading-relaxed text-outline">
                    {service.summary}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <Link
            href="/services"
            className="inline-flex w-fit items-center gap-2 text-[15px] font-semibold text-primary hover:underline"
          >
            See all services in detail <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      <section className="border-b border-outline-variant bg-surface px-6 py-20 md:px-16 md:py-24">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 md:gap-14">
          <div className="flex max-w-3xl flex-col gap-4">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              How we work together
            </p>
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-5xl md:leading-[54px] md:tracking-[-0.03em]">
              Clear process. Low pressure. Fast momentum.
            </h2>
          </div>

          <div className="flex w-full flex-col">
            {process.map((step, index) => (
              <div
                key={step.title}
                className="flex items-start gap-8 border-b border-outline-variant py-7 md:gap-10"
              >
                <span
                  className={`w-16 shrink-0 font-mono text-3xl font-semibold tracking-tight leading-9 ${
                    index === 0 ? "text-accent" : "text-outline-variant"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="flex max-w-3xl flex-1 flex-col gap-2.5">
                  <h3 className="text-xl font-bold tracking-tight text-foreground md:text-[22px]">
                    {step.title}
                  </h3>
                  <p className="text-base leading-relaxed text-outline">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-outline-variant bg-background px-6 py-20 md:px-16 md:py-24">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-10">
          <div className="flex max-w-3xl flex-col gap-4">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              Who I work with
            </p>
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl md:leading-[48px] md:tracking-[-0.03em]">
              Gloucester small businesses, across the board.
            </h2>
          </div>
          <p className="max-w-5xl text-xl font-medium leading-9 tracking-tight text-foreground md:text-[22px]">
            {audienceLine}
          </p>
          <p className="max-w-2xl text-base leading-relaxed text-outline">
            Examples, not exclusions. If you are a small business in Gloucester,
            I am happy to work with you.
          </p>
        </div>
      </section>

      <section className="border-b border-outline-variant bg-surface px-6 py-20 md:px-16 md:py-24">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-12">
          <div className="flex max-w-3xl flex-col gap-4">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              Why local businesses choose me
            </p>
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-5xl md:leading-[54px] md:tracking-[-0.03em]">
              Trusted support from one accountable local partner.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
            {proofPoints.map((item) => (
              <div key={item.title} className="flex flex-col gap-3">
                <h3 className="text-lg font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="text-[15px] leading-6 text-outline">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary-fixed px-6 py-16 md:px-16 md:py-[72px]">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-5">
          <div className="h-1 w-12 shrink-0 bg-accent" aria-hidden="true" />
          <h2 className="max-w-4xl text-3xl font-extrabold tracking-tight text-surface md:text-4xl md:leading-[44px] md:tracking-[-0.03em]">
            Senior digital expertise without the agency layers.
          </h2>
          <p className="max-w-3xl text-lg leading-relaxed text-surface/85">
            Work directly with the person advising, designing and building your
            solution. Clear scope, transparent pricing, and no unnecessary
            extras.
          </p>
        </div>
      </section>

      <RecentProjects />

      <section className="border-b border-outline-variant bg-background px-6 py-20 md:px-16 md:py-24">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-start gap-12 md:flex-row md:items-center md:gap-16">
          <div className="flex flex-1 flex-col gap-5">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              Who am I?
            </p>
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl md:leading-[48px] md:tracking-[-0.03em]">
              Meet the person behind Odd Robin.
            </h2>
            <p className="max-w-xl text-[17px] leading-7 text-outline">
              Learn more about my background, how I work with local businesses,
              and what you can expect whether you need a one-off project or
              ongoing support.
            </p>
            <Link
              href="/who-am-i"
              className="inline-flex w-fit items-center justify-center bg-primary px-6 py-3.5 font-mono text-[13px] font-bold uppercase tracking-[0.12em] text-surface transition-colors hover:bg-primary-fixed"
            >
              Find out more
            </Link>
          </div>
          <div className="aspect-square w-full max-w-[360px] shrink-0 overflow-hidden border border-outline-variant bg-surface">
            <Image
              src={profileImage}
              alt="Jack Wakeham, founder of Odd Robin"
              className="size-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-b border-outline-variant bg-surface px-6 py-20 md:px-16 md:py-24">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-12">
          <div className="flex max-w-3xl flex-col gap-4">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              FAQ
            </p>
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-5xl md:leading-[54px] md:tracking-[-0.03em]">
              Quick answers before we talk.
            </h2>
          </div>
          <div className="flex w-full max-w-3xl flex-col">
            {faqs.map((item) => (
              <div
                key={item.question}
                className="flex flex-col gap-2.5 border-b border-outline-variant py-7"
              >
                <h3 className="text-lg font-bold text-foreground">
                  {item.question}
                </h3>
                <p className="text-base leading-relaxed text-outline">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="border-t border-outline-variant bg-background px-6 py-20 md:px-16 md:py-24"
      >
        <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-12 lg:flex-row lg:gap-16">
          <div className="flex max-w-xl flex-1 flex-col gap-6 self-center">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              Ready to talk?
            </p>
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-5xl md:leading-[54px] md:tracking-[-0.03em]">
              Book a chat and get clear next steps.
            </h2>
            <p className="text-lg leading-relaxed text-outline">
              Send a quick message and I will reply with practical next steps.
              You can also email directly if you prefer.
            </p>
            <a
              href="mailto:jackwakeham82@gmail.com"
              className="inline-flex w-fit items-center gap-2 text-[15px] font-semibold text-primary hover:underline"
            >
              jackwakeham82@gmail.com <ArrowRight className="size-4" />
            </a>
            <p className="text-[13px] leading-5 text-outline">
              Typical response time: within one working day.
            </p>
          </div>
          <div className="w-full max-w-[480px] shrink-0">
            <ContactForm idPrefix="home-" />
          </div>
        </div>
      </section>
    </div>
  );
}
