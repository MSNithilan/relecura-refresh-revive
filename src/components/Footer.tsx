import { Separator } from "@/components/ui/separator";
import { Linkedin, Twitter, Youtube, Instagram, Facebook } from "lucide-react";
import logo1 from "@/assets/relecura_newlogo.png";
import logo2 from "@/assets/relecura_logo.avif";

const footerLinks = {
  Links: ["Solutions", "Products", "Careers"],
  "Our Services": [
    "Search and Analytics Tools",
    "Portfolio Analysis Tools",
    "Generative AI Solutions",
  ],
  "Our Products": [
    "Generative AI Solutions",
    "IP Support Solutions",
    "IP Intelligence Solutions",
  ],
};

const legalLinks = ["Privacy Policy", "Terms of Service", "Cookie Policy"];

export const Footer = () => {
  return (
    <footer
      className="
        relative
        bg-background/80
        backdrop-blur-xs
        border-t border-border/40
      "
    >
      <div className="container px-4 py-12 md:py-16">

        <div className="grid gap-12 lg:grid-cols-[2.5fr,1.3fr,1.8fr,1.8fr,1.2fr,1.8fr] items-start">

          {/* LEFT — Brand + Social + Call */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img src={logo1} alt="Relecura logo" className="h-10 w-10 object-contain" />
              {/* <img src={logo1} alt="Relecura logo" className="h-10 w-10 object-contain" /> */}
              <span className="text-3xl font-bold">
                <span className="text-foreground">Rele</span>
                <span className="text-[#4AB8B2] dark:text-[#8BE2DE]">cura</span>
              </span>
            </div>

            <div className="flex items-center gap-3 mb-6">
              {[Linkedin, Twitter, Youtube, Instagram, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="h-9 w-9 rounded-lg bg-secondary flex items-center justify-center text-foreground hover:text-accent hover:bg-accent/10 transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>

            <div className="text-sm text-foreground/90 space-y-1">
              <p className="font-semibold text-lg">Call us</p>
              <p className="font-semibold text-foreground">+1 650 218 5745</p>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-foreground mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-foreground/90 hover:text-accent transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-foreground/90 hover:text-accent transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Address */}
          <div className="text-sm text-foreground/90 space-y-1">
            <p className="font-semibold text-lg text-foreground">Relecura Inc.</p>
            <p>2251 Grant Road</p>
            <p>Los Altos, CA 94024</p>
            <p>USA</p>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2025 Relecura. All rights reserved</p>
          <p>Developed by McKayne</p>
        </div>
      </div>
    </footer>
  );
};
