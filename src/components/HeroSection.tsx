import React from "react";
import { Button } from "./ui/button";

interface HeroSectionProps {
  backgroundImage?: string;
  tagline?: string;
  buttonText?: string;
  onBookClick?: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  backgroundImage = "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1920&q=80",
  tagline = "Your Home Away from Home – Relax, Unwind, and Experience Sri Lanka",
  buttonText = "Book Your Stay",
  onBookClick = () => console.log("Book button clicked"),
}) => {
  return (
    <div className="relative w-full h-[600px] bg-green-50">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content Container */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 md:px-8 lg:px-16 max-w-5xl mx-auto">
        {/* Tagline */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
          {tagline}
        </h1>

        {/* Book Button */}
        <Button
          onClick={onBookClick}
          size="lg"
          className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-md text-lg transition-all transform hover:scale-105"
        >
          {buttonText}
        </Button>
      </div>

      {/* Decorative Elements - Leaf Patterns */}
      <div className="absolute bottom-0 left-0 w-24 h-24 md:w-32 md:h-32 opacity-70">
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10,90 Q50,10 90,50"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M20,80 Q60,20 80,60"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>

      <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 opacity-70 rotate-180">
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10,90 Q50,10 90,50"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M20,80 Q60,20 80,60"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
