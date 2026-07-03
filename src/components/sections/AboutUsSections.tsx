import { ClipboardList, Sparkles, Users, MapPin, Icon } from "lucide-react";

const sections = [
  {
    icon: ClipboardList,
    heading: "Comprehensive Dental Care in One Office",
    paragraphs: [
      "Wiese Dental provides a wide range of services so patients can receive most of their care in one convenient location. From routine preventive visits to restorative and cosmetic treatments, the practice focuses on maintaining healthy smiles while minimizing the need for referrals to outside specialists.",
      "This comprehensive approach allows patients to build long-term relationships with a dental team they trust while receiving consistent, high-quality care.",
    ],
  },
  {
    icon: Sparkles,
    heading: "A Comfortable and Patient-Focused Experience",
    paragraphs: [
      "Many people feel anxious about dental visits. At Wiese Dental, creating a relaxed and welcoming environment is a priority. The office is designed to help patients feel at ease, and the team takes the time to explain procedures and answer questions before treatment begins.",
      "For patients who experience dental anxiety, sedation options such as nitrous oxide and oral conscious sedation are available to help make visits more comfortable.",
    ],
  },
  {
    icon: Users,
    heading: "A Friendly and Supportive Dental Team",
    paragraphs: [
      "The Wiese Dental team believes great dentistry starts with genuine care for patients. Every member of the staff works to ensure that each visit is smooth, welcoming, and informative.",
      "Patients receive guidance through every step of their treatment—from scheduling and insurance questions to understanding recommended procedures—so they can make confident decisions about their oral health.",
    ],
  },
  {
    icon: MapPin,
    heading: "Serving the Community",
    paragraphs: [
      "Wiese Dental is proud to serve the Sachse area and surrounding communities including Murphy, Wylie, Garland, and Rowlett. The practice also supports local and international charitable efforts, including contributions to the 5 Loaves Food Bank in Wylie and involvement with Joshua Nations Ministry.",
      "Giving back is an important part of the practice's philosophy, reflecting a commitment to helping people both inside and outside the dental office.",
    ],
  },
];

const AboutUsSections = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {sections.map(({ icon: Icon, heading, paragraphs }) => (
            <div
              key={heading}
              className="bg-[hsl(30_25%_96%)] rounded-xl p-8 lg:p-10 flex flex-col gap-5"
            >
              {/* Icon badge */}
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 shrink-0">
                <Icon className="h-6 w-6 text-primary" />
              </div>

              {/* Heading */}
              <h2 className="text-xl md:text-2xl font-serif font-semibold text-[hsl(0_0%_20%)] leading-snug">
                {heading}
              </h2>

              {/* Paragraphs */}
              <div className="space-y-4 text-base text-[hsl(0_0%_30%)] leading-relaxed">
                {paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUsSections;
