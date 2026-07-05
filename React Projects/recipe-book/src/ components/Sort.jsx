function Sort({ sortBy, setSortBy }) {

  return (
    <select
      className="filter"
      value={sortBy}
      onChange={(e) => setSortBy(e.target.value)}
    >
      <option value="newest">Newest</option>
      <option value="oldest">Oldest</option>
      <option value="time">Cooking Time</option>
    </select>
  );
}

export default Sort;
