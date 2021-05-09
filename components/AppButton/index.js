import styles from "./appbutton.module.scss";

const AppButton = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className={styles.btn}>
      {children}
    </button>
  );
};
export default AppButton;
