import { skills } from "@/data/skills";

export function SkillsSection() {
  return (
    <>
      <h3 className="h3 technologies-title">Development Skills</h3>
      <br />
      <section className="technologies content-card" id="tech-skills">
        <ul className="technologies-list has-scrollbar slider">
          {skills.map((skill) => (
            <li className="technologies-item" key={skill.name}>
              <img src={skill.image} alt={skill.name} title={skill.name} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
