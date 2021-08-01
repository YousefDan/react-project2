import { useContext } from "react";
import { Link } from "react-router-dom";
import MovieContext from "../../store/context/movieContext";
import Button from "../reuseable/Button";
import Like from "../reuseable/Like";

const MoviesTable = () => {
  //Data From Movie Context
  const {
    movies,
    onLikeHandler,
    onDeleteHandler,
    onGetDataFromTable,
    onSortHandler,
    sortObj,
  } = useContext(MovieContext);

  //Raise Sort
  const raiseSort = (path) => {
    const newSortObj = { ...sortObj };
    if (newSortObj.path === path) {
      newSortObj.order = newSortObj.order === "asc" ? "desc" : "asc";
    } else {
      newSortObj.path = path;
      newSortObj.order = "asc";
    }
    return onSortHandler(newSortObj);
  };
  //Handle Sort Icon
  const handleSortIcon = (path) => {
    if (sortObj.path !== path) return null;

    if (sortObj.order === "asc") {
      return <i className="fas fa-sort-up"></i>;
    } else {
      return <i className="fas fa-sort-down"></i>;
    }
  };
  
  return (
    <table className="table">
      <thead>
        <tr>
          <th onClick={() => raiseSort("title")}>
            Title {handleSortIcon("title")}
          </th>
          <th onClick={() => raiseSort("genre.name")}>
            Genre {handleSortIcon("genre.name")}
          </th>
          <th onClick={() => raiseSort("numberInStock")}>
            Stock {handleSortIcon("numberInStock")}
          </th>
          <th onClick={() => raiseSort("dailyRentalRate")}>
            Rate {handleSortIcon("dailyRentalRate")}
          </th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {movies.map((movie) => (
          <tr key={movie._id}>
            <td>
              <Link
                style={{ textDecoration: "none" }}
                onClick={() =>
                  onGetDataFromTable({
                    title: movie.title,
                    genre: movie.genre.name,
                    rate: movie.dailyRentalRate,
                    stock: movie.numberInStock,
                  })
                }
                to="movies/add"
              >
                {movie.title}
              </Link>
            </td>
            <td> {movie.genre.name} </td>
            <td> {movie.numberInStock} </td>
            <td> {movie.dailyRentalRate} </td>
            <td>
              <Like
                onLike={() => onLikeHandler(movie)}
                isLiked={movie.isLiked}
              />
            </td>
            <td>
              <Button
                onClick={() => onDeleteHandler(movie)}
                className="btn btn-danger btn-sm"
              >
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MoviesTable;
