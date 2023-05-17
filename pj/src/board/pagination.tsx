import styles from './pagination.module.css'
import { Link } from 'react-router-dom';
interface PaginationProps {
    postsPerPage: number;
    totalPosts: number;
    currentPage:number;
    paginate: (pageNumber: number) => void;
  }
  
  export function Pagination({ postsPerPage, totalPosts, paginate,currentPage }: PaginationProps): JSX.Element {
    const pageNumbers = [];


    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      pageNumbers.push(i);
    }
  
    return (
      <nav className={styles.navigate}>
        <ul className={styles.pagination}>
          {pageNumbers.map((number) => (
            <li key={number} className={styles.pageItem}>
              {<Link onClick={() => paginate(number)} href="#;" className={currentPage === number ? styles.pageItemActive : styles.pageLink}>
                {number}
              </Link>}
            </li>
          ))}
        </ul>
      </nav>
    );
  }
  