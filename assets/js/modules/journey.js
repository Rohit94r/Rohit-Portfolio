/**
 * Journey Module
 * Rotates the image and matching description in the About page journey card.
 */

const JOURNEY_ITEMS = [
  {
    image: "./assets/images/projects/helloberlin365.png",
    alt: "Hello Berlin 365 project screen",
    year: "2026",
    kicker: "Full-Stack Portfolio",
    title: "Hello Berlin 365",
    description:
      "Building location-focused web experiences with clean interfaces, reusable systems and polished storytelling.",
    tags: ["Next.js", "Tailwind CSS", "Product Design"],
  },
  {
    image: "./assets/images/projects/drone-pal.png",
    alt: "Drone Pal mobile app design",
    year: "2026",
    kicker: "Mobile Product",
    title: "Drone Pal",
    description:
      "Designing and shipping practical React Native apps that turn niche workflows into calm, useful tools.",
    tags: ["React Native", "iOS", "Android"],
  },
  {
    image: "./assets/images/projects/drone.jpg",
    alt: "Drone cinematography preview",
    year: "2025",
    kicker: "Creative Sidework",
    title: "Drone Cinematography",
    description:
      "Capturing aerial footage and photography for commercial, travel and content libraries with a cinematic eye.",
    tags: ["Aerial Video", "Photography", "Stock Footage"],
  },
  {
    image: "./assets/images/projects/n8n.jpg",
    alt: "Workflow automation interface",
    year: "2025",
    kicker: "Automation Systems",
    title: "Workflow Automation & AI",
    description:
      "Creating n8n workflows that connect AI models, content generation, publishing pipelines and repeatable business tasks.",
    tags: ["n8n", "OpenAI", "Automation"],
  },
  {
    image: "./assets/images/projects/sha-beats.jpg",
    alt: "Music production artwork",
    year: "2024",
    kicker: "Audio Creation",
    title: "Music Production",
    description:
      "Producing instrumentals, sound therapy and relaxing audio with the same attention to atmosphere used in visual design.",
    tags: ["Beat Making", "Sound Design", "Streaming"],
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
