import Button from "../reuseable/Button";
const CounterItem = ({ value, onDecrement, onIncremet, onDelete }) => {
  return (
    <div className="row my-4">
      <div className="col-2 col-md-1">
        <span className={value === 0 ? "badge bg-warning" : "badge bg-primary"}>
          {value === 0 ? "zero" : value}
        </span>
      </div>
      <div className="col-10 col-md-11">
        <Button onClick={onIncremet} className="btn btn-secondary me-2">
          +
        </Button>
        <Button
          onClick={onDecrement}
          disabled={value <= 0}
          className="btn btn-secondary me-2"
        >
          -
        </Button>
        <Button onClick={onDelete} className="btn btn-danger">
          X
        </Button>
      </div>
    </div>
  );
};

export default CounterItem;
