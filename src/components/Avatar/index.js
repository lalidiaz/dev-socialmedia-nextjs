import styles from "./avatar.module.scss";

const Avatar = ({ avatar, alt, text }) => {
  console.log(avatar);
  return (
    <div className={styles.avatarContainer}>
      <img src={avatar} className={styles.image} alt={alt} title={alt} />
      {text && <strong>{text}</strong>}
    </div>
  );
};

export default Avatar;
