"use client";

import { useEffect, useMemo, useState } from "react";
import { Article } from "@/components/layout/Article";
import { PaginationLink } from "@/components/layout/PaginationLink";

const aboutParagraphs = [
  "Rohit Jadhav is a Full Stack Developer and AI SaaS Builder from Mumbai, India, focused on building scalable SaaS products, AI-powered tools, and modern web applications.",
  "Google Gemini Student Ambassador | Full Stack Developer | Ex-SDE Intern @ Bluestock | 7x National Hackathon Winner.",
  "He is building real-world products like ApnaAI and NeexMeet, combining Next.js, MERN Stack, Supabase, scalable backend systems, and AI integrations to create tools that help people work, collaborate, and grow faster.",
];

const journeyItems = [
  {
    image: "/assets/home/journey/apnaai.png",
    alt: "ApnaAI product screen",
    year: "2026",
    kicker: "AI SaaS Builder",
    title: "Building Scalable SaaS Products",
    description:
      "Building AI-powered SaaS applications, productivity tools, and scalable web platforms using Next.js, MERN Stack, Supabase, and AI integrations.",
    tags: ["Next.js", "MERN Stack", "Supabase"],
  },
  {
    image: "/assets/home/journey/googleamb.png",
    alt: "Google Gemini Student Ambassador 2026",
    year: "2026",
    kicker: "Google Ambassador Journey",
    title: "Selected as Google Gemini Student Ambassador",
    description:
      "Chosen as a Google Gemini Student Ambassador 2026 to promote AI awareness, organize campus initiatives, guide students in AI tools, and build an innovative tech community.",
    tags: ["Google Gemini", "AI", "Community", "Leadership"],
  },
  {
    image: "/assets/home/journey/neexmeet.png",
    alt: "NeexMeet product screen",
    year: "2026",
    kicker: "Founder Journey",
    title: "Founder of NeexMeet",
    description:
      "Creating collaboration-focused software for meetings, communities, and real-world communication workflows.",
    tags: ["Collaboration", "Meetings", "Web Apps"],
  },
  {
    image: "/assets/home/journey/roomezes.png",
    alt: "Roomezes product screen",
    year: "2025",
    kicker: "Startup Product Development",
    title: "Your Campus Living & Services Hub",
    description:
      "Connect with fellow students, find rooms, order food, discover events, and access all campus services in one place.",
    tags: ["MVPs", "Product", "Execution"],
  },
  
];

const focusAreas = [
  {
    title: "Full Stack Web Development",
    description:
      "Building production-ready web apps with clean frontend experiences, secure APIs, and scalable backend systems.",
    icon: "/assets/shared/icons/icon-dev.svg",
    alt: "Web development icon",
  },
  {
    title: "AI SaaS Products",
    description:
      "Creating AI-powered SaaS tools for real users with fast product loops, automation, and practical integrations.",
    icon: "/assets/shared/icons/icon-frameworks.svg",
    alt: "Frameworks icon",
  },
  {
    title: "Startup Product Development",
    description:
      "Turning startup ideas into launchable MVPs with product thinking, user flows, and reliable engineering.",
    icon: "/assets/shared/icons/icon-app.svg",
    alt: "Application icon",
  },
  {
    title: "AI Integrations & Automation",
    description:
      "Connecting AI models, APIs, workflows, and data sources to make products smarter and operations faster.",
    icon: "/assets/shared/icons/icon-marketing.svg",
    alt: "Automation icon",
  },
];

const skills = [
  { name: "JavaScript", image: "/assets/skills/javascript.png" },
  { name: "TypeScript", image: "/assets/skills/typescript.png" },
  { name: "React.js", image: "/assets/skills/react.png" },
  { name: "Next.js", image: "/assets/skills/next.png" },
  { name: "Node.js", image: "/assets/skills/node.png" },
  { name: "MongoDB", image: "/assets/skills/mongodb.svg" },
  { name: "PostgreSQL", image: "/assets/skills/postgresql.svg" },
  { name: "Supabase", image: "/assets/skills/supabase.svg" },
  { name: "Java", image: "/assets/skills/java.svg" },
  { name: "Spring Boot", image: "/assets/skills/spring-boot.svg" },
  { name: "Angular", image: "/assets/skills/angular.svg" },
  { name: "Git & GitHub", image: "/assets/skills/git.png" },
  { name: "Tailwind CSS", image: "/assets/skills/tailwind-css.svg" },
  { name: "Prisma", image: "/assets/skills/prisma.svg" },
  { name: "Firebase", image: "/assets/skills/firebase.svg" },
  { name: "OpenAI APIs", image: "/assets/skills/openai.svg" },
  { name: "Vercel", image: "/assets/skills/vercel.svg" },
  { name: "Netlify", image: "/assets/skills/netlify.svg" },
];

const strengths = [
  {
    title: "SaaS Product Thinking",
    description:
      "I think from user problem to product workflow, shipping practical SaaS features that people can use.",
    image: "/assets/shared/icons/eye.png",
    alt: "Product thinking",
  },
  {
    title: "Full Stack Development",
    description:
      "I build complete products across frontend, backend, database, authentication, deployment, and APIs.",
    image: "/assets/shared/icons/code.png",
    alt: "Full stack development",
  },
  {
    title: "AI & Innovation",
    description:
      "I integrate AI into products to create smarter workflows, automations, and user experiences.",
    image: "/assets/shared/icons/vr.png",
    alt: "AI innovation",
  },
  {
    title: "Hackathons & Leadership",
    description:
      "A 7x national hackathon winner with a builder mindset, team leadership, and fast execution.",
    image: "/assets/shared/icons/languages.png",
    alt: "Hackathons and leadership",
  },
];

const achievements = [
  "Google Gemini Student Ambassador 2026",
  "Ex-SDE Intern at Bluestock",
  "7x National Level Hackathon Winner",
  "Founder of ApnaAI",
  "Founder of NeexMeet",
];

const githubUsername = "Rohit94r";
const githubUrl = "https://github.com/Rohit94r";

const cardClass =
  "relative rounded-[14px] border border-white/10 bg-white/[0.045] p-5 shadow-glass backdrop-blur-md md:p-7";
const sectionTitleClass =
  "mb-5 flex justify-center text-center text-[24px] font-semibold text-white";
const mutedTextClass = "text-[15px] leading-7 text-portfolio-muted";

type Contribution = {
  date: string;
  count: number;
  level: number;
};

type ContributionResponse = {
  total?: {
    lastYear?: number;
  };
  contributions: Contribution[];
};

const formatDate = (dateString: string) =>
  new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });

const calculateStats = (contributions: Contribution[], total?: number) => {
  let activeDays = 0;
  let currentStreak = 0;
  let longestStreak = 0;
  let runningStreak = 0;

  contributions.forEach((day) => {
    if (day.count > 0) {
      activeDays += 1;
      runningStreak += 1;
      longestStreak = Math.max(longestStreak, runningStreak);
    } else {
      runningStreak = 0;
    }
  });

  for (let index = contributions.length - 1; index >= 0; index -= 1) {
    if (contributions[index].count > 0) currentStreak += 1;
    else break;
  }

  return {
    totalContributions:
      total ?? contributions.reduce((sum, day) => sum + day.count, 0),
    activeDays,
    currentStreak,
    longestStreak,
  };
};

function JourneySection() {
  const [index, setIndex] = useState(0);
  const item = journeyItems[index];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % journeyItems.length);
    }, 4000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="mb-9">
      <h3 className={sectionTitleClass}>Journey</h3>
      <div className="grid gap-5 rounded-[14px] border border-white/10 bg-white/[0.045] p-4 shadow-glass backdrop-blur-md md:grid-cols-2 md:p-6">
        <figure className="relative min-h-[280px] overflow-hidden rounded-[14px] border border-white/10 bg-[#10131d] [clip-path:inset(0_round_14px)] [contain:paint]">
          <img
            className="absolute inset-0 h-full w-full scale-110 object-cover object-center opacity-25 blur-xl"
            src={item.image}
            alt=""
            aria-hidden="true"
          />
          <img
            className="absolute inset-0 z-[1] h-full w-full rounded-[14px] object-contain object-center"
            src={item.image}
            alt={item.alt}
          />
          <figcaption className="absolute left-4 top-4 z-10 rounded-[10px] border border-portfolio-gold/30 bg-black/70 px-3 py-1 text-[13px] font-semibold text-portfolio-gold">
            {item.year}
          </figcaption>
        </figure>

        <div className="flex min-h-[260px] flex-col justify-center rounded-[14px] border border-white/10 bg-black/15 p-6">
          <p className="mb-2 text-xs font-semibold uppercase text-portfolio-accent">
            {item.kicker}
          </p>
          <h4 className="mb-3 text-[20px] font-semibold leading-snug text-white">
            {item.title}
          </h4>
          <p className={mutedTextClass}>{item.description}</p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <li
                className="rounded-lg bg-white/[0.06] px-3 py-2 text-xs text-portfolio-muted"
                key={tag}
              >
                {tag}
              </li>
            ))}
          </ul>
          <div className="mt-6 h-1 overflow-hidden rounded-full bg-white/10">
            <span
              className="block h-full origin-left rounded-full bg-gradient-to-r from-portfolio-accent to-portfolio-gold [animation:journey-progress-fill_4s_linear_infinite]"
              key={index}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function GitHubContributions() {
  const [data, setData] = useState<ContributionResponse | null>(null);
  const [error, setError] = useState(false);
  const [tooltip, setTooltip] = useState<{
    text: string;
    x: number;
    y: number;
  } | null>(null);

  useEffect(() => {
    const loadContributions = async () => {
      try {
        const response = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${githubUsername}?y=last`,
        );

        if (!response.ok) throw new Error("Unable to load GitHub data");
        setData(await response.json());
      } catch {
        setError(true);
      }
    };

    loadContributions();
  }, []);

  const calendar = useMemo(() => {
    if (!data?.contributions?.length) return null;

    const firstDate = new Date(data.contributions[0].date);
    const startDay = firstDate.getUTCDay();
    const weekCount = Math.ceil((startDay + data.contributions.length) / 7);
    const cells: Array<Contribution | null> = [
      ...Array.from<null>({ length: startDay }).fill(null),
      ...data.contributions,
    ];

    while (cells.length < weekCount * 7) cells.push(null);

    const monthLabels: Array<{ name: string; column: number }> = [];
    let lastMonth = -1;

    data.contributions.forEach((day, dayIndex) => {
      const date = new Date(day.date);
      const month = date.getUTCMonth();

      if (month !== lastMonth) {
        monthLabels.push({
          name: date.toLocaleString("default", {
            month: "short",
            timeZone: "UTC",
          }),
          column: Math.floor((startDay + dayIndex) / 7) + 2,
        });
        lastMonth = month;
      }
    });

    return {
      cells,
      monthLabels,
      stats: calculateStats(data.contributions, data.total?.lastYear),
      weekCount,
    };
  }, [data]);

  return (
    <section className="mb-9">
      <h3 className={sectionTitleClass}>GitHub Contributions</h3>
      <p className="mb-5 text-center text-sm">
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          @{githubUsername}
        </a>
      </p>
      <div className={`activity-calendar-container ${cardClass}`}>
        {error && (
          <div className="calendar-fallback">
            Unable to load contribution data
          </div>
        )}

        {!error && !calendar && (
          <div className="calendar-fallback">Loading contributions...</div>
        )}

        {calendar && (
          <>
            <div
              className="months-container"
              style={{
                gridTemplateColumns: `32px repeat(${calendar.weekCount}, var(--calendar-cell))`,
              }}
            >
              <span />
              {calendar.monthLabels.map((month) => (
                <span
                  key={`${month.name}-${month.column}`}
                  style={{ gridColumn: month.column }}
                >
                  {month.name}
                </span>
              ))}
            </div>

            <div className="calendar-body">
              <div className="weekday-labels">
                <span />
                <span>Mon</span>
                <span />
                <span>Wed</span>
                <span />
                <span>Fri</span>
                <span />
              </div>
              <div className="calendar-grid">
                {calendar.cells.map((day, cellIndex) => (
                  <button
                    type="button"
                    className={
                      day
                        ? `calendar-day${day.level > 0 ? ` level-${day.level}` : ""}`
                        : "calendar-day is-empty"
                    }
                    aria-label={
                      day
                        ? `${day.count} contributions on ${formatDate(day.date)}`
                        : "Empty calendar cell"
                    }
                    key={day?.date ?? `empty-${cellIndex}`}
                    onMouseEnter={(event) => {
                      if (!day) return;
                      setTooltip({
                        text: `${day.count} contributions on ${formatDate(day.date)}`,
                        x: event.clientX + 15,
                        y: event.clientY - 30,
                      });
                    }}
                    onMouseMove={(event) => {
                      if (!day) return;
                      setTooltip((current) =>
                        current
                          ? {
                              ...current,
                              x: event.clientX + 15,
                              y: event.clientY - 30,
                            }
                          : current,
                      );
                    }}
                    onMouseLeave={() => setTooltip(null)}
                  />
                ))}
              </div>
            </div>

            <div className="contribution-legend">
              <span>Less</span>
              <i className="calendar-day" />
              <i className="calendar-day level-1" />
              <i className="calendar-day level-2" />
              <i className="calendar-day level-3" />
              <i className="calendar-day level-4" />
              <span>More</span>
            </div>

            <div className="grid gap-3 pt-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-xl border border-white/10 bg-black/20 p-4 text-center">
                <span className="block text-2xl font-semibold text-portfolio-gold">
                  {calendar.stats.totalContributions.toLocaleString()}
                </span>
                <small className="text-xs uppercase text-portfolio-muted">
                  Total Contributions
                </small>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/20 p-4 text-center">
                <span className="block text-2xl font-semibold text-portfolio-gold">
                  {calendar.stats.activeDays}
                </span>
                <small className="text-xs uppercase text-portfolio-muted">
                  Commit Days
                </small>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/20 p-4 text-center">
                <span className="block text-2xl font-semibold text-portfolio-gold">
                  {calendar.stats.currentStreak}
                </span>
                <small className="text-xs uppercase text-portfolio-muted">
                  Current Streak
                </small>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/20 p-4 text-center">
                <span className="block text-2xl font-semibold text-portfolio-gold">
                  {calendar.stats.longestStreak}
                </span>
                <small className="text-xs uppercase text-portfolio-muted">
                  Longest Streak
                </small>
              </div>
            </div>
          </>
        )}
      </div>

      {tooltip && (
        <div
          className="activity-tooltip"
          style={{ display: "block", left: tooltip.x, top: tooltip.y }}
        >
          {tooltip.text}
        </div>
      )}
    </section>
  );
}

export default function HomePage() {
  return (
    <Article page="about" title="About me">
      <section className={`mb-9 ${cardClass}`}>
        <div className="space-y-4">
          {aboutParagraphs.map((paragraph) => (
            <p className={mutedTextClass} key={paragraph}>
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <JourneySection />

      <section className="mb-9">
        <h3 className={sectionTitleClass}>Primary Focus</h3>
        <ul className="grid gap-5 md:grid-cols-2">
          {focusAreas.map((area) => (
            <li className={cardClass} key={area.title}>
              <div className="flex gap-4">
                <img
                  className="h-12 w-12 shrink-0 object-contain"
                  src={area.icon}
                  alt={area.alt}
                />
                <div>
                  <h4 className="mb-2 text-[17px] font-semibold text-white">
                    {area.title}
                  </h4>
                  <p className={mutedTextClass}>{area.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-9">
        <h3 className={sectionTitleClass}>Development Skills</h3>
        <div className="overflow-hidden rounded-[14px] border border-white/10 bg-white/[0.045] p-5 shadow-glass backdrop-blur-md [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <ul className="flex w-max gap-4 py-2 [animation:skills-marquee_34s_linear_infinite] hover:[animation-play-state:paused]">
            {[...skills, ...skills].map((skill, skillIndex) => (
              <li
                className="group flex min-w-[116px] flex-col items-center gap-3 rounded-xl border border-white/10 bg-black/20 px-4 py-4 transition duration-300 hover:-translate-y-1 hover:border-portfolio-gold/60 hover:bg-portfolio-gold/10 hover:shadow-[0_0_30px_rgba(255,190,80,0.38)]"
                key={`${skill.name}-${skillIndex}`}
              >
                <img
                  className="h-14 w-14 object-contain transition duration-300 group-hover:scale-110 sm:h-16 sm:w-16"
                  src={skill.image}
                  alt={skill.name}
                  title={skill.name}
                />
                <span className="text-center text-[11px] text-portfolio-muted transition group-hover:text-white">
                  {skill.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mb-9">
        <h3 className={sectionTitleClass}>Strengths</h3>
        <ul className="grid gap-6 md:grid-cols-2">
          {strengths.map((strength) => (
            <li className={cardClass} key={strength.title}>
              <div className="flex gap-4">
                <img
                  className="h-16 w-16 shrink-0 object-contain"
                  src={strength.image}
                  alt={strength.alt}
                />
                <div>
                  <h4 className="mb-2 text-[17px] font-semibold text-white">
                    {strength.title}
                  </h4>
                  <p className={mutedTextClass}>{strength.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-9">
        <h3 className={sectionTitleClass}>Achievements</h3>
        <ul className={`${cardClass} space-y-3`}>
          {achievements.map((achievement) => (
            <li className="flex gap-3 text-sm text-portfolio-muted" key={achievement}>
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-portfolio-gold" />
              {achievement}
            </li>
          ))}
        </ul>
      </section>

      <GitHubContributions />
      <PaginationLink href="/projects" />
    </Article>
  );
}
