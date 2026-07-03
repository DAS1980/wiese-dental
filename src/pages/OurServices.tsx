import React from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import Header from "@/components/sections/Header";
import OurServicesHero from "@/components/sections/OurServicesHero";
import OurServicesContent from "@/components/sections/OurServicesContent";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

const OurServices = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <PageLayout currentPage="our-services">
      <div ref={ref} className="min-h-screen bg-background">
        <Header />
        <OurServicesHero />
        <OurServicesContent />
        <Contact />
        <Footer />
      </div>
    </PageLayout>
  );
});

OurServices.displayName = "OurServices";

export default OurServices;
