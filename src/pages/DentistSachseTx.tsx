import React from "react";
import Header from "@/components/sections/Header";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import { MapPin, Phone, Clock, CheckCircle, Car, Home, Star, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

// ─── Data ────────────────────────────────────────────────────────────────────

const highlights = [
  "Comprehensive family & cosmetic dentistry",
  "Located right here in Sachse at 6810 Murphy Rd #100",
  "Accepting new patients & most major insurance plans",
  "Same-day emergency appointments available",
  "State-of-the-art digital X-rays & technology",
];

const neighborhoods = [
  {
    name: "Woodbridge",
    notes:
      "One of Sachse's largest and most established master-planned communities. Woodbridge residents enjoy quick access to our Murphy Rd office — typically under 5 minutes from most streets in the neighborhood.",
  },
  {
    name: "Parkwood Hills",
    notes:
      "A sought-after family neighborhood tucked near the Collin/Dallas county line. Most Parkwood Hills residents can reach us in about 5–8 minutes via Murphy Rd.",
  },
  {
    name: "Heritage Estates",
    notes:
      "Known for spacious lots and a strong community feel, Heritage Estates sits just minutes from our front door — making routine checkups easy to fit into a busy schedule.",
  },
  {
    name: "Twin Creeks",
    notes:
      "A growing pocket of Sachse with newer construction and young families. Twin Creeks patients typically enjoy a straight, traffic-light-friendly drive to our office in under 10 minutes.",
  },
  {
    name: "Maxwell Creek",
    notes:
      "Named for the creek that winds through the area, this neighborhood blends green space with suburban comfort. Residents are just a short hop over to Murphy Rd for their dental visits.",
  },
];

const driveTimes = [
  {
    from: "Woodbridge Golf Club area",
    time: "~4 min",
    note: "Head south on Club Hill Dr to Murphy Rd",
  },
  {
    from: "Sachse City Hall",
    time: "~3 min",
    note: "Short drive east on TX-78 / Garland Rd to Murphy Rd",
  },
  {
    from: "Garland (south Garland)",
    time: "~12 min",
    note: "North on Shiloh Rd or Beltline Rd to Murphy Rd",
  },
  {
    from: "Rowlett (via TX-66)",
    time: "~14 min",
    note: "West on TX-66, north on Murphy Rd",
  },
  {
    from: "Murphy, TX",
    time: "~8 min",
    note: "South on FM 544 to Murphy Rd / TX-78",
  },
  {
    from: "Wylie, TX",
    time: "~12 min",
    note: "West on Alanis Dr or Brown St to Murphy Rd",
  },
  {
    from: "Plano (east Plano)",
    time: "~18 min",
    note: "South on Jupiter Rd to TX-78 east",
  },
  {
    from: "Downtown Dallas",
    time: "~30 min",
    note: "I-30 or US-80 east to Garland, north to Sachse",
  },
];

const landmarks = [
  {
    name: "Woodbridge Golf Club",
    detail:
      "One of Sachse's most recognizable landmarks, the Woodbridge Golf Club sits just north of our office off Club Hill Dr. If you can find the golf course, you're minutes away from us.",
  },
  {
    name: "Sachse Community Park & Recreation Center",
    detail:
      "The hub of Sachse youth sports and community events. Many of our patients are parents who bring their kids to games and stop by for appointments on the same trip.",
  },
  {
    name: "Maxwell Creek Trail System",
    detail:
      "The creek and trail system that winds through Sachse neighborhoods is a beloved natural feature. Our office is a short drive from the trailheads along the creek corridor.",
  },
  {
    name: "H-E-B Sachse",
    detail:
      "The H-E-B off TX-78 is a convenient landmark many patients use to orient themselves. From the store, we're about 3 minutes north on Murphy Rd.",
  },
  {
    name: "TX-78 (Garland Rd) Corridor",
    detail:
      "The main commercial spine of Sachse. Our office sits just off this corridor on Murphy Rd — easy to spot with plenty of parking right at the suite.",
  },
];

// ─── Component ───────────────────────────────────────────────────────────────

const DentistSachseTxPage = React.forwardRef<HTMLDivElement>((props, ref) => {
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
                  Your Hometown Dentist · Sachse, TX
                </p>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground font-serif">
                  Dentist in Sachse, TX — Right in Your Community
                </h1>
                <p className="text-lg text-foreground/80 leading-relaxed mb-8">
                  Wiese Dental is proud to call Sachse home. Our office on Murphy Rd is in the
                  heart of the community — steps from the neighborhoods and landmarks Sachse
                  residents know and love. Dr. Wiese and our team provide comprehensive dental
                  care for every stage of life, from your child's first cleaning to full smile
                  makeovers for adults.
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
                    Conveniently located off Murphy Rd — easy parking right at the suite.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── About Sachse ── */}
        <section className="py-16 md:py-24 bg-[hsl(30_25%_96%)]">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-[hsl(184_82%_40%)] mb-3">
                Our Community
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground font-serif">
                Proudly Serving Sachse, TX
              </h2>
              <div className="space-y-4 text-foreground/80 leading-relaxed text-lg">
                <p>
                  Sachse is one of the fastest-growing cities in the Dallas–Fort Worth Metroplex — and
                  for good reason. Straddling both Collin and Dallas counties, Sachse offers the
                  perfect blend of small-town warmth and big-city convenience. Families are drawn here
                  by top-rated schools, tree-lined neighborhoods, parks, and a tight-knit community
                  spirit you don't often find this close to a major metro.
                </p>
                <p>
                  Wiese Dental has been part of this community and we love it here. We see patients
                  from all across Sachse — from the established streets of Woodbridge to the newer
                  builds near Maxwell Creek — and we understand what it means to be a trusted
                  neighbor, not just a dental office.
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
                Sachse Neighborhoods We Know & Love
              </h2>
              <p className="mt-4 text-foreground/70 text-lg max-w-2xl">
                No matter which part of Sachse you call home, our Murphy Rd office is just a
                short drive away.
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
                How Far Is Wiese Dental From You?
              </h2>
              <p className="mt-4 text-white/80 text-lg max-w-2xl">
                Approximate drive times to our office at 6810 Murphy Rd #100, Sachse, TX 75048.
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
                Find Us From Anywhere in Sachse
              </h2>
              <p className="mt-4 text-foreground/70 text-lg max-w-2xl">
                Familiar with these Sachse spots? Then you already know how to get to us.
              </p>
            </div>

            {/* Michael J. Felix Community Center Feature */}
            <div className="mb-10 rounded-2xl overflow-hidden border border-border grid grid-cols-1 md:grid-cols-2 shadow-sm">
              <div className="relative overflow-hidden">
                <img
                  src="https://media.cdn.builder.searchatlas.com/user-uploads/e1a03122-b43d-4722-ae9c-cfe8adadc7f0_Michael_J._Felix_Community_Center.png"
                  alt="Michael J. Felix Community Center in Sachse, TX"
                  className="w-full h-full object-cover min-h-[260px]"
                />
              </div>
              <div className="bg-[hsl(30_25%_97%)] p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[hsl(184_82%_40%)]/10">
                    <Navigation className="h-5 w-5 text-[hsl(184_82%_40%)]" />
                  </div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-[hsl(184_82%_40%)]">
                    Community Landmark
                  </p>
                </div>
                <h3 className="text-2xl font-bold text-foreground font-serif mb-3">
                  Michael J. Felix Community Center
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  The Michael J. Felix Community Center is one of Sachse's most beloved gathering
                  places — home to city events, recreational programs, and community milestones.
                  If you know this landmark, you're already close to us. Wiese Dental is just
                  a short drive away on Murphy Rd, making it easy to combine your community
                  activities with a dental visit.
                </p>
              </div>
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
              We're More Than a Dental Office — We're Your Neighbors
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed max-w-2xl mx-auto mb-4">
              Sachse is a special place. The community here is engaged, friendly, and deeply
              invested in making this city a great place to raise a family. We share those values.
              Whether you're at the Sachse Community Park watching your kids play, walking the
              Maxwell Creek trails, or grabbing groceries at H-E-B, you're living the Sachse life
              — and so are we.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed max-w-2xl mx-auto mb-10">
              We believe great dental care starts with a team that genuinely knows and cares
              about the people they serve. That's the kind of practice Dr. Wiese has built here
              in Sachse, and we wouldn't have it any other way.
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

DentistSachseTxPage.displayName = "DentistSachseTxPage";

export default DentistSachseTxPage;
