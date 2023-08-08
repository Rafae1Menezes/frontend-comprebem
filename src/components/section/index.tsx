import { Carousel } from "../carousel";
import { ProductCardProps } from "../productCard";
import { Title } from "../title";
import styles from "./index.module.scss";

type SetionProps = {
  title: string;
  color: string;
  products: Omit<ProductCardProps, "color">[];
};

export const Section = ({ color, title, products }: SetionProps) => (
  <div className={styles.container}>
    <Title name={title} />
    <Carousel color={color} products={products} />
  </div>
);
