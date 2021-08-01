import ExpensesFilter from "./ExpensesFilter";
import ExpensesItem from "./ExpensesItem";

const ExpensesList = ({ expenses, onSelectedYearHandler }) => {
  return (
    <div className="my-5 bg-light border border-primary rounded p-3">
      <div className="text-center">
        <h2 className="text-primary d-inline-block border-bottom border-dark pb-2">
          Expenses List
        </h2>
      </div>
      <ExpensesFilter onSelectedYearHandler={onSelectedYearHandler} />
      {expenses.map((expense) => (
        <ExpensesItem
          key={expense.id}
          title={expense.title}
          price={expense.price}
          date={expense.date}
        />
      ))}
    </div>
  );
};

export default ExpensesList;
