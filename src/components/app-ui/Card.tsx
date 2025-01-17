import { motion } from "motion/react";
import { Button } from "./Button";

interface CardProps {
  image: string | null;
  title: string | null;
  price: number | null;
  onBuy: () => void;
  onAddToCart: () => void;
}

const Card = ({ image, title, price, onBuy, onAddToCart }: CardProps) => {
  return (
    <motion.div
      className="bg-card text-card-foreground rounded-lg shadow-md overflow-hidden"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <img
        src={image || "/placeholder.svg"}
        alt={title || ""}
        className="w-full h-60 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-xl font-bold mb-4">
          R$ {price?.toFixed(2) || "0.00"}
        </p>
        <div className="flex justify-between">
          <Button onClick={onBuy} variant="accent" size="sm">
            Comprar
          </Button>
          <Button onClick={onAddToCart} variant="outline" size="sm">
            Adicionar ao Carrinho
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
