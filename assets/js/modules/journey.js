/**
 * Journey Module
 * Rotates the image and matching description in the About page journey card.
 */

const JOURNEY_ITEMS = [
  {
    image: "./assets/images/projects/helloberlin365.png",
    alt: "Building scalable SaaS products",
    year: "2026",
    kicker: "AI SaaS Builder",
    title: "Building Scalable SaaS Products",
    description:
      "Building AI-powered SaaS applications, productivity tools, and scalable web platforms using Next.js, MERN Stack, Supabase, and AI integrations.",
    tags: ["Next.js", "MERN Stack", "Supabase"],
  },
  {
    image: "./assets/images/projects/drone-pal.png",
    alt: "ApnaAI SaaS product direction",
    year: "2026",
    kicker: "Founder Journey",
    title: "Founder of ApnaAI",
    description:
      "Creating AI-powered tools that solve real productivity and learning problems with simple, scalable product experiences.",
    tags: ["AI Tools", "SaaS", "Product"],
  },
  {
    image: "./assets/images/projects/drone.jpg",
    alt: "NeexMeet collaboration product direction",
    year: "2025",
    kicker: "Founder Journey",
    title: "Founder of NeexMeet",
    description:
      "Building collaboration-focused software for modern teams, meetings, and real-world communication workflows.",
    tags: ["Collaboration", "Meetings", "Web Apps"],
  },
  {
    image: "./assets/images/projects/n8n.jpg",
    alt: "Workflow automation interface",
    year: "2025",
    kicker: "AI Automation",
    title: "AI Integrations & Automation",
    description:
      "Connecting AI models, APIs, databases, and workflows to make products more intelligent and operations faster.",
    tags: ["OpenAI APIs", "Gemini", "Automation"],
  },
  {
    image: "./assets/images/projects/sha-beats.jpg",
    alt: "Hackathon and leadership achievement",
    year: "2026",
    kicker: "Builder Mindset",
    title: "7x National Hackathon Winner",
    description:
      "Leading fast-moving teams, validating ideas quickly, and turning pressure into polished, demo-ready products.",
    tags: ["Hackathons", "Leadership", "MVPs"],
  },
];

const renderTags = (tags) =>
  tags.map((tag) => `<li>${tag}</li>`).join("");

export const initJourneyCarousel = () => {
  const journey = document.querySelector("[data-journey]");
  if (!journey) return;

  const image = journey.querySelector("[data-journey-image]");
  const year = journey.querySelector("[data-journey-year]");
  const kicker = journey.querySelector("[data-journey-kicker]");
  const title = journey.querySelector("[data-journey-title]");
  const description = journey.querySelector("[data-journey-description]");
  const tags = journey.querySelector("[data-journey-tags]");
  const progress = journey.querySelector("[data-journey-progress]");
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if (!image || !year || !kicker || !title || !description || !tags) return;

  let index = 0;
  let timerId;

  const updateJourney = (nextIndex) => {
    const item = JOURNEY_ITEMS[nextIndex];
    image.classList.add("is-changing");

    window.setTimeout(
      () => {
        image.src = item.image;
        image.alt = item.alt;
        year.textContent = item.year;
        kicker.textContent = item.kicker;
        title.textContent = item.title;
        description.textContent = item.description;
        tags.innerHTML = renderTags(item.tags);
        image.classList.remove("is-changing");

        if (progress) {
          progress.style.animation = "none";
          progress.offsetHeight;
          progress.style.animation = "";
        }
      },
      prefersReducedMotion ? 0 : 180,
    );
  };

  const start = () => {
    if (prefersReducedMotion) return;

    timerId = window.setInterval(() => {
      index = (index + 1) % JOURNEY_ITEMS.length;
      updateJourney(index);
    }, 2000);
  };

  journey.addEventListener("mouseenter", () => window.clearInterval(timerId));
  journey.addEventListener("mouseleave", start);

  updateJourney(index);
  start();
};
