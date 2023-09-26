import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.scss";
import { Product } from "@/models/entities/Product";

export type ProductCardProps = {
  color: string;
} & Product;

export const ProductCard = ({
  color,
  id,
  photo,
  description,
  price,
  name,
}: ProductCardProps) => (
  <div className={styles.container}>
    <Image
      className={styles.image}
      src={"/images/" + photo}
      alt={name}
      width={158}
      height={104}
    />
    <div className={styles.texts}>
      <h3 className={styles.title}>{name}</h3>
      <p className={styles.description}>{description}</p>
      <strong className={styles.price}>
        {Number(price).toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
        x
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
