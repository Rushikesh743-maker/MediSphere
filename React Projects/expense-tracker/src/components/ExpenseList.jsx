import ExpenseCard from "./ExpenseCard";

function ExpenseList({ expenses, onDelete, onEdit }) {
  if (expenses.length === 0) {
    return <h2>No Transactions Found</h2>;
  }

  return (
    <div className="expense-list">

      {expenses.map((expense) => (
        <ExpenseCard
          key={expense.id}
          expense={expense}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}

    </div>
  );
}

export default ExpenseList;
