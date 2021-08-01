import { Fragment, useContext, useEffect, useState } from "react";
import Button from "../reuseable/Button";
import Input from "../reuseable/Input";
import SelectGenreInput from "../reuseable/SelectGenreInput";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MovieContext from "../../store/context/movieContext";

const MoviesForm = () => {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [stock, setStock] = useState("");
  const [rate, setRate] = useState("");

  let { onGetNewMovie, dataTable, moviesArray } = useContext(MovieContext);

  useEffect(() => {
    if (dataTable) {
      setTitle(dataTable.title);
      setGenre(dataTable.genre);
      setStock(dataTable.stock);
      setRate(dataTable.rate);
    }
  }, [dataTable]);

  //Form On Submit
  const submitHandler = (e) => {
    e.preventDefault();
    if (title.trim().length === 0) {
      toast.error("Title Is Required");
      return;
    }
    if (genre.trim().length === 0) {
      toast.error("Please Select Movie Genre");
      return;
    }
    if (stock.toString().trim().length === 0) {
      toast.error("Number In Stock Is Required");
      return;
    }
    if (rate.toString().trim().length === 0) {
      toast.error("Daily Rental Rate Is Required");
      return;
    }

    const newMovie = {
      title: title,
      genre: {
        name: genre,
      },
      numberInStock: stock,
      dailyRentalRate: rate,
      _id: Math.round(Math.random() * 1000000).toString(),
    };
    //Checking If Movie Already Exist
    for (let i = 0; i < moviesArray.length; i++) {
      if (moviesArray[i].title === newMovie.title) {
        toast.info("The Movie Is Already Exist In The Movie Table");
        return;
      }
    }
    onGetNewMovie(newMovie);

    setTitle("");
    setGenre("");
    setStock("");
    setRate("");

    if (dataTable !== null) {
      dataTable.title = "";
      dataTable.genre = "";
      dataTable.stock = "";
      dataTable.rate = "";
    }
  };
  //Genre Handler
  const genreHandler = (e) => {
    setGenre(e.target.value);
  };
  //Stock Handler
  const stockHandler = (e) => {
    setStock(e.target.value);
  };
  //Rate Handler
  const rateHandler = (e) => {
    setRate(e.target.value);
  };
  //Title Handler
  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  return (
    <Fragment>
      <form onSubmit={submitHandler} className="bg-light rounded p-3">
        <Input
          label="Title"
          input={{
            id: "title",
            type: "text",
            value: title,
            onChange: titleHandler,
          }}
        />
        <SelectGenreInput
          value={genre}
          onChange={genreHandler}
          label="Genre"
          id="genre"
        />
        <Input
          label="Number In Stock"
          input={{
            id: "stock",
            type: "number",
            min: "0",
            step: "1",
            value: stock,
            onChange: stockHandler,
          }}
        />
        <Input
          label="Rate"
          input={{
            id: "rate",
            type: "number",
            min: 1,
            step: "0.1",
            value: rate,
            onChange: rateHandler,
          }}
        />
        <Button className="btn btn-primary mt-2">Save</Button>
      </form>
      <ToastContainer />
    </Fragment>
  );
};

export default MoviesForm;
