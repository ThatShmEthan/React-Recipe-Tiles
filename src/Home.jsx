
import Sidebar from './components/Sidebar'
import HomeHeader from './components/HomeHeader.jsx'
import RecipeTiles from './components/RecipeTiles'
import YourRecipeTiles from './components/YourRecipeTiles'
import AddRecipe from './components/AddRecipe'

export default function Home() {
  return (
    <>
      <AddRecipe></AddRecipe>
      
      <HomeHeader></HomeHeader>
      
      <Sidebar activePage="Home"></Sidebar>

      <div id="main-container" className="main-container">

        <RecipeTiles homeClass="half-block home-column" />
        <YourRecipeTiles homeClass="half-block home-column" />

      </div>

    </>
  )
}
