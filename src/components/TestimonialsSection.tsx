import React from "react";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

interface TestimonialProps {
  name: string;
  photo: string;
  rating: number;
  quote: string;
}

interface TestimonialsSectionProps {
  testimonials?: TestimonialProps[];
  title?: string;
  subtitle?: string;
}

const TestimonialsSection = ({
  testimonials = [
    {
      name: "Sarah Johnson",
      photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
      rating: 5,
      quote:
        "The garden at Villa Eco Green is absolutely stunning! We spent hours relaxing among the tropical plants and enjoying the peaceful atmosphere.",
    },
    {
      name: "Michael Chen",
      photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
      rating: 5,
      quote:
        "The outdoor pool was the highlight of our stay. It's perfectly maintained and surrounded by beautiful greenery - a true oasis!",
    },
    {
      name: "Emma Rodriguez",
      photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=emma",
      rating: 4,
      quote:
        "Our hosts were incredibly friendly and helpful. They made us feel like family and gave us great tips for exploring the local area.",
    },
    {
      name: "David Patel",
      photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=david",
      rating: 5,
      quote:
        "The proximity to the airport made this the perfect first stop on our Sri Lankan adventure. Just 15 minutes away but feels like a peaceful retreat!",
    },
  ],
  title = "What Our Guests Say",
  subtitle = "Hear from travelers who have experienced the Villa Eco Green difference",
}: TestimonialsSectionProps) => {
  // Function to render stars based on rating
  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, index) => (
        <Star
          key={index}
          className={`h-4 w-4 ${index < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
        />
      ));
  };

  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/3 pl-4"
              >
                <div className="bg-green-50 border border-green-100 rounded-lg p-6 h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <img
                        src={testimonial.photo}
                        alt={`${testimonial.name}'s profile`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {testimonial.name}
                      </h3>
                      <div className="flex mt-1">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                  </div>
                  <blockquote className="italic text-gray-700 flex-grow">
                    "{testimonial.quote}"
                  </blockquote>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8">
            <CarouselPrevious className="static translate-y-0 mr-2" />
            <CarouselNext className="static translate-y-0 ml-2" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
