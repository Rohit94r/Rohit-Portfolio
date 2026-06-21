import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";

// ─── Edit your personal info here ───────────────────────────────────────────

export const profile = {
  name: "Rohit Jadhav",
  avatar: "/assets/profile/rohit-profile.png",
  location: "Mumbai, India",
  phone: "+91 84592 62203",
  email: "dev.by.rohit@gmail.com",
  motto: "Full Stack Developer · Product Builder · Freelancer",
  headline:
    "Freelancer building web products, startup MVPs, and scalable platforms for clients and teams.",
};

export const professionalRoles = [
  // "Full Stack Developer",
  // "Intelligent Product Builder",
  // "Startup MVP Developer",
] as const;

export const contact = {
  email: profile.email,
  phone: profile.phone,
  phoneHref: "tel:+918459262203",
  googleMeetLink: "https://meet.google.com/new",
};

export const navigationItems = [
  { label: "About", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Products", href: "/products" },
  { label: "Experience", href: "/experience" },
  { label: "Certificates", href: "/certificates" },
  { label: "Contact", href: "/contact" },
] as const;

export const socials = [
  { name: "GitHub", href: "https://github.com/Rohit94r", Icon: FaGithub },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/rohit-jadhav94/",
    Icon: FaLinkedin,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/dev.by.rohit/",
    Icon: FaInstagram,
  },
  {
    name: "Twitter / X",
    href: "https://x.com/RohitJadhav9409",
    Icon: FaXTwitter,
  },
] as const;
