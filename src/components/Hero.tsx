import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { HeroStats } from "./HeroStats";

export const Hero = () => {
  return (
    <section
      className="
        relative
        min-h-screen
        flex items-center justify-center
      "
    >
      {/* ✅ ALWAYS dark overlay (same in light & dark) */}
      <div className="absolute inset-0 bg-black/60 dark:bg-black/0 -z-10" />

      {/* Content */}
      <div className="container relative z-10 px-4 py-20 md:py-32">
        <div className="mx-auto max-w-5xl text-center text-white/90">
          {/* Main headline */}
          <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl animate-fade-up">
            Drive the Future of{" "}
            <span className="bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
              Innovation Intelligence
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mb-10 text-lg text-white/70 sm:text-xl md:text-2xl max-w-3xl mx-auto animate-fade-up [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]">
            Transform your innovation process with AI-powered insights. Generate,
            analyze, and manage intellectual property with unprecedented speed
            and accuracy.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up [animation-delay:400ms] opacity-0 [animation-fill-mode:forwards]">
            <Button
              size="lg"
              className="group bg-accent hover:bg-accent/90 text-accent-foreground shadow-[0_0_30px_hsl(195_92%_58%/0.3)] hover:shadow-[0_0_40px_hsl(195_92%_58%/0.5)] transition-all duration-300"
            >
              Know More
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-white/25 bg-white/5 text-white/90 hover:bg-white/10 backdrop-blur-sm"
            >
              Explore Solutions
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 animate-fade-in [animation-delay:600ms] opacity-0 [animation-fill-mode:forwards]">
            <p className="mb-6 text-sm font-medium text-white/60 uppercase tracking-wider">
              Trusted by innovation leaders worldwide
            </p>

            <div className="flex flex-wrap items-center justify-center gap-8 opacity-80">
              {[
                "Fortune 500",
                "Research Labs",
                "Tech Giants",
                "Startups",
              ].map((company, i) => (
                <div
                  key={i}
                  className="text-white/85 font-semibold text-lg px-6 py-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/15"
                >
                  {company}
                </div>
              ))}
            </div>

            <HeroStats />
          </div>
        </div>
      </div>
    </section>
  );
};
