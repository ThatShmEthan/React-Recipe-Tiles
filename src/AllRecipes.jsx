
import { Sidebar, HomeHeader, RecipeTiles, AddRecipe } from './allcomponents'

export default function AllRecipes() {
    return (
        <>
            <AddRecipe></AddRecipe>
            <HomeHeader></HomeHeader>
            <Sidebar activePage="All Recipes"></Sidebar>

            <div id="main-container" className="main-container">
                <RecipeTiles/>
            </div>
        </>
    );
}
