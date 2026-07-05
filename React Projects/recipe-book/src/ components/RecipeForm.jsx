import { useState, useEffect } from "react";

function RecipeForm({ addRecipe, editRecipe, updateRecipe }) {

  const [recipe, setRecipe] = useState({
    name: "",
    image: "",
    category: "Indian",
    mealType: "Dinner",
    difficulty: "Easy",
    cookingTime: "",
    ingredients: "",
    instructions: "",
  });

  useEffect(() => {
    if (editRecipe) {
      setRecipe(editRecipe);
    }
  }, [editRecipe]);

  const handleChange = (e) => {
    setRecipe({
      ...recipe,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      recipe.name === "" ||
      recipe.cookingTime === "" ||
      recipe.ingredients === "" ||
      recipe.instructions === ""
    ) {
      alert("Please fill all fields.");
      return;
    }

    if (editRecipe) {
      updateRecipe(recipe);
    } else {
      addRecipe(recipe);
    }

    setRecipe({
      name: "",
      image: "",
      category: "Indian",
      mealType: "Dinner",
      difficulty: "Easy",
      cookingTime: "",
      ingredients: "",
      instructions: "",
    });
  };

  return (
    <div className="form-container">

      <h2>
        {editRecipe ? "Edit Recipe" : "Add Recipe"}
      </h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Recipe Name"
          value={recipe.name}
          onChange={handleChange}
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL (Optional)"
          value={recipe.image}
          onChange={handleChange}
        />

        <select
          name="mealType"
          value={recipe.mealType}
          onChange={handleChange}
        >
          <option>Breakfast</option>
          <option>Lunch</option>
          <option>Dinner</option>
          <option>Snack</option>
        </select>

        <select
          name="category"
          value={recipe.category}
          onChange={handleChange}
        >
          <option>Indian</option>
          <option>Chinese</option>
          <option>Italian</option>
          <option>Mexican</option>
          <option>Dessert</option>
        </select>

        <select
          name="difficulty"
          value={recipe.difficulty}
          onChange={handleChange}
        >
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>

        <input
          type="number"
          name="cookingTime"
          placeholder="Cooking Time (Minutes)"
          value={recipe.cookingTime}
          onChange={handleChange}
        />

        <textarea
          name="ingredients"
          rows="3"
          placeholder="Ingredients"
          value={recipe.ingredients}
          onChange={handleChange}
        />

        <textarea
          name="instructions"
          rows="4"
          placeholder="Instructions"
          value={recipe.instructions}
          onChange={handleChange}
        />

        <button>
          {editRecipe ? "Update Recipe" : "Add Recipe"}
        </button>

      </form>

    </div>
  );
}

export default RecipeForm;
