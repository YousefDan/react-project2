const SelectGenreInput = (props) => {
  return (
    <div className="mb-2">
      <label className="form-label" htmlFor={props.id}>
        {props.label}
      </label>
      <select value={props.value} onChange={props.onChange} id={props.id} className="form-select">
        <option></option>
        <option value="Action">Action</option>
        <option value="Comedy">Comedy</option>
        <option value="Thriller">Thriller</option>
      </select>
    </div>
  );
};

export default SelectGenreInput;
