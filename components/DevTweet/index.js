import styles from "./devtweet.module.scss";
import Avatar from "components/Avatar";

const DevTweet = ({ username, id, avatar, message }) => {
  return (
    <article key={id} className={styles.article}>
      <div className={avatar.container}>
        <Avatar alt={username} avatar={avatar} />
      </div>
      <section>
        <p className={styles.p}>{username}</p>
        <p className={styles.p}>{message}</p>
      </section>
    </article>
  );
};
export default DevTweet;
