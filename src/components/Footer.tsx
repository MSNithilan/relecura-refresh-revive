import { Separator } from "@/components/ui/separator";
import { Linkedin, Twitter, Youtube } from "lucide-react";

const footerLinks = {
  Solutions: ["Innovation Management", "Portfolio Organization", "Technology Trends", "Due Diligence"],
  Company: ["About Us", "Why Relecura", "Industries", "Careers"],
  Resources: ["Blog", "Case Studies", "Documentation", "Support"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

export const Footer = () => {
  return (
    <footer className="bg-secondary/20 border-t border-border">
      <div className="container px-4 py-12 md:py-16">
        {/* Main footer content */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-accent to-primary" />
              <span className="text-xl font-bold text-foreground">Relecura</span>
            </div>
            <p className="text-sm text-muted-foreground mb-6 max-w-xs">
              AI-powered innovation intelligence platform for generating, analyzing, and managing intellectual property.
            </p>
            
            {/* Social links */}
            <div className="flex items-center gap-4">
              <a 
                href="#" 
                className="h-9 w-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-accent/10 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="h-9 w-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-accent/10 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="h-9 w-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-accent/10 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>
          
          {/* Links columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-foreground mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-sm text-muted-foreground hover:text-accent transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <Separator className="my-8" />
        
        {/* Bottom footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2024 Relecura. All rights reserved.</p>
          <p>Powered by Generative AI</p>
        </div>
      </div>
    </footer>
  );
};
