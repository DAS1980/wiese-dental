import { Button } from "@/components/ui/button";
import { CreditCard, ShieldCheck, MessageCircle } from "lucide-react";

const FinancialPolicy = () => {
  return (
    <section className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16">
          {/* Content */}
          <article className="flex-1 space-y-6">
            <div>
              <p className="text-sm md:text-base text-[hsl(184_82%_40%)] font-serif tracking-wide uppercase mb-2">
                Financial Policy
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[hsl(0_0%_20%)] leading-tight">
                No Surprises,{" "}
                <span className="block">Just Clear Answers</span>
              </h2>
            </div>
            <p className="text-lg text-[hsl(0_0%_40%)] leading-relaxed">
              At Wiese Dental, we believe every patient deserves to fully
              understand their financial responsibilities before treatment
              begins. We provide clear, straightforward information about
              insurance coverage, payment options, and our financial policies
              so you can make confident decisions about your care.
            </p>
            <p className="text-lg text-[hsl(0_0%_40%)] leading-relaxed">
              Our team is happy to answer questions about your coverage,
              explain your estimated costs, or help you explore payment
              arrangements that work for your situation. We're here to make
              quality dental care as accessible as possible.
            </p>
            <Button
              size="lg"
              className="bg-[hsl(184_82%_40%)] hover:bg-[hsl(184_82%_35%)] text-white px-8 py-6 text-base rounded-md shadow-md"
            >
              <CreditCard className="mr-2 h-5 w-5" />
              View Financial Policy
            </Button>
          </article>

          {/* Decorative Info Cards */}
          <div className="flex-1 w-full space-y-4">
            <div className="bg-background rounded-xl p-6 flex items-start gap-4 shadow-sm border border-border">
              <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-lg bg-[hsl(184_82%_40%)]/10">
                <ShieldCheck className="h-6 w-6 text-[hsl(184_82%_40%)]" />
              </div>
              <div>
                <h3 className="font-semibold text-[hsl(0_0%_20%)] text-lg mb-1">
                  Insurance Information
                </h3>
                <p className="text-sm text-[hsl(0_0%_45%)] leading-relaxed">
                  We'll walk you through your benefits and explain what your
                  plan covers so you know exactly what to expect.
                </p>
              </div>
            </div>

            <div className="bg-background rounded-xl p-6 flex items-start gap-4 shadow-sm border border-border">
              <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-lg bg-[hsl(184_82%_40%)]/10">
                <CreditCard className="h-6 w-6 text-[hsl(184_82%_40%)]" />
              </div>
              <div>
                <h3 className="font-semibold text-[hsl(0_0%_20%)] text-lg mb-1">
                  Flexible Payment Options
                </h3>
                <p className="text-sm text-[hsl(0_0%_45%)] leading-relaxed">
                  We offer financing through CareCredit to help you fit
                  dental care into your budget without delay.
                </p>
              </div>
            </div>

            <div className="bg-background rounded-xl p-6 flex items-start gap-4 shadow-sm border border-border">
              <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-lg bg-[hsl(184_82%_40%)]/10">
                <MessageCircle className="h-6 w-6 text-[hsl(184_82%_40%)]" />
              </div>
              <div>
                <h3 className="font-semibold text-[hsl(0_0%_20%)] text-lg mb-1">
                  Questions? Just Ask
                </h3>
                <p className="text-sm text-[hsl(0_0%_45%)] leading-relaxed">
                  Our team is always available to discuss payment
                  arrangements and answer any financial questions before
                  your visit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialPolicy;
