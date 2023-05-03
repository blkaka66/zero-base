import { useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBSN1kHlm3FAXLB423cMC65ydljGKCNK0w",
  authDomain: "my-first-project-9dc23.firebaseapp.com",
  projectId: "my-first-project-9dc23",
  storageBucket: "my-first-project-9dc23.appspot.com",
  messagingSenderId: "368595372011",
  appId: "1:368595372011:web:f012d2babae32cdba77bae",
  measurementId: "G-C1XE4JGN3J"
};



function FirebaseInit() : JSX.Element{
  useEffect(() => {
    try {
      
      firebase.initializeApp(firebaseConfig);
      console.log("firebase 시작");
      
   
    


    } catch (error) {
      console.log("firebase 멈춤 ", error);
    }

  
    
  }, []);

  
  return (
    <></>
  );
}

function firebaseStart(){
  firebase.initializeApp(firebaseConfig);
}
export { FirebaseInit ,firebaseStart};
