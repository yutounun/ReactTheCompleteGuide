// import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      date: new Date(2022, 1, 1),
      price: 10000,
      title: "1st item",
    },
    {
      date: new Date(2022, 1, 2),
      price: 20000,
      title: "2nd item",
    },
    {
      date: new Date(2022, 1, 3),
      price: 30000,
      title: "3rd item",
    },
    {
      date: new Date(2022, 1, 4),
      price: 40000,
      title: "4th item",
    },
  ];
  // const [expenses, setExpenses] = useState([
  //   {
  //     date: new Date(2022, 1, 1),
  //     price: 10000,
  //     title: "1st item",
  //   },
  //   {
  //     date: new Date(2022, 1, 2),
  //     price: 20000,
  //     title: "2nd item",
  //   },
  //   {
  //     date: new Date(2022, 1, 3),
  //     price: 30000,
  //     title: "3rd item",
  //   },
  //   {
  //     date: new Date(2022, 1, 4),
  //     price: 40000,
  //     title: "4th item",
  //   },
  // ]);
  const saveExpenseDataHandler = (expenseData) => {
    console.log("expenseData :", expenseData);
    // const newExpenses = [...expenses, expenseData];
    // console.log("newExpenses :", newExpenses);
    // setExpenses(newExpenses);
    // console.log("expenses :", expenses);
  };

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onSaveExpensesData={saveExpenseDataHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
