import React from "react";

const ExpenseFilter = ({ filterByCategory }) => {
  return (
    <form
      className="md:w-1/2 w-96"
      onChange={(e) => {
        filterByCategory(e.target.value);
      }}
    >
      <label className="block mb-2 text-sm font-medium text-white">
        Filter through category
      </label>
      <select className=" border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500">
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
