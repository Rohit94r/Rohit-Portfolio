"use client";

import { useState } from "react";
import { IoCallOutline, IoVideocamOutline } from "react-icons/io5";
import { Article } from "@/components/Article";
import { useBooking } from "@/components/BookingProvider";
import { contact, socials } from "@/data/site";

const cardClass =
  "rounded-[14px] border border-portfolio-border bg-portfolio-card/85 p-7 text-center shadow-glass backdrop-blur-md";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const { openBooking } = useBooking();

  const copyEmail = async () => {
    await navigator.clipboard.writeText(contact.email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1400);
  };

  return (
    <Article page="contact" title="Contact">
      <div className="space-y-6">
        <section className={cardClass}>
          <h3 className="section-heading mb-4 text-[26px] font-semibold text-portfolio-text">
            Email
          </h3>
          <div className="inline-flex max-w-full items-center overflow-hidden rounded-[10px] bg-portfolio-soft/90 p-1 shadow-lg">
            <span className="truncate px-2 text-sm text-portfolio-text">
              {contact.email}
            </span>
            <button
              className="rounded-md bg-portfolio-soft px-3 py-2 text-sm font-semibold text-portfolio-gold transition hover:bg-portfolio-gold/10"
              aria-label="Copy email address to clipboard"
              type="button"
              onClick={copyEmail}
            >
              {copied ? "Copied" : "Copy"}
            </button>
          </div>
        </section>

        <section className={cardClass}>
          <h3 className="section-heading mb-3 text-[26px] font-semibold text-portfolio-text">
            Contact Number
          </h3>
          <a
            href={contact.phoneHref}
            className="inline-flex items-center gap-2 text-lg font-medium text-portfolio-gold transition hover:text-portfolio-text"
          >
            <IoCallOutline aria-hidden="true" />
            {contact.phone}
          </a>
        </section>

        <section className={cardClass}>
          <h3 className="section-heading mb-4 text-[26px] font-semibold text-portfolio-text">
            Schedule a Video Call
          </h3>
          <p className="mx-auto mb-6 max-w-md text-[15px] leading-7 text-portfolio-muted">
            Book a meeting to discuss freelance projects, startup MVPs, job
            opportunities, or technical collaboration.
          </p>
          <button
            type="button"
            className="inline-flex items-center gap-3 rounded-xl border border-portfolio-gold/40 bg-portfolio-gold/10 px-6 py-4 text-[48px] text-portfolio-gold transition hover:scale-105 hover:bg-portfolio-gold/20 hover:text-portfolio-text"
            aria-label="Open meeting booking form"
            onClick={openBooking}
          >
            <IoVideocamOutline aria-hidden="true" />
          </button>
          <p className="mt-4 text-sm text-portfolio-muted">
            Choose date, time, and reason — then share your contact details.
          </p>
        </section>

        <section className={cardClass}>
          <h3 className="section-heading mb-7 text-[26px] font-semibold text-portfolio-text">
            Socials
          </h3>
          <ul className="flex flex-wrap justify-center gap-7">
            {socials.map(({ name, href, Icon }) => (
              <li key={name}>
                <a
                  href={href}
                  className="text-[35px] text-portfolio-gold transition hover:scale-110 hover:text-portfolio-text"
                  aria-label={name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </Article>
  );
}
