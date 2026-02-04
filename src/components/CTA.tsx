import { Button } from "@/components/ui/button";
import { PhoneCall, MessageCircle } from "lucide-react";

export const CTA = () => {
  return (
    <section className="relative py-16 md:py-20">
      {/* Glow + grid background (sits behind content, but above raw page) */}
      <div
        className="
          container px-4
        "
      >
        <div
          className="
            relative overflow-hidden rounded-3xl border border-border/60
            bg-gradient-to-r from-primary/90 via-primary to-accent/90
            dark:from-[#020817] dark:via-[#02131f] dark:to-[#0b3334]
            shadow-lg
          "
        >
          {/* Soft glow + grid */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(148,243,255,0.15),transparent_55%),radial-gradient(circle_at_90%_100%,rgba(74,184,178,0.25),transparent_55%)]" />
            <div className="absolute inset-0 opacity-30 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem]" />
          </div>

          {/* Content */}
          <div className="relative flex flex-col gap-8 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-10 lg:px-14 lg:py-12">
            {/* Text block */}
            <div className="max-w-xl">
              <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-white/70 uppercase">
                Talk to our team
              </p>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight text-white/90">
                Connect with our{" "}
                <span className="bg-gradient-to-r from-[#8BE2DE] via-[#4AB8B2] to-[#7dd3fc] bg-clip-text text-transparent">
                  Specialists
                </span>
              </h2>
              <p className="mt-4 text-sm md:text-base text-white/80">
                Our professional services team can help you get the most out of
                the Relecura platform—through onboarding, training, and
                tailored support for your innovation workflows.
              </p>
            </div>

            {/* Actions card */}
            <div
              className="
                w-full max-w-sm rounded-2xl bg-white/90 text-slate-900
                dark:bg-black/70 dark:text-white/90
                backdrop-blur-md border border-white/40 dark:border-white/10
                shadow-[0_18px_60px_rgba(15,23,42,0.55)]
                p-5 md:p-6
              "
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <PhoneCall className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
                    Call us directly
                  </p>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white/90">
                    +1 650 218 5745
                  </p>
                </div>
              </div>

              <p className="mb-5 text-xs text-slate-600 dark:text-slate-300">
                Or share your details and we’ll schedule a session with an
                innovation specialist.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  className="
                    flex-1
                    bg-[#4AB8B2] hover:bg-[#3da39d]
                    text-slate-950 font-semibold
                    shadow-[0_0_30px_rgba(74,184,178,0.45)]
                  "
                  size="lg"
                >
                  Get free trial
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="
                    flex-1 border-slate-300/70 text-slate-800
                    hover:bg-slate-100
                    dark:border-slate-600 dark:text-slate-100 dark:hover:bg-slate-800/70
                    flex items-center justify-center gap-2
                  "
                >
                  <MessageCircle className="h-4 w-4" />
                  Contact sales
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
