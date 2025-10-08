import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    title: "Stock Clearance",
    subtitle: "Stock Clearance Kerr",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=400&fit=crop",
  },
  {
    title: "Hahnenkratt® Mouth Mirrors",
    subtitle: "Premium Quality Instruments",
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&h=400&fit=crop",
  },
  {
    title: "Waterpik® Ultra Water Flosser",
    subtitle: "Advanced Oral Care",
    image: "https://images.unsplash.com/photo-1609840114035-3c981960afdd?w=800&h=400&fit=crop",
  },
  {
    title: "Prima Burs",
    subtitle: "Prima Carbide / Diamond Burs",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&h=400&fit=crop",
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[400px] overflow-hidden rounded-lg bg-muted">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent">
            <div className="container mx-auto px-4 h-full flex flex-col justify-center">
              <h2 className="text-4xl font-bold text-white mb-2">{slide.title}</h2>
              <p className="text-xl text-white/90">{slide.subtitle}</p>
            </div>
          </div>
        </div>
      ))}

      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white"
        onClick={prevSlide}
      >
        <ChevronLeft className="w-6 h-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white"
        onClick={nextSlide}
      >
        <ChevronRight className="w-6 h-6" />
      </Button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide ? "bg-white w-8" : "bg-white/50"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;