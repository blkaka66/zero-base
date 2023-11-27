import React, { createContext, useContext, useEffect, useState } from 'react';
import { FirebaseApp, initializeApp } from 'firebase/app';
import { Firestore, getFirestore } from 'firebase/firestore/lite';
import FirebaseContext from './Context';





function InitFireBase({ children }): JSX.Element  {

  const [firebaseApp, setFirebaseApp] = useState<FirebaseApp | null>(null);
  const [firestore, setFirestore] = useState<Firestore | null>(null);

  useEffect(() => {
    const firebaseConfig = {
      apiKey: "AIzaSyC7Ff_4Qn75dG2rdlPvrnu6LJO0wIMoiwI",
      authDomain: "pygamez-6d8f8.firebaseapp.com",
      projectId: "pygamez-6d8f8",
      storageBucket: "pygamez-6d8f8.appspot.com",
      messagingSenderId: "1067674094322",
      appId: "1:1067674094322:web:4d8265d90766f3850b9e6b",
      measurementId: "G-H4R9408CP4"
    };

    // Firebase 앱 초기화
    const initializeFirebase = async () => {
      const app = initializeApp(firebaseConfig);
      const db = getFirestore(app);
       setFirebaseApp(app );
      setFirestore(db);
    };
    
    initializeFirebase();

  }, []); 

  return (
    <FirebaseContext.Provider value={{ firebaseApp: firebaseApp!, firestore: firestore! }}>
    {children}
    </FirebaseContext.Provider>
  
  
  );
  
}

export default InitFireBase