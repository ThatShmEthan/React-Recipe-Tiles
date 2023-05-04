
import '/styles/login-style.css';
import { BrowserRouter, Route, Link, useParams } from 'react-router-dom'

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
                        <input type="text" placeholder="Username" className="credential-field" />
                    </div>
                    <div className="login-second-input">
                        <img src="/images/password.png" alt="" className="credential-icon" />
                        <input type="password" placeholder="Password" className="credential-field" />
                    </div>
                    <div className="login-third-input">
                        <img src="/images/password.png" alt="" className="credential-icon" />
                        <input type="password" placeholder="Confirm Password" className="credential-field" />
                    </div>
                    <div className="login-button-container">
                        <button className="login-button">Sign Up</button>
                    </div>
                    <div className="login-link-container">
                        <Link to="/login" className="login-link">Log In</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
