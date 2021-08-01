import Heart from "../../icons/heart.svg";
import HeartFill from "../../icons/heart-fill.svg";

const Like = ({ isLiked, onLike }) => {
  return (
    <img
      onClick={onLike}
      style={{ cursor: "pointer" }}
      src={isLiked ? HeartFill : Heart}
      alt="like"
    />
  );
};

export default Like;
