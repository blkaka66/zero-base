import React, { useState, useEffect } from 'react';
import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import { handleLike } from './LikeAction';
import { useRecoilValue } from 'recoil';
import { idAtom } from '../state/login';
import {addComment, removeComment} from './commentAction';
import styles from './content.module.css'
import { nickNameAtom } from '../state/login';
interface Post {
  title: string;
  content: string;
  createdBy: string;
  docId: string;
  like: number;
  disLike: number;
  likeActionBy: string[];
  comments: { [uid: string]: { nickName: string, commentInput: string } };
}
export const db = firebase.firestore();
function Content(): JSX.Element {
  const documentId = useLocation().state.docId;
  const ID:string = useRecoilValue(idAtom);
  const nickName:string = useRecoilValue(nickNameAtom);
  const navigate = useNavigate();
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
          navigate(`/boards/${boardName}`);
        }
      });

    }
  }, [commentInput,ID]);
  
  

  const handleLikeClick = async (type: "like" | "disLike") => {
    await handleLike(boardName, post, setPost, ID,type,navigate);
  };

  const addCommentClick = async () => {
    await addComment(boardName, post, setPost, ID,nickName,commentInput);
    setCommentInput('');
    
  };

  const removeCommentClick = async (comment:string) => {

    await removeComment(boardName, post, setPost, ID,nickName,comment);
  };
  return (
    <>
      <div className={styles.title}>{post.title}</div>
      <div className={styles.content}>{post.content}</div>

<div  className={styles.commentBoard}>
      {Object.entries(post.comments).map(([uid, commentEntries]) => (
  <div key={uid}>
    <ul>
      {Object.entries(commentEntries).map(([nesteduid, nestedComment]) => (
        <div key={`${nesteduid}-${nestedComment}`}> 
          <li key={nesteduid}>
              <div className={styles.comment}>{nestedComment.nickName}: {nestedComment.commentInput}</div>
              {nesteduid === ID && <button onClick={() => removeCommentClick(nestedComment.commentInput)} className={styles.removeComment}>댓글 삭제</button>}
          </li>
       
        </div>
      ))}
    </ul>
  </div>
))}
</div>

      <div className={styles.buttons}>
        <button className={styles.like} onClick={() => handleLikeClick("like")}>{post.like} Like</button>
        <button className={styles.disLike}  onClick={() => handleLikeClick("disLike")}>{post.disLike} Dislike</button>
        <input type="text"  placeholder="댓글을 입력하세요" value={commentInput} onChange={(e) => setCommentInput(e.target.value)}/>
        <button onClick={() => addCommentClick()}>댓글올리기 </button>
      </div>
    </>
  );
}

export default Content;
