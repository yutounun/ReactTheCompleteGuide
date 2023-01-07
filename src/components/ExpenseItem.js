import "./ExpenseItem.css";

const Expenseitem = function () {
  const expenseDate = new Date(2023, 1, 4);
  const expenseTitle = "Car Insurance";
  const expenseAmount = 300000;

  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
};

export default Expenseitem;
