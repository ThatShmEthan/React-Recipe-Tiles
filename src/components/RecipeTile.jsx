
export default function RecipeTile(props) {
  return (
    <div id={"recipe-tile-" + props.recipeInfo.id} className="recipe-tile" data-id-number={props.recipeInfo.id}>

      <div className="recipe-tile-left recipe-tile-column" onClick={() => recipePage(props.recipeInfo.id)}>

        <div className="recipe-thumbnail-holder">
          <img id={"recipe-thumbnail-" + props.recipeInfo.id} className="recipe-thumbnail" src={props.recipeInfo.image} onError={(comp) => comp.target.src = "/images/placeholder-thumbnail.png"}></img>
        </div>
        <div className="recipe-rating">
          <div id={"recipe-rating-" + props.recipeInfo.id} className="recipe-rating-bar" style={{ width: props.recipeInfo.rating }}>{props.recipeInfo.rating}</div>
        </div>

      </div>

      <div className="recipe-tile-middle recipe-tile-column">
        <div className="recipe-name" onClick={() => recipePage(props.recipeInfo.id)}>{props.recipeInfo.name}</div>

        <button className="recipe-button tile-ingredient-button" onClick={(comp) => setActiveDropDown(comp.target)}>Ingredients</button>
        <span className="recipe-dropdown active">
          <p>{props.recipeInfo.ingredients.join(", ")}</p>
        </span>

        <button className="recipe-button tile-allergen-button" onClick={(comp) => setActiveDropDown(comp.target)}>Allergens</button>
        <span className="recipe-dropdown inactive">
          <p>{props.recipeInfo.allergens.join(", ")}</p>
        </span>

        <button className="recipe-button tile-utensil-button" onClick={(comp) => setActiveDropDown(comp.target)}>Utensils</button>
        <span className="recipe-dropdown inactive">
          <p>{props.recipeInfo.utensils.join(", ")}</p>
        </span>

      </div>

      <div className="recipe-tile-right recipe-tile-column">
        <span id={"recipe-description-" + props.recipeInfo.id} className="recipe-description">{props.recipeInfo.description}</span>
      </div>

    </div >
  )
}