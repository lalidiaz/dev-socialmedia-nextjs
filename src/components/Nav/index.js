import Link from "next/link";
import styles from "./nav.module.scss";
import { FaPencilAlt } from "react-icons/fa";
import { RiHome2Fill } from "react-icons/ri";
import { FaCat } from "react-icons/fa";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/home">
        <a className={styles.a}>
          <RiHome2Fill size={20} />
        </a>
      </Link>
      <Link href="/surprise">
        <a className={styles.a}>
          <FaCat size={20} />
        </a>
      </Link>
      <Link href="/compose/devtweet">
        <a className={styles.a}>
          <FaPencilAlt size={20} />
        </a>
      </Link>
    </nav>
  );
};

export default Nav;
