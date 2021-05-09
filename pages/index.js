import Head from "next/head";
import AppLayout from "../components/AppLayout";
import AppButton from "../components/AppButton";
import styles from "../styles/Home.module.scss";
import Github from "../components/Icons/Github";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dev's social ☕️</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppLayout>
        <section className={styles.section}>
          <img className={styles.image} src="/logo.png" />
          <h1 className={styles.h1}>Dev's social media</h1>
          <h2 className={styles.h2}>Talk about code with developers!</h2>
          <div className={styles.btnContainer}>
            <AppButton>
              <Github width={24} height={24} />
              Login with github
            </AppButton>
          </div>
        </section>
      </AppLayout>
    </div>
  );
}
