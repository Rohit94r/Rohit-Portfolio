"use client";

import { useEffect, useMemo, useState } from "react";
import { Article } from "@/components/layout/Article";
import { PaginationLink } from "@/components/layout/PaginationLink";

type ProjectImage = {
  src: string;
  alt: string;
  imageClass: string;
};

type Project = {
  title: string;
  categories: string[];
  status: string;
  type: string;
  technologies: string;
  description: string;
  images: ProjectImage[];
  links?: {
    preview?: string;
    github?: string;
  };
};

const projectCategories = [
  "All",
  "Websites",
  "Applications",
  "AI SaaS",
  "Freelance",
];

// Edit project cards here. Add more screenshots inside each `images` array.
// Use `imageClass: "h-full w-full object-contain p-2 sm:p-3"` to show the full image cleanly.
const projects: Project[] = [
  {
    title: "Gargi Surgical & Healthcare",
    categories: ["Websites", "Freelance"],
    status: "Freelance Project",
    type: "Healthcare Website",
    technologies: "Responsive Web Design | Healthcare UI | Service Pages",
    description:
      "Trusted medical equipment, wheelchair on rent Mumbai services, oxygen cylinder Mumbai support and healthcare essentials for homes, clinics and hospitals.",
    images: [
      {
        src: "/assets/projects/gargi1.png",
        alt: "Gargi Surgical & Healthcare homepage screenshot",
        imageClass: "h-full w-full object-contain p-2 sm:p-3",
      },
      {
        src: "/assets/projects/gargi2.png",
        alt: "Gargi Surgical & Healthcare services screenshot",
        imageClass: "h-full w-full object-contain p-2 sm:p-3",
      },
      {
        src: "/assets/projects/gargi3.png",
        alt: "Gargi Surgical & Healthcare medical equipment screenshot",
        imageClass: "h-full w-full object-contain p-2 sm:p-3",
      },
      {
        src: "/assets/projects/gargi4.png",
        alt: "Gargi Surgical & Healthcare oxygen cylinder support screenshot",
        imageClass: "h-full w-full object-contain p-2 sm:p-3",
      },
      {
        src: "/assets/projects/gargi5.png",
        alt: "Gargi Surgical & Healthcare wheelchair rental screenshot",
        imageClass: "h-full w-full object-contain p-2 sm:p-3",
      },
      {
        src: "/assets/projects/gargi6.png",
        alt: "Gargi Surgical & Healthcare contact section screenshot",
        imageClass: "h-full w-full object-contain p-2 sm:p-3",
      },
    ],
    links: {
      preview: "https://gargisurgical.com/",
      
    },
  },
  {
    title: "ApnaAI",
    categories: ["AI SaaS", "Applications"],
    status: "Founder Build",
    type: "AI SaaS Product",
    technologies: "Next.js | AI Integrations | SaaS Architecture",
    description:
      "An AI SaaS product focused on making modern AI workflows useful for real users, teams, and growing businesses.",
    images: [
      {
        src: "/assets/projects/apnaai.png",
        alt: "ApnaAI product preview",
        imageClass: "h-full w-full object-contain p-2 sm:p-3",
      },
      {
        src: "/assets/home/journey/apnaai.png",
        alt: "ApnaAI journey screenshot",
        imageClass: "h-full w-full object-contain p-2 sm:p-3",
      },
    ],
    links: {
      preview: "https://apnaai.online/",
      github: "#",
    },
  },
  {
    title: "NeexMeet",
    categories: ["Websites", "Applications"],
    status: "Founder Build",
    type: "Collaboration Product",
    technologies: "Next.js | MERN Stack | Real-time Workflows",
    description:
      "A collaboration-focused product for meetings, communities, and real-world communication workflows.",
    images: [
      {
        src: "/assets/projects/neexmeet.png",
        alt: "NeexMeet product preview",
        imageClass: "h-full w-full object-contain p-2 sm:p-3",
      },
      {
        src: "/assets/home/journey/neexmeet.png",
        alt: "NeexMeet journey screenshot",
        imageClass: "h-full w-full object-contain p-2 sm:p-3",
      },
    ],
    links: {
      preview: "https://neexmeet.com/",
      github: "#",
    },
  },
  {
    title: "Roomezes",
    categories: ["Websites", "Applications"],
    status: "Product Build",
    type: "Startup MVP",
    technologies: "React.js | Node.js | Scalable Web Platform",
    description:
      "A campus living and services hub for rooms, food, events, and student-focused discovery in one place.",
    images: [
      {
        src: "/assets/projects/roomezes.png",
        alt: "Roomezes product preview",
        imageClass: "h-full w-full object-contain p-2 sm:p-3",
      },
      {
        src: "/assets/home/journey/roomezes.png",
        alt: "Roomezes journey screenshot",
        imageClass: "h-full w-full object-contain p-2 sm:p-3",
      },
    ],
    links: {
      preview: "https://roomezes.com/",
      github: "#",
    },
  },
];

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
