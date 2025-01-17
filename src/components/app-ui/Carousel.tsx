import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./Button";

interface CarouselProps {
  items: {
    id: number | null;
    image: string | null;
    title: string | null;
    description: string | null;
  }[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  if (items.length === 0) {
    return <div>No items to display</div>;
  }

  return (
    <div className="relative w-full h-96 overflow-hidden rounded-lg">
      {items[currentIndex] && (
        <AnimatePresence initial={false} custom={currentIndex}>
          <motion.img
            key={currentIndex}
            src={items[currentIndex].image || "/placeholder.svg"}
            alt={items[currentIndex].title || "/placeholder.svg"}
            className="absolute w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
          <motion.div
            className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent text-white"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-2">
              {items[currentIndex].title}
            </h3>
            <p className="text-sm">{items[currentIndex].description}</p>
          </motion.div>
        </AnimatePresence>
      )}
      <Button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
        size="icon"
      >
        <ChevronLeft size={24} />
      </Button>
      <Button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
        size="icon"
      >
        <ChevronRight size={24} />
      </Button>
    </div>
  );
};

export default Carousel;
