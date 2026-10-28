import {
  ProjectContact,
  ProjectNavigation,
  ProjectScreenshot,
} from "@/components/project-detail";
import { foodedoFeatures } from "@/content/projects";
import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";

const description =
  "An independent meal-planning product designed, built and relaunched by Jack Wakeham: meal plans, saved recipes and shopping lists in one place.";
export const metadata: Metadata = {
  title: "Foodedo — Product design and development",
  description,
  alternates: { canonical: "/projects/foodedo" },
  openGraph: {
    title: "Foodedo | Penumbra Digital",
    description,
    url: "/projects/foodedo",
    images: [
      {
        url: "/projects/foodedo-dashboard.webp",
        alt: "Foodedo meal-planning product",
      },
    ],
  },
  twitter: {
    title: "Foodedo | Penumbra Digital",
    description,
    images: ["/projects/foodedo-dashboard.webp"],
  },
};

const capabilities = [
  [
    "Plan the days you need",
    "Choose a date range and servings, then start with suggested meals rather than a blank week.",
  ],
  [
    "Keep the plan flexible",
    "Swap meals or leave days free so the plan fits the way you actually cook.",
  ],
  [
    "Shop from the plan, not from memory",
    "Bring recipe ingredients together in a shopping list so planning carries through to the shop.",
  ],
];

export default function FoodedoPage() {
  return (
    <main className="flex-1">
      <section className="bg-background px-6 py-12 md:px-16 md:py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-5">
          <p className="project-eyebrow">Product · Case study</p>
          <h1 className="text-[40px] leading-[46px] font-extrabold tracking-[-0.04em] md:text-[64px] md:leading-[70px]">
            Foodedo
          </h1>
          <p className="max-w-[640px] text-xl leading-8 font-medium md:text-2xl md:leading-[34px]">
            Meal plans, saved recipes and shopping lists in one place. An
            independent product, designed, built and relaunched by me.
          </p>
        </div>
      </section>
      <section
        aria-label="Project information"
        className="border-b border-outline-variant bg-surface px-6 md:px-16"
      >
        <dl className="mx-auto grid max-w-7xl gap-4 py-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:py-0">
          {[
            ["Role", "Design and build"],
            ["Type", "Personal product"],
            ["Status", "Relaunched · Live"],
            ["Stack", "Next.js, Convex"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="flex items-center justify-between gap-4 lg:flex-col lg:items-start lg:border-r lg:border-outline-variant lg:px-8 lg:py-7 lg:first:pl-0 lg:last:border-0"
            >
              <dt className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-outline">
                {label}
              </dt>
              <dd className="text-sm font-bold lg:text-base">{value}</dd>
            </div>
          ))}
        </dl>
      </section>
      <section className="border-b border-outline-variant bg-surface px-6 py-12 md:px-16 md:py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:gap-16">
          <div className="flex shrink-0 flex-col gap-3 lg:w-[280px]">
            <p className="project-eyebrow">The brief</p>
            <h2 className="text-[28px] leading-[34px] font-extrabold tracking-tight">
              Make the next food decision easier.
            </h2>
          </div>
          <div className="max-w-[720px] space-y-5">
            <p className="text-lg leading-[30px] text-outline">
              Foodedo connects three jobs that are often separate: choosing
              meals, keeping recipes and making a shopping list. I designed and
              built the product, then relaunched it around a simpler flow.
              People can try a suggested week before creating an account, adjust
              their meals and keep their recipes in the same place.
            </p>
            <a
              href="https://www.foodedo.com/"
              className="inline-flex items-center gap-1 font-bold text-primary hover:underline"
            >
              Visit foodedo.com{" "}
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
      <section className="bg-background px-6 py-12 md:px-16 md:py-16">
        <figure className="mx-auto flex max-w-7xl flex-col gap-6">
          <p className="project-eyebrow">Interface</p>
          <ProjectScreenshot
            src="/projects/foodedo-week.webp"
            alt="A generated Foodedo week with suggested dinners and cooking times"
            className="border border-outline-variant md:h-[540px]"
          />
          <figcaption className="max-w-[720px] text-[15px] leading-6 text-outline">
            The relaunched Foodedo experience, captured from the live product.
          </figcaption>
        </figure>
      </section>
      <section className="bg-background px-6 py-12 md:px-16 md:py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-10">
          <div className="max-w-[640px] space-y-3">
            <p className="project-eyebrow">What it enables</p>
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl md:leading-[42px]">
              One connected flow, from meals to shopping.
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {capabilities.map(([title, text], index) => (
              <div key={title} className="space-y-3">
                <p
                  aria-hidden="true"
                  className="text-[40px] leading-[44px] font-extrabold tracking-tight text-primary-fixed"
                >
                  0{index + 1}
                </p>
                <h3 className="text-lg leading-6 font-bold">{title}</h3>
                <p className="text-[15px] leading-6 text-outline">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {foodedoFeatures.map((feature, index) => (
        <section
          key={feature.label}
          className="border-b border-outline-variant bg-surface px-6 py-12 md:px-16 md:py-20"
        >
          <div
            className={`mx-auto flex max-w-7xl flex-col items-center gap-8 lg:gap-14 ${index % 2 ? "lg:flex-row-reverse" : "lg:flex-row"}`}
          >
            <div className="w-full lg:w-[58%] lg:shrink-0">
              <ProjectScreenshot
                src={feature.image}
                alt={feature.alt}
                className="md:h-[420px]"
                sizes="(min-width: 1440px) 740px, (min-width: 1024px) 54vw, calc(100vw - 48px)"
              />
            </div>
            <div className="flex w-full flex-col gap-4 lg:min-w-0">
              <p className="project-eyebrow">{feature.label}</p>
              <h2 className="max-w-[420px] text-3xl font-extrabold tracking-[-0.035em] md:text-4xl md:leading-[42px]">
                {feature.title}
              </h2>
              <p className="max-w-[420px] text-[17px] leading-7 text-outline">
                {feature.text}
              </p>
            </div>
          </div>
        </section>
      ))}
      <ProjectContact />
      <ProjectNavigation
        next={{
          href: "/projects/mike-hamer-gardens",
          name: "Mike Hamer Gardens",
        }}
      />
    </main>
  );
}
