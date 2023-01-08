// Since useState exported without "default", it must be embraced with {}
import { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

import "./ExpenseItem.css";
import React from "react";

const Expenseitem = function (props) {
  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    setTitle("updated title!!");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.price}</div>
      </div>
      <button onClick={clickHandler}>click me!!</button>
    </Card>
  );
};

export default Expenseitem;
