import { Card } from "@/components/ui/card";
import { Lightbulb, TrendingUp, Shield, Zap } from "lucide-react";

const benefits = [
  {
    icon: Lightbulb,
    title: "Accelerate Innovation",
    description: "Ignite creativity and speed up your innovation cycles with AI-powered ideation and analysis.",
    gradient: "from-accent/10 to-accent/5",
    iconBg: "bg-accent/10",
    iconColor: "text-accent",
  },
  {
    icon: TrendingUp,
    title: "Data-Driven Decisions",
    description: "Make smarter strategic choices backed by comprehensive AI analysis and competitive intelligence.",
    gradient: "from-primary/10 to-primary/5",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    icon: Shield,
    title: "Mitigate IP Risks",
    description: "Reduce acquisition and litigation risks with thorough AI-powered due diligence on patents and companies.",
    gradient: "from-emerald-500/10 to-emerald-500/5",
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-600",
  },
  {
    icon: Zap,
    title: "Maximize ROI",
    description: "Get clear evidence of IP utilization and maximize return on your innovation investments.",
    gradient: "from-amber-500/10 to-amber-500/5",
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-600",
  },
];

export const ValueProposition = () => {
  return (
    <section className="relative py-20 md:py-32">
      <div className="container relative z-10 px-4">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground dark:text-white/90 mb-4 leading-tight">
            Unleash the Power of <br />
            <span
              className="
                bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent
                dark:bg-gradient-to-r dark:from-accent dark:to-white/90
              "
            >
              Generative AI
            </span>
          </h2>
          <p className="text-lg text-foreground/80">
            Transform your innovation process and empower your team for peak productivity
          </p>
        </div>
        
        {/* Benefits grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-border bg-card p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-accent/50"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${benefit.iconBg} transition-transform duration-300 group-hover:scale-110`}>
                  <benefit.icon className={`h-6 w-6 ${benefit.iconColor}`} />
                </div>
                
                {/* Content */}
                <h3 className="mb-2 text-xl font-semibold text-card-foreground">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
