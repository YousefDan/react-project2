import { useContext } from "react";
import MovieContext from "../../store/context/movieContext";

const ListGroup = () => {
  const { genres, currentGenre, onGenreHandler } = useContext(MovieContext);
  return (
    <ul className="list-group">
      {genres.map((genre) => (
        <li
          key={genre._id || genre.name}
          className={
            currentGenre === genre.name
              ? "list-group-item active"
              : "list-group-item"
          }
          onClick={() => onGenreHandler(genre.name)}
          style={{cursor: "pointer"}}
        >
          {genre.name}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
