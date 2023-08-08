import classNames from "classnames";
import { ReactNode } from "react";
import BackIcon from "../../images/icons/backArrow.svg";
import Logo from "../../images/logo.svg";
import { Filter } from "../filter";
import styles from "./index.module.scss";

type AppBarProps = {
  right?: ReactNode;
  content?: ReactNode;
  left?: ReactNode;
  withFilter?: boolean;
};

export const AppBar = ({
  content = "",
  left,
  right,
  withFilter = false,
}: AppBarProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={classNames(styles.left, { [styles.empty]: !left })}>
          {left}
        </div>
        <div className={styles.main}>{content}</div>
        {right && <div className={styles.right}>{right}</div>}
      </div>
      {withFilter && <Filter />}
    </div>
  );
};

const Back = () => {
  return (
    <button type="button">
      <BackIcon />
    </button>
  );
};

const Cancel = () => {
  return <button type="button">Cancelar</button>;
};

AppBar.Logo = Logo;
AppBar.Back = Back;
AppBar.Cancel = Cancel;
