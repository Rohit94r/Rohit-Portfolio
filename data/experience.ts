export type ExperienceItem = {
  period: string;
  title: string;
  company: string;
  type: string;
  description: string;
  highlights: string[];
};

export const experienceItems: ExperienceItem[] = [
  {
    period: "2025",
    title: "Software Development Engineer Intern",
    company: "Bluestock",
    type: "Industry Internship",
    description:
      "Worked on production software development with a focus on shipping useful features, collaborating with engineers, and learning real-world engineering practices.",
    highlights: [
      "Contributed to production-ready feature development",
      "Collaborated in a professional engineering environment",
      "Strengthened full stack and delivery skills",
    ],
  },
  {
    period: "2024 — Present",
    title: "Full Stack Developer",
    company: "Freelance & Personal Projects",
    type: "Freelance",
    description:
      "Building scalable web platforms for clients and personal products using Next.js, MERN Stack, Supabase, PostgreSQL, MongoDB, Prisma, Firebase, and modern deployment workflows.",
    highlights: [
      "End-to-end product development for web clients",
      "API design, authentication, and database architecture",
      "Deployment on Vercel, Netlify, and cloud platforms",
    ],
  },
  {
    period: "2024 — Present",
    title: "SaaS Product Builder",
    company: "ApnaAI · NeexMeet · ExplainMyCode",
    type: "Founder Build",
    description:
      "Designing and shipping intelligent SaaS products with OpenAI APIs, Gemini, automation workflows, and product-focused full stack architecture.",
    highlights: [
      "Founded and built multiple live products",
      "Smart integrations and automation pipelines",
      "Product thinking from idea to launch",
    ],
  },
  {
    period: "2024 — Present",
    title: "Hackathon Competitor & Team Lead",
    company: "National Level Events",
    type: "Competitions",
    description:
      "7x national hackathon winner leading teams through fast ideation, architecture decisions, and demo-ready builds under competitive timelines.",
    highlights: [
      "7x national level hackathon wins",
      "Team leadership and rapid prototyping",
      "Cyber security, web, and innovation tracks",
    ],
  },
];
