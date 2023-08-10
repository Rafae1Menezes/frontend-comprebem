import { ProductCard, ProductCardProps } from "../productCard";
import styles from "./index.module.scss";

type CarouselProps = {
  color: string;
  products: Omit<ProductCardProps, "color">[];
};

export const Carousel = ({ color, products }: CarouselProps) => (
  <div className={styles.container}>
    {products.map((product) => (
      <ProductCard key={product.title} {...product} color={color} />
    ))}
  </div>
);
