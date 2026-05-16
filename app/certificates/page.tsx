import { FaBriefcase, FaTrophy } from "react-icons/fa6";
import { Article } from "@/components/layout/Article";
import { PaginationLink } from "@/components/layout/PaginationLink";

// Edit certification cards here.
const certifications = [
  
  {
    image: "/assets/certifications/sfit-hackx.png",
    alt: "SFIT HackX 2.0 National Level Hackathon",
    year: "2026",
    kicker: "Best Innovation Winner",
    title: "HackX 2.0 - Best Innovation Award",
    organization: "SFIT Mumbai",
    description:
      "Won the 'Best Innovation' award at SFIT's national-level hackathon 'HackX 2.0'. Developed an innovative technology-driven solution focused on solving real-world challenges using modern software engineering practices, scalable architecture, and creative problem-solving techniques. Successfully competed among talented teams from multiple institutions.",
    tags: [
      "Best Innovation",
      "National Level Hackathon",
      "Software Engineering",
      "Innovation",
      "Web Technologies",
      "Team Leadership",
      "Real World Solutions",
    ],
    link: "#",
  },
  {
    image: "/assets/certifications/kjsit-hackathon.png",
    alt: "KJSIT AlgoForge National Level Hackathon",
    year: "2026",
    kicker: "National Level Hackathon",
    title: "AlgoForge 2026 - 2nd Runner Up",
    organization: "KJSIT Mumbai",
    description:
      "Achieved 2nd Runner-Up position at IEEE KJSIT EXTC Department's national-level hackathon 'AlgoForge 2026'. Worked on an innovative Cyber Security solution focusing on secure digital systems, threat prevention, and intelligent security workflows. Collaborated with a strong development team to build a scalable and impactful tech solution under competitive hackathon conditions.",
    tags: [
      "Cyber Security",
      "Hackathon",
      "National Level",
      "Team Project",
      "Innovation",
      "Problem Solving",
      "Software Development",
    ],
    link: "#",
  },
  {
    image: "/assets/certifications/atharva-project-presentation.png",
    alt: "Atharva College Project Presentation Competition",
    year: "2026",
    kicker: "Project Presentation Winner",
    title: "Software Development Project Competition Winner",
    organization: "Atharva College of Engineering",
    description:
      "Won recognition in a software development project presentation competition at Atharva College of Engineering. Presented an innovative technology solution with focus on modern web development, real-world implementation, scalable architecture, and impactful user experience. Successfully demonstrated technical concepts, execution strategy, and project innovation before judges and faculty members.",
    tags: [
      "Software Development",
      "Project Presentation",
      "Innovation",
      "Web Development",
      "Technical Presentation",
      "Team Collaboration",
      "Engineering",
    ],
    link: "#",
  },
  {
    image: "/assets/certifications/rkdemy-techskills.png",
    alt: "RKDemy TechSkills Hackathon",
    year: "2026",
    kicker: "TechSkills Hackathon",
    title: "RKDemy TechSkills Hackathon Achievement",
    organization: "RKDemy TechSkills",
    description:
      "Participated and achieved recognition at the RKDemy TechSkills Hackathon by building impactful solutions in Cyber Security and Web Development domains. Focused on creating secure and modern applications with practical implementation, teamwork, and advanced development practices under competitive hackathon environments.",
    tags: [
      "Cyber Security",
      "Web Development",
      "Hackathon",
      "Full Stack Development",
      "Innovation",
      "TechSkills",
      "Problem Solving",
    ],
    link: "#",
  },
  {
    image: "/assets/certifications/build-with-ai-mumbai.png",
    alt: "Build with AI Mumbai Event",
    year: "2026",
    kicker: "Google Developer Group Event",
    title: "Build with AI - Mumbai",
    organization: "GDG Cloud Mumbai",
    description:
      "Attended the 'Build with AI Mumbai' event organized by Google Developer Group Cloud Mumbai. Explored modern AI architectures, production-ready AI systems, real-world AI applications, and the future of intelligent software development. Gained valuable insights from industry experts and connected with developers building next-generation AI solutions.",
    tags: [
      "Artificial Intelligence",
      "GDG Mumbai",
      "AI Architecture",
      "Cloud Computing",
      "Networking",
      "Developer Community",
      "Modern AI",
    ],
    link: "#",
  },
];

const certificateGroups = [
  {
    group: "Achievements & Recognition",
    Icon: FaTrophy,
    items: [
      {
        title: "Google Gemini Student Ambassador 2026",
        issuer:
          "Selected for the Google Gemini Student Ambassador program with a focus on AI adoption, builder communities, and student-led innovation.",
        image: "/assets/certificates/google-gemini.png",
        imageClass: "w-full max-w-[260px] object-contain",
      },
     
      {
        title: "Founder of ApnaAI",
        issuer: "Building AI-powered SaaS products and tools for real-world users.",
      },
      {
        title: "Founder of NeexMeet",
        issuer:
          "Creating modern collaboration and meeting productivity experiences for teams and communities.",
      },
    ],
  },
  {
    group: "Professional Experience",
    Icon: FaBriefcase,
    items: [
      {
        title: "Ex-SDE Intern at Bluestock",
        issuer:
          "Worked on software development responsibilities with a practical focus on production-ready engineering, collaboration, and shipping useful features.",
      },
      {
        title: "Full Stack Developer",
        issuer:
          "Developing scalable web platforms with Next.js, MERN Stack, Supabase, PostgreSQL, MongoDB, Prisma, Firebase, and modern deployment workflows.",
      },
      {
        title: "AI SaaS Builder",
        issuer:
          "Building AI-powered products using OpenAI APIs, Gemini, automation workflows, and product-focused full stack architecture.",
      },
    ],
  },
];

export default function CertificatesPage() {
  const [achievementGroup, ...remainingCertificateGroups] = certificateGroups;

  return (
    <Article page="certificates" title="My Certificates">
      {achievementGroup && (
        <section className="mb-12">
          <div className="mb-7 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-portfolio-border bg-portfolio-soft/80 text-portfolio-gold">
              <achievementGroup.Icon aria-hidden="true" />
            </div>
            <h3 className="text-[24px] font-semibold text-portfolio-text">
              {achievementGroup.group}
            </h3>
          </div>

          <ol className="relative ml-6 space-y-8 border-l border-portfolio-border pl-8">
            {achievementGroup.items.map((item) => (
              <li className="relative" key={item.title}>
                <span className="absolute -left-[43px] top-2 h-3 w-3 rounded-full bg-portfolio-gold shadow-[0_0_0_5px_rgba(122,149,143,0.18)]" />
                <h4 className="mb-2 text-[16px] font-semibold text-portfolio-text">
                  {item.title}
                </h4>
                <p className="mb-4 text-[15px] leading-7 text-portfolio-muted">
                  {item.issuer}
                </p>
                {item.image && (
                  <div className="inline-flex rounded-[10px] border-[10px] border-portfolio-soft bg-white p-1">
                    <img
                      className={item.imageClass}
                      src={item.image}
                      alt={`${item.title} proof`}
                    />
                  </div>
                )}
              </li>
            ))}
          </ol>
        </section>
      )}

      <section className="mb-12">
        <div className="mb-7 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-portfolio-border bg-portfolio-soft/80 text-portfolio-gold">
            <FaTrophy aria-hidden="true" />
          </div>
          <h3 className="text-[24px] font-semibold text-portfolio-text">
            Hackathons & Certifications
          </h3>
        </div>

        <ul className="grid gap-5 md:grid-cols-2">
          {certifications.map((certificate) => (
            <li
              className="flex h-full flex-col overflow-hidden rounded-[18px] border border-portfolio-border bg-portfolio-card/85 shadow-glass backdrop-blur-md"
              key={certificate.title}
            >
              <figure className="relative h-[210px] shrink-0 overflow-hidden bg-portfolio-soft/80 [clip-path:inset(0_round_18px)] [contain:paint] sm:h-[230px] md:h-[240px]">
                <img
                  className="absolute inset-0 h-full w-full scale-110 object-cover object-center opacity-20 blur-xl"
                  src={certificate.image}
                  alt=""
                  aria-hidden="true"
                />
                <img
                  className="absolute inset-0 z-[1] h-full w-full object-contain p-2.5"
                  src={certificate.image}
                  alt={certificate.alt}
                />
                <span className="absolute left-3 top-3 z-10 rounded-[10px] border border-portfolio-gold/30 bg-white/90 px-3 py-1 text-[12px] font-semibold text-portfolio-gold">
                  {certificate.year}
                </span>
              </figure>

              <div className="flex flex-1 flex-col p-5">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-portfolio-gold">
                  {certificate.kicker}
                </p>
                <h4 className="mb-1 text-[20px] font-semibold text-portfolio-text">
                  {certificate.title}
                </h4>
                <p className="mb-3 text-[14px] text-portfolio-accent">
                  {certificate.organization}
                </p>
                <p className="text-[14px] leading-6 text-portfolio-muted">
                  {certificate.description}
                </p>

                <ul className="mt-auto flex flex-wrap gap-2 pt-4">
                  {certificate.tags.map((tag) => (
                    <li
                      className="rounded-full bg-portfolio-soft/80 px-2.5 py-1 text-[11px] text-portfolio-muted"
                      key={tag}
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <div className="space-y-10">
        {remainingCertificateGroups.map(({ group, Icon, items }) => (
          <section key={group}>
            <div className="mb-7 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-portfolio-border bg-portfolio-soft/80 text-portfolio-gold">
                <Icon aria-hidden="true" />
              </div>
              <h3 className="text-[24px] font-semibold text-portfolio-text">{group}</h3>
            </div>

            <ol className="relative ml-6 space-y-8 border-l border-portfolio-border pl-8">
              {items.map((item) => (
                <li className="relative" key={item.title}>
                  <span className="absolute -left-[43px] top-2 h-3 w-3 rounded-full bg-portfolio-gold shadow-[0_0_0_5px_rgba(122,149,143,0.18)]" />
                  <h4 className="mb-2 text-[16px] font-semibold text-portfolio-text">
                    {item.title}
                  </h4>
                  <p className="mb-4 text-[15px] leading-7 text-portfolio-muted">
                    {item.issuer}
                  </p>
                  {item.image && (
                    <div className="inline-flex rounded-[10px] border-[10px] border-portfolio-soft bg-white p-1">
                      <img
                        className={item.imageClass}
                        src={item.image}
                        alt={`${item.title} proof`}
                      />
                    </div>
                  )}
                </li>
              ))}
            </ol>
          </section>
        ))}
      </div>

      <PaginationLink href="/contact" />
    </Article>
  );
}
