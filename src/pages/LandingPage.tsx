import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Button } from "../components/app-ui/Button";
import Card from "../components/app-ui/Card";
import Carousel from "../components/app-ui/Carousel";

interface Product {
  id: number | null;
  title: string | null;
  price: number | null;
  description: string | null;
  category: string | null;
  image: string | null;
}

const LandingPage = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [carouselItems, setCarouselItems] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=16")
      .then((res) => res.json())
      .then((data: Product[]) => {
        setFeaturedProducts(data.slice(0, 16));
        setCarouselItems(
          data.slice(4, 16).map((product) => ({
            id: product.id,
            image: product.image,
            title: product.title,
            description: product.description,
            price: product.price,
            category: product.category,
          }))
        );
      });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-extrabold text-foreground mb-4 leading-tight">
          Descubra, Compre e Venda no{" "}
          <span className="text-primary">EcommerceApp</span>
        </h1>
        <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
          Sua plataforma completa para comprar e vender produtos únicos de forma
          fácil e segura.
        </p>
        <Button size="lg">Comece a Vender</Button>
      </motion.section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
          Produtos em Destaque
        </h2>
        <Carousel items={carouselItems} />
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
          Novidades
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Card
              key={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
              onBuy={() => console.log(`Comprar ${product.title}`)}
              onAddToCart={() =>
                console.log(`Adicionar ${product.title} ao carrinho`)
              }
            />
          ))}
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center bg-secondary rounded-lg p-8 shadow-lg"
      >
        <h2 className="text-3xl font-bold text-foreground mb-8">
          Por que escolher o EcommerceApp?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Venda Facilmente
            </h3>
            <p className="text-foreground/80">
              Liste seus produtos em minutos e alcance milhares de compradores.
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Compre com Segurança
            </h3>
            <p className="text-foreground/80">
              Transações seguras e proteção ao comprador garantida.
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Suporte 24/7
            </h3>
            <p className="text-foreground/80">
              Nossa equipe está sempre disponível para ajudar você.
            </p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default LandingPage;
