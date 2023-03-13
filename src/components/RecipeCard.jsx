export default ({ recipe }) => {
    return (
        <>
            <div className="recipeContainer">
                <h3>{recipe.title}</h3>
                <p>{recipe.body}</p>
                <img src={recipe.image.file.url} alt={recipe.title} />
                <div>Servings: {recipe.servings}</div>
                <div>Time: {recipe.time} minutes</div>
            </div>
        </>
    );
}