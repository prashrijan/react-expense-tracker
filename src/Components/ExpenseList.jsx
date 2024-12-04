import React from "react";

const ExpenseList = ({ expenses, deleteExpense }) => {
  return (
    <>
      <div className="w-96 md:w-1/2 overflow-x-auto shadow-md rounded-lg ">
        <table className="w-full text-md text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Expense
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Amount
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {expenses.length === 0 ? (
              <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <td
                  colSpan="4"
                  className="px-6 py-4 font-medium text-gray-900 text-center whitespace-nowrap dark:text-white"
                >
                  No expenses made.
                </td>
              </tr>
            ) : (
              expenses.map((expense) => {
                return (
                  <tr
                    key={expense.id}
                    className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {expense.description}
                    </th>
                    <td className="px-6 py-4">{expense.category}</td>
                    <td className="px-6 py-4">${expense.amount}</td>
                    <td className="px-6 py-4">
                      <button
                        className="font-medium text-red-600 dark:text-red-500 hover:underline"
                        onClick={() => deleteExpense(expense.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
      <div className="p-4 mb-4 text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 flex items-center gap-4">
        <h1 className="text-xl font-bold">Total Spent : </h1>
        <span className="text-xl text-blue-50">
          ${expenses.reduce((total, item) => total + parseInt(item.amount), 0)}
        </span>
      </div>
    </>
  );
};

export default ExpenseList;
