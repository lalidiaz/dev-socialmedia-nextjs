import styles from "./devtweet.module.scss";
import Avatar from "src/components/Avatar";
import useTimeAgo from "src/hooks/useTimeAgo";

const DevTweet = ({ userName, id, avatar, content, createdAt }) => {
  const timeago = useTimeAgo(createdAt);

  return (
    <article key={id} className={styles.article}>
      <div className={avatar.container}>
        <Avatar alt={userName} avatar={avatar} />
      </div>
      <section className={styles.text}>
        <header className={styles.header}>
          <span className={styles.username}>{userName}</span>
          <span> • </span>
          <date>{timeago}</date>
        </header>

        <p className={styles.message}>{content}</p>
      </section>
    </article>
  );
};
export default DevTweet;
