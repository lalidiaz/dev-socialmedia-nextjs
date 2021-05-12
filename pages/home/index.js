import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";

import useUser from "src/hooks/useUser";
import { listenLatestDevtweets } from "src/firebase/client";

import styles from "./homepage.module.scss";

import DevTweet from "src/components/DevTweet";

import { HiSparkles } from "react-icons/hi";
import { FaPencilAlt } from "react-icons/fa";
import { RiHome2Fill } from "react-icons/ri";
import { BiSearchAlt } from "react-icons/bi";

const HomePage = () => {
  const [timeline, setTimeline] = useState([]);
  const user = useUser();

  useEffect(() => {
    if (user) {
      listenLatestDevtweets((newDevtweet) => {
        setTimeline(newDevtweet);
      });
    }
  }, [user]);

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <header className={styles.header}>
        <h3 className={styles.h3}>Home</h3>
        <HiSparkles />
      </header>
      <section className={styles.section}>
        {timeline.map((devtweet) => {
          const {
            userName,
            id,
            avatar,
            content,
            userId,
            createdAt,
            img,
          } = devtweet;
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
              img={img}
            />
          );
        })}
      </section>
      <nav className={styles.nav}>
        <Link href="/home">
          <a className={styles.a}>
            <RiHome2Fill size={20} />
          </a>
        </Link>
        <Link href="/search">
          <a className={styles.a}>
            <BiSearchAlt size={20} />
          </a>
        </Link>
        <Link href="/compose/devtweet">
          <a className={styles.a}>
            <FaPencilAlt size={20} />
          </a>
        </Link>
      </nav>
    </>
  );
};
export default HomePage;
