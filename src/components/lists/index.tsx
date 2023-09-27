import { useRouter } from "next/router";
import { useState } from "react";
import styles from "./index.module.scss";
import { ShoppingList } from "@/models/entities/ShoppingList";
import axios from "@/config/axios";

type ListsProps = {
  lists: ShoppingList[];
  productId: number;
};

export const Lists = ({ lists, productId }: ListsProps) => {
  const router = useRouter();
  const [disable, setDisable] = useState(false);

  const handleClick = (e: any, listId: number) => {
    try {
      const response = axios.get<ShoppingList[]>("/shopping-lists/user/" + 1);

      axios.post(`/shopping-lists/${listId}/products`, {
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
