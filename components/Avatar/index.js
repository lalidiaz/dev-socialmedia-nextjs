import styles from "./avatar.module.scss";

const Avatar = ({ avatar }) => {
  console.log(avatar);
  return (
    <div className={styles.avatarContainer}>
      <img src={avatar} className={styles.image} />
    </div>
  );
};

export default Avatar;
