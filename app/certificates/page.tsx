"use client";

import { useMemo, useState } from "react";
import { FaTrophy } from "react-icons/fa6";
import { Article } from "@/components/Article";
import { PaginationLink } from "@/components/PaginationLink";
import {
  achievements,
  certifications,
  type Certification,
} from "@/data/certificates";

type FilterTab = "certificates" | "hackathons" | "events";

const filterTabs: { id: FilterTab; label: string }[] = [
  { id: "certificates", label: "Certificates" },
  { id: "hackathons", label: "Hackathons" },
  { id: "events", label: "Events" },
];

function CertificationCard({ certificate }: { certificate: Certification }) {
  return (
    <li className="cert-card flex h-full flex-col overflow-hidden rounded-[16px] border border-portfolio-border bg-portfolio-card/85 shadow-glass backdrop-blur-md">
      <figure className="cert-card-image relative h-[275px] shrink-0 overflow-hidden bg-portfolio-soft/80 sm:h-[190px] md:h-[200px]">
        <img
          className="absolute inset-0 h-full w-full scale-110 object-cover object-center opacity-15 blur-lg"
          src={certificate.image}
          alt=""
          aria-hidden="true"
        />
        <img
          className="absolute inset-0 z-[1] h-full w-full object-contain p-3"
          src={certificate.image}
          alt={certificate.alt}
        />
        <span className="absolute left-2 top-2 z-10 rounded-[8px] border border-portfolio-gold/30 bg-white/90 px-2 py-0.5 text-[11px] font-semibold text-portfolio-gold">
          {certificate.year}
        </span>
      </figure>

      <div className="flex flex-1 flex-col p-4">
        <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-wide text-portfolio-gold">
          {certificate.kicker}
        </p>
        <h4 className="mb-1 text-[17px] font-semibold leading-snug text-portfolio-text">
          {certificate.title}
        </h4>
        <p className="mb-2 text-[13px] text-portfolio-accent">
          {certificate.organization}
        </p>
        <p className="text-[13px] leading-6 text-portfolio-muted">
          {certificate.description}
        </p>

        <ul className="mt-auto flex flex-wrap gap-1.5 pt-3">
          {certificate.tags.map((tag) => (
            <li
              className="rounded-full bg-portfolio-soft/80 px-2 py-0.5 text-[10px] text-portfolio-muted"
              key={tag}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}

export default function CertificatesPage() {
  const [activeFilter, setActiveFilter] = useState<FilterTab>("certificates");

  const filteredCertifications = useMemo(() => {
    if (activeFilter === "certificates") return certifications;
    if (activeFilter === "hackathons") {
      return certifications.filter((item) => item.category === "hackathon");
    }
    return certifications.filter((item) => item.category === "event");
  }, [activeFilter]);

  const showAchievements = activeFilter === "certificates";

  return (
    <Article page="certificates" title="Certificates & Achievements">
      <nav className="cert-filter-nav mb-8" aria-label="Certificate categories">
        <ul className="cert-filter-list">
          {filterTabs.map((tab) => (
            <li key={tab.id}>
              <button
                type="button"
                className={`cert-filter-btn${activeFilter === tab.id ? " active" : ""}`}
                aria-pressed={activeFilter === tab.id}
                onClick={() => setActiveFilter(tab.id)}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {showAchievements && (
        <section className="mb-10">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-portfolio-border bg-portfolio-soft/80 text-portfolio-gold">
              <FaTrophy aria-hidden="true" />
            </div>
            <h3 className="section-heading text-[22px] font-semibold text-portfolio-text">
              Achievements & Recognition
            </h3>
          </div>

          <ol className="relative ml-5 space-y-6 border-l border-portfolio-border pl-6">
            {achievements.map((item) => (
              <li className="relative" key={item.title}>
                <span className="absolute -left-[31px] top-2 h-2.5 w-2.5 rounded-full bg-portfolio-gold shadow-[0_0_0_4px_rgba(122,149,143,0.18)]" />
                <h4 className="mb-1.5 text-[15px] font-semibold text-portfolio-text">
                  {item.title}
                </h4>
                <p className="mb-3 text-[14px] leading-7 text-portfolio-muted">
                  {item.issuer}
                </p>
                {item.image && (
                  <div className="achievement-proof">
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

      {filteredCertifications.length > 0 && (
        <section className="mb-10">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-portfolio-border bg-portfolio-soft/80 text-portfolio-gold">
              <FaTrophy aria-hidden="true" />
            </div>
            <h3 className="section-heading text-[22px] font-semibold text-portfolio-text">
              {activeFilter === "hackathons"
                ? "Hackathons"
                : activeFilter === "events"
                  ? "Events"
                  : "Hackathons & Events"}
            </h3>
          </div>

          <ul className="grid gap-4 md:grid-cols-2">
            {filteredCertifications.map((certificate) => (
              <CertificationCard
                certificate={certificate}
                key={certificate.title}
              />
            ))}
          </ul>
        </section>
      )}

      {filteredCertifications.length === 0 && !showAchievements && (
        <p className="mb-10 text-center text-sm text-portfolio-muted">
          No items in this category yet.
        </p>
      )}

      <PaginationLink href="/contact" />
    </Article>
  );
}
