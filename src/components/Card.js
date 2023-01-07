import "./Card.css";

function Card(props) {
  // className will turn out like 'className = "card expense-item"'
  const classes = "card " + props.className;

  return <div className={classes}>{props.children}</div>;
}

export default Card;
