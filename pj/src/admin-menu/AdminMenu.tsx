import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { useState } from 'react';

import { addBoard } from '../makeContent/WriteContent';
import { useRecoilValue } from 'recoil';
import { nickNameAtom } from '../state/login';
interface BoardData {
  content: string;
  createdBy: string;
  title: string;
  nickName:string;
  like:number;
  disLike:number;
}


//firebaseStart();
//왜 여기서 initializeApp을 한번 더해야만 오류가 안나지?
const db = firebase.firestore();





function AdminMenu() {
  const [boardName, setBoardName] = useState("");
  const NickName = useRecoilValue(nickNameAtom);
  const [boardData, setBoardData] = useState<BoardData>({
    content: "",
    createdBy: "",
    title: "",
    nickName:"",
    like:0,
    disLike:0,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();
    addBoard(boardName, boardData,NickName);
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
     
      <button type="submit">Create board</button>
    </form>
  );
}

export default AdminMenu;
