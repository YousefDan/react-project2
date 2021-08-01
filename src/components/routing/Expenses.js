import { useEffect, useState } from "react";
import ExpenseForm from "../common/ExpenseForm";
import ExpensesList from "../common/ExpensesList";
import { expensesData } from "../../services/expensesServices";

const Expenses = () => {
  const [expenses, setExpenses] = useState([]);
  const [selectedYear, setSelectedYear] = useState(" ");

  useEffect(() => {
    setExpenses(expensesData);
  }, []);

  //Get New Expense From Expense Form
  const getExpense = (newExpenseData) => {
    setExpenses((prevEx) => {
      return [newExpenseData, ...prevEx];
    });
  };
  //Handle Selected Year On Change
  const selectYearHandler = (selected) => {
    setSelectedYear(selected);
  };
  //
  const selectedExpenses =
    selectedYear === " "
      ? expenses
      : expenses.filter(
          (expense) => expense.date.getFullYear().toString() === selectedYear
        );
  return (
    <div className="row">
      <div className="col-12">
        <ExpenseForm onGetExpense={getExpense} />
      </div>
      <div className="col-12 ">
        <ExpensesList
          onSelectedYearHandler={selectYearHandler}
          expenses={selectedExpenses}
        />
      </div>
    </div>
  );
};

export default Expenses;
