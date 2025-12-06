import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
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
    setCurrentIndex((prev) => (prev - 1 + blogPosts.length) % blogPosts.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % blogPosts.length);
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
          <Button
            variant="outline"
            size="icon"
            onClick={handlePrev}
            className="absolute left-0 z-10 h-12 w-12 rounded-full border-border/50 bg-background/80 backdrop-blur-sm hover:bg-background shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          {/* Carousel Items */}
          <div className="flex items-center justify-center gap-4 md:gap-6 overflow-hidden px-16">
            {visiblePosts.map((post, index) => (
              <div
                key={`${post.title}-${index}`}
                className={`transition-all duration-500 ease-out ${
                  post.position === "center"
                    ? "scale-100 opacity-100 z-10"
                    : "scale-75 opacity-60 z-0 hidden md:block"
                }`}
              >
                <div className={`${
                  post.position === "center" 
                    ? "w-[320px] md:w-[400px]" 
                    : "w-[200px] md:w-[280px]"
                }`}>
                  <div className="overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:shadow-xl">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 md:h-64 object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  {post.position === "center" && (
                    <div className="mt-4">
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
          <Button
            variant="outline"
            size="icon"
            onClick={handleNext}
            className="absolute right-0 z-10 h-12 w-12 rounded-full border-border/50 bg-background/80 backdrop-blur-sm hover:bg-background shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
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
