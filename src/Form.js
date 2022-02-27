import React from "react";
import './Form.css';

const Form = () => {
    return (
        <div className="form">
            <div className="input-group mb-3">
                <input type="text" placeholder="First Name" aria-label="Username"/>
                <input type="text" placeholder="Last Name" aria-label="Server"/>
            </div>
            <div className="input-group mb-3">
                <input type="text" placeholder="Password" />
                <input type="text" placeholder="Password Again" />
            </div>
            <div className="input-group mb-3">
                <input type="text" placeholder="E-Mail" aria-describedby="basic-addon1" />
            </div>
            <button>Sign Up</button>
        </div>
    );
}

export default Form;