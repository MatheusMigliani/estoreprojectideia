import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect } from "react";
import { motion } from "motion/react";
//import { AnimatePresence } from "motion/react";
import "./embla.css";

interface CarouselProps {
  items: {
    id: number | null;
    image: string | null;
    title: string | null;
    description: string | null;
  }[];
}

export function EmblaCarousel({ items }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
    }
  }, [emblaApi, items]);

  return (
    <div
      className="embla relative w-full h-96 overflow-hidden rounded-lg"
      ref={emblaRef}
    >
      <div className="embla__container h-full">
        {items.map((item) => (
          <div key={item.id} className="embla__slide relative flex-[0_0_100%]">
            <motion.img
              src={item.image || "/placeholder.svg"}
              alt={item.title || ""}
              className="absolute w-full h-full object-contain"
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
              <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
              <p className="text-sm">{item.description}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
