import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import styles from "./devtweet.module.scss";

import AppLayout from "src/components/AppLayout";
import AppButton from "src/components/AppButton";
import useUser from "src/hooks/useUser.js";

import { addDevtweet, uploadImage } from "src/firebase/client";
import { COMPOSE_STATES, DRAG_IMAGE_STATE } from "src/utils/constants";

const DevTweet = () => {
  const user = useUser();
  const router = useRouter();
  const [status, setSatus] = useState(COMPOSE_STATES.USER_NOT_KNOWN);
  const [message, setMessage] = useState("");

  //Drag and drop
  const [drag, setDrag] = useState(DRAG_IMAGE_STATE.NONE);
  const [task, setTask] = useState(null);
  const [imgURL, setImgURL] = useState(null);

  useEffect(() => {
    if (task) {
      const onProgress = () => {};
      const onError = () => {};
      const onComplete = () => {};
      task.on("state_changed", onProgress, onError, onComplete);
    }
  }, [task]);

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

  const isButtonDisabled = !message.length || status === COMPOSE_STATES.LOADING;

  const handleDragEnter = (e) => {
    e.preventDefault();
    setDrag(DRAG_IMAGE_STATE.DRAG_OVER);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDrag(DRAG_IMAGE_STATE.NONE);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDrag(DRAG_IMAGE_STATE.NONE);
    const file = e.dataTransfer.files[0];

    const task = uploadImage(file);
    setTask(task);
  };

  return (
    <AppLayout>
      <Head>
        <title>Write a devtweet ✏️</title>
      </Head>
      <form onSubmit={handleSubmit}>
        <textarea
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
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
