export type Project = {
  title: string;
  categories: string[];
  status: string;
  type: string;
  technologies: string;
  image: string;
  links?: {
    preview?: string;
    github?: string;
  };
};

export const projectCategories = ["All", "Websites", "Applications", "AI SaaS"];

export const projects: Project[] = [
  {
    title: "ApnaAI",
    categories: ["AI SaaS", "Applications"],
    status: "Founder Build",
    type: "AI SaaS Product",
    technologies: "Next.js | AI Integrations | SaaS Architecture",
    image: "/assets/projects/apnaai.png",
  },
  {
    title: "NeexMeet",
    categories: ["Websites", "Applications"],
    status: "Founder Build",
    type: "Collaboration Product",
    technologies: "Next.js | MERN Stack | Real-time Workflows",
    image: "/assets/projects/neexmeet.png",
  },
  {
    title: "Roomezes",
    categories: ["Websites", "Applications"],
    status: "Product Build",
    type: "Startup MVP",
    technologies: "React.js | Node.js | Scalable Web Platform",
    image: "/assets/projects/roomezes.png",
  },
];
