import type { LucideIcon } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Stethoscope, Droplets, Wrench, Crown, Scissors, Smile, Shield, Layers, Sparkles, Star, AlignCenter, Heart, Zap, Activity } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL } from "@/config/contact";

// ─────────────────────────────────────────────
// Data types
// ─────────────────────────────────────────────

type SubService = {
  id: string;
  title: string;
  icon: LucideIcon;
  answer: string[];
};

type ServiceGroup = {
  id: string;
  title: string;
  icon: LucideIcon;
  category: string;
  answer: string[];
  subServices?: SubService[];
};

// ─────────────────────────────────────────────
// Service data
// ─────────────────────────────────────────────

const serviceGroups: ServiceGroup[] = [
  {
    id: "checkup-cleaning",
    title: "I Need a Checkup & Cleaning",
    icon: Stethoscope,
    category: "Preventive Care",
    answer: [
      "Regular dental checkups and professional cleanings are the foundation of a healthy smile — and the best way to prevent costly dental problems down the road. During your visit, Dr. Wiese will carefully examine your teeth, gums, and oral tissues for signs of cavities, gum disease, oral cancer, and other concerns.",
      "A professional cleaning removes hardened plaque (tartar) and surface stains that your toothbrush simply can't reach. We recommend visiting every six months so we can catch any issues early — when they're easiest and least expensive to treat. If it's been a while since your last visit, don't worry — we'll get you back on track with no judgment.",
    ],
  },
  {
    id: "bleeding-gums",
    title: "I Am Concerned About Bleeding Gums",
    icon: Droplets,
    category: "Gum Health & Periodontal Care",
    answer: [
      "Bleeding, swollen, or tender gums are the most common warning signs of gum disease. What begins as mild gingivitis can advance to periodontitis — a serious infection that destroys the bone and tissue supporting your teeth, ultimately leading to tooth loss.",
      "The good news: gum disease is treatable, especially when caught early. At Wiese Dental, we perform thorough periodontal evaluations and offer targeted treatments including professional deep cleanings (scaling and root planing), antibiotic therapy, and ongoing maintenance care. Our goal is to stop disease progression and restore your gums to a healthy state.",
    ],
  },
  {
    id: "cavity-broken-tooth",
    title: "I Have a Cavity or Broken Tooth",
    icon: Wrench,
    category: "Restorative Dentistry",
    answer: [
      "Tooth decay and dental injuries are among the most common problems we treat — and modern dentistry offers highly effective solutions. Whether you have a small cavity or a severely broken tooth, Dr. Wiese recommends the most conservative treatment that fully restores your tooth's health and appearance.",
      "For small to medium cavities, a tooth-colored composite filling blends naturally with your smile. For more extensive damage, a dental crown may be needed to protect and rebuild the tooth. We also offer same-day urgent care for broken or painful teeth.",
    ],
    subServices: [
      {
        id: "dental-crowns",
        title: "Dental Crowns",
        icon: Crown,
        answer: [
          "A dental crown is a custom-made cap that fits completely over a damaged or weakened tooth, restoring it to its natural shape, strength, and appearance. Crowns are used to protect cracked teeth, restore teeth after root canal treatment, rebuild severely decayed teeth, and serve as the final restoration for dental implants.",
          "At Wiese Dental, we use high-quality porcelain crowns carefully color-matched to blend with your surrounding teeth. The result looks and feels completely natural — and with proper care, a crown can last 15 years or more.",
        ],
      },
      {
        id: "tooth-extractions",
        title: "Tooth Extractions",
        icon: Scissors,
        answer: [
          "We always try to save your natural tooth whenever possible. However, when a tooth is too severely damaged, infected, or impacted to be restored, a gentle extraction is the safest option. Dr. Wiese performs precise extractions with a focus on keeping you comfortable throughout the procedure.",
          "After your extraction, we'll discuss tooth replacement options — such as a dental implant, bridge, or denture — so you leave with a clear plan for restoring your smile. Leaving a gap untreated can lead to bone loss and shifting of neighboring teeth, so we encourage prompt replacement.",
        ],
      },
    ],
  },
  {
    id: "missing-teeth",
    title: "I Am Missing One or More Teeth",
    icon: Smile,
    category: "Tooth Replacement",
    answer: [
      "Missing teeth affect far more than just your appearance. They can make it harder to chew and speak clearly, cause neighboring teeth to shift out of position, and lead to jawbone loss over time. The sooner you address missing teeth, the more options you'll have — and the better your long-term oral health.",
      "At Wiese Dental, we offer several tooth replacement solutions to suit your needs, timeline, and budget. Dr. Wiese will walk you through every option and help you choose the path that's right for you.",
    ],
    subServices: [
      {
        id: "dental-implants",
        title: "Dental Implants",
        icon: Shield,
        answer: [
          "Dental implants are the most advanced and long-lasting solution for missing teeth. A small titanium post is placed in the jawbone where it fuses over time to create a stable, permanent foundation — just like a natural tooth root. A custom crown is then attached, giving you a replacement that looks, feels, and functions exactly like your own tooth.",
          "Unlike dentures or bridges, implants prevent jawbone loss and don't require altering neighboring teeth. Dr. Wiese performs implant placement in-house, so you won't need to visit multiple offices. With proper care, dental implants can last a lifetime.",
        ],
      },
      {
        id: "dentures",
        title: "Dentures",
        icon: Layers,
        answer: [
          "Dentures remain a reliable and affordable option for replacing multiple missing teeth or an entire arch. We offer both full dentures (for patients missing all teeth in an arch) and partial dentures (for patients with some remaining natural teeth). Each set is custom-crafted to fit your mouth comfortably and look completely natural.",
          "For patients who want a more secure, stable solution, implant-supported dentures anchor directly to dental implants — eliminating the worry of slipping or shifting. Dr. Wiese will help you find the denture option that best fits your lifestyle and comfort goals.",
        ],
      },
    ],
  },
  {
    id: "enhance-smile",
    title: "I Want to Enhance My Smile",
    icon: Sparkles,
    category: "Cosmetic Dentistry",
    answer: [
      "Your smile is one of the first things people notice — and it deserves to look its very best. Whether you're bothered by staining, chips, gaps, worn edges, or uneven teeth, cosmetic dentistry can transform your smile in ways that feel truly life-changing.",
      "Dr. Wiese has advanced training from the Center for Aesthetic Restorative Dentistry (CARD) and decades of experience crafting beautiful, natural-looking results. He offers teeth whitening, composite bonding, porcelain veneers, and full smile makeovers — all tailored to your unique facial features and aesthetic goals.",
    ],
    subServices: [
      {
        id: "veneers",
        title: "Veneers",
        icon: Star,
        answer: [
          "Porcelain veneers are ultra-thin, custom-made shells that bond to the front surface of your teeth. They can instantly and dramatically improve the appearance of teeth that are discolored, chipped, cracked, slightly misaligned, or have unwanted gaps — most often in just two comfortable visits.",
          "Unlike crowns, veneers require only minimal removal of natural tooth structure. The result is a strikingly beautiful, stain-resistant smile that can last 10–20 years with proper care. Dr. Wiese carefully designs each veneer to complement your facial features for results that look completely natural.",
        ],
      },
    ],
  },
  {
    id: "straighter-smile",
    title: "I Want a Straighter Smile",
    icon: AlignCenter,
    category: "Orthodontics",
    answer: [
      "Straight teeth aren't just about aesthetics — they're healthier teeth. Properly aligned teeth are easier to clean, less prone to uneven wear, and reduce your risk of cavities and gum disease. And of course, a straighter smile boosts your confidence every day.",
      "At Wiese Dental, we offer Invisalign® clear aligner therapy — a discreet, comfortable alternative to traditional metal braces. Custom-made clear aligners gently guide your teeth into their ideal positions. Most adults complete treatment in 12–18 months, and because the aligners are removable, you can eat, drink, and brush normally throughout. Best of all, they're virtually invisible.",
    ],
  },
  {
    id: "scared-of-dentist",
    title: "I Am Scared of the Dentist",
    icon: Heart,
    category: "Patient Comfort & Sedation",
    answer: [
      "Dental anxiety is incredibly common, and we want you to know: you've come to the right place. At Wiese Dental, patient comfort and trust are at the center of everything we do. We take the time to truly listen, explain each step of your treatment, and let you set the pace of your visit.",
      "Our calm, welcoming office environment and gentle approach are specifically designed to put even the most anxious patients at ease. For patients with more significant anxiety, we offer sedation dentistry options so you can relax through your treatment. Many of our most apprehensive patients tell us they can't believe how comfortable their visits have become — we'd love to show you the same.",
    ],
  },
  {
    id: "in-pain",
    title: "I Am In Pain & Need Help",
    icon: Zap,
    category: "Emergency Dentistry",
    answer: [
      "A dental emergency is stressful — but you don't have to face it alone. If you're experiencing severe tooth pain, a knocked-out tooth, a broken or cracked tooth, a lost filling or crown, or significant swelling, call Wiese Dental right away. We prioritize urgent cases and will do everything we can to see you the same day.",
      "While you're on your way, we'll give you first-aid guidance over the phone to help manage pain and protect your tooth. Acting quickly can make all the difference — and in many cases, prompt care can save a tooth that might otherwise be lost. For life-threatening emergencies involving severe trauma or uncontrolled bleeding, please go to your nearest emergency room immediately.",
    ],
  },
  {
    id: "jaw-pain",
    title: "I Have Pain in My Jaw",
    icon: Activity,
    category: "TMJ / TMD Treatment",
    answer: [
      "Jaw pain, clicking or popping sounds, difficulty opening your mouth, chronic headaches, and facial tension are classic signs of temporomandibular joint (TMJ) disorder — also called TMD. The TMJ is the hinge connecting your jaw to your skull, and when it's not functioning properly, the discomfort can radiate throughout your face, head, and neck.",
      "Dr. Wiese takes a thorough, conservative approach to evaluating and treating TMJ disorder. Treatment options may include a custom-fitted night guard (to protect against grinding and clenching), bite adjustment therapy, or other targeted solutions. Our goal is to identify the root cause of your jaw pain and help you achieve lasting relief.",
    ],
  },
];

// ─────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────

const OurServicesContent = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">

        {/* Section intro */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2
            className="text-sm uppercase tracking-widest font-bold mb-4"
            style={{ color: "hsl(184 82% 40%)" }}
          >
            Comprehensive Dental Care
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Find the Right Solution for You
          </h3>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Select a concern below to learn about our approach and available treatments.
            Every answer you need is just one click away — and our team is always
            happy to help you choose.
          </p>
        </div>

        {/* Main accordion list */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {serviceGroups.map((service) => {
              const Icon = service.icon;
              return (
                <AccordionItem
                  key={service.id}
                  value={service.id}
                  id={service.id}
                  className="rounded-xl border border-border bg-card shadow-sm overflow-hidden"
                >
                  {/* ── Trigger ── */}
                  <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-muted/30 transition-colors [&[data-state=open]]:bg-muted/20">
                    <div className="flex items-center gap-4 flex-1 mr-4 text-left">
                      {/* Icon badge */}
                      <div
                        className="flex h-12 w-12 items-center justify-center rounded-xl flex-shrink-0"
                        style={{ background: "hsl(184 82% 40% / 0.12)" }}
                      >
                        <Icon
                          className="h-6 w-6"
                          style={{ color: "hsl(184 82% 40%)" }}
                        />
                      </div>
                      {/* Labels */}
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-0.5">
                          {service.category}
                        </p>
                        <p className="text-lg md:text-xl font-semibold text-foreground leading-snug">
                          {service.title}
                        </p>
                      </div>
                    </div>
                  </AccordionTrigger>

                  {/* ── Content ── */}
                  <AccordionContent className="px-6 pb-8">
                    {/* Answer paragraphs */}
                    <div className="space-y-4 text-muted-foreground leading-relaxed pt-4 mb-6">
                      {service.answer.map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                      ))}
                    </div>

                    {/* Sub-services (nested accordion) */}
                    {service.subServices && service.subServices.length > 0 && (
                      <div className="mb-8">
                        <p
                          className="text-xs font-bold uppercase tracking-widest mb-3"
                          style={{ color: "hsl(184 82% 40%)" }}
                        >
                          Specific Treatments
                        </p>
                        <Accordion type="single" collapsible className="space-y-2">
                          {service.subServices.map((sub) => {
                            const SubIcon = sub.icon;
                            return (
                              <AccordionItem
                                key={sub.id}
                                value={sub.id}
                                id={sub.id}
                                className="rounded-lg border border-border bg-muted/30 overflow-hidden"
                              >
                                <AccordionTrigger className="px-4 py-4 hover:no-underline hover:bg-muted/50 transition-colors [&[data-state=open]]:bg-muted/40">
                                  <div className="flex items-center gap-3 mr-4 text-left">
                                    <div
                                      className="flex h-8 w-8 items-center justify-center rounded-lg flex-shrink-0"
                                      style={{ background: "hsl(184 82% 40% / 0.15)" }}
                                    >
                                      <SubIcon
                                        className="h-4 w-4"
                                        style={{ color: "hsl(184 82% 40%)" }}
                                      />
                                    </div>
                                    <span className="font-semibold text-base text-foreground">
                                      {sub.title}
                                    </span>
                                  </div>
                                </AccordionTrigger>
                                <AccordionContent className="px-4 pb-5 pt-0">
                                  <div className="space-y-3 text-muted-foreground text-sm leading-relaxed pl-11">
                                    {sub.answer.map((p, i) => (
                                      <p key={i}>{p}</p>
                                    ))}
                                  </div>
                                </AccordionContent>
                              </AccordionItem>
                            );
                          })}
                        </Accordion>
                      </div>
                    )}

                    {/* CTA */}
                    <Button
                      asChild
                      className="font-semibold"
                      style={{
                        background: "hsl(184 82% 40%)",
                        color: "white",
                      }}
                    >
                      <a href="/request-an-appointment">Schedule a Visit</a>
                    </Button>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>

        {/* Bottom CTA banner */}
        <div
          className="mt-20 rounded-2xl p-10 md:p-14 text-center max-w-4xl mx-auto"
          style={{
            background: "linear-gradient(135deg, hsl(184 82% 40%) 0%, hsl(180 72% 30%) 100%)",
          }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Not Sure Where to Start?
          </h3>
          <p className="text-white/85 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            Give us a call or book a consultation. Dr. Wiese and our team will listen
            to your concerns and guide you to the right treatment — with no pressure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white hover:bg-white/90 px-8 font-semibold shadow-md"
              style={{ color: "hsl(184 82% 40%)" }}
            >
              <a href="/request-an-appointment">Request an Appointment</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white bg-transparent hover:bg-white/10 px-8 font-semibold"
            >
              <a href={PHONE_TEL}>{PHONE_DISPLAY}</a>
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default OurServicesContent;
