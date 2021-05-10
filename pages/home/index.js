import { useState, useEffect } from "react";

import styles from "./homepage.module.scss";
import AppLayout from "components/AppLayout";
import DevTweet from "components/DevTweet";
import { HiSparkles } from "react-icons/hi";

const HomePage = () => {
  const [timeline, setTimeline] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/statuses/home_timeline").then((res) =>
      res.json().then(setTimeline)
    );
  }, []);

  return (
    <AppLayout>
      <header className={styles.header}>
        <h3 className={styles.h3}>Home</h3>
        <HiSparkles />
      </header>
      <section className={styles.section}>
        {timeline.map((devtweet) => {
          const { username, id, avatar, message } = devtweet;
          return (
            <DevTweet
              key={id}
              username={username}
              message={message}
              avatar={avatar}
            />
          );
        })}
      </section>
      <nav className={styles.nav}></nav>
    </AppLayout>
  );
};
export default HomePage;
