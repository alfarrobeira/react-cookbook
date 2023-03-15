export default ({ recipe }) => {
    return (
        <>
            <div className="container my-2 border border-dard rounded">
                <div className="row">
                    <div className="col" />
                    <div className="col-10">
                        <h2 className="my-3">{recipe.title}</h2>
                        <p className="lead">{recipe.description}</p>
                        <div className="container">
                            <div className="row align-items-center text-start">
                                <div className="col-8">
                                    <img src={recipe.image.file.url} alt={recipe.title} />
                                </div>
                                <div className="col-4 fs-4">
                                    <div><span className="fw-semibold">Kitchen: </span><span>{recipe.kitchen}</span></div>
                                    <div><span className="fw-semibold">Servings: </span><span>{recipe.servings}</span></div>
                                    <div><span className="fw-semibold">Time: </span><span> {recipe.time} minutes</span></div>
                                </div>
                            </div>
                        </div>
                        <div className="mx-5 my-3 text-start">
                            <h4 >Ingredients</h4>
                            <ul>
                                {recipe.ingredients.map(ingredient => <li>{ingredient}</li>)}
                            </ul>
                            {
                                recipe.instructions ? <div><h4 className="my-2">Instructions</h4>
                                    <p>{recipe.instructions}</p></div> : <div></div>}
                        </div>
                    </div>
                    <div className="col" />
                </div>
            </div>
        </>
    );
}