import styles from "./devtweet.module.scss";
import Avatar from "src/components/Avatar";
import useTimeAgo from "src/hooks/useTimeAgo";
import Link from "next/link";
import { useRouter } from "next/router";

const DevTweet = ({ userName, id, avatar, content, createdAt, img }) => {
  const timeago = useTimeAgo(createdAt);
  const router = useRouter();

  const handleArticleClick = (e) => {
    e.preventDefault();
    router.push(`/status/${id}`);
  };

  return (
    <article key={id} className={styles.article} onClick={handleArticleClick}>
      <div className={avatar.container}>
        <Avatar alt={userName} avatar={avatar} />
      </div>
      <section className={styles.text}>
        <header className={styles.header}>
          <span className={styles.username}>{userName}</span>
          <span> • </span>
          <Link href={`/status/${id}`}>
            <a className={styles.a}>
              <date>{timeago}</date>
            </a>
          </Link>
        </header>

        <p className={styles.message}>{content}</p>
        {img && <img src={img} className={styles.img} />}
      </section>
    </article>
  );
};
export default DevTweet;
