import { projects, type Project } from "@/content/projects";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function ProjectPanel({
  project,
  headingLevel = "h3",
}: {
  project: Project;
  headingLevel?: "h2" | "h3";
}) {
  const Heading = headingLevel;
  return (
    <article className={`project-panel project-theme-${project.theme}`}>
      <div className="project-panel-media">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(min-width: 1440px) 680px, (min-width: 1024px) 50vw, calc(100vw - 48px)"
          className={
            project.theme === "vault" ? "object-cover" : "object-contain"
          }
        />
      </div>
      <div className="project-panel-copy">
        <p className="project-category">{project.category}</p>
        <Heading className="text-[26px] leading-8 font-extrabold tracking-[-0.03em] lg:text-[32px] lg:leading-[38px]">
          {project.name}
        </Heading>
        <p className="project-description">
          {project.mobileDescription ? (
            <>
              <span className="lg:hidden">{project.mobileDescription}</span>
              <span className="hidden lg:inline">{project.description}</span>
            </>
          ) : (
            project.description
          )}
        </p>
        <ul className="project-tags" aria-label="My contribution">
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        {project.href ? (
          <Link href={project.href} className="project-link">
            {project.cta}
            <ArrowRight className="size-4 shrink-0" aria-hidden="true" />
            <span className="sr-only">: {project.name}</span>
          </Link>
        ) : (
          <p className="project-status">{project.cta}</p>
        )}
      </div>
    </article>
  );
}

export function ProjectPanels({
  headingLevel = "h3",
}: {
  headingLevel?: "h2" | "h3";
}) {
  return (
    <div className="flex flex-col gap-6 md:gap-9">
      {projects.map((project) => (
        <ProjectPanel
          key={project.id}
          project={project}
          headingLevel={headingLevel}
        />
      ))}
    </div>
  );
}

export function RecentProjects() {
  return (
    <section
      id="projects"
      aria-labelledby="recent-projects-heading"
      className="border-b border-outline-variant bg-surface px-6 py-20 md:px-16 md:py-24"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 md:gap-14">
        <div className="flex max-w-3xl flex-col gap-4">
          <p className="project-eyebrow">Recent projects</p>
          <h2
            id="recent-projects-heading"
            className="text-3xl font-extrabold tracking-tight md:text-5xl md:leading-[54px] md:tracking-[-0.03em]"
          >
            Selected work, built with care.
          </h2>
          <p className="max-w-2xl text-lg leading-[30px] text-outline">
            Selected websites, my own product, a Framer template and focused
            improvements to existing sites.
          </p>
        </div>
        <ProjectPanels />
        <div className="flex flex-col items-start justify-between gap-6 bg-primary px-6 py-7 text-surface sm:flex-row sm:items-center md:px-8">
          <div className="flex flex-col gap-1.5">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em]">
              Explore the work
            </p>
            <p className="text-[22px] leading-7 font-extrabold tracking-tight">
              A closer look at the projects.
            </p>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2.5 bg-surface px-5 py-3.5 font-mono text-[13px] font-bold uppercase tracking-[0.12em] text-primary hover:bg-background"
          >
            See all projects{" "}
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
