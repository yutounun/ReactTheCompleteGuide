import "./ExpenseItem.css";

const Expenseitem = function () {
  return (
    <div className="expense-item">
      <div>March 3rd</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">$200,000</div>
      </div>
    </div>
  );
};

export default Expenseitem;
