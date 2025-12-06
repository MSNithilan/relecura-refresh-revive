import { Play } from "lucide-react";

export const VideoShowcase = () => {
  const handlePlayClick = () => {
    window.open("https://www.youtube.com", "_blank");
  };

  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Business Insights Using{" "}
            <span className="text-primary dark:text-accent">Relecura's Innovation Tools</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover how our platform transforms complex data into actionable insights
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto group cursor-pointer" onClick={handlePlayClick}>
          {/* Video thumbnail container */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-border/50">
            {/* Gradient background as placeholder */}
            <div className="aspect-video bg-gradient-to-br from-[hsl(220_60%_20%)] via-[hsl(280_40%_25%)] to-[hsl(340_50%_30%)] relative">
              {/* Decorative elements */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,hsl(173_68%_51%/0.2),transparent_40%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,hsl(340_70%_50%/0.15),transparent_40%)]" />
              
              {/* Network/connection lines decoration */}
              <div className="absolute inset-0 opacity-30">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <circle cx="20" cy="30" r="1" fill="hsl(173 68% 51%)" />
                  <circle cx="40" cy="50" r="0.8" fill="hsl(173 68% 51%)" />
                  <circle cx="60" cy="35" r="1.2" fill="hsl(280 60% 60%)" />
                  <circle cx="80" cy="55" r="0.6" fill="hsl(340 70% 60%)" />
                  <line x1="20" y1="30" x2="40" y2="50" stroke="hsl(173 68% 51% / 0.5)" strokeWidth="0.2" />
                  <line x1="40" y1="50" x2="60" y2="35" stroke="hsl(173 68% 51% / 0.5)" strokeWidth="0.2" />
                  <line x1="60" y1="35" x2="80" y2="55" stroke="hsl(280 60% 60% / 0.5)" strokeWidth="0.2" />
                </svg>
              </div>

              {/* Title overlay */}
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="text-white text-2xl md:text-3xl font-bold tracking-wide">
                  BUSINESS INSIGHTS USING
                </h3>
                <h3 className="text-white text-2xl md:text-3xl font-bold tracking-wide">
                  RELECURA'S INNOVATION TOOLS
                </h3>
                <div className="h-1 w-32 bg-accent mt-4 rounded-full" />
              </div>
            </div>

            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-accent/40 rounded-full blur-xl scale-150 group-hover:scale-175 transition-transform duration-500" />
                
                {/* Play button */}
                <button className="relative w-20 h-20 md:w-24 md:h-24 bg-accent hover:bg-accent/90 rounded-full flex items-center justify-center shadow-[0_0_40px_hsl(173_68%_51%/0.5)] group-hover:shadow-[0_0_60px_hsl(173_68%_51%/0.7)] transition-all duration-300 group-hover:scale-110">
                  <Play className="w-8 h-8 md:w-10 md:h-10 text-accent-foreground fill-accent-foreground ml-1" />
                </button>
              </div>
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 rounded-2xl" />
          </div>

          {/* Decorative corner dots */}
          <div className="absolute -top-4 -right-4 grid grid-cols-4 gap-1.5 opacity-40">
            {[...Array(16)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-accent/60" />
            ))}
          </div>
          <div className="absolute -bottom-4 -left-4 grid grid-cols-4 gap-1.5 opacity-40">
            {[...Array(16)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary dark:bg-accent/60" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
