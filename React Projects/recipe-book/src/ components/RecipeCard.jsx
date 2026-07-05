function RecipeCard({ recipe, onDelete, onEdit }) {

  const image =
    recipe.image ||
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600";

  return (
    <div className="recipe-card">

      <img src={image} alt={recipe.name} />

      <h2>{recipe.name}</h2>

      <span className="meal-tag">
        🍽 {recipe.mealType}
      </span>

      <p>
        <strong>Category :</strong> {recipe.category}
      </p>

      <p>
        <strong>Cooking Time :</strong> {recipe.cookingTime} mins
      </p>

      <p>
        <strong>Difficulty :</strong>

        <span
          className={
            recipe.difficulty === "Easy"
              ? "easy"
              : recipe.difficulty === "Medium"
              ? "medium"
              : "hard"
          }
        >
          {recipe.difficulty}
        </span>
      </p>

      <p>
        <strong>Ingredients</strong>
      </p>

      <p>{recipe.ingredients}</p>

      <p>
        <strong>Instructions</strong>
      </p>

      <p>{recipe.instructions}</p>

      <div className="buttons">

        <button
          className="edit-btn"
          onClick={() => onEdit(recipe)}
        >
          Edit
        </button>

        <button
          className="delete-btn"
          onClick={() => onDelete(recipe.id)}
        >
          Delete
        </button>

      </div>

    </div>
  );
}

export default RecipeCard;
