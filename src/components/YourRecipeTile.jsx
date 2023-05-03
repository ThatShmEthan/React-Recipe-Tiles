
export default function YourRecipeTile(props) {
  return (<div id={"recipe-your-tile-" + props.recipeInfo.id} data-id-number={props.recipeInfo.id} className="recipe-your-tile">

    <div className="recipe-your-tile-column half-block" onClick={() => recipePage(props.recipeInfo.id)}>

      <div className="recipe-thumbnail-holder">
        <img id={"recipe-thumbnail-" + props.recipeInfo.id} className="recipe-thumbnail" src={props.recipeInfo.image} onError={(comp) => comp.target.src = "/images/placeholder-thumbnail.png"}></img>
      </div>

    </div>

    <div className="recipe-your-tile-column half-block" style={{ boxShadow: "none" }}>
      <div className="recipe-name" onClick={() => recipePage(props.recipeInfo.id)}>{props.recipeInfo.name}</div>
      <br />
      <div className="recipe-your-rating">
        <div id={"recipe-rating-" + props.recipeInfo.id} className="recipe-rating-bar" style= {{ width: props.recipeInfo.rating }}>{ props.recipeInfo.rating }</div>
      </div>
      <br />
      <div className="your-favorites">This recipe has <span id={"your-favorites-" + props.recipeInfo.id}>{props.recipeInfo.favorites}</span> favorites</div>
      <div className="your-utilities">
        <span className="recipe-utility-button" style={{float: "left", paddingLeft: "30px"}} onClick={() => editRecipe(props.recipeInfo.id)}>Edit</span>
        <span className="recipe-utility-button" style={{float: "right", paddingRight: "30px"}}>Delete</span>
      </div>
          </div>

  </div>);
}