import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import logo from "@/assets/relecura_newlogo.png";

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

          {/* ✅ CLICKABLE LOGO */}
          <a
            href="#"
            className="flex items-center gap-3 cursor-pointer "
            onClick={() => setMobileMenuOpen(false)}
          >
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
          </a>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <a
                  href={item.href}
                  className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                >
                  {item.name}
                </a>

                {item.submenu && (
                  <div
                    className="
                      absolute left-1/2 top-full mt-3 -translate-x-1/2
                      w-44 rounded-xl border border-border/40
                      bg-background/90 backdrop-blur-xl shadow-lg
                      opacity-0 invisible translate-y-1
                      group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                      transition-all duration-200 z-50 overflow-hidden
                    "
                  >
                    <ul className="flex flex-col">
                      {item.submenu.map((sub) => (
                        <li key={sub.name}>
                          <a
                            href={sub.href}
                            className="block px-3 py-2 text-sm text-center text-foreground/80 hover:text-foreground hover:bg-accent/40 transition-colors"
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
          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost">Sign In</Button>
            <Button variant="ghost">Request Demo</Button>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-secondary transition-colors"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <button onClick={toggleTheme} className="p-2 rounded-lg hover:bg-secondary">
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
