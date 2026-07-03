import React from "react";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";

// ─── Gallery Data ─────────────────────────────────────────────────────────────

const smiles = [
  {
    name: "Allan",
    src: "https://pub-89ae74d9c1ba411d8c3026dabeee57fa.r2.dev/bobwiesedental/social/Allan%20smile.png",
    alt: "Allan's smile transformation at Wiese Dental",
  },
  {
    name: "Amy",
    src: "https://pub-89ae74d9c1ba411d8c3026dabeee57fa.r2.dev/bobwiesedental/social/Amy%20Smile.png",
    alt: "Amy's smile transformation at Wiese Dental",
  },
  {
    name: "Bill",
    src: "https://pub-89ae74d9c1ba411d8c3026dabeee57fa.r2.dev/bobwiesedental/social/Bill%20Smile.png",
    alt: "Bill's smile transformation at Wiese Dental",
  },
  {
    name: "Henry",
    src: "https://pub-89ae74d9c1ba411d8c3026dabeee57fa.r2.dev/bobwiesedental/social/Henry%20Smile.png",
    alt: "Henry's smile transformation at Wiese Dental",
  },
  {
    name: "Jenifer",
    src: "https://pub-89ae74d9c1ba411d8c3026dabeee57fa.r2.dev/bobwiesedental/social/Jenifer%20Smile.png",
    alt: "Jenifer's smile transformation at Wiese Dental",
  },
  {
    name: "Martin",
    src: "https://pub-89ae74d9c1ba411d8c3026dabeee57fa.r2.dev/bobwiesedental/social/Martin%20Smile.png",
    alt: "Martin's smile transformation at Wiese Dental",
  },
  {
    name: "Sharla",
    src: "https://pub-89ae74d9c1ba411d8c3026dabeee57fa.r2.dev/bobwiesedental/social/Sharla%20Smile.png",
    alt: "Sharla's smile transformation at Wiese Dental",
  },
  {
    name: "Mary",
    src: "https://pub-89ae74d9c1ba411d8c3026dabeee57fa.r2.dev/bobwiesedental/social/Mary%20Smile.png",
    alt: "Mary's smile transformation at Wiese Dental",
  },
  {
    name: "Maggie",
    src: "https://pub-89ae74d9c1ba411d8c3026dabeee57fa.r2.dev/bobwiesedental/social/Maggie%20Smile.png",
    alt: "Maggie's smile transformation at Wiese Dental",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

const SmileGallery = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="min-h-screen bg-background">
      <Header />

      <main className="pt-40 md:pt-36">

        {/* ── Page Heading ── */}
        <section className="py-16 md:py-20 bg-white text-center">
          <div className="container mx-auto px-4 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-[hsl(184_82%_40%)] mb-3">
              Wiese Dental · Sachse, TX
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Smile Gallery
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Real results from real patients. See the smiles we've had the privilege of transforming.
            </p>
          </div>
        </section>

        {/* ── Divider ── */}
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="h-px bg-border" />
        </div>

        {/* ── Photo Grid ── */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {smiles.map((patient) => (
                <figure key={patient.name} className="group flex flex-col items-center">
                  <div className="w-full overflow-hidden rounded-2xl shadow-md transition-shadow duration-300 group-hover:shadow-xl">
                    <img
                      src={patient.src}
                      alt={patient.alt}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </div>
                  <figcaption className="mt-4 text-base font-semibold text-foreground tracking-wide">
                    {patient.name}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-16 md:py-20 bg-[hsl(220_14%_96%)] text-center">
          <div className="container mx-auto px-4 max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready for Your Own Smile Transformation?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Our team at Wiese Dental is here to help you achieve the smile you've always wanted.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-[hsl(184_82%_40%)] hover:bg-[hsl(184_82%_35%)] text-white px-10 py-4 text-base font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-200"
            >
              <a href="/request-an-appointment">Schedule Your Appointment</a>
            </Button>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
});

SmileGallery.displayName = "SmileGallery";

export default SmileGallery;
