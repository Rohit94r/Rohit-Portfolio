import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";
import type { IconType } from "react-icons";

export type SocialLink = {
  name: string;
  href: string;
  Icon: IconType;
};

export const profile = {
  name: "Rohit Jadhav",
  age: "20 years",
  location: "Mumbai, India",
  avatar: "/assets/profile/rohit-profile.png",
  motto: "Building SaaS Products for Real People 🚀",
  headline:
    "Google Gemini Student Ambassador | Full Stack Developer | Ex-SDE Intern @ Bluestock | 7x National Hackathon Winner",
  title:
    "Rohit Jadhav - Full Stack Developer | AI SaaS Builder | Mumbai, India",
  description:
    "Rohit Jadhav is a Full Stack Developer and AI SaaS Builder from Mumbai focused on building scalable SaaS products, AI-powered tools, and modern web applications.",
  keywords:
    "Full Stack Developer, AI SaaS Builder, MERN Stack Developer, Next.js Developer, Google Student Ambassador, Hackathon Winner",
  email: "rjdhav67@gmail.com",
  githubUsername: "Rohit94r",
  githubUrl: "https://github.com/Rohit94r",
  siteUrl: "https://rohit94r.github.io/Rohit-Portfolio",
  linkedinUrl: "https://www.linkedin.com/in/rohit-jadhav94/",
  instagramUrl: "https://www.instagram.com/dev.by.rohit/",
  xUrl: "https://x.com/RohitJadhav9409",
};

export const socials: SocialLink[] = [
  {
    name: "GitHub",
    href: profile.githubUrl,
    Icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: profile.linkedinUrl,
    Icon: FaLinkedin,
  },
  {
    name: "Instagram",
    href: profile.instagramUrl,
    Icon: FaInstagram,
  },
  {
    name: "Twitter / X",
    href: profile.xUrl,
    Icon: FaXTwitter,
  },
];
