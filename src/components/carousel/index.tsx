import { Product } from "@/models/entities/Product";
import { ProductCard, ProductCardProps } from "../productCard";
import styles from "./index.module.scss";

type CarouselProps = {
  color: string;
  products: Product[];
};

export const Carousel = ({ color, products }: CarouselProps) => (
  <div className={styles.container}>
    {products.map((product) => (
      <ProductCard key={product.name} product={product} color={color} />
    ))}
  </div>
);
