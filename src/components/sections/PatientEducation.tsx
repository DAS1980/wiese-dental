import { Button } from "@/components/ui/button";
import { BookOpen, Smile, HeartPulse, Sparkles, Icon } from "lucide-react";

const PatientEducation = () => {
  const topics = [
    {
      icon: Smile,
      label: "Dental Procedures",
      description:
        "Learn what to expect before, during, and after common dental treatments.",
    },
    {
      icon: HeartPulse,
      label: "Gum Health",
      description:
        "Discover how to keep your gums healthy and prevent periodontal disease.",
    },
    {
      icon: Sparkles,
      label: "Cosmetic Options",
      description:
        "Explore smile-enhancing treatments and what results you can achieve.",
    },
    {
      icon: BookOpen,
      label: "Home Care Tips",
      description:
        "Get expert guidance on brushing, flossing, and everyday oral hygiene habits.",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-[hsl(30_25%_92%)]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="text-sm md:text-base text-[hsl(184_82%_40%)] font-serif tracking-wide uppercase mb-2">
            Patient Education
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[hsl(0_0%_20%)] leading-tight mb-6">
            Knowledge Is the Best Medicine
          </h2>
          <p className="text-lg text-[hsl(0_0%_40%)] leading-relaxed">
            We believe informed patients make better decisions about their
            oral health. Our patient education library is filled with
            helpful resources designed to explain dental procedures, share
            tips for maintaining healthy teeth and gums, and guide you on
            your journey to a confident, lasting smile.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {topics.map(({ icon: Icon, label, description }) => (
            <div
              key={label}
              className="bg-background rounded-xl p-6 shadow-sm border border-border space-y-3"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[hsl(184_82%_40%)]/10">
                <Icon className="h-6 w-6 text-[hsl(184_82%_40%)]" />
              </div>
              <h3 className="font-semibold text-[hsl(0_0%_20%)] text-lg">
                {label}
              </h3>
              <p className="text-sm text-[hsl(0_0%_45%)] leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-[hsl(184_82%_40%)] hover:bg-[hsl(184_82%_35%)] text-white px-8 py-6 text-base rounded-md shadow-md"
          >
            <BookOpen className="mr-2 h-5 w-5" />
            Patient Education Library
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PatientEducation;
