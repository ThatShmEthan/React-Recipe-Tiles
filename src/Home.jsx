
import { Sidebar, HomeHeader, RecipeTiles, YourRecipeTiles, AddRecipe } from './allcomponents'

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
    );
}
