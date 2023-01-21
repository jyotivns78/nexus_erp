import React from "react";
import './Login.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const Login = () => (
    <div className="container">
        <div className="logo">
        </div>
        <div className="form">
            <form>
                <h4>Welcome Back!</h4>
                <div className="email">
                    <input type="email" name="email" placeholder="Email" required />
                </div>
                <FontAwesomeIcon icon={faEye} className="eye-icon"></FontAwesomeIcon>

        <div className="password">
            <input type="password" name="password" placeholder="Password" required />
            <Link className="forget">Forget Password?</Link>
        </div>
        <button>Sign In</button>
        </form>
        </div>
    </div>
)

export default Login;
