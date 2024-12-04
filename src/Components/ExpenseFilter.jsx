import React from "react";

const ExpenseFilter = ({ filterByCategory }) => {
  return (
    <form
      className="md:w-1/2 w-96"
      onChange={(e) => {
        filterByCategory(e.target.value);
      }}
    >
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Filter through category
      </label>
      <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option selected value="All">
          All
        </option>
        <option value="Utlities">Utlities</option>
        <option value="Grocery">Grocery</option>
        <option value="Entertainment">Entertainment</option>
      </select>
    </form>
  );
};

export default ExpenseFilter;
