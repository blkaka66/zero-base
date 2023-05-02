import { useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import React from 'react';

const firebaseConfig = {
  apiKey: "AIzaSyBSN1kHlm3FAXLB423cMC65ydljGKCNK0w",
  authDomain: "my-first-project-9dc23.firebaseapp.com",
  projectId: "my-first-project-9dc23",
  storageBucket: "my-first-project-9dc23.appspot.com",
  messagingSenderId: "368595372011",
  appId: "1:368595372011:web:f012d2babae32cdba77bae",
  measurementId: "G-C1XE4JGN3J"
};

const registerMembers = async (email: string, password: string, NickName: string) => {
  try {
    // Create a new user with the given email and password
    const userCredential = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    const userId = userCredential.user?.uid;

    // Add the user's details to Firestore
    await firebase.firestore().collection("members").doc(userId!).set({
      NickName:NickName,
      email: email,
    });

    console.log("Member registered successfully!");
  } catch (error) {
    console.log("Error registering member: ", error);
  }
};

function FirebaseInit() : JSX.Element{
  useEffect(() => {
    try {
      console.log("FirebaseInit: Initializing Firebase...");
      firebase.initializeApp(firebaseConfig);
     

      console.log("FirebaseInit: Auth initialized");
      console.log("FirebaseInit: Firestore initialized");

      // Do something with auth and firestore

    } catch (error) {
      console.log("FirebaseInit: Error initializing Firebase: ", error);
    }

    // Clean up function
    
  }, [firebaseConfig]);

   

  return (
    <></>
  );
}


export { FirebaseInit, registerMembers };
