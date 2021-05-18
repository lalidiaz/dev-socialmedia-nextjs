import { useState, useEffect } from "react";
import Head from "next/head";
import useUser from "src/hooks/useUser";
import { listenLatestDevtweets } from "src/firebase/client";
import styles from "./homepage.module.scss";
import DevTweet from "src/components/DevTweet";
import { HiSparkles } from "react-icons/hi";

const HomePage = () => {
  const [timeline, setTimeline] = useState([]);
  const user = useUser();

  useEffect(() => {
    let unsuscribe;
    if (user) {
      unsuscribe = listenLatestDevtweets((newDevtweet) => {
        setTimeline(newDevtweet);
      });
    }
    return () => unsuscribe && unsuscribe();
  }, [user]);

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <header className={styles.header}>
        <h3 className={styles.h3}>Home</h3>
        <HiSparkles color="#e5e855" />
      </header>
      <section className={styles.section}>
        {timeline.map((devtweet) => {
          const { userName, id, avatar, content, userId, createdAt, img } =
            devtweet;

          return (
            <DevTweet
              key={id}
              id={id}
              userName={userName}
              content={content}
              avatar={avatar}
              userId={userId}
              createdAt={createdAt}
              img={img}
            />
          );
        })}
      </section>
    </>
  );
};
export default HomePage;
