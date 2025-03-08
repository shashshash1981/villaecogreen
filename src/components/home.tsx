import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import HighlightsSection from "./HighlightsSection";
import PropertyDescription from "./PropertyDescription";
import TestimonialsSection from "./TestimonialsSection";
import Footer from "./Footer";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <HighlightsSection />
        <PropertyDescription />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
