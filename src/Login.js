import React from "react";
import { Link } from "react-router-dom";
import './Login.css'

const Login = () => {
    return (
        <div className="login-page">
            <div className="login-input">
                <input type='text' placeholder="Username" />
                <input type='text' placeholder="Password" />
                <button>Login</button>
            </div>
            <div className="sign-up">
                <h5>Don't have an account?</h5>
                <Link to="/sign-up" >SIGN UP</Link>
            </div>
        </div> 
    );
}

export default Login;