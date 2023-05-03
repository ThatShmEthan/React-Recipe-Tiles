
import ExtendedSidebar from './components/ExtendedSidebar'
import YourRecipeTiles from './components/YourRecipeTiles'
import AddRecipe from './components/AddRecipe'

export default function YourRecipes() {
  return (
    <>
      <AddRecipe></AddRecipe>
      
      <ExtendedSidebar activePage="Your Recipes"/>

      <div id="main-container" className="extended-main-container">

        <YourRecipeTiles/>

      </div>

    </>
  )
}
