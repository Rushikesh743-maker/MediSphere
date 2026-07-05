import { useEffect, useState } from "react";

function ExpenseForm({ addExpense, editExpense, updateExpense }) {
  const [expense, setExpense] = useState({
    title: "",
    amount: "",
    type: "Expense",
    category: "Food",
    date: "",
  });

  useEffect(() => {
    if (editExpense) {
      setExpense(editExpense);
    }
  }, [editExpense]);

  const handleChange = (e) => {
    setExpense({
      ...expense,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      expense.title === "" ||
      expense.amount === "" ||
      expense.date === ""
    ) {
      alert("Please fill all fields.");
      return;
    }

    if (editExpense) {
      updateExpense(expense);
    } else {
      addExpense(expense);
    }

    setExpense({
      title: "",
      amount: "",
      type: "Expense",
      category: "Food",
      date: "",
    });
  };

  return (
    <div className="form-container">

      <h2>
        {editExpense ? "Edit Transaction" : "Add Transaction"}
      </h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="title"
          placeholder="Title"
          value={expense.title}
          onChange={handleChange}
        />

        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={expense.amount}
          onChange={handleChange}
        />

        <select
          name="type"
          value={expense.type}
          onChange={handleChange}
        >
          <option>Income</option>
          <option>Expense</option>
        </select>

        <select
          name="category"
          value={expense.category}
          onChange={handleChange}
        >
          <option>Food</option>
          <option>Travel</option>
          <option>Shopping</option>
          <option>Salary</option>
          <option>Bills</option>
          <option>Other</option>
        </select>

        <input
          type="date"
          name="date"
          value={expense.date}
          onChange={handleChange}
        />

        <button>
          {editExpense ? "Update" : "Add"}
        </button>

      </form>
    </div>
  );
}

export default ExpenseForm;
