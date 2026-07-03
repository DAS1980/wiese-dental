import React from "react";
import Header from "@/components/sections/Header";
import ForPatientsHero from "@/components/sections/ForPatientsHero";
import FirstVisit from "@/components/sections/FirstVisit";
import Insurance from "@/components/sections/Insurance";
import FAQ from "@/components/sections/FAQ";
import PatientForms from "@/components/sections/PatientForms";
import FinancialPolicy from "@/components/sections/FinancialPolicy";
import PatientEducation from "@/components/sections/PatientEducation";
import PatientsCTA from "@/components/sections/PatientsCTA";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

const ForPatients = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="min-h-screen bg-background">
      <Header />
      <ForPatientsHero />
      <FirstVisit />
      <Insurance />
      <FAQ />
      <PatientForms />
      <FinancialPolicy />
      <PatientEducation />
      <PatientsCTA />
      <Contact />
      <Footer />
    </div>
  );
});

ForPatients.displayName = "ForPatients";

export default ForPatients;
