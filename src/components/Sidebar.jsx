
export default function Sidebar(props) {
  return (<div id="sidebar" className="sidebar">

    <a id="home-anchor" className="sidebar-link" href="/home.html">
      <button id="home-button" className={((props.activePage.toLowerCase() == "home") && "sidebar-button current-page") || "sidebar-button"}>Home</button>
    </a>

    <a id="all-recipes-anchor" className="sidebar-link" href="/all-recipes.html">
      <button id="all-recipes-button" className={((props.activePage.toLowerCase() == "all recipes") && "sidebar-button current-page") || "sidebar-button"}>All Recipes</button>
    </a>

    <a id="saved-recipes-anchor" className="sidebar-link" href="/saved-recipes.html">
      <button id="saved-recipes-button" className={((props.activePage.toLowerCase() == "saved recipes") && "sidebar-button current-page") || "sidebar-button"}>Saved Recipes</button>
    </a>

    <a id="your-recipes-anchor" className="sidebar-link" href="/your-recipes.html">
      <button id="your-recipes-button" className={((props.activePage.toLowerCase() == "your recipes") && "sidebar-button current-page") || "sidebar-button"}>Your Recipes</button>
    </a>

    <span id="add-recipe-anchor" className="sidebar-link">
      <button id="add-recipe-button" className="sidebar-button" onClick={ (addR) => addRecipePanel(addR.target)} style={{ borderBottomLeftRadius: "20%", borderBottomRightRadius: "20%" }}>Add Recipe</button>
    </span>

    <div id="timer">
      <p>Timer</p>
      <span id="timer-hours">00</span>:<span id="timer-minutes">00</span>:<span id="timer-seconds">00</span>
    </div>

  </div>);
}
