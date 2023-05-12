import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import { db } from "./content";
import { useRecoilValue } from 'recoil';
import { idAtom } from "../state/login";
interface Post {
    title: string;
    content: string;
    createdBy: string;
    docId: string;
    like: number;
    disLike: number;
    likeActionBy:string[],
  }

const handleLike = async (boardName: string,post:Post,setPost:any,ID:string) => {
    if (boardName !== undefined) {
        console.log(ID);
        
    if(post.likeActionBy.includes(ID))
    {
        alert("이미 눌렀습니다");
        return;
    }
      try {
        await db
          .collection('boards')
          .doc(boardName)
          .collection(boardName)
          .doc(post.docId)
          .update({
            like: firebase.firestore.FieldValue.increment(1),
            likeActionBy:firebase.firestore.FieldValue.arrayUnion(ID)
          });
          setPost((prevPost: { like: number; likeActionBy:string[]; }) => ({
            ...prevPost,
            like: prevPost.like + 1,
            likeActionBy: prevPost.likeActionBy.includes(ID) ? prevPost.likeActionBy : [...prevPost.likeActionBy, ID]
          }));
      } catch (error) {
        console.error('Error updating post:', error);
      }
    }
    console.log(post);
  };

  const handleDislike = async (boardName: string,post:Post,setPost:any,ID:string) => {
    if (boardName !== undefined) {
        console.log(ID);

        if(post.likeActionBy.includes(ID))
        {
            alert("이미 눌렀습니다");
            return;
        }

      try {
        await db
          .collection('boards')
          .doc(boardName)
          .collection(boardName)
          .doc(post.docId)
          .update({
            disLike: firebase.firestore.FieldValue.increment(1),
            likeActionBy: firebase.firestore.FieldValue.arrayUnion(ID)
          });
          setPost((prevPost: { disLike: number; likeActionBy:string[]; }) => ({
            ...prevPost,
            disLike: prevPost.disLike + 1,
            likeActionBy: prevPost.likeActionBy.includes(ID) ? prevPost.likeActionBy : [...prevPost.likeActionBy, ID]
          }));
       
      } catch (error) {
        console.error('Error updating post:', error);
      }
    }
   
  };
  
  export{handleLike,handleDislike};