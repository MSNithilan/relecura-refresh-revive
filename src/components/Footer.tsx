import { Separator } from "@/components/ui/separator";
import { Linkedin, Twitter, Youtube, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/relecura_newlogo.png";
import logo1 from "@/assets/relecura_logo.avif";

const footerLinks = {
  Links: [
    "Home",
    "Solutions",
    "Products",
    "Services",
    "Careers",
    "Contact"
  ],
  "Our Services": ["Search and Analytics Tools", "Portfolio Analysis Tools", "Generative AI Solutions"],
  "Our Products": ["Generative AI Solutions", "IP Support Solutions", "IP Intelligence Solutions"],
};

const legalLinks = ["Privacy Policy", "Terms of Service", "Cookie Policy"];

export const Footer = () => {
  return (
    <footer className="bg-secondary/20 border-t border-border">
      <div className="container px-4 py-12 md:py-16">
        {/* Main footer content */}
        <div className="grid gap-12 lg:grid-cols-[2.5fr,1.5fr,2fr,2fr,1fr] items-start">
          {/* Brand / description / social / contact */}
          <div>
            {/* Brand */}
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={logo}
                  alt="Relecura logo"
                  className="h-10 w-10 object-contain"
                />
                <div className="flex flex-col leading-tight">
                  <span className="text-3xl font-bold">
                    <span className="text-foreground">Rele</span>
                    <span className="text-[#4AB8B2] dark:text-[#8BE2DE]">cura</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3 mb-6">
              <a
                href="#"
                className="h-9 w-9 rounded-lg bg-secondary flex items-center justify-center text-foreground hover:text-accent hover:bg-accent/10 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="h-9 w-9 rounded-lg bg-secondary flex items-center justify-center text-foreground hover:text-accent hover:bg-accent/10 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="h-9 w-9 rounded-lg bg-secondary flex items-center justify-center text-foreground hover:text-accent hover:bg-accent/10 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="h-9 w-9 rounded-lg bg-secondary flex items-center justify-center text-foreground hover:text-accent hover:bg-accent/10 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="h-9 w-9 rounded-lg bg-secondary flex items-center justify-center text-foreground hover:text-accent hover:bg-accent/10 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>

            {/* Call us & address */}
            <div className="text-sm text-foreground/90 space-y-1">
              <p className="font-semibold text-xl text-foreground">Call us</p>
              <p className="font-semibold text-foreground">+1 650 218 5745</p>

              <p className="pt-2 text-xl font-semibold text-foreground">Relecura Inc.</p>
              <p>2251 Grant Road</p>
              <p>Los Altos, CA 94024. USA</p>
            </div>
          </div>

          {/* Solutions / Company / Resources */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-bold text-foreground mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-foreground/90 hover:text-accent transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Legal as its own column */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-foreground/90 hover:text-accent transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2025 Relecura. All rights reserved</p>
          <p>Developed by McKayne</p>
        </div>
      </div>
    </footer>
  );
};
