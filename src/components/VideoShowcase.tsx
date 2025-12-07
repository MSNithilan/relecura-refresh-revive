import { useState } from "react";
import { Play } from "lucide-react";
import { Card } from "@/components/ui/card";

export const VideoShowcase = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const videoUrl = "https://www.youtube.com/embed/jNl_pgt-g_Y";

  return (
    <section className="relative py-16 md:py-24 bg-background overflow-hidden">
      {/* 🔹 Grid background (behind everything, but clearly visible) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.05),transparent_55%),radial-gradient(circle_at_bottom,rgba(45,212,191,0.2),transparent_55%)]" />
      <div
        className="
          pointer-events-none
          absolute inset-0
          bg-[linear-gradient(to_right,rgba(148,163,184,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.15)_1px,transparent_1px)]
          bg-[size:4rem_4rem]
          opacity-60
          dark:opacity-40
        "
      />

      <div className="container px-4 relative z-10">
        <Card
          className="overflow-hidden border-border bg-card/80 backdrop-blur-sm
            dark:shadow-[0_0_25px_rgba(0,255,255,0.32),0_0_40px_rgba(255,255,255,0.35)]
            transition-shadow duration-300"
        >
          <div className="relative w-full aspect-[16/9]">
            {/* When playing: show iframe */}
            {isPlaying ? (
              <iframe
                className="absolute inset-0 h-full w-full"
                src={videoUrl}
                title="Relecura video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <>
                {/* Background image / gradient placeholder */}
                <div
                  className="
                    absolute inset-0
                    bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.15),transparent_55%),radial-gradient(circle_at_80%_60%,rgba(0,255,255,0.2),transparent_55%)]
                    bg-slate-900
                    bg-blend-overlay
                  "
                />
                {/* Optional overlay to darken for text */}
                <div className="absolute inset-0 bg-black/35" />

                {/* Content overlay */}
                <div className="relative z-10 flex h-full w-full items-center justify-center px-6">
                  <div className="flex flex-col items-center text-center gap-4 max-w-3xl">
                    <button
                      type="button"
                      onClick={() => setIsPlaying(true)}
                      className="
                        inline-flex items-center justify-center
                        h-20 w-20 rounded-full
                        bg-accent shadow-lg
                        hover:bg-accent/90
                        transition-transform duration-200 hover:scale-105
                      "
                    >
                      <Play className="h-10 w-10 text-accent-foreground ml-1" />
                    </button>

                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white/90">
                      Business Insights using{" "}
                      <span className="text-accent">
                        Relecura&apos;s Innovation Tools
                      </span>
                    </h3>
                    <p className="text-sm sm:text-base text-white/70 max-w-xl">
                      Watch how Relecura&apos;s AI-driven platform uncovers deep
                      insights from patents, technologies, and competitive landscapes.
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        </Card>
      </div>
    </section>
  );
};
