import MovieContext from "../context/movieContext";
import { useState, useEffect } from "react";
import { getMovies } from "../../services/fakeMovieService";
import { getGenres } from "../../services/fakeGenreService";
import { paginate } from "../../utilities/paginate";
import _ from "lodash";

const MovieProvider = (props) => {
  const [moviesArray, setMoviesArray] = useState([]);
  const [genres, setGenres] = useState([]);
  const [currentGenre, setCurrentGenre] = useState("All Genres");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(4);
  const [newMovie, setNewMovie] = useState(null);
  let [dataTable, setDataTable] = useState(null);
  const [sortObj, setSortObj] = useState({ path: 'title', order: "asc" });

  useEffect(() => {
    const movies = newMovie ? [newMovie, ...getMovies()] : [...getMovies()];
    setMoviesArray(movies);
    const genresArray = [{ id: "", name: "All Genres" }, ...getGenres()];
    setGenres(genresArray);
  }, [newMovie]);
  //Handle Like
  const likeHandler = (movie) => {
    const movies = [...moviesArray];
    let index = movies.indexOf(movie);
    movies[index].isLiked = !movies[index].isLiked;
    setMoviesArray(movies);
  };
  //Handle Delete
  const deleteHandler = (deletedMovie) => {
    const movies = moviesArray.filter((movie) => movie !== deletedMovie);
    setMoviesArray(movies);
  };
  //Handle Page
  const pageHandler = (page) => {
    setCurrentPage(page);
  };
  //Handle Genre
  const genreHandler = (genre) => {
    setCurrentGenre(genre);
    setCurrentPage(1);
  };
  //Get New Movie From Movie Form
  const getNewMovie = (movieInfo) => {
    setNewMovie(movieInfo);
  };
  //Get Data From Table To Show On Form
  const getDataFromTable = (data) => {
    setDataTable(data);
  }
  //Handle Sort
  const sortHandler = (newSortObj) => {
    setSortObj(newSortObj);
  }

  //Filter Movies Based On Selected Genre
  const filteredMovies =
    currentGenre && currentGenre !== "All Genres"
      ? moviesArray.filter((movie) => movie.genre.name === currentGenre)
      : moviesArray;
    
  //Sort
  const sorted = _.orderBy(filteredMovies,sortObj.path, sortObj.order);

  //Paginate Movies
  const paginateMovies = paginate(sorted, pageSize, currentPage);

  //Data For Provider
  const data = {
    movies: paginateMovies,
    genres: genres,
    currentPage: currentPage,
    pageSize: pageSize,
    items: filteredMovies.length,
    currentGenre: currentGenre,
    onGenreHandler: genreHandler,
    onLikeHandler: likeHandler,
    onDeleteHandler: deleteHandler,
    onPageHandler: pageHandler,
    onGetNewMovie: getNewMovie,
    onGetDataFromTable: getDataFromTable,
    onSortHandler: sortHandler,
    dataTable:dataTable,
    moviesArray:moviesArray,
    sortObj:sortObj
  };

  return (
    <MovieContext.Provider value={data}>{props.children}</MovieContext.Provider>
  );
};

export default MovieProvider;
