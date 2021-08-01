const ExpensesFilter = ({onSelectedYearHandler}) => {

  const selectedChangeHandler = (e) => {
    onSelectedYearHandler(e.target.value);
  }
  
  return (
    <div className="d-inline-flex align-items-center bg-dark text-white rounded my-3 p-2">
      <h6>Filter Expenses Based On Year: </h6>
      <select onChange={selectedChangeHandler} className="p-2 rounded ms-3">
       <option className="text-danger" value=" ">All Expenses</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
      </select>
    </div>
  );
};

export default ExpensesFilter;
