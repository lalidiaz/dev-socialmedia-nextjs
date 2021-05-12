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

  const apiResponse = await fetch(`http://localhost:3000/api/devtweets/${id}`);
  if (apiResponse.ok) {
    const props = await apiResponse.json();
    return { props };
  }
}

export default DevTweetPage;
