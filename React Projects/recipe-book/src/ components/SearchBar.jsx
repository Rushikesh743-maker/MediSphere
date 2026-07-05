function SearchBar({ search, setSearch }) {

  return (
    <input
      className="search"
      type="text"
      placeholder="Search Recipe..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

export default SearchBar;
