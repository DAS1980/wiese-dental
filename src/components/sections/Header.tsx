import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, MapPin, Phone } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL } from "@/config/contact";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
    { label: "Our Services", href: "/our-services" },
    { label: "For Patients", href: "/for-patients" },
    { label: "Smile Gallery", href: "/smile-gallery" },
    { label: "Service Area", href: "/service-locations" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background">
      {/* Top Bar */}
      <div className="bg-[hsl(184_82%_40%)] text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between py-2 text-sm">
            {/* Safety Message */}
            <a
              href="/"
              className="flex items-center gap-2 hover:opacity-90 transition-opacity py-1"
            >
              <span>Learn about Our commitment to Your Safety</span>
              <svg
                className="h-3 w-3"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 0l10 10-10 10V0z" />
              </svg>
            </a>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 py-1">
              <a
                href="https://goo.gl/maps/LgVp1s89q9FR2bBG7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:opacity-90 transition-opacity"
              >
                <MapPin className="h-4 w-4" />
                <span>6810 Murphy Rd #100, Sachse, TX 75048</span>
              </a>
              <a
                href={PHONE_TEL}
                className="flex items-center gap-2 hover:opacity-90 transition-opacity"
              >
                <Phone className="h-4 w-4" />
                <span>{PHONE_DISPLAY}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white border-b shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <a href="/" className="flex-shrink-0">
              <img
                src="https://pub-89ae74d9c1ba411d8c3026dabeee57fa.r2.dev/bobwiesedental/logos/Black%20and%20white%20Wiese%20Dental.png"
                alt="Wiese Dental"
                className="h-16 w-auto object-contain"
                fetchpriority="high"
                loading="eager"
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm text-[hsl(0_0%_20%)] hover:text-[hsl(184_82%_40%)] transition-colors font-medium"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden lg:block">
              <Button
                asChild
                className="bg-[hsl(184_82%_40%)] hover:bg-[hsl(184_82%_35%)] text-white px-6"
              >
                <a href="https://book.modento.io/wiese-dental">Appointment Request</a>
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="lg:hidden">
                <Menu className="h-6 w-6" />
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] overflow-y-auto">
                <nav className="flex flex-col gap-1 mt-8">
                  {navItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block py-3 px-4 text-[hsl(0_0%_20%)] hover:bg-[hsl(30_25%_92%)] rounded-md font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                  <div className="mt-4 px-4">
                    <Button
                      asChild
                      className="w-full bg-[hsl(184_82%_40%)] hover:bg-[hsl(184_82%_35%)] text-white"
                    >
                      <a href="/request-an-appointment" onClick={() => setIsOpen(false)}>
                        Appointment Request
                      </a>
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
