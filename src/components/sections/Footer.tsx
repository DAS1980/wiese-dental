import { Facebook, MapPin, Phone } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL } from "@/config/contact";

const Footer = () => {
  return (
    <footer className="bg-[hsl(30_25%_92%)] py-16 md:py-20 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 mb-12">
          {/* Office Hours */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 font-serif text-[hsl(0_0%_20%)]">
              Office Hours
            </h2>
            <div className="space-y-2 text-[hsl(0_0%_20%)]">
              <p className="flex justify-between">
                <span className="font-semibold min-w-[120px]">Monday</span>
                <span>8:30 am - 5:00 pm</span>
              </p>
              <p className="flex justify-between">
                <span className="font-semibold min-w-[120px]">Tuesday</span>
                <span>8:30 am - 5:00 pm</span>
              </p>
              <p className="flex justify-between">
                <span className="font-semibold min-w-[120px]">Wednesday</span>
                <span>8:30 am - 5:00 pm</span>
              </p>
              <p className="flex justify-between">
                <span className="font-semibold min-w-[120px]">Thursday</span>
                <span>8:30 am - 5:00 pm</span>
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 font-serif text-[hsl(0_0%_20%)]">
              Contact
            </h2>
            <div className="space-y-4 text-[hsl(0_0%_20%)]">
              <a
                href="https://goo.gl/maps/LgVp1s89q9FR2bBG7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-[hsl(184_82%_40%)] transition-colors"
              >
                <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
                <span>
                  6810 Murphy Rd,<br />
                  Sachse, TX 75048
                </span>
              </a>
              <a
                href={PHONE_TEL}
                className="flex items-center gap-3 hover:text-[hsl(184_82%_40%)] transition-colors"
              >
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span>{PHONE_DISPLAY}</span>
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div className="lg:col-span-1 md:col-span-2">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 font-serif text-[hsl(0_0%_20%)]">
              Follow Us
            </h2>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=100063595721258"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="h-12 w-12 rounded-full bg-[hsl(184_82%_40%)] text-white flex items-center justify-center hover:bg-[hsl(184_82%_35%)] transition-colors shadow-md"
              >
                <Facebook className="h-5 w-5" fill="currentColor" />
              </a>
              <a
                href="https://goo.gl/maps/LgVp1s89q9FR2bBG7"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google"
                className="h-12 w-12 rounded-full bg-[hsl(184_82%_40%)] text-white flex items-center justify-center hover:bg-[hsl(184_82%_35%)] transition-colors shadow-md"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
              </a>
              <a
                href="https://www.yelp.com/biz/robert-wiese-dds-wiese-dental-sachse-2"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Yelp"
                className="h-12 w-12 rounded-full bg-[hsl(184_82%_40%)] text-white flex items-center justify-center hover:bg-[hsl(184_82%_35%)] transition-colors shadow-md"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12.271 17.634c-.963 1.258-3.104 3.08-3.594 3.187-.49.107-.93-.365-.93-.365s-2.42-3.175-2.528-3.515c-.107-.34.15-.706.475-.854.325-.148 2.528-.963 2.785-1.055.258-.092.564-.036.782.183.217.22.547.69.547.69l2.026 2.676c.09.12.364.448.437 1.053zm.963-3.285c-.673-.325-3.687-1.768-4.103-1.803-.415-.036-.736.274-.736.274s-3.04 2.127-3.357 2.367c-.316.24-.307.706-.09.93.217.223 2.294 1.768 2.634 1.91.34.142.707-.036.854-.316.148-.28.963-2.22 1.055-2.42.092-.2.218-.45.475-.582.258-.13.758-.217.758-.217l2.93-.564c.113-.023.436-.1.58-.579zm4.177-1.803l-2.528-.963c-.258-.092-.564-.036-.782.183-.217.22-.547.69-.547.69l-2.026 2.676c-.09.12-.364.448-.437 1.053-.073.605.364.93.364.93s3.104 2.42 3.594 2.528c.49.107.93-.365.93-.365s2.42-3.175 2.528-3.515c.107-.34-.15-.706-.475-.854-.325-.148-2.528-.963-2.785-1.055-.258-.092-.564-.036-.782.183-.217.22-.547.69-.547.69l-2.026 2.676c-.09.12-.364.448-.437 1.053-.073.605.364.93.364.93s3.104 2.42 3.594 2.528c.49.107.93-.365.93-.365s2.42-3.175 2.528-3.515c.107-.34-.15-.706-.475-.854z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright and Links */}
        <div className="pt-8 border-t border-[hsl(0_0%_70%)]">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm text-[hsl(0_0%_20%)]">
            <p>&copy; {new Date().getFullYear()} Wiese Dental</p>
            <div className="flex gap-4">
              <a
                href="/"
                className="hover:text-[hsl(184_82%_40%)] transition-colors underline"
              >
                Sitemap
              </a>
              <a
                href="/"
                className="hover:text-[hsl(184_82%_40%)] transition-colors underline"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
