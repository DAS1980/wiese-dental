import React from "react";
import Header from "@/components/sections/Header";
import Location from "@/components/sections/Location";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

const LocationPage = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="min-h-screen bg-background">
      <Header />
      {/* Spacer to offset the fixed header (top info bar + main nav) */}
      <main className="pt-40 md:pt-32">
        <Location />
        <Contact />
      </main>
      <Footer />
    </div>
  );
});

LocationPage.displayName = "LocationPage";

export default LocationPage;
