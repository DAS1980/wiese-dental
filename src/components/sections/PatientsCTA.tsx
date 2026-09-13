import { Button } from "@/components/ui/button";
import { Phone, CalendarDays } from "lucide-react";
import { PHONE_TEL } from "@/config/contact";

const PatientsCTA = () => {
  return (
    <section
      className="py-20 md:py-32 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, hsl(184 82% 40%) 0%, hsl(180 72% 30%) 100%)",
      }}
    >
      {/* Decorative circles */}
      <div
        className="absolute -top-24 -right-24 w-80 h-80 rounded-full opacity-10"
        style={{ background: "white" }}
      />
      <div
        className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full opacity-10"
        style={{ background: "white" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <p
            className="text-sm uppercase tracking-widest font-semibold"
            style={{ color: "rgba(255,255,255,0.75)" }}
          >
            We're Here for You
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight">
            Have Questions? We're Happy to Help.
          </h2>
          <p
            className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ color: "rgba(255,255,255,0.88)" }}
          >
            Whether you need help preparing for your visit, have questions
            about your treatment, or are ready to schedule your next
            appointment, our friendly Sachse team is always just a phone
            call away. Don't hesitate to reach out — we'd love to hear from
            you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Button
              asChild
              size="lg"
              className="bg-white hover:bg-white/90 px-8 py-6 text-base font-semibold shadow-lg"
              style={{ color: "hsl(184 82% 40%)" }}
            >
              <a href={PHONE_TEL}>
                <Phone className="mr-2 h-5 w-5" />
                Call the Office
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white bg-transparent hover:bg-white/10 px-8 py-6 text-base font-semibold"
            >
              <a href="/request-an-appointment">
                <CalendarDays className="mr-2 h-5 w-5" />
                Request Appointment
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatientsCTA;
