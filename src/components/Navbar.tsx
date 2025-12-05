import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

const navigation = [
  { name: "Solutions", href: "#solutions" },
  { name: "Industries", href: "#industries" },
  { name: "Resources", href: "#resources" },
  { name: "About", href: "#about" },
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
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-accent to-primary" />
            <span className="text-xl font-bold text-foreground">Relecura</span>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-4">
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
            <Button variant="ghost" className="text-foreground/80 hover:text-foreground">
              Sign In
            </Button>
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Request Demo
            </Button>
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
