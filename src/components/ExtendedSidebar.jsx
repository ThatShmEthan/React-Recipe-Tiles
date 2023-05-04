
import { BrowserRouter, Route, Link } from 'react-router-dom'

export default function ExtendedSidebar(props)
  {
    return (<div id="sidebar" className="extended-sidebar">
      <div className="sidebar-logo">
        <p className="logo-text">ReciPls</p>
      </div>

  <Link id="home-anchor" className="sidebar-link" to="/">
      <button id="home-button" className={((props.activePage.toLowerCase() == "home") && "sidebar-button current-page") || "sidebar-button"}>Home</button>
    </Link>

    <Link id="all-recipes-anchor" className="sidebar-link" to="/all-recipes">
      <button id="all-recipes-button" className={((props.activePage.toLowerCase() == "all recipes") && "sidebar-button current-page") || "sidebar-button"}>All Recipes</button>
    </Link>

    <Link id="saved-recipes-anchor" className="sidebar-link" to="/saved-recipes">
      <button id="saved-recipes-button" className={((props.activePage.toLowerCase() == "saved recipes") && "sidebar-button current-page") || "sidebar-button"}>Saved Recipes</button>
    </Link>

    <Link id="your-recipes-anchor" className="sidebar-link" to="/your-recipes">
      <button id="your-recipes-button" className={((props.activePage.toLowerCase() == "your recipes") && "sidebar-button current-page") || "sidebar-button"}>Your Recipes</button>
    </Link>

  <span id="add-recipe-anchor" className="sidebar-link">
    <button id="add-recipe-button" className="sidebar-button" onClick={ (addR) => addRecipePanel(addR.target)}>Add Recipe</button>
  </span>

  <div id="search-container" className="sidebar-search-container">
    <button id="filter" className="search-filter" onClick={ () => showFilters()}>
      <p>Filter</p>
    </button>
    <input type="search" id="search-box" className="search-box" placeholder="Search..."></input>
    <Link id="search-anchor" to="/search">
    <button id="search-button" className="search-button"
      /*onClick={() => search(encodeURIComponent(document.getElementById('search-box').value).replace('%20', '+'))}*/>
      <p>🔍</p>
    </button>
  </Link>
    <div id="filter-dropdown" style={{ display: "none" }}>
      <div></div>
    </div>
  </div>

  <div id="timer">
    <p>Timer</p>
    <span id="timer-hours">00</span>:<span id="timer-minutes">00</span>:<span id="timer-seconds">00</span>
  </div>

</div>);
}