import styles from "./index.module.scss";

export const Lists = () => {
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

  return (
    <div className={styles.container}>
      <h2>Escolha em qual lista adicionar</h2>
      {lists.map((list) => (
        <button className={styles.button} type="button" key={list.id}>
          {list.title}
        </button>
      ))}
    </div>
  );
};
