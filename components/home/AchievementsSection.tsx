import { achievements } from "@/data/home";

export function AchievementsSection() {
  return (
    <section className="achievements">
      <h3 className="h3 achievements-title">Achievements</h3>
      <ul className="achievements-list content-card">
        {achievements.map((achievement) => (
          <li key={achievement}>{achievement}</li>
        ))}
      </ul>
    </section>
  );
}
