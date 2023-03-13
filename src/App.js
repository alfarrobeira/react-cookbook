import { useEffect, useState } from "react";
import useContentful from "./services/useContentful.js";
import RecipeList from "./components/RecipeList.jsx";
import "./App.css";

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
