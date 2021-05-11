import { useState, useEffect } from "react";

import styles from "./homepage.module.scss";
import AppLayout from "src/components/AppLayout";
import DevTweet from "src/components/DevTweet";
import { HiSparkles } from "react-icons/hi";
import useUser from "src/hooks/useUser";
import { fetchLatestDevtweets } from "src/firebase/client";

const HomePage = () => {
  const [timeline, setTimeline] = useState([]);
  const user = useUser();

  useEffect(() => {
    user && fetchLatestDevtweets().then(setTimeline);
  }, [user]);

  return (
    <AppLayout>
      <header className={styles.header}>
        <h3 className={styles.h3}>Home</h3>
        <HiSparkles />
      </header>
      <section className={styles.section}>
        {timeline.map((devtweet) => {
          const { userName, id, avatar, content, userId, createdAt } = devtweet;
          console.log({ devtweet });
          return (
            <DevTweet
              key={id}
              id={id}
              userName={userName}
              content={content}
              avatar={avatar}
              userId={userId}
              createdAt={createdAt}
            />
          );
        })}
      </section>
      <nav className={styles.nav}></nav>
    </AppLayout>
  );
};
export default HomePage;
