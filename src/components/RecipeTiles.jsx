
import { useState } from 'react'
import RecipeTile from './RecipeTile'

export default function RecipeTiles(props) {
    var recipeData = [];
    var [loading, isLoading] = useState(true);
    var [recipes, setRecipes] = useState([]);

    if (loading) {
        fetch("/data/recipedata.json")
            .then((response) => response.json())
            .then((data) => {
                recipeData = data.recipedata;
                setRecipes(recipeData.map(recipeInfo =>
                    <RecipeTile key={recipeInfo.id} recipeInfo={{
                        id: recipeInfo.id,
                        name: recipeInfo.name || "",
                        image: recipeInfo.image || "",
                        description: recipeInfo.description || "",
                        ingredients: recipeInfo.ingredients || [],
                        instructions: recipeInfo.instructions || "",
                        allergens: recipeInfo.allergens || [],
                        utensils: recipeInfo.utensils || [],
                        rating: recipeInfo.rating || "0%",
                        favorites: recipeInfo.favorites || 0
                    }}>
                    </RecipeTile>
                ));
                isLoading(false);
            });
        return (<div>Loading...</div>);
    }

    return (
        <div id="recipes" className={props.homeClass}>
            {recipes}
        </div>
    );
}
