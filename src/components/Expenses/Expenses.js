import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import "./Expenses.css";

const Expenses = (props) => {
  const expenses = props.expenses;
  const [selectedFilterYear, setSelectedFilterYear] = useState("2022");

  /** set selectedFilterYear */
  const selectFilterYear = (selectedYear) => {
    setSelectedFilterYear(selectedYear);
  };

  /**
   * filter expenses items using selected year.
   * No need to change original expenses at parent component.
   * */
  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedFilterYear;
  });

  return (
    <Card className="expenses">
      <div>
        <ExpensesFilter
          selected={selectedFilterYear}
          onSelectFilterYear={selectFilterYear}
        />
      </div>
      {filteredExpenses.map((expense) => (
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
