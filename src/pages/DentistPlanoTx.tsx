import React from "react";
import Header from "@/components/sections/Header";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import { MapPin, Phone, Clock, CheckCircle, Car, Home, Star, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PHONE_DISPLAY, PHONE_TEL } from "@/config/contact";

// ─── Data ────────────────────────────────────────────────────────────────────

const highlights = [
  "Serving Plano patients from our convenient Sachse office",
  "Comprehensive family & cosmetic dentistry",
  "Accepting new patients & most major insurance plans",
  "Same-day emergency appointments available",
  "State-of-the-art digital X-rays & technology",
];

const neighborhoods = [
  {
    name: "Legacy West",
    notes:
      "Plano's newest mixed-use destination along the Dallas Tollway corridor. Legacy West residents can reach our Sachse office in about 25–30 minutes via the PGBT east to Murphy Rd.",
  },
  {
    name: "Chase Oaks",
    notes:
      "A large, well-established community in east Plano near the Collin County border. Chase Oaks is one of the Plano neighborhoods closest to our Sachse office — typically a 20–22 minute drive east on Plano Pkwy or Spring Creek Pkwy to Murphy Rd.",
  },
  {
    name: "Willow Bend",
    notes:
      "An upscale area in west-central Plano near the Shops at Willow Bend. Residents head east on Park Blvd or Spring Creek Pkwy to reach our Sachse office in about 25–30 minutes.",
  },
  {
    name: "Preston Highlands",
    notes:
      "A quiet, tree-lined residential community in northeast Plano near Preston Rd and Hedgcoxe. Families here can reach us in about 18–22 minutes via Hedgcoxe Rd east to FM 544 and Murphy Rd.",
  },
  {
    name: "Old Downtown Plano",
    notes:
      "The historic heart of Plano featuring walkable streets, local shops, and charming brick buildings. Downtown residents typically reach our Sachse office in about 20–25 minutes heading east on 15th St or Park Blvd.",
  },
  {
    name: "Haggard Farm",
    notes:
      "A newer master-planned neighborhood in north-central Plano known for its trail system and community amenities. Residents can reach us via FM 544 east in about 22 minutes.",
  },
];

const driveTimes = [
  {
    from: "Legacy West / Toyota HQ",
    time: "~28 min",
    note: "PGBT east to Murphy Rd, then right toward our Sachse suite",
  },
  {
    from: "East Plano (near Sachse border)",
    time: "~18 min",
    note: "Plano Pkwy or Spring Creek Pkwy east directly to Murphy Rd",
  },
  {
    from: "Old Downtown Plano",
    time: "~22 min",
    note: "Head east on Park Blvd or 15th St, then south on Murphy Rd",
  },
  {
    from: "Shops at Willow Bend",
    time: "~28 min",
    note: "East on Spring Creek Pkwy to Murphy Rd",
  },
  {
    from: "Plano ISD Admin (near US-75)",
    time: "~24 min",
    note: "Head east on Spring Creek Pkwy or Park Blvd to FM 544",
  },
  {
    from: "Preston Highlands area",
    time: "~20 min",
    note: "Hedgcoxe Rd east to FM 544, then south on Murphy Rd",
  },
  {
    from: "Allen / US-75 corridor",
    time: "~22 min",
    note: "South on US-75, then east on Bethany Dr to Murphy Rd via Sachse",
  },
  {
    from: "Dallas (US-75 at I-635)",
    time: "~35 min",
    note: "North on US-75 to Plano, then east on Spring Creek Pkwy",
  },
];

const landmarks = [
  {
    name: "Legacy West",
    detail:
      "Plano's premier urban district anchored by Toyota North America's HQ, luxury shops, and restaurants along the Dallas Tollway. If you work or dine in Legacy West, our Sachse office is about 25–30 minutes east via the PGBT.",
  },
  {
    name: "Shops at Willow Bend",
    detail:
      "Plano's upscale indoor mall on the Dallas Tollway. Familiar to Plano shoppers, it's a convenient waypoint when heading east toward our Murphy Rd office about 25 minutes away.",
  },
  {
    name: "Arbor Hills Nature Preserve",
    detail:
      "A beloved Plano green space with miles of trails through wooded hills. Located in west Plano, hikers and families from this area can reach our Sachse office in about 28–32 minutes heading east.",
  },
  {
    name: "Oak Point Recreation Area",
    detail:
      "One of Plano's largest parks near Lake Lavon. Oak Point families in east Plano are well-positioned for a quick 18–20 minute drive to our office via Spring Creek Pkwy.",
  },
  {
    name: "Collin Creek Area (US-75 & Spring Creek)",
    detail:
      "The central Plano corridor along US-75 near the former Collin Creek Mall. A major landmark for longtime Plano residents, it's a 20–25 minute drive east to our Sachse office.",
  },
];

// ─── Component ───────────────────────────────────────────────────────────────

const DentistPlanoTxPage = React.forwardRef<HTMLDivElement>((props, ref) => {
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
                  Serving Plano, TX
                </p>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground font-serif">
                  Dentist Serving Plano, TX — Just Minutes Away
                </h1>
                <p className="text-lg text-foreground/80 leading-relaxed mb-8">
                  Plano, TX residents have easy access to exceptional dental care at Wiese
                  Dental's conveniently located Sachse office. Dr. Wiese and our friendly team
                  provide comprehensive family and cosmetic dentistry — and we're welcoming new
                  patients from Plano every day.
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
                      href={PHONE_TEL}
                      className="text-foreground/80 hover:text-[hsl(184_82%_40%)] transition-colors"
                    >
                      {PHONE_DISPLAY}
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
                    East of Plano on Murphy Rd — easy parking right at the suite.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── About Plano ── */}
        <section className="py-16 md:py-24 bg-[hsl(30_25%_96%)]">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-[hsl(184_82%_40%)] mb-3">
                Our Community
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground font-serif">
                Proudly Serving Plano, TX
              </h2>
              <div className="space-y-4 text-foreground/80 leading-relaxed text-lg">
                <p>
                  Plano is one of the most dynamic cities in the Dallas–Fort Worth Metroplex —
                  home to Fortune 500 corporate campuses, world-class dining, top-rated schools,
                  and some of the most established neighborhoods in Collin County. From the
                  gleaming towers of Legacy West to the charming streets of Old Downtown Plano,
                  this city consistently ranks among the best places to live in America.
                </p>
                <p>
                  At Wiese Dental, we proudly serve patients who make the drive from Plano to
                  our Sachse office on Murphy Rd. We know the neighborhoods, the commutes, and
                  the community you call home. Whether you're coming from east Plano near the
                  Sachse border or from the west side near the Tollway, we make it easy to get
                  high-quality dental care without a long trip.
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
                Plano Neighborhoods We Know & Serve
              </h2>
              <p className="mt-4 text-foreground/70 text-lg max-w-2xl">
                From east Plano bordering Sachse to the established communities near the
                Dallas Tollway, our Murphy Rd office is within easy reach.
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
                How Far Is Wiese Dental From Plano?
              </h2>
              <p className="mt-4 text-white/80 text-lg max-w-2xl">
                Approximate drive times from Plano neighborhoods to our office at 6810 Murphy Rd #100, Sachse, TX 75048.
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
                Find Us From Anywhere in Plano
              </h2>
              <p className="mt-4 text-foreground/70 text-lg max-w-2xl">
                Familiar with these Plano landmarks? Then you're already close to knowing how to reach us.
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
              Plano Patients Are Always Welcome Here
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed max-w-2xl mx-auto mb-4">
              Plano is a city that values quality — in its schools, its neighborhoods, and its
              businesses. We hold Wiese Dental to that same standard. Whether you're a longtime
              Plano resident or newly arrived at one of the corporate campuses, you deserve a
              dental practice that treats you like a person, not a patient number.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed max-w-2xl mx-auto mb-10">
              Dr. Wiese and our team are just a short drive east. We take the time to get to
              know you and your family — because great dentistry starts with a relationship built
              on trust.
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

DentistPlanoTxPage.displayName = "DentistPlanoTxPage";

export default DentistPlanoTxPage;
