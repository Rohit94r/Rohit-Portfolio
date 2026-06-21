"use client";

import { useEffect, useMemo, useState } from "react";
import { Article } from "@/components/Article";
import { PaginationLink } from "@/components/PaginationLink";
import { projectCategories, projects, type Project } from "@/data/projects";

const cardClass =
  "rounded-[18px] border border-portfolio-border bg-portfolio-card/85 p-5 shadow-glass backdrop-blur-md md:p-6";

function ProjectCard({ project }: { project: Project }) {
  const [activeImage, setActiveImage] = useState(0);
  const image = project.images[activeImage] ?? project.images[0];

  useEffect(() => {
    if (project.images.length <= 1) return;

    const timer = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % project.images.length);
    }, 3000);

    return () => window.clearInterval(timer);
  }, [project.images.length]);

  return (
    <li className={cardClass}>
      <figure className="relative mb-5 min-h-[360px] overflow-hidden rounded-[16px] border border-portfolio-border bg-portfolio-soft/80 [clip-path:inset(0_round_16px)] [contain:paint] md:min-h-[430px]">
        <img
          className="absolute inset-0 h-full w-full scale-110 object-cover object-center opacity-20 blur-xl"
          src={image.src}
          alt=""
          aria-hidden="true"
        />
        <img
          className={`absolute inset-0 z-[1] ${image.imageClass}`}
          src={image.src}
          alt={image.alt}
        />
      </figure>

      <div className="text-left">
        <div className="mb-3 flex flex-wrap gap-2">
          {project.categories.map((category) => (
            <span
              className="rounded-full bg-portfolio-soft/80 px-3 py-1 text-xs text-portfolio-muted"
              key={category}
            >
              {category}
            </span>
          ))}
        </div>

        <h3 className="mb-2 text-[24px] font-semibold text-portfolio-text">
          {project.title}
        </h3>
        <p className="mb-1 text-sm text-portfolio-gold">{project.status}</p>
        <p className="text-sm text-portfolio-muted">{project.type}</p>
        <p className="text-sm text-portfolio-muted">{project.technologies}</p>
        <p className="mt-4 text-[15px] leading-7 text-portfolio-muted">
          {project.description}
        </p>

        {(project.links?.preview || project.links?.github) && (
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {project.links.preview && (
              <a
                className="rounded-lg bg-portfolio-soft/80 px-4 py-3 text-center text-sm font-semibold text-portfolio-gold transition hover:bg-portfolio-gold/10 hover:shadow-[0_0_20px_rgba(122,149,143,0.14)]"
                href={project.links.preview}
                target="_blank"
                rel="noopener noreferrer"
              >
                Preview
              </a>
            )}
            {project.links.github && (
              <a
                className="rounded-lg bg-portfolio-soft/80 px-4 py-3 text-center text-sm font-semibold text-portfolio-gold transition hover:bg-portfolio-gold/10 hover:shadow-[0_0_20px_rgba(122,149,143,0.14)]"
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            )}
          </div>
        )}
      </div>
    </li>
  );
}

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") return projects;
    return projects.filter((project) =>
      project.categories.includes(selectedCategory),
    );
  }, [selectedCategory]);

  return (
    <Article page="projects" title="My Projects">
      <section className="notranslate">
        <ul className="mb-8 hidden flex-wrap gap-6 md:flex">
          {projectCategories.map((category) => (
            <li key={category}>
              <button
                className={`text-[15px] transition ${
                  category === selectedCategory
                    ? "text-portfolio-gold"
                    : "text-portfolio-muted hover:text-portfolio-text"
                }`}
                type="button"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>

        <div className="mb-7 md:hidden">
          <select
            className="w-full rounded-[14px] border border-portfolio-border bg-white px-4 py-3 text-sm text-portfolio-muted"
            value={selectedCategory}
            onChange={(event) => setSelectedCategory(event.target.value)}
            aria-label="Select project category"
          >
            {projectCategories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <ul className="grid gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard project={project} key={project.title} />
          ))}
        </ul>
      </section>

      <PaginationLink href="/products" />
    </Article>
  );
}
