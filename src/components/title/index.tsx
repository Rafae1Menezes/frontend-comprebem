import styles from "./index.module.scss";

type TitleProps = {
  name: string;
};

export const Title = ({ name }: TitleProps) => (
  <h2 className={styles.container}>{name}</h2>
);
