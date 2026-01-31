import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 170_000_000, label: "Total Records", suffix: "M+" },
  { value: 81_000_000, label: "Assignment Transactions", suffix: "M+" },
  { value: 5800, label: "Trusted Users", suffix: "+" },
  { value: 160, label: "Jurisdictions", suffix: "+" },
];

function formatValue(value: number, suffix: string) {
  if (suffix === "M+") {
    return `${Math.floor(value / 1_000_000)}M+`;
  }
  return `${value.toLocaleString()}${suffix}`;
}

export const HeroStats = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const duration = 2000;
    const startTime = performance.now();

    function animate(now: number) {
      const progress = Math.min((now - startTime) / duration, 1);

      setCounts(stats.map((stat) => Math.floor(stat.value * progress)));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }, [hasStarted]);

  return (
    <div ref={containerRef} className="mt-12">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 justify-items-center">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className="
              group
              flex flex-col items-center justify-center
              rounded-full
              w-32 h-32
              sm:w-36 sm:h-36
              md:w-40 md:h-40
              border
              transition-all duration-300

              border-white/25
              text-white
              hover:border-accent
              hover:shadow-[0_0_30px_rgba(56,189,248,0.55)]
            "
          >
            <span className="text-2xl md:text-3xl font-bold tracking-tight">
              {formatValue(counts[i], stat.suffix)}
            </span>
            <span className="mt-2 text-[10px] md:text-xs uppercase tracking-widest opacity-70 text-center">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
