import { Handshake, MapPin, MessageSquare, ShieldCheck } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import profileImage from "../../../public/profile-image.png";

export const metadata: Metadata = {
  title: "Who Am I?",
  description:
    "A personal introduction to the local digital partner behind Odd Robin, with values, approach, and support for one-off projects or ongoing work.",
  keywords: [
    "about Odd Robin",
    "gloucester digital consultant",
    "local web partner gloucester",
  ],
  alternates: {
    canonical: "/who-am-i",
  },
  openGraph: {
    url: "/who-am-i",
    title: "Meet the Person Behind Odd Robin",
    description:
      "A personal introduction to your local Gloucester digital partner, approach, and support for one-off projects or ongoing work.",
  },
  twitter: {
    title: "Meet the Person Behind Odd Robin",
    description:
      "A personal introduction to your local Gloucester digital partner, approach, and support for one-off projects or ongoing work.",
  },
};

const sections = [
  {
    title: "My background",
    prompt:
      "I've worked in digital development for around 10 years, starting as a junior developer at a small company and progressing into agency environments. Over that time, I've delivered projects for major organisations across law, ecommerce, sport, and manufacturing, including businesses operating at multi-million and billion-pound scale.",
  },
  {
    title: "Why I started this",
    prompt:
      "I started Odd Robin to bring that experience back home to Gloucester. I wanted to focus on helping local small businesses who are great at what they do but often do not have the time to untangle websites, systems, updates, and digital tools on top of running day-to-day operations.",
  },
  {
    title: "How I work with clients",
    prompt:
      "Honesty comes first. I will never recommend work I do not believe will genuinely help your business. I keep communication clear, practical, and jargon-free so you always understand what is happening, why it matters, and what your options are.",
  },
  {
    title: "What clients can expect",
    prompt:
      "You can expect a friendly, communication-led digital partner who is easy to reach and straightforward to work with. Nothing is off limits to ask, and if something sits outside my best fit, I will tell you honestly and help you find the right person for that part.",
  },
  {
    title: "How ongoing support works",
    prompt:
      "Support is flexible around what your business actually needs. I can take on new project work, support existing systems, and handle ongoing website maintenance such as security updates, content changes, and technical improvements while keeping you in the loop throughout.",
  },
  {
    title: "Training and handover",
    prompt:
      "I do not hand over work and disappear. I make sure you and your team understand what has been built, how to use it, and why key decisions were made. The aim is to remove friction, build confidence, and make your digital tools feel manageable day to day.",
  },
];

const trustPoints = [
  "I work exclusively with small businesses in Gloucester, so every recommendation is shaped around local context and practical needs.",
  "You work directly with me from day one, with no account managers and no handoffs to outsourced teams.",
  "I explain digital work in plain English so you can make informed decisions without needing technical expertise.",
  "I support businesses long term, whether that means regular maintenance, ad-hoc help, or project-based delivery.",
  "If I am not the right person for part of a project, I will say so and help you find someone who is.",
  "Pricing and scope stay transparent, focused on value, and free from unnecessary upsells.",
];

export default function WhoAmIPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main>
        <section className="px-6 py-20 border-b border-outline-variant blueprint-grid-bg">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <p className="text-xs font-mono uppercase tracking-widest text-primary mb-3">
                Personal introduction
              </p>
              <h1 className="text-4xl md:text-6xl font-sans font-extrabold leading-tight text-primary-fixed mb-5">
                The person behind your digital projects and partnerships.
              </h1>
              <p className="text-lg text-foreground/80 leading-relaxed mb-4">
                I&apos;m a Gloucester-based developer with around 10 years in
                the digital industry, and I built Odd Robin to help local
                small businesses get practical, honest support with their
                websites and systems. My focus is simple: remove digital stress,
                cut unnecessary busy work, and give business owners more time to
                focus on what they do best.
              </p>
              <div className="inline-flex items-center border border-primary text-primary px-3 py-1 text-xs font-semibold font-mono uppercase tracking-widest bg-surface">
                <MapPin className="w-3 h-3 mr-2" />
                Gloucester · Small business focus
              </div>
            </div>

            <aside className="lg:col-span-5">
              <div className="bg-surface border border-outline-variant p-6">
                <div className="border border-outline-variant bg-background">
                  <Image
                    src={profileImage}
                    alt="Jack Wakeham, founder of Odd Robin"
                    className="block w-full h-auto"
                  />
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="px-6 py-20 border-b border-outline-variant bg-surface">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs font-mono uppercase tracking-widest text-primary mb-3">
              How I work
            </p>
            <h2 className="text-3xl md:text-4xl font-sans font-extrabold tracking-tight leading-tight mb-8">
              What working together looks like
            </h2>
            <div className="grid grid-cols-1 gap-px bg-outline-variant border border-outline-variant">
              {sections.map((item) => (
                <article key={item.title} className="bg-background p-7">
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    {item.prompt}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20 border-b border-outline-variant bg-background">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-surface border border-outline-variant p-7">
              <div className="flex items-center gap-2 mb-4">
                <ShieldCheck className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-semibold">
                  Trust points you can personalise
                </h3>
              </div>
              <ul className="space-y-3 text-sm text-foreground/80 leading-relaxed">
                {trustPoints.map((item) => (
                  <li
                    key={item}
                    className="border border-outline-variant bg-background p-3"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-surface border border-outline-variant p-7">
              <div className="flex items-center gap-2 mb-4">
                <Handshake className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-semibold">A personal note</h3>
              </div>
              <p className="text-sm text-foreground/80 leading-relaxed mb-4">
                I care about making digital feel less overwhelming. You should
                always feel comfortable asking questions, challenging ideas, and
                understanding exactly where your time and budget are going. The
                goal is to build the right systems for your business, not the
                most complicated ones.
              </p>
              <div className="border border-dashed border-outline bg-background p-4 text-sm text-foreground/70">
                Jack Wakeham · Founder & Developer · Gloucester
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-20 bg-surface">
          <div className="max-w-5xl mx-auto bg-background border border-outline-variant p-8 md:p-10">
            <div className="flex items-start gap-3 mb-4">
              <MessageSquare className="w-5 h-5 text-primary mt-0.5" />
              <h2 className="text-2xl md:text-3xl font-sans font-extrabold tracking-tight leading-tight">
                Ready to chat?
              </h2>
            </div>
            <p className="text-foreground/80 mb-6">
              If you&apos;d like honest advice and practical support for a
              one-off project or longer-term partnership, let&apos;s have a chat
              and see what would help most.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-primary text-surface px-6 py-3 text-sm font-bold uppercase tracking-widest font-mono transition-colors hover:bg-primary-fixed"
            >
              Book a chat
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
