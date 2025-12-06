import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ValueProposition } from "@/components/ValueProposition";
import { Solutions } from "@/components/Solutions";
import { BlogCarousel } from "@/components/BlogCarousel";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ValueProposition />
      <Solutions />
      <BlogCarousel />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
