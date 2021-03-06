import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDyXq4z8rfvyG5o057K8XE4MICQC5ck63Y",
  authDomain: "devs-social-media-nextjs.firebaseapp.com",
  projectId: "devs-social-media-nextjs",
  storageBucket: "devs-social-media-nextjs.appspot.com",
  messagingSenderId: "763975632918",
  appId: "1:763975632918:web:25ee51fe5d9471b8378d37",
  measurementId: "G-KV2K8K7T7V",
};

!firebase.apps.length && firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const mapUserFromFirebaseAuthToUser = (user) => {
  const { displayName, email, photoURL, uid } = user;
  return {
    avatar: photoURL,
    username: displayName,
    email,
    uid,
  };
};

export const onAuthStateChanged = (onChange) => {
  return firebase.auth().onAuthStateChanged((user) => {
    const normalizedUser = user ? mapUserFromFirebaseAuthToUser(user) : null;
    onChange(normalizedUser);
  });
};

export const loginWithGithub = () => {
  const githubProvider = new firebase.auth.GithubAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(githubProvider)
    .then(mapUserFromFirebaseAuthToUser);
};

export const addDevtweet = ({ avatar, content, userId, userName, img }) => {
  return db.collection("devtweets").add({
    avatar,
    content,
    userId,
    userName,
    createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
    likesCount: 0,
    sharedCount: 0,
    img,
  });
};

export const mapDevtweetFromFirebaseToDevtweetObj = (doc) => {
  const data = doc.data();
  const id = doc.id;
  const { createdAt } = data;

  return {
    ...data,
    id,
    createdAt: +createdAt.toDate(),
  };
};

export const listenLatestDevtweets = (callback) => {
  return db
    .collection("devtweets")
    .orderBy("createdAt", "desc")
    .onSnapshot(({ docs }) => {
      const newDevtweets = docs.map((doc) =>
        mapDevtweetFromFirebaseToDevtweetObj(doc)
      );
      callback(newDevtweets);
    });
};

export const uploadImage = (file) => {
  const ref = firebase.storage().ref(`images/${file.name}`);
  const task = ref.put(file);
  return task;
};
