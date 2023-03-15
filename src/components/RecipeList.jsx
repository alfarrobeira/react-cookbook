import RecipeListItem from "./RecipeListItem";

export default ({ recipes }) => {
    return (
        <>
            <div className="recipeContainer container">
                <div className="row justify-content-center">
                    <div className="col-10">
                        {recipes.map((recipe, index) => <RecipeListItem key={index} recipe={recipe} />)}
                    </div>
                </div>
            </div>
        </>
    );
}