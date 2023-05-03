
export default function ExtendedSidebar()
  {
    return (<div id="sidebar" className="extended-sidebar">
      <div className="sidebar-logo">
        <p className="logo-text">ReciPls</p>
      </div>

  <a id="home-anchor" className="sidebar-link" href="/home.html">
      <button id="home-button" className={"sidebar-button" || ((props.activePage.toLowerCase() == "home") && "sidebar-button currentPage")}>Home</button>
    </a>

    <a id="all-recipes-anchor" className="sidebar-link" href="/all-recipes.html">
      <button id="all-recipes-button" className={"sidebar-button" || ((props.activePage.toLowerCase() == "all recipes") && "sidebar-button currentPage")}>All Recipes</button>
    </a>

    <a id="saved-recipes-anchor" className="sidebar-link" href="/saved-recipes.html">
      <button id="saved-recipes-button" className={"sidebar-button" || ((props.activePage.toLowerCase() == "saved recipes") && "sidebar-button currentPage")}>Saved Recipes</button>
    </a>

    <a id="your-recipes-anchor" className="sidebar-link" href="/your-recipes.html">
      <button id="your-recipes-button" className={"sidebar-button" || ((props.activePage.toLowerCase() == "your recipes") && "sidebar-button currentPage")}>Your Recipes</button>
    </a>

  <span id="add-recipe-anchor" className="sidebar-link">
    <button id="add-recipe-button" className="sidebar-button" onClick={ (addR) => addRecipePanel(addR.target)}>Add Recipe</button>
  </span>

  <div id="search-container" className="sidebar-search-container">
    <button id="filter" className="search-filter" onClick={showFilters()}>
      <p>Filter</p>
    </button>
    <input type="search" id="search-box" className="search-box" placeholder="Search..."></input>
    <button id="search-button" className="search-button"
      onClick={() => search(encodeURIComponent(document.getElementById('search-box').value).replace('%20', '+'))}>
      <p>🔍</p>
    </button>
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