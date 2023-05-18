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


  const [searchResult, setSearchResult] = useState<Post[]>([]); 
  useEffect(() => {
    if (boardName !== undefined) {
      getData(boardName).then((data) => setBoardData(data));
    }
  }, [boardName]);


  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = boardData.slice(indexOfFirstPost, indexOfLastPost);


  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const searchContentAction = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    const upperValue= value.toUpperCase();
    if(upperValue.length>0){
     
      const searchResult = searchContent(upperValue,boardData);
      setSearchResult(searchResult);
      console.log(searchResult)
    }

  }
  return (
    <>
      <input 
        type="contentTitle"
        placeholder="검색"
        onKeyUp={searchContentAction}
        className=""
      />
      
      {searchResult.length > 0 && (
            <ul className={boardStyles.list}>
              {searchResult.map((board) => (
           
                <Link to={`/boards/${boardName}/${board.docId}`} state={board} className={boardStyles.searchResult} key={board.docId}>{board.title}</Link>
         
              ))}
            </ul>
        )}
 




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

function searchContent(value:string,boardData:any){
  const searchResult = boardData.filter((data:any) => data.title.toUpperCase().indexOf(value) !==-1).slice(0, 5);
  return searchResult;
}

export default Board;
