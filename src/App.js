import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import useContentful from "./services/useContentful.jsx";
import RecipeList from "./components/RecipeList.jsx";
import RecipeCard from "./components/RecipeCard.jsx";
import SearchBar from "./components/SearchBar.jsx";
import "./App.css";

// Use server-side filtering for search! (get request is "free")
// real life: response is always paginated, sometimes not possible to change the number of results per page

function App() {
  const [recipes, setRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const { getRecipes } = useContentful();

  useEffect(() => {
    getRecipes(searchQuery).then((response) => setRecipes(response));
    console.log(searchQuery);
  }, [searchQuery]);

  return <div className="App">
    <h1 className="my-4">Cookbook</h1>
    <SearchBar setSearchQuery={setSearchQuery} />
    <Routes>
      <Route path="/" element={ <RecipeList recipes={recipes} /> } />
      <Route path="recipes" element={ <RecipeList recipes={recipes} /> } />
      <Route path="recipes/:id" element={ <RecipeCard /> } />
    </Routes>
  </div>;
}

export default App;
