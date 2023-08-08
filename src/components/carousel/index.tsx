import { ProductCard, ProductCardProps } from "../productCard";
import styles from "./index.module.scss";

type CarouselProps = {
  color: string;
  products: Omit<ProductCardProps, "color">[];
};

export const Carousel = ({ color, products }: CarouselProps) => (
  <div className={styles.container}>
    {products.map((product) => (
      <ProductCard
        key={product.title}
        id={product.id}
        title={product.title}
        price={product.price}
        description={product.description}
        color={color}
      />
    ))}
  </div>
);
