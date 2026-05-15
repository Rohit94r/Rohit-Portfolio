"use client";

import { useEffect, useState } from "react";
import { journeyItems } from "@/data/home";

export function JourneyCarousel() {
  const [index, setIndex] = useState(0);
  const item = journeyItems[index];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % journeyItems.length);
    }, 2000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="journey">
      <h3 className="h3 journey-title">Journey</h3>

      <div className="journey-card content-card" aria-live="polite">
        <figure className="journey-image-box">
          <img src={item.image} alt={item.alt} />
          <figcaption>{item.year}</figcaption>
        </figure>

        <div className="journey-content">
          <p className="journey-kicker">{item.kicker}</p>
          <h4 className="h4 journey-item-title">{item.title}</h4>
          <p className="journey-text">{item.description}</p>
          <ul className="journey-tags">
            {item.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
          <div className="journey-progress" aria-hidden="true">
            <span key={index} />
          </div>
        </div>
      </div>
    </section>
  );
}
