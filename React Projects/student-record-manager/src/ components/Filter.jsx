function Filter({ courseFilter, setCourseFilter }) {
  return (
    <div className="filter-box">
      <select
        value={courseFilter}
        onChange={(e) => setCourseFilter(e.target.value)}
      >
        <option value="All">All Courses</option>
        <option value="BCA">BCA</option>
        <option value="BSc">BSc</option>
        <option value="BCom">BCom</option>
        <option value="BBA">BBA</option>
      </select>
    </div>
  );
}

export default Filter;
