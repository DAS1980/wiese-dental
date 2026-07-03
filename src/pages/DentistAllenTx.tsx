import React from "react";
import Header from "@/components/sections/Header";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import { MapPin, Phone, Clock, CheckCircle, Car, Home, Star, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

// ─── Data ────────────────────────────────────────────────────────────────────

const highlights = [
  "Serving Allen patients from our convenient Sachse office",
  "Comprehensive family & cosmetic dentistry",
  "Accepting new patients & most major insurance plans",
  "Same-day emergency appointments available",
  "State-of-the-art digital X-rays & technology",
];

const neighborhoods = [
  {
    name: "Twin Creeks",
    notes:
      "A master-planned community in west Allen with beautiful parks, trails along Cottonwood and Rowlett Creeks, and top-rated AISD schools. Residents can reach our Sachse office in about 22–26 minutes via FM 2551 south to Murphy Rd.",
  },
  {
    name: "Watters Crossing",
    notes:
      "An established neighborhood in central Allen near Watters Road, known for its tree-lined streets and easy access to Allen's amenities. Drive south on Watters Rd and east on Spring Creek Pkwy to our office — about 24 minutes.",
  },
  {
    name: "Montgomery Ridge",
    notes:
      "Part of the acclaimed Watters Creek at Montgomery Farm mixed-use community in west Allen. Residents enjoy easy highway access and a 24–28 minute drive south via US-75 then east on Spring Creek Pkwy.",
  },
  {
    name: "Exchange Park",
    notes:
      "A newer community in east Allen along Exchange Pkwy, one of the Allen neighborhoods closest to our Sachse office. Families here typically make the 20–22 minute drive south on FM 2551 to Murphy Rd.",
  },
  {
    name: "Heritage / Bethany",
    notes:
      "Central Allen neighborhoods along Bethany Dr and Heritage Dr, popular with families for their proximity to schools, parks, and shopping. Our office is about a 22–25 minute drive east via Bethany Dr.",
  },
  {
    name: "Celebration",
    notes:
      "A newer development in north Allen known for its community amenities and newer construction. Residents can reach us via FM 2551 south in about 24–28 minutes.",
  },
];

const driveTimes = [
  {
    from: "Exchange Park (East Allen)",
    time: "~20 min",
    note: "FM 2551 south to Murphy Rd, right into our Sachse suite",
  },
  {
    from: "Allen Event Center / US-75",
    time: "~24 min",
    note: "US-75 south to Spring Creek Pkwy, then east to Murphy Rd",
  },
  {
    from: "Watters Creek at Montgomery Farm",
    time: "~26 min",
    note: "US-75 south then east on Spring Creek Pkwy or Bethany Dr",
  },
  {
    from: "Allen Premium Outlets",
    time: "~22 min",
    note: "South on Stacy Rd or FM 2551 toward Murphy Rd in Sachse",
  },
  {
    from: "Twin Creeks",
    time: "~24 min",
    note: "FM 2551 south or Stacy Rd south to Murphy Rd",
  },
  {
    from: "Allen ISD (Lowery Freshman Center area)",
    time: "~22 min",
    note: "Head south on FM 2551 or Greenville Ave toward FM 544",
  },
  {
    from: "Heritage / Bethany area",
    time: "~23 min",
    note: "East on Bethany Dr through Murphy toward Murphy Rd",
  },
  {
    from: "McKinney (US-75 & Eldorado)",
    time: "~32 min",
    note: "US-75 south through Allen, then east on Spring Creek Pkwy",
  },
];

const landmarks = [
  {
    name: "Allen Premium Outlets",
    detail:
      "One of North Texas's most popular outlet shopping destinations on Stacy Rd in Allen. Shoppers at Allen Outlets are about 22 minutes from our Sachse office heading south on Stacy Rd or FM 2551.",
  },
  {
    name: "Watters Creek at Montgomery Farm",
    detail:
      "Allen's vibrant outdoor lifestyle district featuring restaurants, specialty shops, and beautiful outdoor spaces on US-75. Visitors here can reach our Sachse office in about 25 minutes heading south on US-75 and east on Spring Creek Pkwy.",
  },
  {
    name: "Allen Event Center",
    detail:
      "The hub of Allen's entertainment scene, hosting the Allen Americans hockey team and major concerts on US-75. From the Event Center, our Sachse office is about 24 minutes south and east.",
  },
  {
    name: "Connemara Conservancy",
    detail:
      "A unique 72-acre nature preserve in Allen that offers a rare patch of natural Texas prairie. Located in the heart of Allen, families from the conservancy area can reach our office in about 22–24 minutes.",
  },
  {
    name: "Village at Allen (Spring Creek & US-75)",
    detail:
      "A major retail and dining corridor at the heart of Allen near US-75 and Spring Creek Pkwy. This well-known intersection puts you on a direct route east toward our Sachse office — about 22 minutes away.",
  },
];

// ─── Component ───────────────────────────────────────────────────────────────

const DentistAllenTxPage = React.forwardRef<HTMLDivElement>((props, ref) => {
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
                  Serving Allen, TX
                </p>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground font-serif">
                  Dentist Serving Allen, TX — Just Minutes Away
                </h1>
                <p className="text-lg text-foreground/80 leading-relaxed mb-8">
                  Allen, TX residents enjoy easy access to exceptional dental care at Wiese
                  Dental's Sachse office. Dr. Wiese and our experienced team deliver
                  comprehensive family and cosmetic dentistry — and we warmly welcome new
                  patients from Allen and the surrounding communities.
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
                    South of Allen on Murphy Rd — easy parking right at the suite.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── About Allen ── */}
        <section className="py-16 md:py-24 bg-[hsl(30_25%_96%)]">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-[hsl(184_82%_40%)] mb-3">
                Our Community
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground font-serif">
                Proudly Serving Allen, TX
              </h2>
              <div className="space-y-4 text-foreground/80 leading-relaxed text-lg">
                <p>
                  Allen is one of Collin County's fastest-growing cities — a community that
                  perfectly balances suburban family life with upscale amenities. From the
                  Allen Premium Outlets and Watters Creek lifestyle center to nationally
                  recognized schools and vibrant neighborhoods like Twin Creeks and Watters
                  Crossing, Allen consistently ranks among the best places to live in Texas.
                </p>
                <p>
                  At Wiese Dental, we're proud to serve patients who make the short drive
                  south from Allen to our Sachse office on Murphy Rd. Whether you're coming
                  from east Allen near the Sachse border or from a neighborhood near US-75,
                  quality dental care is never far away.
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
                Allen Neighborhoods We Know & Serve
              </h2>
              <p className="mt-4 text-foreground/70 text-lg max-w-2xl">
                From east Allen bordering Murphy and Sachse to the established communities
                near US-75 and the Allen Tollway corridor, our office is within easy reach.
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
                How Far Is Wiese Dental From Allen?
              </h2>
              <p className="mt-4 text-white/80 text-lg max-w-2xl">
                Approximate drive times from Allen neighborhoods to our office at 6810 Murphy Rd #100, Sachse, TX 75048.
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
                Find Us From Anywhere in Allen
              </h2>
              <p className="mt-4 text-foreground/70 text-lg max-w-2xl">
                Familiar with these Allen landmarks? Then you're already close to knowing how to reach us.
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
              Allen Patients Are Always Welcome Here
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed max-w-2xl mx-auto mb-4">
              Allen is a city that invests in its families — great schools, thriving parks,
              and a community that genuinely cares. We feel the same way at Wiese Dental.
              Whether you've lived in Allen for decades or just moved in, you deserve dental
              care that feels personal, thorough, and welcoming.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed max-w-2xl mx-auto mb-10">
              Dr. Wiese and our team are just a short drive south from Allen. We look forward
              to getting to know you and your family — because a great smile starts with a
              great relationship.
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

DentistAllenTxPage.displayName = "DentistAllenTxPage";

export default DentistAllenTxPage;
