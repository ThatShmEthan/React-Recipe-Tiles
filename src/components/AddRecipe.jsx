
export default function AddRecipe(props) {
    return (
        <div id="add-recipe-panel" className="add-recipe-panel" style={{ display: 'none' }}>
            <button id="add-recipe-close-x" className="add-recipe-close-x" onClick={() => closeAddRecipePanel()}>X</button>
            <button id="add-recipe-close-bar" className="add-recipe-close-bar" onClick={() => closeAddRecipePanel()}></button>
            <div className="recipe-interface-container">
                <span>Recipe Name:</span>
                <div className="recipe-interface-box-small" style={{ width: '60%', marginLeft: '20%', marginTop: '10px', height: '100%' }}>
                    <input id="recipe-name-input" className="medium-recipe-input" style={{ width: '98%', height: '20px' }} placeholder="Example Recipe Name"></input>
                </div>
                <br />
                <span style={{ margin: '0 0 0 0' }}>Recipe Image Link:</span>
                <div className="recipe-interface-box-small" style={{ width: '60%', marginLeft: '20%', marginTop: '10px', height: '100%' }}>
                    <input id="recipe-image-input" className="medium-recipe-input" style={{ width: '98%', height: '20px' }} placeholder="https://www.example.com/image.jpg"></input>
                </div>
            </div>
            <div className="recipe-interface-box-small" style={{ float: 'left' }}>Prep Time:
                <div id="recipe-prep-time" style={{ marginTop: "5px", marginBottom: "10px" }}>
                    <span><input id="prep-hours-input" className="recipe-time-input" type="number" label="0" min="0" max="999" placeholder="0"></input></span> Hours
                    <br />
                    <span><input id="prep-minutes-input" className="recipe-time-input" type="number" label="0" min="0" max="999" placeholder="0"></input></span> Minutes
                </div>
            </div>
            <div className="recipe-interface-box-small" style={{ float: "right" }}>Cook Time:
                <div id="recipe-cook-time" style={{ marginTop: "5px", marginBottom: "10px" }}>
                    <span><input id="cook-hours-input" className="recipe-time-input" type="number" label="0" min="0" max="999" placeholder="0"></input></span> Hours
                    <br />
                    <span><input id="cook-minutes-input" className="recipe-time-input" type="number" label="0" min="0" max="999" placeholder="0"></input></span> Minutes
                </div>
            </div>
            <br />
            <div className="recipe-interface-container" style={{ marginTop: '0%' }}>
                <p className="recipe-interface-label" style={{ marginLeft: '10%', float: 'left', marginTop: '10px', marginBottom: '10px' }}>Allergens:</p>
                <p className="recipe-interface-label" style={{ marginRight: '10%', float: 'right', marginTop: '10px', marginBottom: '10px' }}>Utensils:</p>
                <div id="recipe-allergens" className="recipe-interface-box-small recipe-interface-box-medium"
                    style={{ float: 'left', marginTop: '0', minHeight: '0' }}><textarea id="allergen-input" className="medium-recipe-input" rows='4' placeholder="Allergens (Separated by Commas)"></textarea></div>
                <div id="recipe-utensils" className="recipe-interface-box-small recipe-interface-box-medium"
                    style={{ float: 'right', marginTop: '0', minHeight: '0' }}><textarea id="utensil-input" className="medium-recipe-input" rows='4' placeholder="Utensils Needed (Serparated by Commas)"></textarea></div>
            </div>
            <br />
            <div id="recipe-servings" style={{ float: 'left' }}>Serves: <span><input id="recipe-servings-input" className="recipe-time-input" type="number" label="0" min="0" max="999" placeholder="0"></input></span></div>
            <br />
            <div className="recipe-interface-container" style={{ marginTop: '10px' }}>
                <span>Ingredients:</span>
                <div className="recipe-interface-box-medium" style={{ width: '80%', marginLeft: '10%', marginBottom: '0', marginTop: '5px', minHeight: '0' }}>
                    <textarea id="ingredient-input" className="medium-recipe-input" rows='4' placeholder="Ingredients (Separated by Commas)"></textarea>
                </div>
            </div>
            <div className="recipe-interface-container" style={{ marginTop: '10px' }}>
                <span>Description:</span>
                <div className="recipe-interface-box-medium" style={{ width: '80%', marginLeft: '10%', marginBottom: '0', marginTop: '5px' }}><textarea id="description-input" className="medium-recipe-input" rows='6' placeholder="Description..."></textarea></div>
            </div>
            <div className="recipe-interface-container" style={{ marginTop: '10px' }}>
                <span>Instructions:</span>
                <div className="recipe-interface-box-medium" style={{ width: '80%', marginLeft: '10%', marginBottom: '0', marginTop: '5px' }}><textarea id="instruction-input" className="medium-recipe-input" rows='10' placeholder="Instructions..."></textarea></div>
            </div>
            <div className="recipe-interface-container" style={{ marginTop: '10px' }}>
                <button id="add-recipe-upload" className="add-recipe-upload" onClick={() => uploadRecipe()}>Upload Recipe</button>
            </div>
        </div>
    );
}
