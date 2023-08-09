import Link from "next/link";
import Friends from "../../images/icons/friends.svg";
import Home from "../../images/icons/home.svg";
import Lists from "../../images/icons/lists.svg";
import SingOut from "../../images/icons/singout.svg";
import styles from "./index.module.scss";

export const BottonNavigation = () => {
  return (
    <div className={styles.container}>
      <Link href="/">
        <Home />
      </Link>
      <Link href="/">
        <Lists />
      </Link>
      <Link href="/">
        <Friends />
      </Link>{" "}
      <Link href="/login">
        <SingOut />
      </Link>
    </div>
  );
};
