import RecipeCard from "./RecipeCard";

function RecipeList({ recipes, onDelete, onEdit }) {

  if (recipes.length === 0) {
    return (
      <div className="empty">

        <h2>🍽</h2>

        <p>No Recipes Found</p>

      </div>
    );
  }

  return (
    <div className="recipe-list">

      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}

    </div>
  );
}

export default RecipeList;
