import React from "react";
import Header from "@/components/sections/Header";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import { MapPin, Phone, Clock, CheckCircle, Car, Home, Star, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

// ─── Data ────────────────────────────────────────────────────────────────────

const highlights = [
  "Serving Richardson patients from our convenient Sachse office",
  "Comprehensive family & cosmetic dentistry",
  "Accepting new patients & most major insurance plans",
  "Same-day emergency appointments available",
  "State-of-the-art digital X-rays & technology",
];

const neighborhoods = [
  {
    name: "Canyon Creek",
    notes:
      "One of Richardson's most prestigious neighborhoods, known for its mature trees, creek-side trails, and top-rated schools. Canyon Creek residents can reach our Sachse office in about 22–26 minutes heading east via Campbell Rd or Arapaho Rd.",
  },
  {
    name: "Breckinridge Park Area",
    notes:
      "A family-friendly corridor in northeast Richardson near one of the city's largest parks. Residents are well-placed for a 20–24 minute drive east on Arapaho Rd or Campbell Rd to Murphy Rd.",
  },
  {
    name: "The Heights / Richland",
    notes:
      "Established neighborhoods in central Richardson with a mix of mid-century and updated homes. Families here typically make the 22–26 minute drive north and east on US-75 and then east on Spring Creek Pkwy.",
  },
  {
    name: "Huffhines Park Area",
    notes:
      "Nestled along Huffhines Park in northwest Richardson, this quiet neighborhood is popular with young families. The drive east on Belt Line Rd to Murphy Rd takes about 25–28 minutes.",
  },
  {
    name: "Arapaho Village",
    notes:
      "A well-connected community along the Arapaho Rd corridor in north Richardson. Quick access to US-75 makes the drive to our Sachse office about 22–25 minutes.",
  },
  {
    name: "Sherrill Park",
    notes:
      "A scenic area near the Sherrill Park Golf Course in east Richardson, one of the closest Richardson neighborhoods to our office — around 18–22 minutes via Campbell Rd east to Murphy Rd.",
  },
];

const driveTimes = [
  {
    from: "Sherrill Park / East Richardson",
    time: "~20 min",
    note: "Campbell Rd east to Murphy Rd, then right into our Sachse suite",
  },
  {
    from: "UT Dallas Campus",
    time: "~25 min",
    note: "East on Campbell Rd or Arapaho Rd past US-75 to Murphy Rd",
  },
  {
    from: "Canyon Creek area",
    time: "~24 min",
    note: "East on Campbell Rd or Belt Line Rd toward Murphy Rd",
  },
  {
    from: "Telecom Corridor (US-75 & Arapaho)",
    time: "~22 min",
    note: "Head north on US-75 to Spring Creek Pkwy, then east to Murphy Rd",
  },
  {
    from: "Downtown Richardson",
    time: "~24 min",
    note: "North on US-75, east on Plano Pkwy or Spring Creek Pkwy to Murphy Rd",
  },
  {
    from: "Breckinridge Park",
    time: "~22 min",
    note: "East on Arapaho Rd to Murphy Rd",
  },
  {
    from: "Plano border (near Campbell/Coit)",
    time: "~20 min",
    note: "East on Campbell Rd to Murphy Rd",
  },
  {
    from: "Dallas (LBJ / US-75)",
    time: "~32 min",
    note: "North on US-75 through Richardson, then east on Spring Creek Pkwy",
  },
];

const landmarks = [
  {
    name: "University of Texas at Dallas (UTD)",
    detail:
      "A growing research university in the heart of Richardson. Students, faculty, and families near UTD can reach our Sachse office in about 25 minutes heading east on Campbell Rd or Arapaho Rd to Murphy Rd.",
  },
  {
    name: "Telecom Corridor",
    detail:
      "Richardson's famous high-tech business district along US-75 is home to dozens of global tech companies. Professionals working in the Telecom Corridor can reach our Sachse office in about 22 minutes heading north and east.",
  },
  {
    name: "Breckinridge Park",
    detail:
      "One of Richardson's crown jewels — a massive park with sports fields, trails, and nature areas in northeast Richardson. Families who enjoy Breckinridge are a short 20–22 minute drive from our Murphy Rd office.",
  },
  {
    name: "Eisemann Center for the Performing Arts",
    detail:
      "A landmark performing arts venue on Campbell Rd in Richardson. Those attending shows here are in the right part of town — just continue east on Campbell Rd to reach our Sachse office in about 22 minutes.",
  },
  {
    name: "Spring Creek Nature Area",
    detail:
      "A beloved Richardson greenway along Spring Creek with miles of trails connecting to neighboring parks. This corridor runs east toward Sachse and our Murphy Rd office — just 18–22 minutes from east Richardson trailheads.",
  },
];

// ─── Component ───────────────────────────────────────────────────────────────

const DentistRichardsonTxPage = React.forwardRef<HTMLDivElement>((props, ref) => {
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
                  Serving Richardson, TX
                </p>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground font-serif">
                  Dentist Serving Richardson, TX — Just Minutes Away
                </h1>
                <p className="text-lg text-foreground/80 leading-relaxed mb-8">
                  Richardson, TX residents have convenient access to exceptional dental care at
                  Wiese Dental's Sachse office. Dr. Wiese and our experienced team provide
                  comprehensive family and cosmetic dentistry — and we're always welcoming new
                  patients from Richardson.
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
                    Northeast of Richardson on Murphy Rd — easy parking right at the suite.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── About Richardson ── */}
        <section className="py-16 md:py-24 bg-[hsl(30_25%_96%)]">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-[hsl(184_82%_40%)] mb-3">
                Our Community
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground font-serif">
                Proudly Serving Richardson, TX
              </h2>
              <div className="space-y-4 text-foreground/80 leading-relaxed text-lg">
                <p>
                  Richardson is one of North Texas's most vibrant and intellectually rich
                  communities — home to the University of Texas at Dallas, the renowned Telecom
                  Corridor, beautiful parks like Breckinridge and Canyon Creek, and neighborhoods
                  that blend community warmth with urban accessibility. Longtime residents and
                  new transplants alike appreciate Richardson's walkable downtown, excellent
                  schools, and strong sense of civic pride.
                </p>
                <p>
                  At Wiese Dental, we proudly serve patients who make the drive from Richardson
                  to our Sachse office on Murphy Rd. Whether you're coming from a research lab
                  at UTD, a tech company in the Telecom Corridor, or a neighborhood along
                  Canyon Creek, we make it easy to access high-quality dental care just east
                  of your home or office.
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
                Richardson Neighborhoods We Know & Serve
              </h2>
              <p className="mt-4 text-foreground/70 text-lg max-w-2xl">
                From east Richardson bordering Plano and Sachse to the established communities
                near UTD and US-75, our Murphy Rd office is within easy reach.
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
                How Far Is Wiese Dental From Richardson?
              </h2>
              <p className="mt-4 text-white/80 text-lg max-w-2xl">
                Approximate drive times from Richardson neighborhoods to our office at 6810 Murphy Rd #100, Sachse, TX 75048.
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
                Find Us From Anywhere in Richardson
              </h2>
              <p className="mt-4 text-foreground/70 text-lg max-w-2xl">
                Familiar with these Richardson landmarks? Then you're already close to knowing how to reach us.
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
              Richardson Patients Are Always Welcome Here
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed max-w-2xl mx-auto mb-4">
              Richardson is a city that values intellect, community, and quality. We share
              those values at Wiese Dental. Whether you're a UTD student, a tech professional
              in the Telecom Corridor, or a family settled into Canyon Creek, you deserve a
              dental practice that feels personal — not like a production line.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed max-w-2xl mx-auto mb-10">
              Dr. Wiese and our team are just a short drive northeast. We take the time to
              listen, explain, and care for every member of your family — because building
              lasting relationships is what we're all about.
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

DentistRichardsonTxPage.displayName = "DentistRichardsonTxPage";

export default DentistRichardsonTxPage;
