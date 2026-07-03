import { useEffect } from "react";

const Testimonials = () => {
  useEffect(() => {
    const scriptId = "elfsight-platform-js";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://elfsightcdn.com/platform.js";
      script.async = true;
      document.body.appendChild(script);
      return () => {
        if (document.getElementById(scriptId)) {
          document.body.removeChild(script);
        }
      };
    }
  }, []);

  return (
    <section
      className="py-20 md:py-32"
      style={{ backgroundColor: "hsl(210 30% 98%)" }}
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif"
            style={{ color: "hsl(0 0% 14%)" }}
          >
            What Our Patients Are Saying
          </h2>
        </div>

        {/* Elfsight Google Reviews Widget */}
        <div className="max-w-6xl mx-auto">
          <div
            className="elfsight-app-cb358b62-7b13-4f69-9f57-d1d3858e3d11"
            data-elfsight-app-lazy
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
