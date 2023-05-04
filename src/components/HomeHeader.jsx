
import { BrowserRouter, Route, Link } from 'react-router-dom'

export default function HomeHeader(props) {
    return (
        <div className="home-header">
            <div className="logo">
                <img className="logo-img" src="/images/logo.png"></img>
                {/*<p className="logo-text">ReciPls</p>*/}
            </div>

            <div id="search-container" className="search-container">
                <button id="filter" className="search-filter"
                    onClick={() => showFilters()}>
                    <p>Filter</p>
                </button>
                <input type="search" id="search-box" className="search-box" placeholder="Search..." />
                <Link id="search-anchor" to="/search">
                    <button id="search-button" className="search-button"> { /*onClick={() => search(encodeURIComponent(document.getElementById('search-box').value).replace('%20', '+'))}*/}
                        <p>🔍</p>
                    </button>
                </Link>
                <div id="filter-dropdown" style={{ display: 'none' }}>
                    <div></div>
                </div>
            </div>
            <div className='header-login-container'>
                <img className="header-login-icon" src="/images/person-icon.png" onClick = { () => showLoginMenu() }
                    style={{
                        cursor: 'pointer',
                        display: ((getCookie('username') && ((getCookie('username').toLowerCase() != 'anon') && 'none')) || 'block')
                    }}></img>
                <div id="header-login-dropdown" style={{ display: 'none' }}>
                    <Link className="signup-icon-link" to="/signup"></Link>
                </div>
            </div>
        </div>
    );
}