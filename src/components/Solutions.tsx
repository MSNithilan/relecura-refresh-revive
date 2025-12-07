import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FolderKanban, Layers, Telescope, Scale } from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const solutions = [
  {
    id: "innovation",
    label: "Innovation Management",
    icon: FolderKanban,
    title: "Streamline Your Innovation Lifecycle",
    description:
      "Manage the entire innovation journey from ideation to commercialization. Relecura's Generative AI platform helps you capture ideas, evaluate opportunities, and track progress with unprecedented efficiency.",
    features: [
      "AI-powered idea generation and validation",
      "Automated prior art searches",
      "Innovation pipeline visualization",
      "ROI tracking and analytics",
    ],
  },
  {
    id: "portfolio",
    label: "Portfolio Organization",
    icon: Layers,
    title: "AI-Powered Patent Portfolio Management",
    description:
      "Transform your patent portfolio into a strategic asset. Our AI capabilities help you organize, analyze, and optimize your intellectual property with intelligent categorization and insights.",
    features: [
      "Automatic patent classification",
      "Portfolio gap analysis",
      "Value assessment algorithms",
      "Strategic alignment mapping",
    ],
  },
  {
    id: "trends",
    label: "Technology Trends",
    icon: Telescope,
    title: "Stay Ahead with Trend Intelligence",
    description:
      "Navigate the evolving technology landscape with confidence. Relecura's AI empowers you to identify emerging trends, spot opportunities, and anticipate market shifts before your competition.",
    features: [
      "Real-time trend detection",
      "Competitive landscape analysis",
      "Technology forecasting models",
      "Market opportunity identification",
    ],
  },
  {
    id: "diligence",
    label: "Due Diligence",
    icon: Scale,
    title: "Comprehensive Technology Due Diligence",
    description:
      "Make informed M&A decisions with confidence. Our AI-powered tools provide comprehensive IP and technology assessments to identify risks, validate assets, and uncover hidden value.",
    features: [
      "Automated IP risk assessment",
      "Technology stack evaluation",
      "Freedom-to-operate analysis",
      "Valuation support insights",
    ],
  },
];

export const Solutions = () => {
  const [activeTab, setActiveTab] = useState("innovation");
  const [direction, setDirection] = useState(0);

  function handleTabChange(newTab: string) {
    const oldIndex = solutions.findIndex((s) => s.id === activeTab);
    const newIndex = solutions.findIndex((s) => s.id === newTab);

    setDirection(newIndex > oldIndex ? 1 : -1);
    setActiveTab(newTab);
  }

  return (
    <section className="py-20 md:py-32 bg-secondary/30 relative overflow-hidden dark:text-white/90">
      {/* 🔹 GRID + GLOW BACKGROUND (VISIBLE) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Soft color glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.22),transparent_55%),radial-gradient(circle_at_bottom,rgba(45,212,191,0.06),transparent_55%)]" />

        {/* Grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.25)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.25)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-60 mix-blend-soft-light dark:mix-blend-normal" />
      </div>

      <div className="container px-4 relative z-10">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 dark:text-white/90">
            Comprehensive Solutions for{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Every Challenge
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Drive growth through insights that matter
          </p>
        </div>

        {/* Solutions tabs */}
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="innovation" value={activeTab} className="w-full">
            {/* Tab Buttons */}
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 h-auto gap-2 bg-transparent">
              {solutions.map((solution) => (
                <TabsTrigger
                  key={solution.id}
                  value={solution.id}
                  onClick={() => handleTabChange(solution.id)}
                  className="
                    flex flex-col items-center gap-2 py-4 px-2
                    data-[state=active]:bg-card
                    data-[state=active]:shadow-md
                    rounded-xl border border-transparent
                    data-[state=active]:border-accent/20
                    dark:data-[state=active]:shadow-[0_0_12px_rgba(255,255,255,0.07)]
                  "
                >
                  <solution.icon className="h-5 w-5 text-foreground dark:text-white/90" />
                  <span className="text-xs font-medium text-center text-foreground dark:text-white/85">
                    {solution.label}
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Sliding Animated Content */}
            {solutions.map((solution) => (
              <TabsContent key={solution.id} value={solution.id} className="mt-8">
                <AnimatePresence mode="wait" custom={direction}>
                  {activeTab === solution.id && (
                    <motion.div
                      key={solution.id}
                      custom={direction}
                      initial={{ opacity: 0, x: 60 * direction }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -60 * direction }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                    >
                      <Card className="border-border bg-card p-8 md:p-12">
                        <div className="grid gap-8 md:grid-cols-2 items-center">
                          {/* Content */}
                          <div>
                            <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-accent/10 text-accent mb-6">
                              <solution.icon className="h-8 w-8" />
                            </div>

                            <h3 className="text-2xl md:text-3xl font-bold text-foreground dark:text-white/90 mb-4">
                              {solution.title}
                            </h3>

                            <p className="text-muted-foreground dark:text-white/60 mb-6 leading-relaxed">
                              {solution.description}
                            </p>

                            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                              Learn More
                            </Button>
                          </div>

                          {/* Features */}
                          <div className="space-y-3">
                            {solution.features.map((feature, index) => (
                              <div
                                key={index}
                                className="
                                  flex items-start gap-3 p-4 rounded-lg
                                  bg-secondary/50 border border-border/50
                                  transition-all hover:bg-secondary hover:border-accent/30
                                "
                              >
                                <div className="mt-0.5 h-2 w-2 rounded-full bg-accent flex-shrink-0" />
                                <span className="text-sm text-foreground dark:text-white/85">
                                  {feature}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  )}
                </AnimatePresence>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};
