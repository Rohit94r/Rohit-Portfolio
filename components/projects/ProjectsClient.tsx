"use client";

import { useMemo, useState } from "react";
import { projectCategories, projects } from "@/data/projects";

export function ProjectsClient() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") return projects;
    return projects.filter((project) =>
      project.categories.includes(selectedCategory),
    );
  }, [selectedCategory]);

  return (
    <section className="projects notranslate">
      <ul className="filter-list">
        {projectCategories.map((category) => (
          <li className="filter-item" key={category}>
            <button
              className={category === selectedCategory ? "active" : ""}
              type="button"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>

      <div className="filter-select-box">
        <select
          className="filter-select"
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

      <ul className="project-list">
        {filteredProjects.map((project) => (
          <li className="project-item active" key={project.title}>
            <figure className="project-img">
              <img src={project.image} alt={project.title} />
            </figure>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-category">{project.status}</p>
            <p className="project-development">{project.type}</p>
            <p className="project-development">{project.technologies}</p>

            {(project.links?.preview || project.links?.github) && (
              <div className="project-buttons">
                {project.links.preview && (
                  <a
                    href={project.links.preview}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Preview
                  </a>
                )}
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                )}
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
