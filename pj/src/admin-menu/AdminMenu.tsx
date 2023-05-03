import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { useState } from 'react';
import { firebaseStart } from '../firebase/InitFirebase';
interface BoardData {
  content: string;
  createdBy: string;
  title: string;
}


firebaseStart();
//왜 여기서 initializeApp을 한번 더해야만 오류가 안나지?
const db = firebase.firestore();



const addBoard = async (boardName: string, boardData: BoardData) => {
  try {

     db.collection("boards").doc(boardName);
    const a = db.collection("boards").doc(boardName).collection(boardName);
    a.add(boardData);
    //await boardRef.set(boardData);
    console.log(`Board in ${boardName} created successfully.`);
  } catch (error) {
    console.error('에러:', error);
  }
};

function AdminMenu() {
  const [boardName, setBoardName] = useState("");
  const [boardData, setBoardData] = useState<BoardData>({
    content: "",
    createdBy: "",
    title: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addBoard(boardName, boardData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="게시글 주제"
        value={boardName}
        onChange={(e) => setBoardName(e.target.value)}
      />
      <input
        type="text"
        placeholder="게시글 내용"
        value={boardData.content}
        onChange={(e) => setBoardData({ ...boardData, content: e.target.value })}
      />
      <input
        type="text"
        placeholder="게시글 작성자"
        value={boardData.createdBy}
        onChange={(e) => setBoardData({ ...boardData, createdBy: e.target.value })}
      />
      <input
        type="text"
        placeholder="게시글 제목"
        value={boardData.title}
        onChange={(e) => setBoardData({ ...boardData, title: e.target.value })}
      />
      <button type="submit">Create board</button>
    </form>
  );
}

export default AdminMenu;
