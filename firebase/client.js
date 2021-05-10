import firebase from "firebase/app";
import "firebase/auth";

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

const mapUserFromFirebaseAuthToUser = (user) => {
  const { displayName, email, photoURL } = user;
  return {
    avatar: photoURL,
    username: displayName,
    email,
  };
};

export const onAuthStateChanged = (onChange) => {
  return firebase.auth().onAuthStateChanged((user) => {
    const normalizedUser = mapUserFromFirebaseAuthToUser(user);
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
