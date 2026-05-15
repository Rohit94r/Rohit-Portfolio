/**
 * SEO Module
 * Handles SEO improvements and structured data
 */

/**
 * Add structured data (JSON-LD) for better SEO
 */
export const initStructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Rohit Jadhav",
    "jobTitle": "Google Gemini Student Ambassador | Full Stack Developer | Ex-SDE Intern @ Bluestock | 7x National Hackathon Winner",
    "url": "https://github.com/Rohit94r/Rohit-Portfolio",
    "sameAs": [
      "https://github.com/Rohit94r",
      "https://www.linkedin.com/in/rohit-jadhav94/",
      "https://www.instagram.com/dev.by.rohit/",
      "https://x.com/RohitJadhav9409"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Mumbai",
      "addressCountry": "India"
    },
    "email": "rjdhav67@gmail.com",
    "knowsAbout": [
      "Full Stack Web Development",
      "AI SaaS Products",
      "Startup Product Development",
      "AI Integrations & Automation",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Supabase",
      "OpenAI APIs"
    ]
  };

  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(structuredData);
  document.head.appendChild(script);
};

/**
 * Initialize SEO enhancements
 */
export const initSEO = () => {
  initStructuredData();
};
