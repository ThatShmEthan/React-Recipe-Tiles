
import Sidebar from './components/Sidebar'
import HomeHeader from './components/HomeHeader'
import RecipeTiles from './components/RecipeTiles'
import AddRecipe from './components/AddRecipe'

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
