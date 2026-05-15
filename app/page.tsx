import { Article } from "@/components/layout/Article";
import { PaginationLink } from "@/components/layout/PaginationLink";
import { AboutSection } from "@/components/home/AboutSection";
import { AchievementsSection } from "@/components/home/AchievementsSection";
import { FocusSection } from "@/components/home/FocusSection";
import { JourneyCarousel } from "@/components/home/JourneyCarousel";
import { SkillsSection } from "@/components/home/SkillsSection";
import { StrengthsSection } from "@/components/home/StrengthsSection";
import { GitHubContributions } from "@/components/github/GitHubContributions";

export default function HomePage() {
  return (
    <Article page="about" title="About me">
      <AboutSection />
      <JourneyCarousel />
      <FocusSection />
      <br />
      <SkillsSection />
      <br />
      <StrengthsSection />
      <AchievementsSection />
      <GitHubContributions />
      <br />
      <PaginationLink href="/projects" />
    </Article>
  );
}
