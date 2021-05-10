import styles from "./devtweet.module.scss";
import AppLayout from "components/AppLayout";
import AppButton from "components/AppButton";
import useUser from "hooks/useUser.js";
import { useState } from "react";

const DevTweet = () => {
  const user = useUser();
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    setMessage(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault;
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
