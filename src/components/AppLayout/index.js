import styles from "./applayout.module.scss";

const AppLayout = ({ children }) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>{children}</main>
    </div>
  );
};
export default AppLayout;
