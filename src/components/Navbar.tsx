import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import logo from "@/assets/relecura_newlogo.png"; //

const navigation = [
  { 
    name: "Who We Are", 
    href: "#solutions",
    submenu: [
      { name: "About Relecura", href: "#about" },
      { name: "Our Vision", href: "#vision" },
      { name: "Leadership Team", href: "#team" },
    ],
  },
  { 
    name: "Why Relecura", 
    href: "#about",
    submenu: [
      { name: "Our Approach", href: "#approach" },
      { name: "Case Studies", href: "#case-studies" },
    ],
  },
  { 
    name: "Industries", 
    href: "#industries",
    submenu: [
      { name: "Technology", href: "#tech" },
      { name: "Healthcare", href: "#healthcare" },
      { name: "Manufacturing", href: "#manufacturing" },
    ],
  },
  { 
    name: "Our Offerings", 
    href: "#resources",
    submenu: [
      { name: "Platform", href: "#platform" },
      { name: "Services", href: "#services" },
    ],
  },
  { 
    name: "Resources", 
    href: "#about",
    submenu: [
      { name: "Blog", href: "#blog" },
      { name: "Reports", href: "#reports" },
      { name: "Webinars", href: "#webinars" },
    ],
  },
  { 
    name: "Contact", 
    href: "#about",
    submenu: [
      { name: "Contact Us", href: "#contact" },
      { name: "Support", href: "#support" },
    ],
  },
];

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="container px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Relecura logo"
              className="h-12 w-12 mt-1 object-contain"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-3xl font-bold">
                <span className="text-foreground">Rele</span>
                <span className="text-[#4AB8B2] dark:text-[#8BE2DE]">cura</span>
              </span>
              <span className="text-[11px] tracking-wide text-muted-foreground">
                AI FOR INNOVATION INTELLIGENCE
              </span>
            </div>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative group"
              >
                {/* Top-level link */}
                <a
                  href={item.href}
                  className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                >
                  {item.name}
                </a>

                {/* Dropdown menu */}
                {item.submenu && (
                  <div
                    className="
                      absolute left-1/2 top-full mt-3 -translate-x-1/2
                      w-44
                      rounded-xl
                      border border-border/40
                      bg-background/90 backdrop-blur-xl
                      shadow-lg
                      opacity-0 invisible translate-y-1
                      group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                      transition-all duration-200
                      z-50
                      overflow-hidden
                    "
                  >


                    <ul className="flex flex-col">
                      {item.submenu.map((sub) => (
                        <li key={sub.name}>
                          <a
                            href={sub.href}
                            className="
                              block w-full
                              px-3 py-2
                              text-sm text-center
                              text-foreground/80 hover:text-foreground
                              hover:bg-accent/40
                              transition-colors
                            "
                          >
                            {sub.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>


          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-2 ">
            
            <Button variant="ghost" className="  
              text-foreground/80 
              hover:bg-accent/70 
              dark:hover:bg-accent/80
              hover:text-foreground 
              dark:hover:text-gray-800
              transition-colors">
              Sign In 
            </Button>
            <Button variant="ghost" className="  
              text-foreground/80 
              hover:bg-accent/70 
              dark:hover:bg-accent/80
              hover:text-foreground 
              dark:hover:text-gray-800
              transition-colors">
              Request Demo
            </Button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-secondary transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5 text-foreground" />
              ) : (
                <Moon className="h-5 w-5 text-foreground" />
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-secondary transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5 text-foreground" />
              ) : (
                <Moon className="h-5 w-5 text-foreground" />
              )}
            </button>
            <button
              type="button"
              className="rounded-lg p-2 text-foreground hover:bg-secondary"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-xl">
          <div className="container px-4 py-6 space-y-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-base font-medium text-foreground/80 hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 space-y-3">
              <Button variant="ghost" className="w-full justify-start">
                Sign In
              </Button>
              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                Request Demo
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
