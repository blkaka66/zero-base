import 'firebase/compat/firestore';
import { useEffect, useState } from 'react';
import getData from '../getData/getData';
import { Link, useParams } from 'react-router-dom';
import { Pagination } from './pagination';
import { PostList } from '../mainPage/MainPage';
import boardStyles from './board.module.css'
import styles from "../mainPage/MainPage.module.css"
import { useRecoilValue } from 'recoil';
import { isLoggedInAtom } from '../state/login';

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
  const isLoggedIn = useRecoilValue(isLoggedInAtom);
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
      {isLoggedIn && <Link to={`/boards/${boardName}/write`} className={boardStyles.writeContent}>글쓰기</Link>}
      <div className={styles.mainPage}>
        <PostList board={currentPosts} boardName={boardName ?? ''} />
      </div>
      <Pagination 
        postsPerPage={postsPerPage}
        totalPosts={boardData.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </>
  );
}

export default Board;
