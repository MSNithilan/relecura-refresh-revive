import { Card } from "@/components/ui/card";

const testimonials = [
  {
    name: "Olivia Brown",
    role: "Head of R&D",
    company: "Global Consulting Firm",
    quote:
      "A crucial aspect of research involves continuous refining of the results to narrow down on relevant and specific data. Relecura’s options of auto-generated reports and the ‘refine’ feature work wonders.",
  },
  {
    name: "Liam Johnson",
    role: "IP Director",
    company: "Fortune 100 Tech Company",
    quote:
      "The patentability search and landscape analysis paved the way for us to acquire the exact data we need, making informed business decisions in the least possible time.",
  },
  {
    name: "Robert Williams",
    role: "CEO",
    company: "Manufacturing & Supply Company",
    quote:
      "Relecura’s one-stop platform for patent search and analytics saves us a lot of time and resources while keeping our team aligned on the same insights.",
  },
];
export const Testimonials = () => {
  return (
    <section className="
    relative
    py-20 md:py-28
    rounded-3xl m-10

    bg-background/80
    backdrop-blur-s

    border-2 border-[#8BE2DE]
  ">
      <div className="container px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground mb-2">
            Customer Stories
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            What our customers are saying
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-20 md:grid-cols-3">
          {testimonials.map((t) => (
            <Card
              className="
                group relative h-full
                flex flex-col justify-between
                rounded-2xl border border-border/60
                bg-card/90 backdrop-blur-sm
                px-5 py-6
                transition-all duration-300 ease-out
                hover:-translate-y-2 hover:scale-[1.3]
                hover:border-accent/60
                hover:shadow-[0_18px_45px_rgba(15,23,42,0.25)]
                dark:hover:shadow-[0_18px_45px_rgba(15,23,42,0.8)]
              "
            >
              {/* Quote */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                “{t.quote}”
              </p>

              {/* Footer – social style */}
              <div className="flex items-center gap-3 pt-3 border-t border-border/60">
                <div className="h-9 w-9 rounded-full bg-accent/10 flex items-center justify-center text-xs font-semibold text-accent">
                  {t.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")}
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-foreground">
                    {t.name}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {t.role}, {t.company}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
