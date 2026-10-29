import { ContactForm } from "@/components/contact-form";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a chat with Odd Robin. Send a quick message for practical next steps for your Gloucester small business.",
  keywords: [
    "contact odd robin",
    "gloucester web design enquiry",
    "book a chat gloucester",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    url: "/contact",
    title: "Contact Odd Robin",
    description:
      "Book a chat with Odd Robin. Send a quick message for practical next steps for your Gloucester small business.",
  },
  twitter: {
    title: "Contact Odd Robin",
    description:
      "Book a chat with Odd Robin. Send a quick message for practical next steps for your Gloucester small business.",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-surface text-foreground">
      <main>
        <section className="px-6 py-20 md:py-24 border-b border-outline-variant blueprint-grid-bg bg-background">
          <div className="max-w-5xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-primary mb-3">
                Contact
              </p>
              <h1 className="text-3xl md:text-5xl font-sans font-extrabold tracking-tight leading-tight mb-5">
                Want more for your business in Gloucester?
              </h1>
              <p className="text-foreground/80 leading-relaxed mb-5">
                Send a quick message and I will reply with practical next steps.
                You can also email directly if you prefer.
              </p>
              <a
                href="mailto:jackwakeham82@gmail.com"
                className="inline-flex items-center text-primary font-semibold hover:underline"
              >
                jackwakeham82@gmail.com <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <p className="text-xs text-foreground/65 mt-4">
                Typical response time: within one working day.
              </p>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
