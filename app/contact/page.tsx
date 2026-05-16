"use client";

import { useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { IoVideocamOutline } from "react-icons/io5";
import { Article } from "@/components/layout/Article";

const email = "rjdhav67@gmail.com";

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/Rohit94r",
    Icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/rohit-jadhav94/",
    Icon: FaLinkedin,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/dev.by.rohit/",
    Icon: FaInstagram,
  },
  {
    name: "Twitter / X",
    href: "https://x.com/RohitJadhav9409",
    Icon: FaXTwitter,
  },
];

const cardClass =
  "rounded-[14px] border border-portfolio-border bg-portfolio-card/85 p-7 text-center shadow-glass backdrop-blur-md";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1400);
  };

  return (
    <Article page="contact" title="Contact">
      <div className="space-y-6">
        <section className={cardClass}>
          <h3 className="mb-4 text-[24px] font-semibold text-portfolio-text">Email:</h3>
          <div className="inline-flex max-w-full items-center overflow-hidden rounded-[10px] bg-portfolio-soft/90 p-1 shadow-lg">
            <span className="truncate px-2 text-sm text-portfolio-text">{email}</span>
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
          <h3 className="mb-7 text-[24px] font-semibold text-portfolio-text">
            Schedule Video Call With Me:
          </h3>
          <a
            href={`mailto:${email}`}
            aria-label="Schedule a video call by email"
            role="button"
            className="inline-flex text-[80px] text-portfolio-gold transition hover:scale-110 hover:text-portfolio-text"
          >
            <IoVideocamOutline aria-hidden="true" />
          </a>
        </section>

        <section className={cardClass}>
          <h3 className="mb-7 text-[24px] font-semibold text-portfolio-text">Socials:</h3>
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
