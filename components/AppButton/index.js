import styles from "./appbutton.module.scss";

const AppButton = ({ children, onClick, disabled }) => {
  return (
    <button onClick={onClick} className={styles.btn} disabled={disabled}>
      {children}
    </button>
  );
};
export default AppButton;
