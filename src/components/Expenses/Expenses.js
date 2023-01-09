import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import "./Expenses.css";

const Expenses = (props) => {
  const expenses = props.expenses;
  const [selectedFilterYear, setSelectedFilterYear] = useState("2022");

  const selectFilterYear = (selectedYear) => {
    setSelectedFilterYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <div>
        <ExpensesFilter
          selected={selectedFilterYear}
          onSelectFilterYear={selectFilterYear}
        />
        {selectedFilterYear}
      </div>
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          price={expense.price}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
