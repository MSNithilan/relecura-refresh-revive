import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-primary via-primary/95 to-primary/90 relative overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(195_92%_58%/0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(0_0%_100%/0.03)_1px,transparent_1px),linear-gradient(to_bottom,hsl(0_0%_100%/0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="container px-4 relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Transform Your Innovation Process?
          </h2>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Join leading organizations worldwide in leveraging the power of Generative AI for innovation intelligence.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="group bg-accent hover:bg-accent/90 text-accent-foreground shadow-[0_0_30px_hsl(195_92%_58%/0.3)] hover:shadow-[0_0_40px_hsl(195_92%_58%/0.5)] transition-all duration-300"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Schedule a Demo
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary-foreground/20 bg-primary-foreground/5 text-primary-foreground hover:bg-primary-foreground/10 backdrop-blur-sm"
            >
              Contact Sales
            </Button>
          </div>
          
          {/* Social proof */}
          <p className="mt-8 text-sm text-primary-foreground/60">
            No credit card required • Free trial available • Setup in minutes
          </p>
        </div>
      </div>
    </section>
  );
};
