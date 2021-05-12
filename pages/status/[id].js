import DevTweet from "src/components/DevTweet";

const DevTweetPage = (props) => {
  return <DevTweet {...props} />;
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
