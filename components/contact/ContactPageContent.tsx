"use client";

import { useState } from "react";
import { IoVideocamOutline } from "react-icons/io5";
import { profile, socials } from "@/data/profile";

export function ContactPageContent() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1400);
  };

  return (
    <>
      <div className="content-card">
        <h3 className="h3 form-title text-center">
          Email:
        </h3>
        <div className="container">
          <div className="email-field">
            <div className="email-text">{profile.email}</div>
            <button
              className="copy-button"
              aria-label="Copy email address to clipboard"
              type="button"
              onClick={copyEmail}
            >
              {copied ? "Copied" : "Copy"}
            </button>
          </div>
        </div>
      </div>

      <br />

      <div className="content-card">
        <h3 className="h3 form-title text-center">
          Schedule Video Call with me:
        </h3>
        <br />
        <div className="center-row">
          <a
            href={`mailto:${profile.email}`}
            aria-label="Schedule a video call by email"
            role="button"
            className="calendly-icon-link"
          >
            <IoVideocamOutline aria-hidden="true" />
          </a>
        </div>
      </div>

      <br />

      <div className="content-card">
        <h3 className="h3 form-title text-center">
          Socials:
        </h3>
        <br />
        <ul className="social-list">
          {socials.map(({ name, href, Icon }) => (
            <li className="social-item" key={name}>
              <a
                href={href}
                className="social-link"
                aria-label={name}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
