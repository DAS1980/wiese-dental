import React from "react";
import Header from "@/components/sections/Header";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import { MapPin, Phone, Clock, CheckCircle, Car, Home, Star, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PHONE_DISPLAY, PHONE_TEL } from "@/config/contact";

// ─── Data ────────────────────────────────────────────────────────────────────

const highlights = [
  "Serving Lucas patients from our nearby Sachse office",
  "Comprehensive family & cosmetic dentistry",
  "Accepting new patients & most major insurance plans",
  "Same-day emergency appointments available",
  "Friendly, experienced dental team",
];

const neighborhoods = [
  {
    name: "Stinson Farms",
    notes:
      "An upscale Lucas community featuring large estate-style lots, equestrian properties, and a peaceful rural feel just minutes from city conveniences. Stinson Farms residents can reach our Sachse office in about 12–15 minutes heading south on Country Club Rd or FM 2551.",
  },
  {
    name: "Bennett Estates",
    notes:
      "A quiet neighborhood in north Lucas known for its spacious lots and established homes. The drive south on FM 2551 to Murphy Rd takes about 12–14 minutes — one of the shortest commutes to our office.",
  },
  {
    name: "Lucas Heights",
    notes:
      "Elevated, wooded properties in Lucas offering privacy and stunning views. Residents here enjoy a short 13–16 minute drive south on Country Club Rd or Stacy Rd toward Sachse.",
  },
  {
    name: "Country Club Road Corridor",
    notes:
      "Lucas's main corridor connecting its neighborhoods along Country Club Rd. Residents along this stretch are typically 10–14 minutes from our Murphy Rd office — making us one of the closest dental practices available.",
  },
  {
    name: "Spring Creek Area",
    notes:
      "A serene section of Lucas near the Spring Creek greenbelt, offering a blend of natural beauty and large residential lots. The easy drive south on FM 2551 takes about 14–16 minutes.",
  },
  {
    name: "FM 2551 / Allen Border Area",
    notes:
      "The southern portion of Lucas near the Allen city limits. Residents here are very close to our Sachse office — often just 10–12 minutes south on FM 2551 to Murphy Rd.",
  },
];

const driveTimes = [
  {
    from: "South Lucas (Allen border)",
    time: "~10 min",
    note: "FM 2551 south to Murphy Rd — one of the quickest routes to our office",
  },
  {
    from: "Stinson Farms",
    time: "~13 min",
    note: "Country Club Rd or FM 2551 south to Murphy Rd",
  },
  {
    from: "Bennett Estates",
    time: "~12 min",
    note: "FM 2551 south directly to Murphy Rd in Sachse",
  },
  {
    from: "Lucas City Hall area",
    time: "~14 min",
    note: "Country Club Rd south to FM 544 or Murphy Rd",
  },
  {
    from: "North Lucas (Parker border)",
    time: "~18 min",
    note: "Head south on Country Club Rd or Stacy Rd to FM 2551, then south",
  },
  {
    from: "Spring Creek greenbelt",
    time: "~15 min",
    note: "FM 2551 south to Murphy Rd, right into our Sachse suite",
  },
  {
    from: "Allen Event Center area",
    time: "~20 min",
    note: "From the Allen/Lucas border, south on US-75 then east on Spring Creek Pkwy",
  },
  {
    from: "McKinney border",
    time: "~22 min",
    note: "South on Stacy Rd or Country Club Rd through Lucas to Murphy Rd",
  },
];

const landmarks = [
  {
    name: "Brockdale Park",
    detail:
      "One of Lucas's most beloved community gathering spots, Brockdale Park sits along Rowlett Creek and offers trails, sports fields, and natural areas. Families from the park area can reach our Sachse office in about 14–16 minutes heading south.",
  },
  {
    name: "Spring Creek Greenbelt",
    detail:
      "A scenic natural corridor running through Lucas and into neighboring cities. Trail users and residents near the greenbelt enjoy a quick 14–15 minute drive south on FM 2551 to our Murphy Rd office.",
  },
  {
    name: "Country Club Road",
    detail:
      "Lucas's main north-south artery connecting its neighborhoods. If you know Country Club Rd, you know how to get to us — head south and connect to Murphy Rd or FM 544 in just about 12–15 minutes.",
  },
  {
    name: "Lucas City Boundary (FM 2551 / Stacy Rd)",
    detail:
      "The southern edge of Lucas sits directly adjacent to Allen and Murphy — practically neighbors with our Sachse office. From the city limits, we're just 10–12 minutes south on FM 2551.",
  },
  {
    name: "Allen / Lucas Border Communities",
    detail:
      "The neighborhoods straddling the Allen-Lucas border enjoy the best of both cities. For dental care, our Sachse office is among the closest options — a quick 10–14 minute drive from the border along FM 2551.",
  },
];

// ─── Component ───────────────────────────────────────────────────────────────

const DentistLucasTxPage = React.forwardRef<HTMLDivElement>((props, ref) => {
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
                  Serving Lucas, TX
                </p>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground font-serif">
                  Dentist Serving Lucas, TX — Right Next Door
                </h1>
                <p className="text-lg text-foreground/80 leading-relaxed mb-8">
                  Lucas, TX residents have one of the shortest commutes to exceptional
                  dental care in the area. Wiese Dental's Sachse office is just minutes
                  from Lucas via FM 2551 and Murphy Rd — Dr. Wiese and our team are
                  ready to welcome your entire family.
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
                    Just south of Lucas on Murphy Rd — easy parking right at the suite.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── About Lucas ── */}
        <section className="py-16 md:py-24 bg-[hsl(30_25%_96%)]">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-[hsl(184_82%_40%)] mb-3">
                Our Community
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground font-serif">
                Proudly Serving Lucas, TX
              </h2>
              <div className="space-y-4 text-foreground/80 leading-relaxed text-lg">
                <p>
                  Lucas is one of Collin County's most charming and distinctive communities —
                  a city that has maintained a semi-rural, estate-feel atmosphere even as
                  the surrounding Metroplex has grown. With sprawling properties, scenic
                  creeks, and a tight-knit community spirit, Lucas offers a lifestyle that's
                  hard to find anywhere else in North Texas.
                </p>
                <p>
                  At Wiese Dental, Lucas patients are among our closest neighbors. Our
                  Sachse office on Murphy Rd is just a short drive south from most Lucas
                  addresses. We know the community well, and we're proud to serve families
                  who value quality dental care delivered with a personal touch.
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
                Lucas Neighborhoods We Know & Serve
              </h2>
              <p className="mt-4 text-foreground/70 text-lg max-w-2xl">
                From the southern Lucas neighborhoods bordering Allen and Murphy to the
                estate communities in north Lucas, our office is one of the closest dental
                practices for most Lucas residents.
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
                How Far Is Wiese Dental From Lucas?
              </h2>
              <p className="mt-4 text-white/80 text-lg max-w-2xl">
                Approximate drive times from Lucas neighborhoods to our office at 6810 Murphy Rd #100, Sachse, TX 75048.
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
                Find Us From Anywhere in Lucas
              </h2>
              <p className="mt-4 text-foreground/70 text-lg max-w-2xl">
                Familiar with these Lucas landmarks and roads? You're already close to knowing how to reach us.
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
              Lucas Patients Are Right at Home Here
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed max-w-2xl mx-auto mb-4">
              Lucas is a special place — spacious, serene, and full of families who value
              the finer things in life without sacrificing community. We share those values
              at Wiese Dental. We take our time with every patient and every family because
              we know you could choose any dental office in the Metroplex.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed max-w-2xl mx-auto mb-10">
              The fact that our Sachse office is practically your next-door neighbor makes
              it even easier. Dr. Wiese and our team look forward to meeting you — just a
              quick drive south on FM 2551.
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

DentistLucasTxPage.displayName = "DentistLucasTxPage";

export default DentistLucasTxPage;
