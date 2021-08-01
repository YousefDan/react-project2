import Input from "../reuseable/Input";
import Button from "../reuseable/Button";
import { Fragment, useState } from "react";
import  Modal  from "../reuseable/Modal";



const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState(null);

  //Submit Handler
  const submitHandler = (e) => {
    e.preventDefault();
    if (
      title.trim().length === 0 ||
      price.trim().length === 0 ||
      date.trim().length === 0
    ) {
      setError({
        errorTitle: "Invalid Input",
        errorMessage: "Please Fill All The Inputes (none-empty-input)"
      })
      return;
    }
    if (+price < 1) {
      setError({
        errorTitle: "Invalid Age",
        errorMessage: "Please Add Valid Age (age > 0)"
      })
      return;
    }

    const newExpenseInfo = {
      title: title,
      price: price,
      date: new Date(date),
      id: Math.round(Math.random() * 1000000).toString(),
    };
    props.onGetExpense(newExpenseInfo);
    setTitle("");
    setPrice("");
    setDate("");
  };
  //Title Change Handler
  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };
  //Title Change Handler
  const priceChangeHandler = (e) => {
    setPrice(e.target.value);
  };
  //Title Change Handler
  const dateChangeHandler = (e) => {
    setDate(e.target.value);
  };
  //Reset Error 
  const resetError = () => {
    setError(null);
  }

  return (
    <Fragment>
      {error && <Modal onResetError={resetError} errors={error} />}
      <form
        onSubmit={submitHandler}
        className="bg-secondary rounded p-3 text-white w-75 m-auto"
      >
        <Input
          label="Title"
          input={{
            type: "text",
            id: "title",
            value: title,
            onChange: titleChangeHandler,
          }}
        />
        <Input
          label="Price"
          input={{
            type: "number",
            id: "price",
            value: price,
            onChange: priceChangeHandler,
          }}
        />
        <Input
          label="Date"
          input={{
            type: "date",
            id: "date",
            value: date,
            onChange: dateChangeHandler,
          }}
        />
        <div className="text-end">
          <Button className="btn btn-primary mt-3">Add Expense</Button>
        </div>
      </form>
    </Fragment>
  );
};

export default ExpenseForm;
