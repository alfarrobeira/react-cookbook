import { useEffect, useState } from "react";
import useContentful from "./services/useContentful.jsx";
import RecipeList from "./components/RecipeList.jsx";
import SearchBar from "./components/SearchBar.jsx";
import "./App.css";

// server-side filtering for search (get request is "free")
// real life: response is always paginated, sometimes not possible to change the number of results per page

function App() {
  const [recipes, setRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const { getRecipes } = useContentful();
  const { searchRecipes } = useContentful(); // not sure if this works :-P

  // useEffect(() => {
  //   getRecipes().then((response) => setRecipes(response));
  // }, []);

  useEffect(() => {
    getRecipes(searchQuery).then((response) => setRecipes(response));
  }, [searchQuery]);

  return <div className="App">
    <h1 className="my-4">Cookbook</h1>
    <SearchBar setSearchQuery={setSearchQuery} />
    <RecipeList recipes={recipes} />
  </div>;
}

export default App;
