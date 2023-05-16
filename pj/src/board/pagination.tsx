interface PaginationProps {
    postsPerPage: number;
    totalPosts: number;
    paginate: (pageNumber: number) => void;
  }
  
  export function Pagination({ postsPerPage, totalPosts, paginate }: PaginationProps): JSX.Element {
    const pageNumbers = [];
  
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      pageNumbers.push(i);
    }
  
    return (
      <nav>
        <ul className="pagination">
          {pageNumbers.map((number) => (
            <li key={number} className="page-item">
              <a onClick={() => paginate(number)} href="#;" className="page-link">
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
  