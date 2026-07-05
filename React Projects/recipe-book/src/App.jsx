import { useEffect, useState } from "react";
import "./App.css";

import Dashboard from "./components/Dashboard";
import RecipeForm from "./components/RecipeForm";
import RecipeList from "./components/RecipeList";
import SearchBar from "./components/SearchBar";
import Filter from "./components/Filter";
import Sort from "./components/Sort";

function App() {

  const [recipes, setRecipes] = useState([]);
  const [editRecipe, setEditRecipe] = useState(null);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("newest");

  // Load Recipes
  useEffect(() => {
    const savedRecipes = JSON.parse(localStorage.getItem("recipes"));

    if (savedRecipes) {
      setRecipes(savedRecipes);
    }
  }, []);

  // Save Recipes
  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(recipes));
  }, [recipes]);

  // Add Recipe
  const addRecipe = (recipe) => {

    const newRecipe = {
      ...recipe,
      id: Date.now()
    };

    setRecipes([...recipes, newRecipe]);
  };

  // Delete Recipe
  const deleteRecipe = (id) => {

    const updatedRecipes = recipes.filter(
      (recipe) => recipe.id !== id
    );

    setRecipes(updatedRecipes);
  };

  // Edit Button
  const handleEdit = (recipe) => {
    setEditRecipe(recipe);
  };

  // Update Recipe
  const updateRecipe = (updatedRecipe) => {

    const updatedList = recipes.map((recipe) =>
      recipe.id === updatedRecipe.id
        ? updatedRecipe
        : recipe
    );

    setRecipes(updatedList);
    setEditRecipe(null);
  };

  // Search + Filter
  let filteredRecipes = recipes.filter((recipe) => {

    const matchSearch = recipe.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "All" ||
      recipe.category === category;

    return matchSearch && matchCategory;
  });

  // Sorting
  if (sortBy === "newest") {

    filteredRecipes.sort((a, b) => b.id - a.id);

  } else if (sortBy === "oldest") {

    filteredRecipes.sort((a, b) => a.id - b.id);

  } else {

    filteredRecipes.sort(
      (a, b) =>
        Number(a.cookingTime) -
        Number(b.cookingTime)
    );

  }

  return (
    <div className="container">

      <h1>🍽 Recipe Book & Meal Planner</h1>

      <Dashboard recipes={recipes} />

      <RecipeForm
        addRecipe={addRecipe}
        editRecipe={editRecipe}
        updateRecipe={updateRecipe}
      />

      <div className="top-bar">

        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        <Filter
          category={category}
          setCategory={setCategory}
        />

        <Sort
          sortBy={sortBy}
          setSortBy={setSortBy}
        />

      </div>

      <RecipeList
        recipes={filteredRecipes}
        onDelete={deleteRecipe}
        onEdit={handleEdit}
      />

    </div>
  );
}

export default App;
