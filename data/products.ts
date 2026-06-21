export type ProductImage = {
  src: string;
  alt: string;
  imageClass: string;
};

export type Product = {
  title: string;
  tagline: string;
  status: string;
  description: string;
  categories: string[];
  images: ProductImage[];
  links: {
    preview: string;
    github: string;
  };
};

const defaultImageClass = "h-full w-full object-contain p-2 sm:p-3";

export const products: Product[] = [
  {
    title: "ApnaAI",
    tagline: "AI SaaS Product",
    status: "Founder Build",
    description:
      "A practical AI SaaS product for real users, focused on productivity, automation, and accessible AI-powered workflows.",
    categories: ["AI SaaS", "Founder", "Automation"],
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
    tagline: "Collaboration Product",
    status: "Founder Build",
    description:
      "A meeting and collaboration product built around cleaner communication, organized workflows, and real-world team productivity.",
    categories: ["Meetings", "Collaboration", "Web App"],
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
    tagline: "Campus Living Platform",
    status: "Startup MVP",
    description:
      "A student-focused platform for rooms, food, events, and campus services, designed to bring everyday college needs into one product.",
    categories: ["Startup", "Campus", "MVP"],
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
