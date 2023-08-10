import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.scss";

export type ProductCardProps = {
  id: string;
  color: string;
  image: string;
  title: string;
  description: string;
  price: number;
};

export const ProductCard = ({
  color,
  id,
  image,
  description,
  price,
  title,
}: ProductCardProps) => (
  <div className={styles.container}>
    <Image
      className={styles.image}
      src={image}
      alt="Arroz"
      width={158}
      height={104}
    />
    <div className={styles.texts}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <strong className={styles.price}>
        {price.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </strong>
    </div>
    <Link
      href={`/addToList?id=${id}`}
      className={styles.button}
      style={{ backgroundColor: color }}
    >
      + Colocar na Lista
    </Link>
  </div>
);
