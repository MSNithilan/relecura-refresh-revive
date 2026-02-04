import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import blog1 from "@/assets/blog-1.png";
import blog2 from "@/assets/blog-2.png";
import blog3 from "@/assets/blog-3.png";

const blogPosts = [
  {
    image: blog1,
    date: "Sep 18, 2025",
    title: "Relecura Promotes Modassar Ather to Director of Engineering",
  },
  {
    image: blog2,
    date: "May 07, 2025",
    title: "MaxVal Integrates Relecura's Advanced AI Capabilities into Symphony",
  },
  {
    image: blog3,
    date: "Nov 05, 2024",
    title:
      "From Patent to Profit: The Role of AI in Identifying Lucrative Market Opportunities",
  },
];

// Framer Motion variants
const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 150 : -150,
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -150 : 150,
    opacity: 0,
    scale: 0.95,
  }),
};

export const BlogCarousel = () => {
  const [[index, direction], setIndex] = useState<[number, number]>([0, 0]);
  const [hasInteracted, setHasInteracted] = useState(false);

  const post = blogPosts[index];

  // 🔁 Auto-rotate every 2s (stops after interaction)
  useEffect(() => {
    if (hasInteracted) return;

    const interval = setInterval(() => {
      setIndex(([i]) => [(i + 1) % blogPosts.length, 1]);
    }, 2000);

    return () => clearInterval(interval);
  }, [hasInteracted]);

  const markInteraction = () => {
    if (!hasInteracted) setHasInteracted(true);
  };

  const goTo = (newIndex: number) => {
    if (newIndex === index) return;
    markInteraction();

    const dir = newIndex > index ? 1 : -1;
    setIndex([
      ((newIndex % blogPosts.length) + blogPosts.length) % blogPosts.length,
      dir,
    ]);
  };

  const goNext = () => {
    markInteraction();
    setIndex(([i]) => [(i + 1) % blogPosts.length, 1]);
  };

  const goPrev = () => {
    markInteraction();
    setIndex(([i]) => [(i - 1 + blogPosts.length) % blogPosts.length, -1]);
  };

  return (
    <section
      className="
        relative
        py-20
      "
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Recent Blog Posts
          </h2>
          <p className="text-muted-foreground text-lg">
            Make faster, better technology decisions with Relecura
          </p>
        </div>

        {/* Carousel */}
        <div className="relative flex items-center justify-center">
          {/* Left Arrow */}
          <button
            onClick={goPrev}
            className="absolute left-0 md:left-10 text-4xl md:text-5xl font-light text-muted-foreground hover:text-foreground transition-colors duration-300 select-none"
          >
            ‹
          </button>

          {/* Slide */}
          <div className="w-full max-w-3xl mx-auto overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.div
                key={index}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="flex flex-col items-center"
              >
                <div className="w-full rounded-2xl shadow-lg overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-72 md:h-80 lg:h-96 object-cover"
                  />
                </div>

                <div className="mt-4 text-center max-w-2xl min-h-[90px]">
                  <p className="text-primary font-medium text-sm mb-2">
                    {post.date}
                  </p>
                  <h3 className="text-foreground font-semibold text-lg md:text-xl leading-tight">
                    {post.title}
                  </h3>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Arrow */}
          <button
            onClick={goNext}
            className="absolute right-0 md:right-10 text-4xl md:text-5xl font-light text-muted-foreground hover:text-foreground transition-colors duration-300 select-none"
          >
            ›
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {blogPosts.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index
                  ? "bg-primary w-6"
                  : "bg-muted-foreground/30 w-2 hover:bg-muted-foreground/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
