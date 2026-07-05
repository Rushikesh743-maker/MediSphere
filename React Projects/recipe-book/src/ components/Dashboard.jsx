function Dashboard({ recipes }) {
  const totalRecipes = recipes.length;

  const easyRecipes = recipes.filter(
    (recipe) => recipe.difficulty === "Easy"
  ).length;

  const categories = [...new Set(recipes.map((recipe) => recipe.category))];

  return (
    <div className="dashboard">

      <div className="dashboard-card">
        <h3>Total Recipes</h3>
        <h2>{totalRecipes}</h2>
      </div>

      <div className="dashboard-card">
        <h3>Categories</h3>
        <h2>{categories.length}</h2>
      </div>

      <div className="dashboard-card">
        <h3>Easy Recipes</h3>
        <h2>{easyRecipes}</h2>
      </div>

    </div>
  );
}

export default Dashboard;
