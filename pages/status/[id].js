import DevTweet from "src/components/DevTweet";
import styles from "./id.module.scss";

const DevTweetPage = (props) => {
  return (
    <div className={styles.devTweetContainer}>
      <DevTweet {...props} />
    </div>
  );
};

export async function getServerSideProps(context) {
  const { params, res } = context;
  const { id } = params;

  const apiResponse = await fetch(
    `http://devtweeter.vercel.app/api/devtweets/${id}`
  );
  console.log({ apiResponse });
  if (apiResponse.ok) {
    const props = await apiResponse.json();
    console.log({ props });
    return { props };
  }
}

export default DevTweetPage;
