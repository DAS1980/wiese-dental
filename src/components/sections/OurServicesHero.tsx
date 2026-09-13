import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL } from "@/config/contact";

const OurServicesHero = () => {
  return (
    <section
      className="pt-44 pb-20 md:pt-52 md:pb-28 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, hsl(184 82% 40%) 0%, hsl(180 72% 30%) 100%)",
      }}
    >
      {/* Subtle decorative circles */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-10"
        style={{ background: "white" }}
      />
      <div
        className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full opacity-10"
        style={{ background: "white" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <p
            className="text-sm uppercase tracking-widest mb-4 font-semibold"
            style={{ color: "rgba(255,255,255,0.75)" }}
          >
            Wiese Dental — Sachse, TX
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            How Can We Help<br className="hidden sm:block" /> You Today?
          </h1>

          <p
            className="text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto"
            style={{ color: "rgba(255,255,255,0.88)" }}
          >
            Whatever you're experiencing — routine care, pain, a broken tooth, or a smile
            you've always wanted — we have a comfortable, lasting solution for you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white hover:bg-white/90 px-8 py-6 text-base font-semibold shadow-lg"
              style={{ color: "hsl(184 82% 40%)" }}
            >
              <a href="/request-an-appointment">Book an Appointment</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white bg-transparent hover:bg-white/10 px-8 py-6 text-base font-semibold"
            >
              <a href={PHONE_TEL}>
                <Phone className="mr-2 h-5 w-5" />
                {PHONE_DISPLAY}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServicesHero;
