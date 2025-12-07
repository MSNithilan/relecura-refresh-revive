// AiPlatformSection.tsx
import { Lightbulb, Gauge, Clock3 } from "lucide-react";

export const Description = () => {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Soft color glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.06),transparent_55%),radial-gradient(circle_at_bottom,rgba(45,212,191,0.06),transparent_55%)]" />

        {/* Grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.25)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.25)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-60 mix-blend-soft-light dark:mix-blend-normal" />
      </div>

      <div className="container px-4">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-start">
          {/* Left: main copy */}
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-primary mb-3 uppercase">
              Platform Overview
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              AI Platform for{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Innovation Intelligence
              </span>
            </h2>

            <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
              Relecura helps innovation teams evaluate ideas and technologies
              thoroughly—without slowing them down. Automate the heavy lifting
              of prior-art review, technical and commercial assessment, and IP
              due diligence, so experts can stay focused on strategy.
            </p>

            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              By combining domain-aware language models with a rich IP
              knowledge graph, the platform surfaces patterns, risks, and
              opportunities that are difficult to spot with manual research
              alone.
            </p>
          </div>

          {/* Right: “at a glance” cards */}
          <div className="grid gap-4">
            <div className="rounded-2xl border border-border/70 bg-card/80 backdrop-blur-sm p-4 md:p-5 flex gap-4">
              <div className="mt-1 rounded-xl bg-primary/10 p-2">
                <Lightbulb className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-sm md:text-base text-foreground mb-1">
                  Capture & refine ideas
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  Turn raw ideas into structured concepts with AI-assisted
                  summaries, clustering, and novelty checks.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-border/70 bg-card/80 backdrop-blur-sm p-4 md:p-5 flex gap-4">
              <div className="mt-1 rounded-xl bg-accent/10 p-2">
                <Gauge className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-sm md:text-base text-foreground mb-1">
                  Deeper, consistent analysis
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  Standardize evaluations across technologies, markets, and
                  portfolios with reusable AI-driven workflows.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-border/70 bg-card/80 backdrop-blur-sm p-4 md:p-5 flex gap-4">
              <div className="mt-1 rounded-xl bg-emerald-500/10 p-2">
                <Clock3 className="h-5 w-5 text-emerald-400" />
              </div>
              <div>
                <h3 className="font-semibold text-sm md:text-base text-foreground mb-1">
                  Free up expert time
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  Automate repetitive review work so subject-matter experts can
                  focus on strategy, partnerships, and high-value decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
