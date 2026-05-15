import { Article } from "@/components/layout/Article";
import { PaginationLink } from "@/components/layout/PaginationLink";
import { ProjectsClient } from "@/components/projects/ProjectsClient";

export default function ProjectsPage() {
  return (
    <Article page="projects" title="My Projects">
      <ProjectsClient />
      <PaginationLink href="/sideworks" />
    </Article>
  );
}
