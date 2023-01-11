import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const openFormHandler = () => {
    setIsOpen(true);
  };
  const closeFormHandler = () => {
    setIsOpen(false);
    console.log("isOpen :", isOpen);
  };
  const submitHandler = (event) => {
    // Prevent submit the contents of the form
    event.preventDefault();

    // Close the expense form after submit
    closeFormHandler();

    const expenseData = {
      title: enteredTitle,
      price: enteredAmount,
      date: new Date(enteredDate),
    };

    // Callback function defined in the parent component
    // and passed to this child component
    // No need to use "emit" as you do with Vue
    props.onSaveExpenseData(expenseData);

    // Clear all of the contents on the form
    setEnteredTitle("");
    setEnteredDate("");
    setEnteredAmount("");
  };

  // After Cancel/Submit action or Default
  if (isOpen === false) {
    return (
      <div className="open-new-expense__actions">
        <button onClick={openFormHandler}>Add new expense</button>
      </div>
    );
    // After open the form
  } else {
    return (
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={enteredAmount}
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2023-12-31"
              value={enteredDate}
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button onClick={closeFormHandler}>Cancel</button>
          <button type="submit">Add new expense</button>
        </div>
      </form>
    );
  }
};

export default ExpenseForm;
