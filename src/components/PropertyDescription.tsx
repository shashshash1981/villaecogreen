import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { Leaf } from "lucide-react";

interface PropertyDescriptionProps {
  priceRange?: string;
  description?: string;
  ecoFeatures?: string[];
  amenities?: string[];
}

const PropertyDescription = ({
  priceRange = "$16-$18 per night",
  description = "Villa Eco Green is a peaceful homestay nestled in lush gardens, offering a tranquil retreat just 15 minutes from Bandaranaike International Airport. Our eco-friendly property features comfortable rooms, a serene outdoor pool, and authentic Sri Lankan hospitality. Perfect for travelers seeking a relaxing stay before or after their flight, or as a base to explore the beauty of Sri Lanka.",
  ecoFeatures = [
    "Solar-powered water heating",
    "Organic garden",
    "Rainwater harvesting",
    "Natural ventilation",
    "Locally sourced materials",
  ],
  amenities = [
    "Outdoor swimming pool",
    "Free WiFi",
    "Airport shuttle service",
    "Garden views",
    "Complimentary breakfast",
    "Air conditioning",
  ],
}: PropertyDescriptionProps) => {
  return (
    <section className="w-full py-16 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Price and Description Column */}
          <div className="flex-1">
            <Card className="h-full bg-white border-green-100 shadow-md">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Leaf className="h-5 w-5 text-green-600" />
                  <CardTitle className="text-2xl text-green-800">
                    About Villa Eco Green
                  </CardTitle>
                </div>
                <CardDescription className="text-lg font-medium text-green-600">
                  {priceRange}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {description}
                </p>
                <Button
                  variant="default"
                  className="bg-green-600 hover:bg-green-700 text-white"
                >
                  Book Your Stay
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Features and Amenities Column */}
          <div className="flex-1">
            <Card className="h-full bg-white border-green-100 shadow-md">
              <CardHeader>
                <CardTitle className="text-2xl text-green-800">
                  Eco-Friendly Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="mb-8 space-y-2">
                  {ecoFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Leaf className="h-4 w-4 text-green-600" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <CardTitle className="text-2xl text-green-800 mb-4">
                  Amenities
                </CardTitle>
                <ul className="space-y-2">
                  {amenities.map((amenity, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-green-600"></div>
                      <span className="text-gray-700">{amenity}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyDescription;
