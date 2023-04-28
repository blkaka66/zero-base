import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
    apiKey: "AIzaSyBSN1kHlm3FAXLB423cMC65ydljGKCNK0w",
    authDomain: "my-first-project-9dc23.firebaseapp.com",
    projectId: "my-first-project-9dc23",
    storageBucket: "my-first-project-9dc23.appspot.com",
    messagingSenderId: "368595372011",
    appId: "1:368595372011:web:f012d2babae32cdba77bae",
    measurementId: "G-C1XE4JGN3J"
  };


firebase.initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
