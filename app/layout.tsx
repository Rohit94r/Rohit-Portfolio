import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import type { ReactNode } from "react";
import { PortfolioShell } from "@/components/layout/PortfolioShell";
import { profile } from "@/data/profile";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: profile.title,
  description: profile.description,
  keywords: profile.keywords,
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    title: profile.title,
    description: profile.headline,
    type: "website",
    siteName: `${profile.name} Portfolio`,
    images: [profile.avatar],
  },
  twitter: {
    card: "summary_large_image",
    title: profile.title,
    description: profile.headline,
    images: [profile.avatar],
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
