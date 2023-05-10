import { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';


import styles from "./Board.module.css"
import  {PostList} from '../main/MainPage';
import getData from '../getData/getData';


interface Post {
  title: string;
  content: string;
  createdBy: string;
  docId:string;
  like:number;
  disLike:number;
}


function Board(): JSX.Element {
  const boardName = useParams().boardName;
  const [boardData, setboardData] = useState<Post[]>([]);
  console.log(boardName);
  useEffect(() => {
    if(boardName !== undefined){
      getData(boardName).then((data) => setboardData(data));
    }
  }, [boardName]);
  console.log("^^^")
  console.log(boardData)
  return (
    <>
    <Link to={`/boards/${boardName}/write`}>글쓰기</Link>
    <PostList board={boardData} boardName={boardName ?? ""} />
    </>
  );
}

export default Board;