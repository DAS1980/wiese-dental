import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-[680px] md:min-h-[750px] flex items-end md:items-center pt-[210px] md:pt-40 pb-10 md:pb-0">
      {/* Background Image */}
      <figure className="absolute inset-0 w-full h-full">
        <img
          src="https://pub-89ae74d9c1ba411d8c3026dabeee57fa.r2.dev/bobwiesedental/social/reception%20area%20with%20portrait.png"
          alt="Wiese Dental reception area in Sachse, Texas"
          className="w-full h-full object-cover"
          fetchPriority="high"
          loading="eager"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-60"></div>
      </figure>

      {/* Content */}
      <article className="relative z-10 w-full">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-center">

            {/* Text Content */}
            <div className="max-w-2xl text-center pb-4 md:pb-12">
              {/* Small Headline */}
              <h1 className="text-white text-lg md:text-xl font-light mb-4">
                Dentist – Sachse, TX
              </h1>

              {/* Main Headline */}
              <div className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="block">Comprehensive</span>
                <span className="block">Dentistry with a</span>
                <span className="block">Personal Touch</span>
              </div>

              {/* Body Text */}
              <p className="text-white/90 text-base md:text-lg mb-8 leading-relaxed">
                At our dental office in your area, everything from dental implants to emergency
                dentistry is taken care of by a skilled dentist who always treats you like a
                unique individual.
              </p>

              {/* CTA Button */}
              <Button
                size="lg"
                className="bg-[hsl(184_82%_40%)] hover:bg-[hsl(184_82%_35%)] text-white px-8 py-6 text-base md:text-lg rounded-md shadow-md transition-colors"
                asChild
              >
                <a href="#contact">Request an Appointment</a>
              </Button>
            </div>

          </div>
        </div>
      </article>
    </section>
  );
};

export default Hero;
