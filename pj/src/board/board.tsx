import 'firebase/compat/firestore';
import { useEffect, useState } from 'react';
import getData from '../getData/getData';
import { Link, useParams } from 'react-router-dom';
import { Pagination } from './pagination';
import { PostList } from '../main/MainPage';

interface PostListProps {
  board: Post[];
  boardName: string;
}

interface Post {
  title: string;
  content: string;
  createdBy: string;
  docId: string;
  like: number;
  disLike: number;
}

function Board(): JSX.Element {
  const [boardData, setBoardData] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage] = useState<number>(10);

  const boardName = useParams().boardName;

  useEffect(() => {
    if (boardName !== undefined) {
      getData(boardName).then((data) => setBoardData(data));
    }
  }, [boardName]);

  // Pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = boardData.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <>
      <Link to={`/boards/${boardName}/write`}>글쓰기</Link>
      <PostList board={currentPosts} boardName={boardName ?? ''} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={boardData.length}
        paginate={paginate}
      />
    </>
  );
}

export default Board;
