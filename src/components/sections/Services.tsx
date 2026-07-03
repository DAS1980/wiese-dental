import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      number: "1",
      title: "I Have a Cavity or Broken Tooth",
      description:
        "We can place a filling or dental crown to restore your damaged tooth and make it look like new again.",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=600&fit=crop",
      alt: "Man sharing healthy smile after restorative dentistry",
    },
    {
      number: "2",
      title: "I am Missing One or More Teeth",
      description:
        "We can offer bridges, dentures, and even in-house dental implant placement to replace missing teeth.",
      image: "https://images.unsplash.com/photo-1512485694743-9c9538b4e6e0?w=800&h=600&fit=crop",
      alt: "Man with full smile after replacing missing teeth",
    },
    {
      number: "3",
      title: "I Want a Straighter Smile",
      description:
        "Invisalign® gives you straighter teeth without the need for visually distracting, uncomfortable braces.",
      image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&h=600&fit=crop",
      alt: "Woman with perfectly aligned smile after orthodontic treatment",
    },
  ];

  return (
    <section
      className="py-20 md:py-32"
      style={{
        background: "hsl(30 25% 92%)",
      }}
    >
      <div className="container mx-auto px-4">
        {/* Section Headers */}
        <div className="text-center mb-16 md:mb-20">
          <h2
            className="text-base md:text-lg tracking-wider uppercase mb-4"
            style={{ color: "hsl(184 82% 40%)" }}
          >
            Our Featured Dental Services
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold">
            How Can We Help You?
          </h3>
        </div>

        {/* Service Cards */}
        <div className="space-y-8 md:space-y-12 max-w-6xl mx-auto mb-12">
          {services.map((service) => (
            <div
              key={service.number}
              className="group relative bg-background rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Number Badge */}
                <div className="absolute top-4 left-4 md:top-6 md:left-6 z-10 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center text-2xl md:text-3xl font-bold text-white shadow-lg"
                  style={{ background: "hsl(184 82% 40%)" }}
                >
                  {service.number}
                </div>

                {/* Image Container */}
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Arrow Overlay */}
                  <div
                    className="absolute bottom-4 right-4 w-12 h-12 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: "hsl(184 82% 40%)" }}
                  >
                    <ArrowRight className="h-6 w-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                  <h4 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold mb-4">
                    {service.title}
                  </h4>
                  <p
                    className="text-base md:text-lg leading-relaxed"
                    style={{ color: "hsl(0 0% 40%)" }}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button
            size="lg"
            className="text-base md:text-lg px-8 py-6 rounded-md font-semibold shadow-md hover:shadow-lg transition-all duration-300"
            style={{
              background: "hsl(184 82% 40%)",
              color: "white",
            }}
            asChild
          >
            <Link to="/our-services">Explore All Our Dental Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
