import { useRouter } from "next/router";
import { useState } from "react";
import styles from "./index.module.scss";

export const Lists = () => {
  const router = useRouter();
  const [disable, setDisable] = useState(false);

  const lists = [
    {
      id: "1",
      title: "Bebidas e petiscos",
    },
    {
      id: "2",
      title: "Presentes",
    },
    {
      id: "3",
      title: "BImperdível",
    },
    {
      id: "4",
      title: "Feira",
    },
    {
      id: "5",
      title: "Para casa",
    },
    {
      id: "6",
      title: "Congelados",
    },
  ];

  const handleClick = (e: any) => {
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
          onClick={(e) => handleClick(e)}
          disabled={disable}
        >
          {list.title}
        </button>
      ))}
    </div>
  );
};
