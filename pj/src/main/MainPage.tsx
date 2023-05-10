import { isAdminAtom, isLoggedInAtom } from "../state/login";
import { useRecoilValue } from 'recoil';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { firebaseStart } from "../firebase/InitFirebase";
import { useEffect, useState } from "react";
import getData from "../getData/getData";
import { Link, Navigate } from "react-router-dom";

firebaseStart();

interface PostListProps {
  board: Post[];
  boardName: string;
}

interface Post {
  title: string;
  content: string;
  createdBy: string;
  docId:string;
  like:number;
  disLike:number;
}


function MainPage(): JSX.Element {
  const [freePosts, setFreePosts] = useState<Post[]>([]);
  const [devPosts, setDevPosts] = useState<Post[]>([]);
  const [funPosts, setFunPosts] = useState<Post[]>([]);
  const [fashionPosts, setFashionPosts] = useState<Post[]>([]);

  useEffect(() => {
    getData("free").then((data) => setFreePosts(data));
    getData("development").then((data) => setDevPosts(data));
    getData("fashion").then((data) => setFashionPosts(data));
    getData("fun").then((data) => setFunPosts(data));
  }, []);




return(
    <>
      <PostList board={freePosts} boardName="free" />
      <PostList board={devPosts} boardName="development" />
      <PostList board={funPosts} boardName="fun" />
      <PostList board={fashionPosts} boardName="fashion" />

    </>
  );
};

function PostList({ board, boardName }: PostListProps): JSX.Element{

  return (
    <div>


    <Link to={`/boards/${boardName}`}> {boardName} 게시판 </Link>
      {board.map((post) => (
        <ul key={post.title}>
          <li>
           <Link to={`/boards/${boardName}/${post.docId}`} state={post}>{post.content}</Link>
          </li>
          --------
        </ul>
      ))}
     
  </div>
  );


}

export  {MainPage,PostList};
