import { useState } from "react";
import "./App.css";
import ExpenseList from "./Components/ExpenseList";
import ExpenseFilter from "./Components/ExpenseFilter";
import ExpenseForm from "./Components/ExpenseForm";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [filteredExpenses, setFilteredExpenses] = useState(expenses);

  const addExpense = (newExpense) => {
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
    setFilteredExpenses((prevExpenses) => [...prevExpenses, newExpense]);
  };

  const deleteExpense = (id) => {
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(updatedExpenses);
    setFilteredExpenses(updatedExpenses);
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
        <ExpenseForm addExpense={addExpense} />
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
