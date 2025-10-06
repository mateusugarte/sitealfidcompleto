import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    image: "https://f005.backblazeb2.com/file/VEICULOS/alfd/ALF+ID.png",
    title: "Atendimento humanizado e online",
  },
  {
    image: "https://f005.backblazeb2.com/file/VEICULOS/alfd/ALF+ID+(2).png",
    title: "É seu primeiro certificado? Tem desconto também, confira",
  },
  {
    image: "https://f005.backblazeb2.com/file/VEICULOS/alfd/ALF+ID+(1).png",
    title: "Renove já seu certificado digital e ganhe descontos exclusivos",
  },
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative overflow-hidden rounded-2xl shadow-2xl max-w-md mx-auto">
      <div 
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full relative">
            <img 
              src={slide.image}
              alt={slide.title}
              className="w-full h-[450px] md:h-[350px] object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end">
              <div className="p-6 text-white">
                <h3 className="text-xl font-bold">{slide.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <Button
        variant="ghost"
        size="icon"
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-primary rounded-full p-3 shadow-lg transition-all"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      
      <Button
        variant="ghost"
        size="icon"
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-primary rounded-full p-3 shadow-lg transition-all"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}
