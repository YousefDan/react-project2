import { useContext } from "react";
import MovieContext from "../../store/context/movieContext";
import _ from "lodash";

const Pagination = () => {
  const { currentPage, pageSize, items, onPageHandler } = useContext(MovieContext);

  //Handle Paging
  const pageCount = Math.round(items / pageSize);
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);

  return (
    <ul className="pagination">
      {pages.map((page) => (
        <li
          key={page}
          onClick={() => onPageHandler(page)}
          style={{cursor: 'pointer'}}
          className={page === currentPage ? "page-item active" : "page-item"}
        >
          <span className="page-link"> {page} </span>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
