import Navbar from "@/components/sections/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import WhatIsSection from "@/components/sections/WhatIsSection";
import ExperiencesSection from "@/components/sections/ExperiencesSection";
import MiniGameSection from "@/components/sections/MiniGameSection";
import ScheduleSection from "@/components/sections/ScheduleSection";
import LocationSection from "@/components/sections/LocationSection";
import FAQSection from "@/components/sections/FAQSection";
import FinalCTA from "@/components/sections/FinalCTA";
import SparkleTrail from "@/components/sections/SparkleTrail";

const Index = () => {
  return (
    <div className="min-h-screen bg-background gradient-cosmic">
      <SparkleTrail />
      <Navbar />
      <HeroSection />
      <WhatIsSection />
      <ExperiencesSection />
      <MiniGameSection />
      <ScheduleSection />
      <LocationSection />
      <FAQSection />
      <FinalCTA />
      <footer className="py-8 border-t border-border text-center">
        <p className="text-sm text-muted-foreground font-body">
          © 2026 Papalote Museo del Niño. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
};

export default Index;
