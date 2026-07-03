import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What is the best way to find a dentist who does dental implants?",
      answer: [
        "The best way to find a cosmetic dentist in Sachse is to look for someone with advanced training, years of hands-on experience, and a portfolio of natural-looking results. Reading patient reviews and scheduling a consultation can also help you feel confident in your choice.",
        "At Wiese Dental, Dr. Wiese has been delivering cosmetic care since opening his practice in 1983. He's completed postgraduate training at the prestigious Center for Aesthetic Restorative Dentistry (CARD) and uses high-quality materials and modern techniques to craft beautiful, lasting smiles. Whether you're interested in veneers, bonding, or whitening, you're in expert hands."
      ]
    },
    {
      question: "What do you do if you can't afford a dentist?",
      answer: [
        "Prevention is the most cost-effective approach to oral health—stopping issues before they start. Routine checkups and cleanings can help you avoid expensive treatments down the line.",
        "However, we understand that affordability matters. While we're out-of-network with most insurance plans, Dr. Wiese uses a conservative approach to dentistry. This means avoiding unnecessary treatments and helping you save money in the long run. We also offer financing through CareCredit, making it easier to fit dental care into your budget. Let us help you find a plan that works for you and your smile."
      ]
    },
    {
      question: "What level of education is required to be a dentist?",
      answer: [
        "Dentists must complete a bachelor's degree, followed by a Doctor of Dental Surgery (DDS) or Doctor of Dental Medicine (DMD) from an accredited dental school—a process that typically takes around eight years. Additional training is needed for advanced or specialized procedures.",
        "Dr. Wiese graduated from Baylor College of Dentistry in 1983 and has been practicing ever since. He continues to enhance his skills through postgraduate courses at the Center for Aesthetic Restorative Dentistry (CARD), ensuring patients benefit from the latest advancements in dentistry."
      ]
    },
    {
      question: "How do I get emergency dental care?",
      answer: [
        "If you're experiencing a dental emergency, call Wiese Dental immediately. We do our best to accommodate urgent cases quickly, especially for patients dealing with pain, swelling, or injury. In the meantime, we'll give you first-aid advice over the phone to help you cope as you make your way to our Sachse office.",
        "For life-threatening emergencies such as severe trauma or uncontrolled bleeding, please go to the nearest emergency room right away. For all other dental-related emergencies, our experienced team is here to help stabilize your condition and get you smiling again as soon as possible."
      ]
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-[hsl(30_25%_92%)]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6">
          We Gladly Answer Your Questions
        </h2>

        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-lg text-foreground">
            At Wiese Dental, we value education and love helping our patients find solutions. If you ever have concerns about your treatment, don't hesitate to give us a call.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background rounded-lg shadow-md border-none"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-lg md:text-xl font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <div className="space-y-4 text-muted-foreground">
                    {faq.answer.map((paragraph, pIndex) => (
                      <p key={pIndex}>{paragraph}</p>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
