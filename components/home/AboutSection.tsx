import { aboutParagraphs } from "@/data/home";

export function AboutSection() {
  return (
    <section className="about-text content-card">
      <div id="expandable-section">
        {aboutParagraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
