
import { ExtendedSidebar, YourRecipeTiles, AddRecipe } from './allcomponents'

export default function YourRecipes() {
    return (
        <>
            <AddRecipe></AddRecipe>
            <ExtendedSidebar activePage="Your Recipes" />

            <div id="main-container" className="extended-main-container">
                <YourRecipeTiles/>
            </div>
        </>
    );
}
