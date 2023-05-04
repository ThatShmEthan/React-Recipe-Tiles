
import { Sidebar, HomeHeader, RecipeTiles, AddRecipe } from './allcomponents'

export default function SavedRecipes() {
    return (
        <>
            <AddRecipe />
            <HomeHeader></HomeHeader>
            <Sidebar activePage="Saved Recipes"></Sidebar>

            <div id="main-container" className="main-container">
                <RecipeTiles />
            </div>

        </>
    );
}
