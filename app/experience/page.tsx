import { FaBriefcase } from "react-icons/fa6";
import { Article } from "@/components/Article";
import { PaginationLink } from "@/components/PaginationLink";
import { experienceItems } from "@/data/experience";

export default function ExperiencePage() {
  return (
    <Article page="experience" title="Experience">
      <section className="mb-10">
        <p className="mx-auto mb-10 max-w-2xl text-center text-[15px] leading-8 text-portfolio-muted">
          A timeline of industry experience, product building, freelance work,
          and competitive hackathon participation.
        </p>

        <div className="mb-7 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-portfolio-border bg-portfolio-soft/80 text-portfolio-gold">
            <FaBriefcase aria-hidden="true" />
          </div>
          <h3 className="section-heading text-[26px] font-semibold text-portfolio-text">
            Professional Experience
          </h3>
        </div>

        <ol className="experience-timeline relative ml-6 space-y-10 border-l border-portfolio-border pl-8">
          {experienceItems.map((item) => (
            <li className="experience-item relative" key={`${item.title}-${item.period}`}>
              <span className="absolute -left-[43px] top-3 h-3 w-3 rounded-full bg-portfolio-gold shadow-[0_0_0_5px_rgba(122,149,143,0.18)]" />
              <div className="rounded-[14px] border border-portfolio-border bg-portfolio-card/85 p-5 shadow-glass backdrop-blur-md md:p-6">
                <div className="mb-3 flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-portfolio-gold/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-portfolio-gold">
                    {item.period}
                  </span>
                  <span className="rounded-full bg-portfolio-soft px-3 py-1 text-xs text-portfolio-muted">
                    {item.type}
                  </span>
                </div>
                <h4 className="mb-1 text-[18px] font-semibold text-portfolio-text">
                  {item.title}
                </h4>
                <p className="mb-3 text-sm font-medium text-portfolio-accent">
                  {item.company}
                </p>
                <p className="mb-4 text-[15px] leading-7 text-portfolio-muted">
                  {item.description}
                </p>
                <ul className="space-y-2">
                  {item.highlights.map((highlight) => (
                    <li
                      className="flex gap-3 text-sm text-portfolio-muted"
                      key={highlight}
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-portfolio-gold" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <PaginationLink href="/certificates" />
    </Article>
  );
}
