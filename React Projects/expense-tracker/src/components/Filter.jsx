function Filter({ category, setCategory }) {
  return (
    <select
      className="filter"
      value={category}
      onChange={(e) => setCategory(e.target.value)}
    >
      <option>All</option>
      <option>Food</option>
      <option>Travel</option>
      <option>Shopping</option>
      <option>Salary</option>
      <option>Bills</option>
      <option>Other</option>
    </select>
  );
}

export default Filter;
