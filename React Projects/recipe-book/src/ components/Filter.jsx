function Filter({ category, setCategory }) {

  return (
    <select
      className="filter"
      value={category}
      onChange={(e) => setCategory(e.target.value)}
    >
      <option>All</option>
      <option>Indian</option>
      <option>Chinese</option>
      <option>Italian</option>
      <option>Mexican</option>
      <option>Dessert</option>
    </select>
  );
}

export default Filter;
