import React from "react";
import {Link } from "react-router-dom";
import "./Menu.css"

const Menu = () =>{
    return(
        <div className="menu">
            <div>Movie App</div>
            <div>
                <Link to="/" >Main Page</Link>
                <Link to="/login" >Login</Link>
                <Link to="/sign-up">Sign Up</Link>
            </div>

        </div>
    );
}

export default Menu;