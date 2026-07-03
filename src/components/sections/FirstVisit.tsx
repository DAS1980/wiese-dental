import { Button } from "@/components/ui/button";

const FirstVisit = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      {/* First Subsection: Your First Dental Visit */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-20">
          {/* Content */}
          <article className="flex-1 space-y-6">
            <div>
              <p className="text-sm md:text-base text-[hsl(184_82%_40%)] font-serif tracking-wide uppercase mb-2">
                Your first dental visit
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[hsl(0_0%_20%)] leading-tight">
                Experience a Lifetime{" "}
                <span className="block">of Healthy Smiles</span>
              </h2>
            </div>
            <p className="text-lg text-[hsl(0_0%_40%)] leading-relaxed">
              At your first visit, we'll help you feel at home before carefully
              evaluating your entire mouth for cavities, gum disease, and other
              possible dental threats. During your care, our nearby team will
              take the time to get to know you as a person and not just a
              patient.
            </p>
            <Button
              size="lg"
              className="bg-[hsl(184_82%_40%)] hover:bg-[hsl(184_82%_35%)] text-white px-8 py-6 text-base rounded-md shadow-md"
            >
              Schedule A Checkup & Cleaning
            </Button>
          </article>

          {/* Image */}
          <figure className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop"
              alt="Welcoming dental office treatment room"
              className="w-full h-auto rounded-lg shadow-md object-cover"
            />
          </figure>
        </div>

        {/* Third Subsection: Amazing Dental Transformations */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16">
          {/* Content */}
          <article className="flex-1 space-y-6">
            <div>
              <p className="text-sm md:text-base text-[hsl(184_82%_40%)] font-serif tracking-wide uppercase mb-2">
                Amazing Dental Transformations
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[hsl(0_0%_20%)] leading-tight">
                Your Best Life,{" "}
                <span className="block">Realized</span>
              </h2>
            </div>
            <p className="text-lg text-[hsl(0_0%_40%)] leading-relaxed">
              No matter what kind of state your teeth and gums are in, there's a
              path towards a beautiful, healthy smile that can help you enjoy
              your life to the fullest. We've helped many patients transform
              their grins, and we're ready to do the same for you and your
              family.
            </p>
            <Button
              size="lg"
              className="bg-[hsl(184_82%_40%)] hover:bg-[hsl(184_82%_35%)] text-white px-8 py-6 text-base rounded-md shadow-md"
            >
              Learn More About Us
            </Button>
          </article>

          {/* Image */}
          <figure className="flex-1">
            <img
              src="https://pub-89ae74d9c1ba411d8c3026dabeee57fa.r2.dev/bobwiesedental/hero/Bob%20cheeful%20in%20a%20garden.png"
              alt="Bob Wiese cheerful in a garden"
              className="w-full h-auto rounded-lg shadow-md object-cover"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default FirstVisit;
