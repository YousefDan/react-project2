import { Link } from "react-router-dom";
import ListGroup from "../common/ListGroup";
import MoviesTable from "../common/MoviesTable";
import Pagination from "../common/Pagination";

const Movies = () => {
  return (
    <div className="row">
      <div className="col-12 col-md-3 mt-4">
          <ListGroup />
      </div>
      <div className="col-12 col-md-9">
        <Link to="/movies/add" className="btn btn-secondary my-4" >Add Movie</Link>
        <MoviesTable />
        <Pagination />
      </div>
    </div>
  );
};

export default Movies;
