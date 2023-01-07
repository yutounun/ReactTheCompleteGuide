import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      date: new Date(2022, 1, 1).toISOString(),
      price: 10000,
      title: "1st item",
    },
    {
      date: new Date(2022, 1, 2).toISOString(),
      price: 20000,
      title: "2nd item",
    },
    {
      date: new Date(2022, 1, 3).toISOString(),
      price: 30000,
      title: "3rd item",
    },
    {
      date: new Date(2022, 1, 4).toISOString(),
      price: 40000,
      title: "4th item",
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        price={expenses[0].price}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        price={expenses[1].price}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        price={expenses[2].price}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        price={expenses[3].price}
        date={expenses[3].date}
      />
    </div>
  );
}

export default App;
