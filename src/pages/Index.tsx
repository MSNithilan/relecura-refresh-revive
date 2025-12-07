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
    <div className="min-h-screen">
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
