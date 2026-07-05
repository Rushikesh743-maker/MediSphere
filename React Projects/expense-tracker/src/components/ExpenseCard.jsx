function ExpenseCard({ expense, onDelete, onEdit }) {
  return (
    <div className="expense-card">

      <h3>{expense.title}</h3>

      <p>
        <strong>Amount :</strong> ₹ {expense.amount}
      </p>

      <p>
    <strong>Type :</strong>

    <span
        style={{
            color: expense.type === "Income" ? "green" : "red",
            fontWeight: "bold",
            marginLeft: "5px"
        }}
    >
        {expense.type}
    </span>
</p>

      <p>
        <strong>Category :</strong> {expense.category}
      </p>

      <p>
        <strong>Date :</strong> {expense.date}
      </p>

      <div className="buttons">

        <button
          className="edit-btn"
          onClick={() => onEdit(expense)}
        >
          Edit
        </button>

        <button
          className="delete-btn"
          onClick={() => onDelete(expense.id)}
        >
          Delete
        </button>

      </div>

    </div>
  );
}

export default ExpenseCard;
