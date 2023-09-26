import { useRouter } from "next/router";
import { useState } from "react";
import styles from "./index.module.scss";
import { ShoppingList } from "@/models/entities/ShoppingList";
import { useSession } from "next-auth/react";
import axios from "axios";

type ListsProps = {
  lists: ShoppingList[];
  productId: number;
};

export const Lists = ({ lists, productId }: ListsProps) => {
  const router = useRouter();
  const [disable, setDisable] = useState(false);

  const handleClick = (e: any, listId: number) => {
    try {
      axios.post(`http://localhost:4444/shopping-lists/${listId}/products`, {
        productId,
      });
    } catch (e) {
      console.log(e);
    }

    const button = e.target as HTMLButtonElement;

    button.classList.add(styles.checked);
    button.innerText = "Adicionado com Sucesso";
    setDisable(true);
    setTimeout(() => {
      router.push("/");
    }, 1000);
  };

  return (
    <div className={styles.container}>
      <h2>Escolha em qual lista adicionar</h2>
      {lists.map((list) => (
        <button
          className={styles.button}
          type="button"
          key={list.id}
          onClick={(e) => handleClick(e, list.id)}
          disabled={disable}
        >
          {list.name}
        </button>
      ))}
    </div>
  );
};
