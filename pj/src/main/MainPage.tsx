
import 'firebase/compat/firestore';
import { firebaseStart } from "../firebase/InitFirebase";
import { useEffect, useState } from "react";
import getData from "../getData/getData";
import { Link } from "react-router-dom";

//여기서 firebaseStart이거 한번 더 호출해야지만 에러가 안떠요
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
  const limitedPosts = board.slice(0, 10); 
  return (
    <div>


    <Link to={`/boards/${boardName}`}> {boardName} 게시판 </Link>
      {limitedPosts.map((post) => (
        <ul key={post.docId}> 
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
