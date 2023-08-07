import classnames from "classnames";
import { PropsWithChildren } from "react";
import styles from "./index.module.scss";

type ContainerType = {
  small?: boolean;
} & PropsWithChildren;

export const Container = ({ children, small }: ContainerType) => (
  <div
    className={classnames(styles.container, {
      [styles.container__small]: small,
    })}
  >
    {children}
  </div>
);
