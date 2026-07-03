import React from "react";
import Header from "@/components/sections/Header";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import { MapPin, Phone, Clock, CheckCircle, Car, Home, Star, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

// ─── Data ────────────────────────────────────────────────────────────────────

const highlights = [
  "Serving Parker patients from our nearby Sachse office",
  "Comprehensive family & cosmetic dentistry",
  "Accepting new patients & most major insurance plans",
  "Same-day emergency appointments available",
  "Friendly, personalized dental care for every family",
];

const neighborhoods = [
  {
    name: "Parker Estates",
    notes:
      "One of Parker's signature large-lot communities, featuring custom homes on spacious properties. Residents can reach our Sachse office in about 18–22 minutes heading south via FM 2551 or Stacy Rd to Murphy Rd.",
  },
  {
    name: "East Parker (FM 2551 Corridor)",
    notes:
      "The eastern edge of Parker along FM 2551 is among the closest Parker locations to our office — just 15–18 minutes south on FM 2551 to Murphy Rd in Sachse.",
  },
  {
    name: "West Parker (near Allen border)",
    notes:
      "The western portions of Parker near the Allen and Lucas city limits offer easy access south to FM 544 and Murphy Rd. Drive time from west Parker is typically 18–22 minutes.",
  },
  {
    name: "North Parker (near Plano border)",
    notes:
      "Communities in north Parker near Plano's city limits can head south on Coit Rd or Independence Pkwy to connect to Spring Creek Pkwy east, reaching our office in about 22–26 minutes.",
  },
  {
    name: "Parker / Lucas Border Area",
    notes:
      "The neighborhood straddling Parker and Lucas benefits from easy access on Country Club Rd and FM 2551 south — typically 16–20 minutes from our Murphy Rd office.",
  },
  {
    name: "Parker / Plano Border Communities",
    notes:
      "Northern Parker communities adjacent to east Plano can travel south via Coit Rd or Jupiter Rd and connect east on Spring Creek Pkwy to reach our Sachse office in about 22–25 minutes.",
  },
];

const driveTimes = [
  {
    from: "East Parker (FM 2551)",
    time: "~16 min",
    note: "FM 2551 south directly to Murphy Rd — straight shot to our suite",
  },
  {
    from: "Parker / Lucas border",
    time: "~18 min",
    note: "Country Club Rd or FM 2551 south to Murphy Rd in Sachse",
  },
  {
    from: "Parker City Hall area",
    time: "~20 min",
    note: "Head south on FM 2551 or Stacy Rd toward FM 544 and Murphy Rd",
  },
  {
    from: "West Parker (near Allen)",
    time: "~20 min",
    note: "FM 2551 south or Stacy Rd south to Murphy Rd",
  },
  {
    from: "North Parker (near Plano border)",
    time: "~24 min",
    note: "Coit Rd south to Spring Creek Pkwy, then east to Murphy Rd",
  },
  {
    from: "Parker / Allen border (Bethany area)",
    time: "~20 min",
    note: "East on Bethany Dr or FM 544 toward Murphy Rd in Sachse",
  },
  {
    from: "Allen Outlet area (via Parker)",
    time: "~22 min",
    note: "Stacy Rd south from Parker to FM 2551, continue south to Murphy Rd",
  },
  {
    from: "McKinney (US-75 / Parker border)",
    time: "~28 min",
    note: "US-75 south through Allen, then east on Spring Creek Pkwy",
  },
];

const landmarks = [
  {
    name: "Parker Road / FM 2551",
    detail:
      "The main north-south corridor through Parker connecting it directly to Murphy and Sachse. If you know FM 2551, you know how to get to our office — head south and you'll arrive in about 16–18 minutes.",
  },
  {
    name: "Stacy Road",
    detail:
      "A major east-west road connecting Parker to Allen, Lucas, and Murphy. Stacy Rd provides a direct route south toward our Sachse office — typically 18–22 minutes from most Parker addresses.",
  },
  {
    name: "Parker / Allen City Limit",
    detail:
      "The southern Parker neighborhoods adjacent to Allen are right on the doorstep of our service area. From the Parker-Allen border, our Murphy Rd office is just 15–18 minutes south.",
  },
  {
    name: "Country Club Road",
    detail:
      "A scenic corridor running through both Parker and Lucas, connecting these estate communities to the south. Heading south on Country Club Rd toward Murphy Rd takes about 16–20 minutes.",
  },
  {
    name: "Spring Creek (Rowlett Creek Tributaries)",
    detail:
      "Parker is threaded through with peaceful creek corridors and green spaces. This natural beauty is one of the reasons families love living here — and our Sachse office is just one of the many convenient services nearby.",
  },
];

// ─── Component ───────────────────────────────────────────────────────────────

const DentistParkerTxPage = React.forwardRef<HTMLDivElement>((props, ref) => {
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
                  Serving Parker, TX
                </p>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground font-serif">
                  Dentist Serving Parker, TX — Just Minutes Away
                </h1>
                <p className="text-lg text-foreground/80 leading-relaxed mb-8">
                  Parker, TX residents enjoy quick access to exceptional dental care at
                  Wiese Dental's Sachse office. Dr. Wiese and our experienced team provide
                  comprehensive family and cosmetic dentistry for Parker families and
                  everyone in the surrounding communities.
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
                    Just south of Parker on Murphy Rd — easy parking right at the suite.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── About Parker ── */}
        <section className="py-16 md:py-24 bg-[hsl(30_25%_96%)]">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-[hsl(184_82%_40%)] mb-3">
                Our Community
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground font-serif">
                Proudly Serving Parker, TX
              </h2>
              <div className="space-y-4 text-foreground/80 leading-relaxed text-lg">
                <p>
                  Parker is one of Collin County's most sought-after addresses — a small
                  city with big appeal. Known for its large residential lots, custom homes,
                  equestrian properties, and peaceful atmosphere, Parker offers a quality of
                  life that's hard to match. Its location at the crossroads of Allen, Plano,
                  Lucas, and Murphy makes it convenient to everything the Metroplex has to
                  offer while maintaining a quiet, community-first character.
                </p>
                <p>
                  At Wiese Dental, we proudly serve Parker families who appreciate quality
                  and care above all else. Our Sachse office is one of the most convenient
                  dental practices for Parker residents — just a short drive south on FM 2551
                  or Stacy Rd. We're ready to be your family's dental home.
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
                Areas We Serve
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground font-serif">
                Parker Areas We Know & Serve
              </h2>
              <p className="mt-4 text-foreground/70 text-lg max-w-2xl">
                From east Parker along FM 2551 to the border communities near Allen,
                Lucas, and Plano, our Sachse office is within easy reach.
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
                How Far Is Wiese Dental From Parker?
              </h2>
              <p className="mt-4 text-white/80 text-lg max-w-2xl">
                Approximate drive times from Parker areas to our office at 6810 Murphy Rd #100, Sachse, TX 75048.
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
                Know Your Roads
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground font-serif">
                Find Us From Anywhere in Parker
              </h2>
              <p className="mt-4 text-foreground/70 text-lg max-w-2xl">
                Familiar with these Parker roads and landmarks? You're already close to knowing how to reach us.
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
              Parker Patients Are Always Welcome Here
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed max-w-2xl mx-auto mb-4">
              Parker is a city that knows what it values — privacy, quality, and community.
              We feel the same way at Wiese Dental. Families from Parker choose us because
              they want dental care that doesn't feel rushed or impersonal. Dr. Wiese takes
              the time to get to know you, explain your options, and create a plan that works
              for your entire family.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed max-w-2xl mx-auto mb-10">
              We're just a short drive south on FM 2551. We'd be honored to serve your
              family — schedule your first visit today.
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

DentistParkerTxPage.displayName = "DentistParkerTxPage";

export default DentistParkerTxPage;
