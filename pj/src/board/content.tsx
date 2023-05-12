import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import { handleDislike, handleLike } from './LikeAction';
import { useRecoilValue } from 'recoil';
import { idAtom } from '../state/login';

interface Post {
  title: string;
  content: string;
  createdBy: string;
  docId: string;
  like: number;
  disLike: number;
  likeActionBy: string[];

}
export const db = firebase.firestore();
function Content(): JSX.Element {
  const documentId = useLocation().state.docId;
  const ID:string = useRecoilValue(idAtom);
  console.log(ID);
  const boardName = useParams().boardName as string;
 const [post, setPost] = useState<Post>({
    title: '',
    content: '',
    createdBy: '',
    docId: '',
    like: 0,
    disLike: 0,
    likeActionBy:[],
  });

  useEffect(() => {
    if (boardName !== undefined) {
      const dataRef = db
        .collection('boards')
        .doc(boardName)
        .collection(boardName)
        .doc(documentId);
      dataRef.get().then((doc) => {
        if (doc.exists) {
          const postData = doc.data() as Post;
          setPost({ ...postData, docId: doc.id });
        } else {
          console.log('No such document!');
        }
      });
    }
  }, []);


  return (
    <>
      <div>{post.title}</div>
      <div>{post.content}</div>
      <div>
        <button onClick={() => handleLike(boardName,post,setPost,ID)}>{post.like} Like</button>
        <button onClick={() => handleDislike(boardName,post,setPost,ID)}>{post.disLike} Dislike</button>
      </div>
    </>
  );
}

export default Content;
