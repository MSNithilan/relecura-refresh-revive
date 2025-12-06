import { useState } from "react";
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
    title: "From Patent to Profit: The Role of AI in Identifying Lucrative Market Opportunities",
  },
];

export const BlogCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideDirection, setSlideDirection] = useState<"left" | "right">("right");

  const getVisiblePosts = () => {
    const prev = (currentIndex - 1 + blogPosts.length) % blogPosts.length;
    const next = (currentIndex + 1) % blogPosts.length;
    return [
      { ...blogPosts[prev], position: "left" },
      { ...blogPosts[currentIndex], position: "center" },
      { ...blogPosts[next], position: "right" },
    ];
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSlideDirection("left");
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + blogPosts.length) % blogPosts.length);
      setIsAnimating(false);
    }, 300);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSlideDirection("right");
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % blogPosts.length);
      setIsAnimating(false);
    }, 300);
  };

  const visiblePosts = getVisiblePosts();

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Recent Blog Posts
          </h2>
          <p className="text-muted-foreground text-lg">
            Make faster, better technology decisions with Relecura
          </p>
        </div>

        <div className="relative flex items-center justify-center gap-4 md:gap-8">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-0 z-10 text-4xl md:text-5xl font-light text-muted-foreground hover:text-foreground transition-colors duration-300 select-none"
          >
            ‹
          </button>

          {/* Carousel Items */}
          <div className="flex items-center justify-center gap-4 md:gap-6 overflow-hidden px-12 md:px-20">
            {visiblePosts.map((post, index) => (
              <div
                key={`${post.title}-${index}`}
                className={`transition-all duration-500 ease-out ${
                  post.position === "center"
                    ? "scale-100 opacity-100 z-10"
                    : "scale-75 opacity-50 z-0 hidden md:block"
                } ${
                  isAnimating
                    ? slideDirection === "right"
                      ? "translate-x-[-20px]"
                      : "translate-x-[20px]"
                    : "translate-x-0"
                }`}
              >
                <div className={`${
                  post.position === "center" 
                    ? "w-[360px] md:w-[520px] lg:w-[600px]" 
                    : "w-[180px] md:w-[260px] lg:w-[300px]"
                }`}>
                  <div className={`overflow-hidden rounded-xl shadow-lg transition-all duration-500 ${
                    isAnimating ? "scale-95" : "scale-100"
                  } hover:shadow-xl`}>
                    <img
                      src={post.image}
                      alt={post.title}
                      className={`w-full object-cover transition-all duration-500 ${
                        post.position === "center" 
                          ? "h-56 md:h-72 lg:h-80" 
                          : "h-40 md:h-52 lg:h-60"
                      } ${isAnimating ? "scale-105" : "scale-100 hover:scale-105"}`}
                    />
                  </div>
                  {post.position === "center" && (
                    <div className={`mt-4 transition-all duration-300 ${
                      isAnimating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
                    }`}>
                      <p className="text-primary font-medium text-sm mb-2">
                        {post.date}
                      </p>
                      <h3 className="text-foreground font-semibold text-lg leading-tight">
                        {post.title}
                      </h3>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-0 z-10 text-4xl md:text-5xl font-light text-muted-foreground hover:text-foreground transition-colors duration-300 select-none"
          >
            ›
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {blogPosts.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-primary w-6"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
