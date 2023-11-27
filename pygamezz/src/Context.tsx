import { createContext } from 'react';
import { FirebaseApp } from 'firebase/app';
import { Firestore } from 'firebase/firestore/lite';

interface FirebaseContextProps {
  firebaseApp: FirebaseApp | null;
  firestore: Firestore | null;
}


const FirebaseContext = createContext<FirebaseContextProps>({
  firebaseApp: null,
  firestore: null,
});


export default FirebaseContext;