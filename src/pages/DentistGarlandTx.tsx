import React from "react";
import Header from "@/components/sections/Header";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import { MapPin, Phone, Clock, CheckCircle, Car, Home, Star, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

// ─── Data ────────────────────────────────────────────────────────────────────

const highlights = [
  "Serving Garland patients from our nearby Sachse office",
  "Comprehensive family & cosmetic dentistry",
  "Accepting new patients & most major insurance plans",
  "Same-day emergency appointments available",
  "State-of-the-art digital X-rays & technology",
];

const neighborhoods = [
  {
    name: "Duck Creek",
    notes:
      "One of Garland's most established neighborhoods, Duck Creek sits along the scenic creek corridor near downtown. Residents here are roughly 15–18 minutes from our Sachse office via Shiloh Rd north to Murphy Rd.",
  },
  {
    name: "Firewheel",
    notes:
      "Anchored by the Firewheel Town Center, this vibrant mixed-use district in northeast Garland is one of the closest Garland areas to our office — typically a 10–12 minute drive up Brand Rd or Castle Dr to Murphy Rd.",
  },
  {
    name: "Lakeview Estates",
    notes:
      "A quiet residential pocket near Lake Ray Hubbard's western shores. Lakeview residents enjoy an easy commute to our Sachse office, usually around 12–15 minutes via Bass Pro Dr or Rowlett Rd.",
  },
  {
    name: "Spring Park",
    notes:
      "A well-established, family-friendly neighborhood in central-east Garland known for its mature trees and community parks. Spring Park patients typically reach us in about 14–16 minutes via Miller Rd and TX-78.",
  },
  {
    name: "Oakridge",
    notes:
      "Located in north Garland near the Sachse border, Oakridge is one of the most convenient Garland neighborhoods for Wiese Dental patients — just 8–10 minutes via Shiloh Rd or Bobtown Rd.",
  },
  {
    name: "Castle Hills",
    notes:
      "A newer master-planned community in northeast Garland with great schools and modern amenities. Castle Hills families are well within reach of our Sachse practice, about 12 minutes via Brand Rd.",
  },
];

const driveTimes = [
  {
    from: "Firewheel Town Center",
    time: "~10 min",
    note: "North on Castle Dr or Brand Rd to Murphy Rd, then right",
  },
  {
    from: "North Garland (near Sachse border)",
    time: "~8 min",
    note: "East on Shiloh Rd or Bobtown Rd directly to our office area",
  },
  {
    from: "Garland City Hall",
    time: "~18 min",
    note: "Head north on Garland Ave or Belt Line Rd, connect to TX-78 east",
  },
  {
    from: "Lake Ray Hubbard (west shore)",
    time: "~14 min",
    note: "North on Bass Pro Dr to TX-66, west to Murphy Rd",
  },
  {
    from: "South Garland / I-30 area",
    time: "~20 min",
    note: "North on Shiloh Rd or I-635 N to TX-78 east",
  },
  {
    from: "President George Bush Turnpike (PGBT)",
    time: "~15 min",
    note: "Exit at Garland Rd / TX-78, head east toward Sachse",
  },
  {
    from: "Rowlett (via TX-66)",
    time: "~14 min",
    note: "West on TX-66 from Rowlett, north on Murphy Rd",
  },
  {
    from: "Downtown Dallas",
    time: "~30 min",
    note: "I-30 east to I-635 north, then TX-78 east toward Sachse",
  },
];

const landmarks = [
  {
    name: "Firewheel Town Center",
    detail:
      "Garland's premier outdoor shopping and dining destination. If you've shopped at Firewheel, you're in northeast Garland — just a short 10-minute drive from our Sachse office via Brand Rd to Murphy Rd.",
  },
  {
    name: "Lake Ray Hubbard",
    detail:
      "One of the largest reservoirs in the Dallas–Fort Worth area, Lake Ray Hubbard borders east Garland and defines the community's character. Our office is just north of the lake — an easy 12–15 minute drive for lakeside residents.",
  },
  {
    name: "Garland's Downtown Historic Square",
    detail:
      "The heart of old Garland, the historic downtown square features classic architecture and local dining. From the square, we're roughly 18 minutes north via TX-78 into Sachse.",
  },
  {
    name: "Spring Creek Nature Area",
    detail:
      "A beloved Garland green space along Spring Creek. The park is near the north Garland neighborhoods that sit closest to our practice — patients from this area are typically 10–12 minutes away.",
  },
  {
    name: "Nicholson Memorial Library",
    detail:
      "Garland's main library and a community anchor near the city's center. A familiar landmark for many long-time Garland families, it's conveniently located when plotting a route toward our Sachse office.",
  },
];

// ─── Component ───────────────────────────────────────────────────────────────

const DentistGarlandTxPage = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="min-h-screen bg-background">
      <Header />
      <main className="pt-40 md:pt-32">

        {/* ── Hero ── */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-[hsl(184_82%_40%)] mb-3">
                  Serving Garland, TX
                </p>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground font-serif">
                  Dentist Serving Garland, TX — Just Minutes Away
                </h1>
                <p className="text-lg text-foreground/80 leading-relaxed mb-8">
                  Residents of Garland, TX have easy access to exceptional dental care at Wiese
                  Dental's conveniently located Sachse office. Dr. Wiese and our friendly team
                  provide comprehensive family and cosmetic dentistry — and we're welcoming new
                  patients from Garland every day.
                </p>
                <ul className="space-y-3 mb-8">
                  {highlights.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-foreground/80">
                      <CheckCircle className="h-5 w-5 text-[hsl(184_82%_40%)] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className="bg-[hsl(184_82%_40%)] hover:bg-[hsl(184_82%_35%)] text-white px-8 py-3"
                >
                  <a href="/request-an-appointment">Request an Appointment</a>
                </Button>
              </div>

              {/* Office Info Card */}
              <div className="bg-[hsl(30_25%_92%)] rounded-2xl p-8 space-y-6">
                <h2 className="text-2xl font-bold text-foreground font-serif">Office Info</h2>
                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-[hsl(184_82%_40%)] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Address</p>
                    <a
                      href="https://goo.gl/maps/LgVp1s89q9FR2bBG7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-[hsl(184_82%_40%)] transition-colors"
                    >
                      6810 Murphy Rd #100<br />Sachse, TX 75048
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-5 w-5 text-[hsl(184_82%_40%)] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Phone</p>
                    <a
                      href="tel:+19723673001"
                      className="text-foreground/80 hover:text-[hsl(184_82%_40%)] transition-colors"
                    >
                      (972) 367-3001
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="h-5 w-5 text-[hsl(184_82%_40%)] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">Office Hours</p>
                    <div className="space-y-1 text-foreground/80 text-sm">
                      <p>Monday–Thursday: 8:30 am – 5:00 pm</p>
                      <p>Friday–Sunday: Closed</p>
                    </div>
                  </div>
                </div>
                <div className="pt-2 border-t border-foreground/10">
                  <p className="text-sm text-foreground/60 italic">
                    Just north of Garland off Murphy Rd — easy parking right at the suite.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── About Garland ── */}
        <section className="py-16 md:py-24 bg-[hsl(30_25%_96%)]">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-[hsl(184_82%_40%)] mb-3">
                Our Community
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground font-serif">
                Proudly Serving Garland, TX
              </h2>
              <div className="space-y-4 text-foreground/80 leading-relaxed text-lg">
                <p>
                  Garland is one of the largest cities in Texas and one of the most diverse
                  communities in the entire Dallas–Fort Worth Metroplex. Bordered by Lake Ray
                  Hubbard to the east and bordered by the PGBT to the north, Garland offers a
                  dynamic mix of established neighborhoods, modern retail corridors like Firewheel
                  Town Center, and a welcoming sense of community that has drawn families here for
                  generations.
                </p>
                <p>
                  At Wiese Dental, we serve many patients who make the short drive up from Garland
                  to our Sachse office on Murphy Rd. We know the roads, the neighborhoods, and the
                  community you're part of — and we're honored to be your dental home. Whether
                  you're coming from the Firewheel area or the south Garland communities near I-30,
                  we make it easy to get quality care without a long commute.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Neighborhoods ── */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="mb-12">
              <p className="text-sm font-semibold uppercase tracking-widest text-[hsl(184_82%_40%)] mb-3">
                Neighborhoods We Serve
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground font-serif">
                Garland Neighborhoods We Know & Serve
              </h2>
              <p className="mt-4 text-foreground/70 text-lg max-w-2xl">
                From north Garland bordering Sachse to the lake communities in the east, our
                Murphy Rd office is within easy reach.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {neighborhoods.map((n) => (
                <div
                  key={n.name}
                  className="flex gap-4 p-6 rounded-xl border border-border bg-[hsl(30_25%_97%)] hover:shadow-md transition-shadow"
                >
                  <Home className="h-6 w-6 text-[hsl(184_82%_40%)] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground text-lg mb-1">{n.name}</h3>
                    <p className="text-foreground/70 text-sm leading-relaxed">{n.notes}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Drive Times ── */}
        <section className="py-16 md:py-24 bg-[hsl(184_82%_40%)]">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="mb-12">
              <p className="text-sm font-semibold uppercase tracking-widest text-white/70 mb-3">
                Getting Here
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white font-serif">
                How Far Is Wiese Dental From Garland?
              </h2>
              <p className="mt-4 text-white/80 text-lg max-w-2xl">
                Approximate drive times from Garland neighborhoods to our office at 6810 Murphy Rd #100, Sachse, TX 75048.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {driveTimes.map((d) => (
                <div
                  key={d.from}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Car className="h-5 w-5 text-white/80 flex-shrink-0" />
                    <span className="text-2xl font-bold text-white">{d.time}</span>
                  </div>
                  <p className="font-semibold text-white text-sm mb-1">{d.from}</p>
                  <p className="text-white/70 text-xs leading-relaxed">{d.note}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-white/60 text-sm">
              * Drive times are approximate and may vary depending on traffic conditions and time of day.
            </p>
          </div>
        </section>

        {/* ── Local Landmarks ── */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="mb-12">
              <p className="text-sm font-semibold uppercase tracking-widest text-[hsl(184_82%_40%)] mb-3">
                Know Your Landmarks
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground font-serif">
                Find Us From Anywhere in Garland
              </h2>
              <p className="mt-4 text-foreground/70 text-lg max-w-2xl">
                Familiar with these Garland landmarks? Then you're already close to knowing how to reach us.
              </p>
            </div>
            <div className="space-y-4">
              {landmarks.map((l) => (
                <div
                  key={l.name}
                  className="flex gap-5 p-6 rounded-xl border border-border hover:border-[hsl(184_82%_40%)] transition-colors group"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[hsl(184_82%_40%)]/10 group-hover:bg-[hsl(184_82%_40%)]/20 transition-colors">
                      <Navigation className="h-5 w-5 text-[hsl(184_82%_40%)]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg mb-1">{l.name}</h3>
                    <p className="text-foreground/70 leading-relaxed">{l.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Community Note ── */}
        <section className="py-16 md:py-20 bg-[hsl(30_25%_92%)]">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <div className="flex justify-center mb-6">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-[hsl(184_82%_40%)] text-[hsl(184_82%_40%)]" />
                ))}
              </div>
            </div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[hsl(184_82%_40%)] mb-4">
              A Note From Our Team
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-serif mb-6">
              Garland Patients Are Always Welcome Here
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed max-w-2xl mx-auto mb-4">
              Garland is a city with real character — diverse, energetic, and proud of its roots.
              Whether you're catching a show near the Granville Arts District, enjoying the view
              from Lake Ray Hubbard, or grabbing dinner at Firewheel, you're living in one of DFW's
              most dynamic communities. We're just a few minutes north, ready to be your dental
              team.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed max-w-2xl mx-auto mb-10">
              Dr. Wiese and our team believe that everyone in the greater Garland area deserves a
              dental practice that feels personal, not like a factory. We take the time to get to
              know you and your family — because great dentistry starts with trust.
            </p>
            <Button
              asChild
              className="bg-[hsl(184_82%_40%)] hover:bg-[hsl(184_82%_35%)] text-white px-10 py-3 text-base"
            >
              <a href="/request-an-appointment">Book Your Visit Today</a>
            </Button>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </div>
  );
});

DentistGarlandTxPage.displayName = "DentistGarlandTxPage";

export default DentistGarlandTxPage;
