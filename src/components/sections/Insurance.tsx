import { Button } from "@/components/ui/button";
import { HelpCircle } from "lucide-react";

const Insurance = () => {
  return (
    <section className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Content - Left Side */}
          <article className="flex-1 space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground font-serif">
                <small className="block text-lg md:text-xl font-normal mb-2 text-primary font-sans">
                  Meet Melinda
                </small>
                Your Guide to a Seamless Visit
              </h2>
            </div>

            <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
              Do you have a question about dental insurance or how to prepare for your visit ahead of time?
              Melinda can give you the answers you need so that your appointment goes as smoothly as possible.
              In short, we're here to help make every aspect of your visit seamless, including when it comes time to pay.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-md"
              >
                Learn About Dental Insurance
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground shadow-md"
              >
                <HelpCircle className="mr-2 h-4 w-4" />
                Ask Melinda a Question
              </Button>
            </div>
          </article>

          {/* Image - Right Side */}
          <figure className="flex-1 w-full lg:w-auto">
            <img
              src="https://pub-89ae74d9c1ba411d8c3026dabeee57fa.r2.dev/bobwiesedental/team/Melinda.png"
              alt="Melinda, dental team member at Wiese Dental"
              className="rounded-lg shadow-md w-full h-auto object-cover max-w-lg mx-auto"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Insurance;
