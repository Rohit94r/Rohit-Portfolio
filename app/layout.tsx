import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import type { ReactNode } from "react";
import { PortfolioShell } from "@/components/layout/PortfolioShell";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rohit94r.github.io/Rohit-Portfolio"),
  title:
    "Rohit Jadhav - Full Stack Developer | AI SaaS Builder | Mumbai, India",
  description:
    "Rohit Jadhav is a Full Stack Developer and AI SaaS Builder from Mumbai focused on building scalable SaaS products, AI-powered tools, and modern web applications.",
  keywords:
    "Full Stack Developer, AI SaaS Builder, MERN Stack Developer, Next.js Developer, Google Student Ambassador, Hackathon Winner",
  authors: [{ name: "Rohit Jadhav" }],
  creator: "Rohit Jadhav",
  openGraph: {
    title:
      "Rohit Jadhav - Full Stack Developer | AI SaaS Builder | Mumbai, India",
    description:
      "Google Gemini Student Ambassador | Full Stack Developer | Ex-SDE Intern @ Bluestock | 7x National Hackathon Winner",
    type: "website",
    siteName: "Rohit Jadhav Portfolio",
    images: ["/assets/profile/rohit-profile.png"],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Rohit Jadhav - Full Stack Developer | AI SaaS Builder | Mumbai, India",
    description:
      "Google Gemini Student Ambassador | Full Stack Developer | Ex-SDE Intern @ Bluestock | 7x National Hackathon Winner",
    images: ["/assets/profile/rohit-profile.png"],
    creator: "@RohitJadhav9409",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <PortfolioShell>{children}</PortfolioShell>
      </body>
    </html>
  );
}
