import { useEffect, useState } from "react";
import "./App.css";

import Dashboard from "./components/Dashboard";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import SearchBar from "./components/SearchBar";
import Filter from "./components/Filter";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [editExpense, setEditExpense] = useState(null);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  // Load data
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("expenses"));

    if (savedData) {
      setExpenses(savedData);
    }
  }, []);

  // Save data
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  // Add Transaction
  const addExpense = (expense) => {
    const newExpense = {
      ...expense,
      id: Date.now(),
      amount: Number(expense.amount),
    };

    setExpenses([...expenses, newExpense]);
  };

  // Delete Transaction
  const deleteExpense = (id) => {
    const updated = expenses.filter((item) => item.id !== id);
    setExpenses(updated);
  };

  // Edit Button
  const handleEdit = (expense) => {
    setEditExpense(expense);
  };

  // Update Transaction
  const updateExpense = (updatedExpense) => {
    const updatedList = expenses.map((item) =>
      item.id === updatedExpense.id
        ? {
            ...updatedExpense,
            amount: Number(updatedExpense.amount),
          }
        : item
    );

    setExpenses(updatedList);
    setEditExpense(null);
  };

  // Search + Filter
  const filteredExpenses = expenses.filter((item) => {
    const matchSearch = item.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "All" || item.category === category;

    return matchSearch && matchCategory;
  });

  // Dashboard Data
  const income = expenses
    .filter((item) => item.type === "Income")
    .reduce((total, item) => total + item.amount, 0);

  const expense = expenses
    .filter((item) => item.type === "Expense")
    .reduce((total, item) => total + item.amount, 0);

  return (
    <div className="container">

      <h1>Expense Tracker</h1>

      <Dashboard
        income={income}
        expense={expense}
      />

      <ExpenseForm
        addExpense={addExpense}
        editExpense={editExpense}
        updateExpense={updateExpense}
      />

      <div className="top-section">

        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        <Filter
          category={category}
          setCategory={setCategory}
        />

      </div>

      <ExpenseList
        expenses={filteredExpenses}
        onDelete={deleteExpense}
        onEdit={handleEdit}
      />

    </div>
  );
}

export default App;
