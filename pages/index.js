import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { loginWithGithub } from "src/firebase/client";
import useUser, { USER_STATES } from "src/hooks/useUser.js";
import styles from "styles/style.module.scss";
import AppButton from "src/components/AppButton";
import Github from "src/components/Icons/Github";
import Nav from "src/components/Nav";

export default function Home() {
  const user = useUser();
  const router = useRouter();

  useEffect(() => {
    user && router.replace("/home");
  }, [user]);

  const handleClick = () => {
    loginWithGithub().catch((err) => console.log(err));
  };

  return (
    <>
      <Head>
        <title>Dev's social 🌻</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={styles.section}>
        <img className={styles.image} src="/plant.png" />
        <h1 className={styles.h1}>Dev's social media</h1>
        <h2 className={styles.h2}>Talk about code with developers</h2>
        <div className={styles.btnContainer}>
          {user === USER_STATES.NOT_LOGGED && (
            <AppButton onClick={handleClick}>
              <Github width={24} height={24} />
              Log in with Github
            </AppButton>
          )}
          {user === USER_STATES.NOT_KNOWN && <img src={"./dog.gif"} />}
        </div>
      </section>
    </>
  );
}
