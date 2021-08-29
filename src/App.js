import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    { id: 1, title: "Car Insurance", amount: 294, date: new Date(2021, 2, 12) },
    {
      id: 2,
      title: "Car Insurance1",
      amount: 294,
      date: new Date(2020, 4, 1),
    },
    {
      id: 3,
      title: "Car Insurance2",
      amount: 294,
      date: new Date(2019, 1, 3),
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
