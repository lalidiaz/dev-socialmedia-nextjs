import DevTweet from "src/components/DevTweet";

const DevTweetPage = () => {
  return <DevTweet {...props} />;
};
export default DevTweetPage;

export async function getServerSideProps(context) {
  const { params, res } = context;
  const { id } = params;

  const apiResponse = await fetch(`http://localhost:3000/api/devtweets/${id}`);

  if (apiResponse.ok) {
    const props = await apiResponse.json();
    return {
      props: props,
    };
  }
  if (res) {
    res.writeHead(301, { location: "/home" }).end();
  }
}
