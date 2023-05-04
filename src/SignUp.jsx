
import '/styles/login-style.css';
import { BrowserRouter, Route, Link, useParams, redirect } from 'react-router-dom'

export default function SignUp() {
    return (
        <div className="login-main">
            <div className="login-sub-main">
                <div className="login-imgs">
                    <div className="login-container-image">
                        <img src="/images/logo.png" alt="ReciPls" className="login-logo" />
                    </div>
                </div>
                <div>
                    <h1>Sign Up</h1>
                    <div>
                        <img src="/images/username.png" alt="" className="credential-icon" />
                        <input id='username-input' type="text" placeholder="Username" className="credential-field" />
                    </div>
                    <div className="login-second-input">
                        <img src="/images/password.png" alt="" className="credential-icon" />
                        <input id='password-input' type="password" placeholder="Password" className="credential-field" />
                    </div>
                    <div className="login-third-input">
                        <img src="/images/password.png" alt="" className="credential-icon" />
                        <input id='password-input-2' type="password" placeholder="Confirm Password" className="credential-field" />
                    </div>
                    <div className="login-button-container">
                        <button className="login-button" onClick={
                            () => signup(document.getElementById('username-input').value, document.getElementById('password-input').value, document.getElementById('password-input-2').value) && redirect('/')
                        }>Sign Up</button>
                    </div>
                    <div className="login-link-container">
                        <Link to="/login" className="login-link">Login</Link>
                        <div className="login-skip-link">
                            <Link to="/">Skip for Now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
