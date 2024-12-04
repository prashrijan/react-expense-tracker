import { useState } from "react";
import "./App.css";
import ExpenseList from "./Components/ExpenseList";
import ExpenseFilter from "./Components/ExpenseFilter";

function App() {
  const expenses = [
    {
      id: 1,
      description: "Standing Desk",
      category: "Utlities",
      amount: 200,
    },
    {
      id: 2,
      description: "Bed",
      category: "Utlities",
      amount: 400,
    },
    {
      id: 3,
      description: "Eggs",
      category: "Grocery",
      amount: 15,
    },
    {
      id: 4,
      description: "Movies",
      category: "Entertainment",
      amount: 20,
    },
  ];
  const [filteredExpenses, setFilteredExpenses] = useState(expenses);

  const deleteExpense = (id) => {
    setFilteredExpenses(
      filteredExpenses.filter((expense) => expense.id !== id)
    );
  };

  const filterByCategory = (value) => {
    if (value === "All") {
      setFilteredExpenses(expenses);
    } else {
      setFilteredExpenses(
        expenses.filter((expense) => expense.category === value)
      );
    }
  };
  return (
    <>
      <div className="wrapper min-h-screen w-full bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white flex flex-col items-center gap-7 py-10">
        <h2 className="max-w-lg text-2xl md:text-3xl font-semibold leading-normal text-gray-900 dark:text-white text-center">
          Track Your Expenses Efficiently
        </h2>
        <ExpenseFilter filterByCategory={filterByCategory} />
        <ExpenseList
          expenses={filteredExpenses}
          deleteExpense={deleteExpense}
        />
      </div>
    </>
  );
}

export default App;
