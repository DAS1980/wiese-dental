import React from "react";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Meet from "@/components/sections/Meet";
import Testimonials from "@/components/sections/Testimonials";
import Team from "@/components/sections/Team";
import FirstVisit from "@/components/sections/FirstVisit";
import Services from "@/components/sections/Services";
import Insurance from "@/components/sections/Insurance";
import Location from "@/components/sections/Location";
import Footer from "@/components/sections/Footer";
import SectionErrorBoundary from "@/components/SectionErrorBoundary";

const Index = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Meet />
      <Testimonials />
      <Team />
      <FirstVisit />
      <Services />
      <Insurance />
      <Location />
      <Footer />
    </div>
  );
});

Index.displayName = "Index";

export default Index;