
import '/styles/login-style.css';
import { BrowserRouter, Route, Link, useParams } from 'react-router-dom'

export default function Login() {
  return (
    <div className="login-main">
     <div className="login-sub-main">
       <div className="login-content">
         <div className="login-imgs">
           <div className="login-container-image">
             <img src="/images/logo.png" alt="ReciPls" className="login-logo"/>
           </div>


         </div>
         <div>
           <h1>Login</h1>
           <div className="login-first-input">
             <img src="/images/username.png" alt="" className="credential-icon"/>
             <input type="text" placeholder="Username" className="credential-field"/>
           </div>
           <div className="login-second-input">
             <img src="/images/password.png" alt="" className="credential-icon"/>
             <input type="password" placeholder="Password" className="credential-field"/>
           </div>
          <div className="login-button-container">
            <button className="login-button">Login</button>
          </div>
           
            <div className="login-link-container">
              <Link to="/signup" className="login-link">Sign Up</Link>
            </div>
           
 
         </div>
       </div>
       

     </div>
    </div>
  );
}
