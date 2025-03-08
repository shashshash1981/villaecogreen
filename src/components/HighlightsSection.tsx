import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { MapPin, Droplets, Home } from "lucide-react";

interface HighlightProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  learnMoreHref?: string;
}

const Highlight = ({
  icon = <Home className="h-10 w-10 text-green-600" />,
  title = "Feature Title",
  description = "Description of this amazing feature that makes our homestay special.",
  learnMoreHref = "#",
}: HighlightProps) => {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100">
      <div className="mb-4 p-3 bg-green-50 rounded-full">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a
        href={learnMoreHref}
        className="text-green-600 hover:text-green-700 font-medium text-sm inline-flex items-center"
      >
        Learn More
        <svg
          className="w-4 h-4 ml-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </a>
    </div>
  );
};

interface HighlightsSectionProps {
  title?: string;
  subtitle?: string;
  highlights?: HighlightProps[];
}

const HighlightsSection = ({
  title = "Why Choose Villa Eco Green",
  subtitle = "Experience the perfect blend of comfort, nature, and convenience at our peaceful homestay",
  highlights = [
    {
      icon: <Home className="h-10 w-10 text-green-600" />,
      title: "Peaceful Homestay",
      description:
        "Enjoy a tranquil atmosphere in our family-run homestay surrounded by lush greenery and natural beauty.",
      learnMoreHref: "#peaceful-homestay",
    },
    {
      icon: <Droplets className="h-10 w-10 text-green-600" />,
      title: "Outdoor Pool",
      description:
        "Relax and unwind in our serene outdoor swimming pool, perfect for cooling off after a day of exploration.",
      learnMoreHref: "#outdoor-pool",
    },
    {
      icon: <MapPin className="h-10 w-10 text-green-600" />,
      title: "Airport Proximity",
      description:
        "Just a short drive from Bandaranaike International Airport, making arrivals and departures convenient and stress-free.",
      learnMoreHref: "#airport-proximity",
    },
  ],
}: HighlightsSectionProps) => {
  return (
    <section
      className="py-16 px-4 bg-green-50"
      style={{ backgroundColor: "#f0f9f0" }}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <Highlight
              key={index}
              icon={highlight.icon}
              title={highlight.title}
              description={highlight.description}
              learnMoreHref={highlight.learnMoreHref}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
