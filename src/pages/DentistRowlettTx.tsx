import React from "react";
import Header from "@/components/sections/Header";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import { MapPin, Phone, Clock, CheckCircle, Car, Home, Star, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

// ─── Data ────────────────────────────────────────────────────────────────────

const highlights = [
  "Serving Rowlett patients from our nearby Sachse office",
  "Comprehensive family & cosmetic dentistry",
  "Accepting new patients & most major insurance plans",
  "Same-day emergency appointments available",
  "Friendly, experienced dental team",
];

const neighborhoods = [
  {
    name: "Waterview",
    notes:
      "One of Rowlett's most recognizable planned communities, Waterview wraps around its own golf course and offers scenic lake-adjacent living. Residents can reach Wiese Dental in about 12–15 minutes via TX-66 west to Murphy Rd — a straight, easy drive.",
  },
  {
    name: "Lakeside Village",
    notes:
      "Sitting close to the shores of Lake Ray Hubbard, Lakeside Village is a well-loved neighborhood known for its mature trees and water views. Most residents can get to our Sachse office in roughly 14 minutes heading west on TX-66.",
  },
  {
    name: "Dalrock Road Corridor",
    notes:
      "The Dalrock Rd area spans southern Rowlett with a mix of established single-family homes and newer developments. From here, the drive to Wiese Dental typically runs 14–17 minutes via Liberty Grove Rd or TX-66.",
  },
  {
    name: "Springfield Neighborhood",
    notes:
      "A family-friendly pocket of central Rowlett near Springfield Park. Springfield residents are well-positioned for a quick westward run on TX-66 to reach our Murphy Rd office in about 13–15 minutes.",
  },
  {
    name: "Schrade Area",
    notes:
      "One of Rowlett's older, more established areas, the Schrade corridor features wide lots and quiet streets. The drive to our office tracks west on TX-66 or Miller Rd, usually clocking in around 14–16 minutes.",
  },
  {
    name: "Heritage Crossing / East Rowlett",
    notes:
      "Newer construction in eastern Rowlett — including areas near Hwy 66 and Dalrock — puts residents a bit farther out, but it's still a comfortable 18–22 minute drive to Sachse via I-30 or TX-66.",
  },
];

const driveTimes = [
  {
    from: "Waterview Golf Club area",
    time: "~13 min",
    note: "West on TX-66 / Miller Rd, north on Murphy Rd",
  },
  {
    from: "Harry Myers Park",
    time: "~14 min",
    note: "West on TX-66, then north on Murphy Rd into Sachse",
  },
  {
    from: "Rowlett City Hall",
    time: "~14 min",
    note: "West on TX-66 to Murphy Rd — straightforward drive",
  },
  {
    from: "Lake Ray Hubbard (Rowlett shore)",
    time: "~15 min",
    note: "Head west away from the lake on TX-66 toward Sachse",
  },
  {
    from: "South Rowlett / Dalrock Rd",
    time: "~16 min",
    note: "North on Liberty Grove Rd to TX-66, then west to Murphy Rd",
  },
  {
    from: "East Rowlett / Hwy 66 & Hwy 205",
    time: "~20 min",
    note: "West on TX-66 all the way to Murphy Rd in Sachse",
  },
  {
    from: "Rockwall (via I-30)",
    time: "~22 min",
    note: "I-30 west to Garland area, then north toward Sachse",
  },
  {
    from: "Garland (east side)",
    time: "~10 min",
    note: "Short hop north on Shiloh Rd or east on Miller Rd to Murphy Rd",
  },
];

const landmarks = [
  {
    name: "Lake Ray Hubbard",
    detail:
      "The defining feature of Rowlett is the sprawling Lake Ray Hubbard that borders much of the city's eastern and southern edges. If you live near the lake, you're about a 15-minute drive west to reach us in Sachse — head toward TX-66 and you're on your way.",
  },
  {
    name: "Harry Myers Park & Recreation Center",
    detail:
      "Rowlett's crown jewel park — with over 130 acres of athletic fields, a splash pad, trails, and the city recreation center — sits in the heart of town. Patients who bring their kids to games often schedule dental visits on the same side of town during the same trip.",
  },
  {
    name: "Waterview Golf Club",
    detail:
      "The 18-hole Waterview Golf Club is a well-known landmark inside Rowlett's largest master-planned community. If you're in Waterview, you're well-positioned for the TX-66 westbound drive to our Murphy Rd office.",
  },
  {
    name: "Rowlett Creek Greenbelt",
    detail:
      "Rowlett Creek — the waterway that gave the city its name — flows through the area and is lined with parks and trail corridors. The creek corridor connects several neighborhoods that our patients call home.",
  },
  {
    name: "TX-66 (Main Street Corridor)",
    detail:
      "TX-66 is Rowlett's main east-west artery and the most direct route to our Sachse office. From nearly anywhere in Rowlett, heading west on TX-66 leads straight to Murphy Rd — where Wiese Dental is just a short turn north.",
  },
  {
    name: "President George Bush Turnpike (SH-190)",
    detail:
      "The Bush Turnpike forms Rowlett's northern boundary and is a key connector for residents heading to Sachse or Garland. Taking the turnpike west to the Sachse/Garland area puts you within minutes of our office.",
  },
];

// ─── Component ───────────────────────────────────────────────────────────────

const DentistRowlettTxPage = React.forwardRef<HTMLDivElement>((props, ref) => {
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
                  Serving Rowlett, TX
                </p>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground font-serif">
                  Dentist Serving Rowlett, TX
                </h1>
                <p className="text-lg text-foreground/80 leading-relaxed mb-8">
                  Families from Rowlett, TX choose Wiese Dental for quality, compassionate dental
                  care. Our Sachse office is conveniently accessible and ready to welcome new
                  patients from the Rowlett area — just a short drive west on TX-66.
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
                    About 13–18 minutes from most Rowlett neighborhoods via TX-66.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── About Rowlett ── */}
        <section className="py-16 md:py-24 bg-[hsl(30_25%_96%)]">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-[hsl(184_82%_40%)] mb-3">
                Our Community
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground font-serif">
                Proudly Serving Rowlett, TX
              </h2>
              <div className="space-y-4 text-foreground/80 leading-relaxed text-lg">
                <p>
                  Rowlett is one of the Dallas Metroplex's most distinctive communities — a lakeside city
                  with a strong identity built around Lake Ray Hubbard, family-centered neighborhoods,
                  and a community spirit that's hard to match. Bordered by Garland to the west and
                  Rockwall to the east, Rowlett sits at the crossroads of suburban convenience and
                  genuine small-city warmth.
                </p>
                <p>
                  Rowlett residents know what it means to be part of a tight-knit community. The city has
                  shown remarkable resilience — from the 2015 tornado recovery to steady, intentional
                  growth — and that same spirit of coming together is something we deeply admire. At
                  Wiese Dental, we're proud to be just a short drive away in neighboring Sachse,
                  serving Rowlett families the way neighbors should.
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
                Rowlett Neighborhoods We Know & Love
              </h2>
              <p className="mt-4 text-foreground/70 text-lg max-w-2xl">
                From lakeside Waterview to the Dalrock corridor, Rowlett's neighborhoods are all
                within easy reach of our Sachse office.
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
                How Far Is Wiese Dental From Rowlett?
              </h2>
              <p className="mt-4 text-white/80 text-lg max-w-2xl">
                Approximate drive times from Rowlett neighborhoods to our office at 6810 Murphy Rd
                #100, Sachse, TX 75048.
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
                Find Us From Anywhere in Rowlett
              </h2>
              <p className="mt-4 text-foreground/70 text-lg max-w-2xl">
                Familiar with these Rowlett spots? Here's how each one connects you to our office.
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
              Rowlett Deserves a Dental Team That Genuinely Cares
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed max-w-2xl mx-auto mb-4">
              Rowlett is a city that earned its character the hard way — through community investment,
              resilience, and pride in where you live. Whether you're watching a game at Harry Myers
              Park, enjoying a sunset over Lake Ray Hubbard, or spending weekends on the Rowlett Creek
              trails, you know this community is something worth taking care of.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed max-w-2xl mx-auto mb-10">
              We feel the same way about our patients. Dr. Wiese and our Sachse team are committed to
              providing the kind of dental care Rowlett families can trust — thorough, friendly, and
              always focused on long-term health, not just a quick fix. We'd love the chance to be
              your family's dental home.
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

DentistRowlettTxPage.displayName = "DentistRowlettTxPage";

export default DentistRowlettTxPage;
