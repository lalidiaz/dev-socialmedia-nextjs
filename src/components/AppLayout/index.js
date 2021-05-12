import styles from "./applayout.module.scss";
import Nav from "src/components/Nav";

const AppLayout = ({ children }) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {children}
        <Nav />
      </main>
    </div>
  );
};
export default AppLayout;
