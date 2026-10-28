import { ProjectPanels } from "@/components/project-panels";
import type { Metadata } from "next";

const description =
  "Selected websites, product design and focused improvements to existing sites by Penumbra Digital, including Foodedo and Mike Hamer Gardens.";
export const metadata: Metadata = {
  title: "Projects",
  description,
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Selected work | Penumbra Digital",
    description,
    url: "/projects",
  },
  twitter: { title: "Selected work | Penumbra Digital", description },
};

export default function ProjectsPage() {
  return (
    <main className="flex-1 bg-surface">
      <section className="border-b border-outline-variant bg-background px-6 pt-16 pb-12 md:px-12 md:pt-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-4">
          <p className="project-eyebrow">Projects</p>
          <h1 className="text-4xl font-extrabold tracking-[-0.04em] md:text-[56px] md:leading-[62px]">
            Selected work.
          </h1>
          <p className="max-w-2xl text-lg leading-[30px] text-outline">
            A selection of websites, my own product and focused improvements to
            existing sites.
          </p>
        </div>
      </section>
      <section
        aria-label="Selected projects"
        className="px-6 pt-6 pb-20 md:px-12 md:pt-12"
      >
        <div className="mx-auto max-w-7xl">
          <ProjectPanels headingLevel="h2" />
        </div>
      </section>
    </main>
  );
}
