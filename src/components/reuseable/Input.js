const Input = (props) => {
  return (
    <div className="mb-2">
      <label className="form-label" htmlFor={props.input.id}>
        {props.label}
      </label>
      <input className="form-control" {...props.input} />
    </div>
  );
};

export default Input;
