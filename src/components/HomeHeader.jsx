
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
                {/*<Link id="search-anchor" to={"/search?" + getSearch() }>*/}
                <button id="search-button" className="search-button" onClick={() => document.location.href = '/search?' + getSearch() }> { /*onClick={() => search(encodeURIComponent(document.getElementById('search-box').value).replace('%20', '+'))}*/}
                        <p>🔍</p>
                    </button>
                {/*</Link>*/}
                <div id="filter-dropdown" style={{ display: 'none' }}>
                    <div></div>
                </div>
            </div>
            <div className='header-login-container'>
                <img className="header-login-icon" src="/images/person-icon.png" onClick = { () => showLoginMenu() } style={{ cursor: 'pointer' }}></img>
                <div id="header-login-dropdown" style={{ display: 'none' }}>
                    <p id='header-login-menu-name' style = {{ display: ((getCookie('username') && ((getCookie('username').toLowerCase() != 'anon') && 'none')) || 'block') }}>Anonymous</p>
                    <div id="header-login-links" style = {{ display: ((getCookie('username') && ((getCookie('username').toLowerCase() != 'anon') && 'none')) || 'block') }}>
                        <Link className="signup-icon-link" to="/login">
                            <button style={{ float: 'left', marginTop: '30%' }} className="login-button header-login-menu-button">Log In</button>
                        </Link>
                        <Link className="signup-icon-link" to="/signup">
                            <button style={{ float: 'left', marginTop: '15%' }} className="login-button header-login-menu-button">Sign Up</button>
                        </Link>
                    </div>
                    <h1 style={{ display: ((getCookie('username') && ((getCookie('username').toLowerCase() != 'anon') && 'block')) || 'none'), marginTop: '50%' }}>{ getCookie('username') }</h1>
                    <Link className="signup-icon-link" to="/login">
                        <button style={{
                            display: ((getCookie('username') && ((getCookie('username').toLowerCase() != 'anon') && 'block')) || 'none'), marginTop: '50%'
                        }} className="login-button header-login-menu-button" onClick = { () => logout() }>
                            Log Out
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}