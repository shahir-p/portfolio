import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import TechStackSection from "@/components/home/TechStackSection";
import ProjectsPreview from "@/components/home/ProjectsPreview";
import CTASection from "@/components/home/CTASection";

const Home = () => {
  return (
    <div className="pt-16 bg-white">
      <HeroSection />
      <StatsSection />
      <TechStackSection />
      <ProjectsPreview />
      {/* <CTASection /> */}
    </div>
  );
};

export default Home;