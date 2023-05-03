
import Sidebar from './components/Sidebar'
import HomeHeader from './components/HomeHeader.jsx'
import RecipeTiles from './components/RecipeTiles'
import AddRecipe from './components/AddRecipe'

export default function SavedRecipes() {
  return (
    <>

      <AddRecipe/>
      
      <HomeHeader></HomeHeader>

      <Sidebar activePage="Saved Recipes"></Sidebar>

      <div id="main-container" className="main-container">

        <RecipeTiles/>

      </div>

    </>
  )
}
