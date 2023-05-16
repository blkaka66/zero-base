import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import { handleLike } from './LikeAction';
import { useRecoilValue } from 'recoil';
import { idAtom } from '../state/login';
import {addComment} from './addComment';

interface Post {
  title: string;
  content: string;
  createdBy: string;
  docId: string;
  like: number;
  disLike: number;
  likeActionBy: string[];
  comments: { [uid: string]: string };

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
    comments: {},
  });
  const [commentInput, setCommentInput] = useState("");

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
          alert('삭제된 페이지입니다');
        }
      });

    }
  }, [commentInput]);
  
  

  const handleLikeClick = async (type: "like" | "disLike") => {
    await handleLike(boardName, post, setPost, ID, type);
  };

  const addCommentClick = async () => {
    await addComment(boardName, post, setPost, ID,commentInput);
    setCommentInput('');
  };
  return (
    <>
      <div>{post.title}</div>
      <div>{post.content}</div>

      {Object.entries(post.comments).map(([uid, comment]) => (
  <div key={uid}>
    
    <ul>
      {Object.entries(comment).map(([nestedUid, nestedComment]) => (
        <li key={nestedUid}>
          <p>{nestedUid}:{nestedComment}</p>
          //////////
        </li>
      ))}
    </ul>
  </div>
))}



      <div>
      <button onClick={() => handleLikeClick("like")}>{post.like}Like</button>
      <button onClick={() => handleLikeClick("disLike")}>{post.disLike}Dislike</button>
      <input type="text"  placeholder="댓글을 입력하세요" value={commentInput} onChange={(e) => setCommentInput(e.target.value)}/>
      <button onClick={() => addCommentClick()}>댓글 </button>
      </div>
    </>
  );
}

export default Content;
