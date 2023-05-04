
import { BrowserRouter, Route, Link, useParams } from 'react-router-dom'

export default function YourRecipeTile(props) {
    return (
        <div id={"recipe-your-tile-" + props.recipeInfo.id} data-id-number={props.recipeInfo.id} className="recipe-your-tile">
            <Link id={"recipe-page-anchor-" + props.recipeInfo.id} to={"/recipe/" + props.recipeInfo.id}>
                <div className="recipe-your-tile-column half-block">
                    <div className="recipe-thumbnail-holder">
                        <img id={"recipe-thumbnail-" + props.recipeInfo.id} className="recipe-thumbnail" src={props.recipeInfo.image} onError={(comp) => comp.target.src = "/images/placeholder-thumbnail.png"}></img>
                    </div>
                </div>
            </Link>
            <div className="recipe-your-tile-column half-block" style={{ boxShadow: "none" }}>
                <Link to={"/recipe/" + props.recipeInfo.id}>
                    <div className="recipe-name">{props.recipeInfo.name}</div>
                </Link>
                <br />
                <div className="recipe-your-rating">
                    <span className="recipe-rating-text">{props.recipeInfo.rating}</span>
                    <div id={"recipe-rating-" + props.recipeInfo.id} className="recipe-rating-bar" style={{ width: props.recipeInfo.rating }}></div>
                </div>
                <br />
                <div className="your-favorites">This recipe has <span id={"your-favorites-" + props.recipeInfo.id}>{props.recipeInfo.favorites}</span> favorites</div>
                <div className="your-utilities">
                    <span className="recipe-utility-button" style={{ float: "left", paddingLeft: "30px" }} onClick={() => editRecipe(props.recipeInfo.id)}>Edit</span>
                    <span className="recipe-utility-button" style={{ float: "right", paddingRight: "30px" }}>Delete</span>
                </div>
            </div>
        </div>
    );
}
