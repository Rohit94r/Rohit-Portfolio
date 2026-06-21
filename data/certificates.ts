export type CertificationCategory = "hackathon" | "event";

export type Certification = {
  image: string;
  alt: string;
  year: string;
  kicker: string;
  title: string;
  organization: string;
  description: string;
  tags: string[];
  link: string;
  category: CertificationCategory;
};

export type AchievementItem = {
  title: string;
  issuer: string;
  image?: string;
  imageClass?: string;
};

export const certifications: Certification[] = [
  {
    image: "/assets/certifications/sfit-hackx.png",
    alt: "SFIT HackX 2.0 National Level Hackathon",
    year: "2026",
    kicker: "Best Innovation Winner",
    title: "HackX 2.0 - Best Innovation Award",
    organization: "SFIT Mumbai",
    description:
      "Won the 'Best Innovation' award at SFIT's national-level hackathon 'HackX 2.0'. Developed an innovative technology-driven solution focused on solving real-world challenges using modern software engineering practices, scalable architecture, and creative problem-solving techniques.",
    tags: [
      "Best Innovation",
      "National Level Hackathon",
      "Software Engineering",
      "Innovation",
      "Team Leadership",
    ],
    link: "#",
    category: "hackathon",
  },
  {
    image: "/assets/certifications/kjsit-hackathon.png",
    alt: "KJSIT AlgoForge National Level Hackathon",
    year: "2026",
    kicker: "National Level Hackathon",
    title: "AlgoForge 2026 - 2nd Runner Up",
    organization: "KJSIT Mumbai",
    description:
      "Achieved 2nd Runner-Up position at IEEE KJSIT EXTC Department's national-level hackathon 'AlgoForge 2026'. Built an innovative Cyber Security solution focusing on secure digital systems, threat prevention, and intelligent security workflows.",
    tags: [
      "Cyber Security",
      "Hackathon",
      "National Level",
      "Team Project",
      "Innovation",
    ],
    link: "#",
    category: "hackathon",
  },
  {
    image: "/assets/certifications/atharva-project-presentation.png",
    alt: "Atharva College Project Presentation Competition",
    year: "2026",
    kicker: "Project Presentation Winner",
    title: "Software Development Project Competition Winner",
    organization: "Atharva College of Engineering",
    description:
      "Won recognition in a software development project presentation competition. Presented an innovative technology solution with focus on modern web development, real-world implementation, and scalable architecture.",
    tags: [
      "Software Development",
      "Project Presentation",
      "Innovation",
      "Web Development",
      "Engineering",
    ],
    link: "#",
    category: "hackathon",
  },
  {
    image: "/assets/certifications/rkdemy-techskills.png",
    alt: "RKDemy TechSkills Hackathon",
    year: "2026",
    kicker: "TechSkills Hackathon",
    title: "RKDemy TechSkills Hackathon Achievement",
    organization: "RKDemy TechSkills",
    description:
      "Achieved recognition at the RKDemy TechSkills Hackathon by building impactful solutions in Cyber Security and Web Development domains under competitive hackathon conditions.",
    tags: [
      "Cyber Security",
      "Web Development",
      "Hackathon",
      "Full Stack Development",
      "Innovation",
    ],
    link: "#",
    category: "hackathon",
  },
  {
    image: "/assets/certifications/build-with-ai-mumbai.png",
    alt: "Build with AI Mumbai Event",
    year: "2026",
    kicker: "Google Developer Group Event",
    title: "Build with AI - Mumbai",
    organization: "GDG Cloud Mumbai",
    description:
      "Attended the 'Build with AI Mumbai' event organized by Google Developer Group Cloud Mumbai. Explored modern intelligent system architectures, production-ready applications, and connected with developers building next-generation software.",
    tags: [
      "GDG Mumbai",
      "Cloud Computing",
      "Networking",
      "Developer Community",
      "Modern Tech",
    ],
    link: "#",
    category: "event",
  },
];

export const achievements: AchievementItem[] = [
  {
    title: "Google Gemini Student Ambassador 2026",
    issuer:
      "Selected for the Google Gemini Student Ambassador program with a focus on technology adoption, builder communities, and student-led innovation.",
    image: "/assets/certificates/google-gemini.png",
    imageClass: "achievement-proof-img",
  },
 
];
