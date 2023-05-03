export default function RecipePage(props) {
  return (
    <>
      <AddRecipe></AddRecipe>
      
      <Extended-Sidebar activePage="Recipe Page"/>

      <div id="main-container" className="extended-main-container">

        <div id="recipe-info" className="half-block">
          <div id="recipe-info-header">
            <p onClick={() => blockDisplayToggle(document.getElementById('recipe-fullname'))} className="recipe-page-name">{ props.recipeInfo.id }</p>
            <div className="recipe-page-rating">
              <div id={"recipe-rating-" + props.recipeInfo.id } className="recipe-rating-bar" style={{width: props.recipeInfo.rating }}>{props.recipeInfo.rating}</div>
            </div>
            <div id="recipe-fullname" style={{display: "none"}}
              onClick={() => blockDisplayToggle(document.getElementById('recipe-fullname'))}>
              <p>{props.recipeInfo.name}</p>
            </div>
          </div>
          <div className="centered-holder-80p">
            <div className="recipe-page-thumbnail-holder">
              <image id={"recipe-thumbnail-" + props.recipeInfo.id} className="recipe-thumbnail" src="images/mealplate.png"></image>
            </div>
            <p style={{marginTop: "5%", fontWeight: "700", marginBottom: "0"}}>Instructions:</p>
            <div id="recipe-page-instructions">
            </div>

          </div>
        </div>

        <div id="recipe-interface" className="half-block">

          <div className="recipe-interface-box-small" style={{ float: 'left' }}>Prep Time:
            <div id="recipe-prep-time" style={{marginTop: "5px", marginBottom: "10px"}}>
              <span>{ props.recipeInfo.prepTime.hrs }</span> Hours
              <span>{ props.recipeInfo.prepTime.mins }</span> Minutes
            </div>
          </div>

          <div className="recipe-interface-box-small" style={{float: "right"}}>Cook Time:
            <div id="recipe-cook-time" style={{marginTop: "5px", marginBottom: "10px"}}>
              <span>{ props.recipeInfo.cookTime.hrs }</span> Hours
              <span>{ props.recipeInfo.cookTime.mins }</span> Minutes
            </div>
          </div>
          <br />
          <button id="prep-timer" className="recipe-timer-button" style={{float: 'left'}} onClick={() => setCookieTimer(10)}>Start Prep
            Timer</button>
          <button id="cook-timer" className="recipe-timer-button" style={{float: 'right'}} onClick={() => setCookieTimer(10)}>Start Cook
            Timer</button>
          <br />
          <div className="recipe-interface-container" style={{marginTop: '0%'}}>

            <p className="recipe-interface-label" style={{marginLeft: '10%', float: 'left'}}>Allergens:</p>
            <p className="recipe-interface-label" style={{marginRight: '10%', float: 'right'}}>Utensils:</p>
            <div id="recipe-allergens" className="recipe-interface-box-small recipe-interface-box-medium"
              style={{float: 'left', marginTop: 0}}>
              { props.recipeInfo.allergens }</div>
            <div id="recipe-utensils" className="recipe-interface-box-small recipe-interface-box-medium" 
              style={{float: 'right', marginTop: '0'}}>{ props.recipeInfo.utensils }
            </div>

          </div>
          <br />
          <div id="recipe-servings">Serves <span>{ props.recipeInfo.servingSize }</span></div>
          <br />

          <div className="recipe-interface-container">
            <span>Ingredients:</span>
            <div className="recipe-interface-box-medium" style={{width: '80%', marginLeft: '10%'}}>{ props.recipeInfo.ingredients }</div>
          </div>

          <div className="recipe-interface-container">
            <span>Description:</span>
            <div className="recipe-interface-box-medium" style={{width: '80%', marginLeft: '10%'}}>{ props.recipeInfo.description }
            </div>
          </div>

        </div>

      </div>
    </>
  );
}