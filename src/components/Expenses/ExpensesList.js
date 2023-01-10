import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  const filteredExpenses = props.filteredExpenses;
  if (filteredExpenses.length === 0) {
    return (
      <div>
        <h2 className="expenses-list__fallback"> No Result</h2>
      </div>
    );
  } else {
    return (
      <div>
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            price={expense.price}
            date={expense.date}
          />
        ))}
      </div>
    );
  }
};

export default ExpensesList;
