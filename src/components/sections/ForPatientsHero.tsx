import { Button } from "@/components/ui/button";
import { Phone, CalendarDays } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL } from "@/config/contact";

const ForPatientsHero = () => {
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
            className="text-sm uppercase tracking-widest font-semibold mb-5"
            style={{ color: "rgba(255,255,255,0.75)" }}
          >
            Wiese Dental — Sachse, TX
          </p>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight mb-6">
            You've Come to the Right Place
          </h1>

          <p
            className="text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto"
            style={{ color: "rgba(255,255,255,0.88)" }}
          >
            Are you ready for your appointment with Dr. Wiese and our friendly Sachse team members? We can't wait to see you! The information on this page will help you prepare ahead of time so that there aren't any surprises on the day of your visit. If there are still questions on your mind, don't worry; we're more than happy to help! Call our dental office anytime to learn more about our dental office before your first appointment.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white hover:bg-white/90 px-8 py-6 text-base font-semibold shadow-lg"
              style={{ color: "hsl(184 82% 40%)" }}
            >
              <a href="/request-an-appointment">
                <CalendarDays className="mr-2 h-5 w-5" />
                Request an Appointment
              </a>
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

export default ForPatientsHero;
