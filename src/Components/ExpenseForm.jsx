import { useForm } from "react-hook-form";

const ExpenseForm = ({ addExpense }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
  const onSubmit = (data) => {
    let expense = {
      id: Date.now(),
      description: capitalize(data.description),
      amount: parseFloat(data.amount),
      category: data.category,
    };
    addExpense(expense);
    reset();
  };
  return (
    <form className="w-96 md:w-1/2" onSubmit={handleSubmit(onSubmit)}>
      <div className="relative z-0 w-full mb-5 group">
        <input
          {...register("description", {
            required: "Expense Name is required.",
          })}
          id="description"
          type="text"
          className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2  appearance-none  border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=""
        />
        <label
          htmlFor="description"
          className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Expense Name
        </label>
        {errors.description && (
          <p className="text-red-500 text-sm">{errors.description.message}</p>
        )}
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <input
          {...register("amount", {
            required: "Amount is required.",
            valueAsNumber: true,
            validate: (value) =>
              value > 0 || "Amount must be greater than zero.",
          })}
          type="number"
          id="amount"
          step="0.01"
          className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2  appearance-none text-white border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0  peer"
          placeholder=" "
        />
        <label
          htmlFor="amount"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Amount
        </label>
        {errors.amount && (
          <p className="text-red-500 text-sm">{errors.amount.message}</p>
        )}
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <label className="block mb-2 text-sm font-medium text-white">
          Select Category
        </label>
        <select
          className="border  text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 dark:placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
          {...register("category", {
            required: "Category is required.",
          })}
        >
          <option value="Utlities">Utlities</option>
          <option value="Grocery">Grocery</option>
          <option value="Entertainment">Entertainment</option>
        </select>
        {errors.category && (
          <p className="text-red-500 text-sm">{errors.description.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Add Expense
      </button>
    </form>
  );
};

export default ExpenseForm;
