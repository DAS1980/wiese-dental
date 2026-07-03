import { Button } from "@/components/ui/button";
import { FileText, ClipboardList, Clock } from "lucide-react";

const PatientForms = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Content */}
          <article className="flex-1 space-y-6">
            <div>
              <p className="text-sm md:text-base text-[hsl(184_82%_40%)] font-serif tracking-wide uppercase mb-2">
                Patient Forms
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[hsl(0_0%_20%)] leading-tight">
                Get a Head Start{" "}
                <span className="block">Before Your Visit</span>
              </h2>
            </div>
            <p className="text-lg text-[hsl(0_0%_40%)] leading-relaxed">
              We know your time is valuable. To help make check-in as smooth
              and stress-free as possible, we invite you to download and
              complete your patient forms before you arrive. Having your
              paperwork ready ahead of time allows our team to better prepare
              for your visit so we can focus on what matters most — your
              care and comfort.
            </p>
            <Button
              size="lg"
              className="bg-[hsl(184_82%_40%)] hover:bg-[hsl(184_82%_35%)] text-white px-8 py-6 text-base rounded-md shadow-md"
              asChild
            >
              <a
                href="https://pub-89ae74d9c1ba411d8c3026dabeee57fa.r2.dev/bobwiesedental/Documents/np-form.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                <FileText className="mr-2 h-5 w-5" />
                Download Patient Forms
              </a>
            </Button>
          </article>

          {/* Decorative Info Cards */}
          <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[hsl(184_82%_97%)] rounded-xl p-6 space-y-3 border border-[hsl(184_82%_88%)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[hsl(184_82%_40%)]/10">
                <ClipboardList className="h-6 w-6 text-[hsl(184_82%_40%)]" />
              </div>
              <h3 className="font-semibold text-[hsl(0_0%_20%)] text-lg">
                New Patient Forms
              </h3>
              <p className="text-sm text-[hsl(0_0%_45%)] leading-relaxed">
                Complete your health history and personal information before
                your first appointment.
              </p>
            </div>

            <div className="bg-[hsl(184_82%_97%)] rounded-xl p-6 space-y-3 border border-[hsl(184_82%_88%)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[hsl(184_82%_40%)]/10">
                <Clock className="h-6 w-6 text-[hsl(184_82%_40%)]" />
              </div>
              <h3 className="font-semibold text-[hsl(0_0%_20%)] text-lg">
                Save Time at Check-In
              </h3>
              <p className="text-sm text-[hsl(0_0%_45%)] leading-relaxed">
                Arriving with forms completed means less waiting and more
                time focused on your dental health.
              </p>
            </div>

            <div className="bg-[hsl(184_82%_97%)] rounded-xl p-6 space-y-3 border border-[hsl(184_82%_88%)] sm:col-span-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[hsl(184_82%_40%)]/10">
                <FileText className="h-6 w-6 text-[hsl(184_82%_40%)]" />
              </div>
              <h3 className="font-semibold text-[hsl(0_0%_20%)] text-lg">
                Print the PDF
              </h3>
              <p className="text-sm text-[hsl(0_0%_45%)] leading-relaxed">
                Our forms are available as printable PDFs. Fill them out at
                home and bring them with you, or bring a blank copy and
                arrive a few minutes early.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatientForms;
