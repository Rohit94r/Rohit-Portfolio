"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import {
  IoHourglass,
  IoLocationSharp,
  IoSwapVertical,
} from "react-icons/io5";
import { navigationItems } from "@/data/navigation";
import { profile, socials } from "@/data/profile";

export function PortfolioShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <main>
      <aside className="sidebar active" data-sidebar>
        <div className="sidebar-info">
          <figure className="avatar-box">
            <img src={profile.avatar} alt={profile.name} />
          </figure>

          <div className="info-content">
            <h1 className="name" title={profile.name}>
              {profile.name}
            </h1>
            <p className="title notranslate" id="motto">
              {profile.motto}
            </p>
            <p className="profile-headline">{profile.headline}</p>
          </div>

          <button
            className="info_more-btn"
            data-sidebar-btn
            aria-label="Toggle sidebar information"
            type="button"
          >
            <IoSwapVertical aria-hidden="true" />
          </button>
        </div>

        <div className="sidebar-info_more">
          <div className="separator" />

          <ul className="contacts-list">
            <li className="contact-item">
              <div className="icon-box">
                <IoHourglass aria-hidden="true" />
              </div>
              <div className="contact-info">
                <p className="contact-title">Age</p>
                <address>{profile.age}</address>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <IoLocationSharp aria-hidden="true" />
              </div>
              <div className="contact-info">
                <p className="contact-title">Location</p>
                <address>{profile.location}</address>
              </div>
            </li>
          </ul>

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
      </aside>

      <div className="main-content" role="main">
        <nav className="navbar notranslate">
          <ul className="navbar-list">
            {navigationItems.map((item) => {
              const active = pathname === item.href;

              return (
                <li className="navbar-item" key={item.href}>
                  <Link
                    href={item.href}
                    className={`navbar-link${active ? " active" : ""}`}
                    aria-current={active ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {children}
      </div>
    </main>
  );
}
