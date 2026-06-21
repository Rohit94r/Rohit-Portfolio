export type ProjectImage = {
  src: string;
  alt: string;
  imageClass: string;
};

export type Project = {
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

export const projectCategories = [
  "All",
  "Websites",
  "Applications",
  "AI SaaS",
  "Freelance",
] as const;

const defaultImageClass = "h-full w-full object-contain p-2 sm:p-3";

export const projects: Project[] = [
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
        imageClass: defaultImageClass,
      },
      {
        src: "/assets/projects/gargi2.png",
        alt: "Gargi Surgical & Healthcare services screenshot",
        imageClass: defaultImageClass,
      },
      {
        src: "/assets/projects/gargi3.png",
        alt: "Gargi Surgical & Healthcare medical equipment screenshot",
        imageClass: defaultImageClass,
      },
      {
        src: "/assets/projects/gargi4.png",
        alt: "Gargi Surgical & Healthcare oxygen cylinder support screenshot",
        imageClass: defaultImageClass,
      },
      {
        src: "/assets/projects/gargi5.png",
        alt: "Gargi Surgical & Healthcare wheelchair rental screenshot",
        imageClass: defaultImageClass,
      },
      {
        src: "/assets/projects/gargi6.png",
        alt: "Gargi Surgical & Healthcare contact section screenshot",
        imageClass: defaultImageClass,
      },
    ],
    links: { preview: "https://gargisurgical.com/" },
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
        imageClass: defaultImageClass,
      },
      {
        src: "/assets/home/journey/apnaai.png",
        alt: "ApnaAI journey screenshot",
        imageClass: defaultImageClass,
      },
    ],
    links: { preview: "https://apnaai.online/", github: "#" },
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
        imageClass: defaultImageClass,
      },
      {
        src: "/assets/home/journey/neexmeet.png",
        alt: "NeexMeet journey screenshot",
        imageClass: defaultImageClass,
      },
    ],
    links: { preview: "https://neexmeet.com/", github: "#" },
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
        imageClass: defaultImageClass,
      },
      {
        src: "/assets/home/journey/roomezes.png",
        alt: "Roomezes journey screenshot",
        imageClass: defaultImageClass,
      },
    ],
    links: { preview: "https://roomezes.com/", github: "#" },
  },
];
