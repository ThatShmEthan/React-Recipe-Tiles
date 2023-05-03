
import Sidebar from './components/Sidebar'
import HomeHeader from './components/HomeHeader.jsx'
import RecipeTiles from './components/RecipeTiles'

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
  )
}
