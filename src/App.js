import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const initialExpenses = [
    {
      id: "dwdew",
      date: new Date(2022, 1, 1),
      price: 10000,
      title: "1st item",
    },
    {
      id: "dwd1ew",
      date: new Date(2022, 1, 2),
      price: 20000,
      title: "2nd item",
    },
    {
      id: "dwd2ew",
      date: new Date(2022, 1, 3),
      price: 30000,
      title: "3rd item",
    },
    {
      id: "d3wdew",
      date: new Date(2022, 1, 4),
      price: 40000,
      title: "4th item",
    },
  ];
  const [expenses, setExpenses] = useState(initialExpenses);

  const saveExpenseDataHandler = (expense) => {
    // When you update state depending on the previous state, use function style
    setExpenses((prevExpenses) => {
      return [...prevExpenses, expense];
    });
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
