
import { useState } from 'react'
import { YourRecipeTile } from '../allcomponents'

export default function YourRecipeTiles(props) {
    var recipeData = [];
    var [loading, isLoading] = useState(true);
    var [recipes, setRecipes] = useState([]);
    var username = getCookie('username');

    // Use props.username to lookup recipes by username; doesn't require verification, but requires verification (sending password to server) to edit and delete recipes.
    if (loading) {
        fetch("/data/recipedata.json")
            .then((response) => response.json())
            .then((data) => {
                recipeData = data.recipedata;
                setRecipes(recipeData.filter(recipeInfo => recipeInfo.chef == username).map(recipeInfo =>
                    <YourRecipeTile key={recipeInfo.id} recipeInfo={{
                        id: recipeInfo.id,
                        name: recipeInfo.name || "",
                        image: recipeInfo.image || "",
                        description: recipeInfo.description || "",
                        ingredients: recipeInfo.ingredients || [],
                        instructions: recipeInfo.instructions || "",
                        allergens: recipeInfo.allergens || [],
                        utensils: recipeInfo.utensils || [],
                        rating: recipeInfo.rating || "0%",
                        cookTime: recipeInfo.cookTime || [0, 0],
                        prepTime: recipeInfo.prepTime || [0, 0],
                        favorites: recipeInfo.favorites || 0
                    }}></YourRecipeTile>
                ));
                isLoading(false);
            });
        return (<div>Loading...</div>);
    }

    return (
        <div id="your-recipes" className={props.homeClass}>
            { recipes }
        </div>
    );
}
