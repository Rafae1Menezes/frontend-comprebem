import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.scss";
import { Product } from "@/models/entities/Product";

export type ProductCardProps = {
  color: string;
  product: Product;
};

export const ProductCard = ({ color, product }: ProductCardProps) => (
  <div className={styles.container}>
    <Image
      className={styles.image}
      src={"/images/" + product.photo}
      alt={product.name}
      width={158}
      height={104}
    />
    <Image
      src={"/images/" + product.owner.user.photo}
      alt="logo"
      width={100}
      height={17}
      className={styles.logo}
    />
    <div className={styles.texts}>
      <h3 className={styles.title}>{product.name}</h3>
      <p className={styles.description}>{product.description}</p>
      <strong className={styles.price}>
        {Number(product.price).toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </strong>
    </div>
    <Link
      href={`/addToList?id=${product.id}`}
      className={styles.button}
      style={{ backgroundColor: color }}
    >
      + Colocar na Lista
    </Link>
  </div>
);
