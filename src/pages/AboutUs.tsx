import React from "react";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import AboutUsHero from "@/components/sections/AboutUsHero";
import Meet from "@/components/sections/Meet";
import AboutUsSections from "@/components/sections/AboutUsSections";
import DentalTeam from "@/components/sections/DentalTeam";
import SectionErrorBoundary from "@/components/SectionErrorBoundary";
import Team from "@/components/sections/Team";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

const AboutUs = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="min-h-screen bg-background">
      <Header />
      <AboutUsHero />
      <Meet />
      <AboutUsSections />
      <DentalTeam />
        <SectionErrorBoundary sectionName="Team">
          <Team />
        </SectionErrorBoundary>
        <SectionErrorBoundary sectionName="Testimonials">
          <Testimonials />
        </SectionErrorBoundary>
        <SectionErrorBoundary sectionName="Contact">
          <Contact />
        </SectionErrorBoundary>
      <Footer />
    </div>
  );
});

AboutUs.displayName = "AboutUs";

export default AboutUs;
