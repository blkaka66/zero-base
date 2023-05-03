import { isAdminAtom, isLoggedInAtom } from "../state/login";
import { useRecoilValue } from 'recoil';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { firebaseStart } from "../firebase/InitFirebase";
import { useEffect, useState } from "react";


firebaseStart();


interface Post {
  title: string;
  content: string;
  createdBy: string;
}


function MainPage(): JSX.Element {
  const [postsArray, setPostsArray] = useState<Post[]>([]);

  useEffect(() => {
    const db = firebase.firestore();
    const postsRef = db.collection("boards").doc("free").collection("free");

    postsRef.get().then((querySnapshot) => {
      const data:any = [];
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
      });
      setPostsArray(data);
    });
  }, []);

console.log(postsArray[0]);



  return (
    <div>
      {postsArray.map((post) => (
        <div key={post.title}>
          <h2>{post.createdBy}</h2>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          ---------
        </div>
      ))}
    </div>
  );
};

export default MainPage;
