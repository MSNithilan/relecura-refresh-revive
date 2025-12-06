import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary dark:bg-[hsl(204_15%_4%)]">
      {/* Animated background gradient mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(173_68%_51%/0.1),transparent_50%),radial-gradient(circle_at_70%_80%,hsl(173_68%_51%/0.08),transparent_50%)]" />
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(0_0%_100%/0.03)_1px,transparent_1px),linear-gradient(to_bottom,hsl(0_0%_100%/0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      {/* Content */}
      <div className="container relative z-10 px-4 py-20 md:py-32">
        <div className="mx-auto max-w-5xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-sm font-medium text-accent backdrop-blur-sm animate-fade-in">
            <Sparkles className="h-4 w-4" />
            Powered by Generative AI
          </div>
          
          {/* Main headline */}
          <h1 className="mb-6 text-4xl font-bold leading-tight text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl animate-fade-up">
            Drive the Future of{" "}
            <span className="bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
              Innovation Intelligence
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="mb-10 text-lg text-primary-foreground/80 sm:text-xl md:text-2xl max-w-3xl mx-auto animate-fade-up [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]">
            Transform your innovation process with AI-powered insights. Generate, analyze, and manage intellectual property with unprecedented speed and accuracy.
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
              className="border-primary-foreground/20 bg-primary-foreground/5 text-primary-foreground hover:bg-primary-foreground/10 backdrop-blur-sm"
            >
              Explore Solutions
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-16 animate-fade-in [animation-delay:600ms] opacity-0 [animation-fill-mode:forwards]">
            <p className="mb-6 text-sm font-medium text-primary-foreground/60 uppercase tracking-wider">
              Trusted by innovation leaders worldwide
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-70">
              {["Fortune 500", "Research Labs", "Tech Giants", "Startups"].map((company, i) => (
                <div
                  key={i}
                  className="text-primary-foreground/80 font-semibold text-lg px-6 py-2 rounded-lg bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10"
                >
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade - extended and smoother */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background via-background/80 to-transparent" />
    </section>
  );
};
