const Location = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 max-w-4xl text-center mb-12">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-foreground font-serif">
          Finding Our Dental Office in Your Area
        </h2>
        <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
          Whether you're ready to face tooth loss with modern{" "}
          <a
            href="#dentures"
            className="text-[hsl(184_82%_40%)] hover:text-[hsl(184_82%_35%)] transition-colors underline decoration-[hsl(184_82%_40%)]/30 hover:decoration-[hsl(184_82%_35%)]"
          >
            dentures
          </a>
          , you're overdue for your six-month checkup, or you're interested in learning more about one of the smile-enhancing services we offer, like{" "}
          <a
            href="#veneers"
            className="text-[hsl(184_82%_40%)] hover:text-[hsl(184_82%_35%)] transition-colors underline decoration-[hsl(184_82%_40%)]/30 hover:decoration-[hsl(184_82%_35%)]"
          >
            veneers
          </a>
          {" "}or{" "}
          <a
            href="#invisalign"
            className="text-[hsl(184_82%_40%)] hover:text-[hsl(184_82%_35%)] transition-colors underline decoration-[hsl(184_82%_40%)]/30 hover:decoration-[hsl(184_82%_35%)]"
          >
            Invisalign
          </a>
          , we're here to help you at our Sachse dental office. We're conveniently located at{" "}
          <span className="font-semibold text-foreground">6810 Murphy Road #100</span>{" "}
          (near the Walmart and Kwik Kar Oil Change & Auto Care). If you need any assistance getting to our office, don't hesitate to let us know so we can provide you with helpful directions!
        </p>
      </div>

      {/* Full-width map embed — bleeds to viewport edges */}
      <div className="w-screen relative left-1/2 -translate-x-1/2">
        <iframe
          title="Wiese Dental Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.6!2d-96.5696!3d32.9607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c1b6b6b6b6b6b%3A0x0!2s6810+Murphy+Rd+%23100%2C+Sachse%2C+TX+75048!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus&q=6810+Murphy+Rd+%23100,+Sachse,+TX+75048"
          width="100%"
          height="550"
          style={{ border: 0, display: "block" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
};

export default Location;
