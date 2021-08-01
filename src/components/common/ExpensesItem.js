import Date from "../common/Date";
import "../expense.css";

const ExpensesItem = ({ title, price, date }) => {
  const p = `$${price}`;
  return (
    <div className="expense-item">
      <Date date={date} />
      <h2> {title} </h2>
      <span className="price"> {p} </span>
    </div>
  );
};

export default ExpensesItem;
