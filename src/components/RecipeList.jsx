import RecipeCard from "./RecipeCard";

export default ({ recipes }) => {
    return (
        <>
            <div className="recipeContainer">
                <h1>Recipes</h1>
                {recipes.map((recipe, index) => <RecipeCard key={index} recipe={recipe} />)}
            </div>
        </>
    );
}