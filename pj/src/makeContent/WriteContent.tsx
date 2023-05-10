import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import {  useRecoilValue } from 'recoil';
import { nickNameAtom } from '../state/login';
import { firebaseStart } from '../firebase/InitFirebase';
interface BoardData {
    content: string;
    createdBy: string;
    title: string;
    nickName:string;
    like:number;
    disLike:number;
  }

const db = firebase.firestore();

export const addBoard = async (boardName: string, boardData: BoardData, NickName: string) => {
    try {
      await new Promise<void>((resolve, reject) => {
        const unsubscribe = firebase.auth().onAuthStateChanged(user => {
          if (user) {
            unsubscribe();
            resolve();
          } else {
            console.log("waiting for auth state...");
          }
        });
      });
  
      const user = firebase.auth().currentUser!;
      const createdBy = user.uid;
      const board = db.collection("boards").doc(boardName).collection(boardName);
      await board.add({
        ...boardData,
        nickName: NickName,
        createdBy: createdBy,
      });
      console.log(`Board in ${boardName} created successfully.`);
    } catch (error) {
      console.error('Error:', error);
    }
  };


function WriteContent() {

    const boardName = useParams().boardName;
    const NickName = useRecoilValue(nickNameAtom);
    const [boardData, setBoardData] = useState<BoardData>({
        content: "",
        createdBy: "",
        title: "",
        like:0,
        disLike:0,
        nickName:"",
        });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(boardName !== undefined)
        {
            addBoard(boardName, boardData,NickName);
        }
        
      };
       
  return (
    <form onSubmit={handleSubmit}>
        <input
        type="text"
        placeholder="게시글 제목"
        value={boardData.title}
        onChange={(e) => setBoardData({ ...boardData, title: e.target.value })}
        />
        <input
        type="text"
        placeholder="게시글 내용"
        value={boardData.content}
        onChange={(e) => setBoardData({ ...boardData, content: e.target.value })}
        />
        <button type="submit">글 올리기</button>
  </form>
  )
}

export default WriteContent