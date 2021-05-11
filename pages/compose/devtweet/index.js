import { useState } from "react";
import { useRouter } from "next/router";

import styles from "./devtweet.module.scss";

import AppLayout from "src/components/AppLayout";
import AppButton from "src/components/AppButton";
import useUser from "src/hooks/useUser.js/index.js";

import { addDevtweet } from "src/firebase/client";
import { COMPOSE_STATES } from "src/utils/constants";

const DevTweet = () => {
  const user = useUser();
  const router = useRouter();
  const [status, setSatus] = useState(COMPOSE_STATES.USER_NOT_KNOWN);
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    setMessage(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSatus(COMPOSE_STATES.LOADING);
    addDevtweet({
      avatar: user.avatar,
      content: message,
      userId: user.uid,
      userName: user.username,
    })
      .then(() => {
        router.push("/home");
      })
      .catch((err) => {
        setSatus(COMPOSE_STATES.ERROR);
      });
  };

  const isButtonDisabled = !message.length && status === COMPOSE_STATES.LOADING;

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
          <AppButton disabled={isButtonDisabled}>DevTweet</AppButton>
        </div>
      </form>
    </AppLayout>
  );
};
export default DevTweet;
