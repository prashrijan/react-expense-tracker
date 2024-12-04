import { useState } from "react";
import "./App.css";
import ExpenseList from "./Components/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([
    {
      description: "Standing Desk",
      category: "utlities",
      amount: 200,
    },
    {
      description: "Bed",
      category: "utlities",
      amount: 400,
    },
    {
      description: "Eggs",
      category: "Grocery",
      amount: 15,
    },
    {
      description: "Movies",
      category: "Entertainment",
      amount: 20,
    },
  ]);
  return (
    <>
      <div className="wrapper min-h-screen w-full bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white flex flex-col items-center gap-7 py-10">
        <h2 className="max-w-lg text-2xl md:text-3xl font-semibold leading-normal text-gray-900 dark:text-white text-center">
          Track Your Expenses Efficiently
        </h2>
        <ExpenseList expenses={expenses} />
      </div>
    </>
  );
}

export default App;
