
import Sidebar from './components/Sidebar'
import HomeHeader from './components/HomeHeader.jsx'
import RecipeTiles from './components/RecipeTiles'
import AddRecipe from './components/AddRecipe'

export default function Search() {
    return (
        <>
            <AddRecipe></AddRecipe>
            <HomeHeader></HomeHeader>
            <Sidebar activePage="Search"></Sidebar>

            <div id="main-container" className="main-container">
                <RecipeTiles />
            </div>
        </>
    );
}
