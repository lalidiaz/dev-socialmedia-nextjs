import styles from "./surprise.module.scss";
import Head from "next/head";

const Surprise = () => {
  return (
    <>
      <Head>
        <title>Surprise</title>
      </Head>

      <section className={styles.section}>
        <img src="./cat.gif" className={styles.img} />
        <h3 className={styles.cat}>Opss, nothing to see here!</h3>
      </section>
    </>
  );
};

export default Surprise;
