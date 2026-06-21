import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk, Sora } from "next/font/google";
import type { ReactNode } from "react";
import Script from "next/script";
import { BookingProvider } from "@/components/BookingProvider";
import { PortfolioShell } from "@/components/PortfolioShell";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-body",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-heading",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-accent",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rohit94r.github.io/Rohit-Portfolio"),
  title: "Rohit Jadhav - Full Stack Developer | Product Builder",
  description:
    "Rohit Jadhav is a Full Stack Developer and Product Builder. Building startup MVPs, web products, and scalable software.",
  keywords:
    "Full Stack Developer, Freelance Developer, MERN Stack Developer, Next.js Developer, Startup MVP Developer, Hackathon Winner",
  authors: [{ name: "Rohit Jadhav" }],
  creator: "Rohit Jadhav",
  openGraph: {
    title: "Rohit Jadhav - Full Stack Developer | Product Builder",
    description:
      "Full Stack Developer and Product Builder. Ex-SDE Intern @ Bluestock | 7x National Hackathon Winner | Google Gemini Student Ambassador",
    type: "website",
    siteName: "Rohit Jadhav Portfolio",
    images: ["/assets/profile/rohit-profile.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rohit Jadhav - Full Stack Developer | Product Builder",
    description:
      "Full Stack Developer and Product Builder. Ex-SDE Intern @ Bluestock | 7x National Hackathon Winner",
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
      <body
        className={`${jakarta.variable} ${sora.variable} ${spaceGrotesk.variable}`}
      >
        <BookingProvider>
          <PortfolioShell>{children}</PortfolioShell>
        </BookingProvider>

        <Script
          src="https://apnaai.online/chatBot.js"
          data-owner-id="usr_128044582762971650"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
