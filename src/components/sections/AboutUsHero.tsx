const AboutUsHero = () => {
  return (
    <section
      className="pt-44 pb-20 md:pt-52 md:pb-28 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, hsl(184 82% 40%) 0%, hsl(180 72% 30%) 100%)",
      }}
    >
      {/* Subtle decorative circles */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-10"
        style={{ background: "white" }}
      />
      <div
        className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full opacity-10"
        style={{ background: "white" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <p
            className="text-sm uppercase tracking-widest font-semibold mb-5"
            style={{ color: "rgba(255,255,255,0.75)" }}
          >
            About Wiese Dental
          </p>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight mb-6">
            A Trusted Family Dentist Serving Sachse and Surrounding Communities
          </h1>

          <p className="text-base md:text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.88)" }}>
            At Wiese Dental, our mission is simple: provide honest, comfortable, and high-quality dental care in an environment where patients feel respected and confident in their treatment. For decades, families throughout Sachse, Murphy, Wylie, Garland, and Rowlett have trusted Dr. Robert Wiese for dependable, patient-focused dentistry.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUsHero;
