export default function HomeHeader(props) {
  return (<div className="home-header">

        <div className="logo">
          <p className="logo-text">ReciPls</p>
        </div>

        <div id="search-container" className="search-container">
          <button id="filter" className="search-filter"
            onClick={() => showFilters()}>
            <p>Filter</p>
          </button>
          <input type="search" id="search-box" className="search-box" placeholder="Search..." />
          <button id="search-button" className="search-button"
            onClick={() => search(encodeURIComponent(document.getElementById('search-box').value).replace('%20', '+'))}>
            <p>🔍</p>
          </button>
          <div id="filter-dropdown" style={{ display: 'none' }}>
            <div></div>
          </div>
        </div>

      </div>
  );
}