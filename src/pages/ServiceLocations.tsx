import React from "react";
import Header from "@/components/sections/Header";
import Location from "@/components/sections/Location";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import { MapPin } from "lucide-react";

const serviceAreas = [
  { city: "Sachse, TX", href: "/dentist-sachse-tx", description: "Our home community — right here in Sachse." },
  { city: "Garland, TX", href: "/dentist-garland-tx", description: "Serving Garland residents just minutes away." },
  { city: "Rowlett, TX", href: "/dentist-rowlett-tx", description: "Convenient dental care for Rowlett families." },
  { city: "Murphy, TX", href: "/dentist-murphy-tx", description: "Quality dentistry close to Murphy, TX." },
  { city: "Wylie, TX", href: "/dentist-wylie-tx", description: "Trusted dental services for Wylie patients." },
  { city: "Plano, TX", href: "/dentist-plano-tx", description: "Exceptional dental care for Plano families." },
  { city: "Richardson, TX", href: "/dentist-richardson-tx", description: "Serving Richardson with compassionate dentistry." },
  { city: "Allen, TX", href: "/dentist-allen-tx", description: "Quality dental care close to Allen, TX." },
  { city: "Lucas, TX", href: "/dentist-lucas-tx", description: "Friendly dental services for Lucas residents." },
  { city: "Parker, TX", href: "/dentist-parker-tx", description: "Trusted dentistry near Parker, TX." },
];

const ServiceLocationsPage = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="min-h-screen bg-background">
      <Header />
      <main className="pt-40 md:pt-32">
        {/* Service Area Hero */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4 max-w-5xl text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground font-serif">
              Service Area
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-3xl mx-auto">
              Wiese Dental is proud to serve patients from Sachse and the surrounding Dallas–Fort Worth
              communities. Our conveniently located office at{" "}
              <span className="font-semibold text-foreground">6810 Murphy Rd #100, Sachse, TX 75048</span>{" "}
              is just a short drive from many nearby cities. Select your area below to learn more.
            </p>
          </div>
        </section>

        {/* City Grid */}
        <section className="py-12 md:py-20 bg-[hsl(30_25%_96%)]">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-foreground font-serif">
              Communities We Serve
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceAreas.map((area) => (
                <a
                  key={area.city}
                  href={area.href}
                  className="flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-sm border border-border hover:shadow-md hover:border-[hsl(184_82%_40%)] transition-all group"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[hsl(184_82%_40%)]/10 mb-4 group-hover:bg-[hsl(184_82%_40%)]/20 transition-colors">
                    <MapPin className="h-6 w-6 text-[hsl(184_82%_40%)]" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-[hsl(184_82%_40%)] transition-colors">
                    {area.city}
                  </h3>
                  <p className="text-sm text-muted-foreground">{area.description}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <Location />
        <Contact />
      </main>
      <Footer />
    </div>
  );
});

ServiceLocationsPage.displayName = "ServiceLocationsPage";

export default ServiceLocationsPage;
