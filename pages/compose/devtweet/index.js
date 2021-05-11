import styles from "./devtweet.module.scss";
import AppLayout from "src/components/AppLayout";
import AppButton from "src/components/AppButton";
import useUser from "src/hooks/useUser.js/index.js";
import { useState } from "react";
import { addDevtweet } from "src/firebase/client";



const DevTweet = () => {
  const user = useUser();
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    setMessage(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addDevtweet({
      avatar: user.avatar,
      content: message,
      userId: user.uid,
      userName: user.username,
    });
  };

  return (
    <AppLayout>
      <form onSubmit={handleSubmit}>
        <textarea
          onChange={handleChange}
          className={styles.textarea}
          placeholder="What's going on?"
          value={message}
        ></textarea>
        <div className={styles.div}>
          <AppButton disabled={message.length === 0}>DevTweet</AppButton>
        </div>
      </form>
    </AppLayout>
  );
};
export default DevTweet;
