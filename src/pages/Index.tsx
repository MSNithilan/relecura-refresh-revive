import neuralBg from "@/assets/nn_x04.mp4";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ValueProposition } from "@/components/ValueProposition";
import { VideoShowcase } from "@/components/VideoShowcase";
import { Solutions } from "@/components/Solutions";
import { Description } from "@/components/Description";
import { Testimonials } from "@/components/Testimonials";
import { BlogCarousel } from "@/components/BlogCarousel";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* ✅ GLOBAL BACKGROUND VIDEO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="
          fixed inset-0
          w-full h-full
          object-cover
          -z-50
          opacity-100
          dark:opacity-80
        "
      >
        <source src={neuralBg} type="video/mp4" />
      </video>

      {/* ✅ GLOBAL CONTRAST OVERLAY (important for light mode readability) */}
      <div
        className="
          fixed inset-0
          -z-40
          bg-white/80
          dark:bg-background/70
        "
      />

      {/* ✅ PAGE CONTENT */}
      <Navbar />
      <Hero />
      <ValueProposition />
      <VideoShowcase />
      <Solutions />
      <Description />
      <Testimonials />
      <BlogCarousel />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
