import { useEffect, useState } from "react";
import useContentful from "./services/useContentful.js";
import RecipeList from "./components/RecipeList.jsx";
import "./App.css";

// server-side filtering for search (get request is "free")
// real life: response is always paginated, sometimes not possible to change the number of results per page

function App() {
  const [recipes, setRecipes] = useState([]);
  const { getRecipes } = useContentful();

  useEffect(() => {
    getRecipes().then(response => setRecipes(response))
  }, []);

  return <div className="App">
    <RecipeList recipes={recipes} />
  </div>;
}

export default App;
