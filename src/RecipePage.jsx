
import { BrowserRouter, useParams } from 'react-router-dom'
import { ExtendedSidebar, AddRecipe } from './allcomponents'

export default function RecipePage(props) {
    var { id } = useParams();

    // USE ID TO GET INFORMATION; GET DATA FROM SQL REQUEST
    var recipeInfo = {
        "id": id,
        "name": "Example Recipe 1",
        "thumbnail": "/images/000000001.png",
        "image": "/images/000000001.png",
        "description": "No Description Yet",
        "ingredients": ["Chicken", "Bread", "Beef"],
        "instructions": "No Instructions Yet",
        "allergens": ['None'],
        "utensils": ['None'],
        "cookTime": [1, 0],
        "prepTime": [0, 20],
        "serves": 1,
        "rating": "80%"
    };

    return (
        <>
            <AddRecipe></AddRecipe>
            <ExtendedSidebar activePage="Recipe Page" />

            <div id="main-container" className="extended-main-container">
                <div id="recipe-info" className="half-block">
                    <div id="recipe-info-header">
                        <p onClick={() => blockDisplayToggle(document.getElementById('recipe-fullname'))} className="recipe-page-name">{recipeInfo.name}</p>
                        <div className="recipe-page-rating">
                            <span className="recipe-rating-text">{recipeInfo.rating}</span>
                            <div id={"recipe-rating-" + recipeInfo.id} className="recipe-rating-bar" style={{ width: recipeInfo.rating }}></div>
                        </div>
                        <div id="recipe-fullname" style={{ display: "none" }} onClick={() => blockDisplayToggle(document.getElementById('recipe-fullname'))}>
                            <p>{recipeInfo.name}</p>
                        </div>
                    </div>
                    <div className="centered-holder-80p">
                        <div className="recipe-page-thumbnail-holder">
                            <img id={"recipe-thumbnail-" + recipeInfo.id} className="recipe-thumbnail" src={recipeInfo.image}></img>
                        </div>
                        <p style={{ marginTop: "5%", fontWeight: "700", marginBottom: "0" }}>Instructions:</p>
                        <div id="recipe-page-instructions">{recipeInfo.instructions}</div>
                    </div>
                </div>
                <div id="recipe-interface" className="half-block">
                    <div className="recipe-interface-box-small" style={{ float: 'left' }}>Prep Time:
                        <div id="recipe-prep-time" style={{ marginTop: "5px", marginBottom: "10px" }}>
                            <span>{recipeInfo.prepTime[0]}</span> Hour(s)
                            <span>{" " + recipeInfo.prepTime[1]}</span> Minutes
                        </div>
                    </div>
                    <div className="recipe-interface-box-small" style={{ float: "right" }}>Cook Time:
                        <div id="recipe-cook-time" style={{ marginTop: "5px", marginBottom: "10px" }}>
                            <span>{recipeInfo.cookTime[0]}</span> Hour(s)
                            <span>{" " + recipeInfo.cookTime[1]}</span> Minutes
                        </div>
                    </div>
                    <br />
                    <button id="prep-timer" className="recipe-timer-button" style={{ float: 'left' }} onClick={() => setCookieTimer(recipeInfo.prepTime[0] * 60 * 60 + recipeInfo.prepTime[1] * 60)}>Start Prep Timer</button>
                    <button id="cook-timer" className="recipe-timer-button" style={{ float: 'right' }} onClick={() => setCookieTimer(recipeInfo.cookTime[0] * 60 * 60 + recipeInfo.cookTime[1] * 60)}>Start Cook Timer</button>
                    <br />
                    <div className="recipe-interface-container" style={{ marginTop: '0%' }}>
                        <p className="recipe-interface-label" style={{ marginLeft: '10%', float: 'left' }}>Allergens:</p>
                        <p className="recipe-interface-label" style={{ marginRight: '10%', float: 'right' }}>Utensils:</p>
                        <div id="recipe-allergens" className="recipe-interface-box-small recipe-interface-box-medium" style={{ float: 'left', marginTop: 0 }}>{recipeInfo.allergens.join(", ")}</div>
                        <div id="recipe-utensils" className="recipe-interface-box-small recipe-interface-box-medium" style={{ float: 'right', marginTop: 0 }}>{recipeInfo.utensils.join(", ")}</div>
                    </div>
                    <br />
                    <div id="recipe-servings">Serves <span>{recipeInfo.servingSize}</span></div>
                    <br />
                    <div className="recipe-interface-container">
                        <span>Ingredients:</span>
                        <div className="recipe-interface-box-medium" style={{ width: '80%', marginLeft: '10%' }}>{recipeInfo.ingredients.join(", ")}</div>
                    </div>
                    <div className="recipe-interface-container">
                        <span>Description:</span>
                        <div className="recipe-interface-box-medium" style={{ width: '80%', marginLeft: '10%' }}>{recipeInfo.description}</div>
                    </div>
                </div>
            </div>
        </>
    );
}