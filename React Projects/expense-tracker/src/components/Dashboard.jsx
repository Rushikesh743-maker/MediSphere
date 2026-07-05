function Dashboard({ income, expense }) {
  const balance = income - expense;

  return (
    <div className="dashboard">

      <div className="summary-card balance">
        <h3>Current Balance</h3>
        <h2>₹ {balance}</h2>
      </div>

      <div className="summary-card income">
        <h3>Total Income</h3>
        <h2>₹ {income}</h2>
      </div>

      <div className="summary-card expense">
        <h3>Total Expense</h3>
        <h2>₹ {expense}</h2>
      </div>

    </div>
  );
}

export default Dashboard;
