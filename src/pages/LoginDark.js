import React from "react";
import '../css/LoginDark.css';
import loginlogo from '../images/login/logonexus.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
// import { containerimage } from '../images/login/Dark Slide.png';



const LoginDark = () => {
    return (
        <div className="logincontainer">

            <div className="leftlogo">
                <img src={ loginlogo } alt="Loginlogo" />
            </div>
            <div className="right">
                <div className="loginform">
                    <form>
                        <h4>Welcome Back!</h4>

                        <div className="mail">
                            <input type="email" name="email" placeholder="Email" required />
                        </div>

                        <FontAwesomeIcon icon={faEye} className="eye-icon"></FontAwesomeIcon>

                        <div className="password">
                            <input type="password" name="password" placeholder="Password" required />
                            <Link className="forget-link">Forget Password</Link>
                        </div>

                        <button className="sign">Sign In</button>
                    </form>
                </div>
            </div>
        </div>
    )
}



export default LoginDark