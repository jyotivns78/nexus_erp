import React from "react";
import '../css/Signup.css';
import { Link } from "react-router-dom";
import nexusLogo from '../images/login/logonexus.png';
import roundLogo from '../images/login/round.png';
import signup from '../images/login/signup.png';





const Signup = () => {

    return(
        <div className="signup-container">
            {/* <img src={ nexusLogo } className="logo" alt="nexusLogo" /> */}
            <div className="main-container">
            <div className="signup-left">
                <form>
                <img src={ roundLogo } alt="roundLogo" />
                <h3>Welcome Back!</h3>
                <input type="email" name="email" className="email" placeholder="Email Address" />
                <br></br>
                <input type="password" name="password" className="password" placeholder="Password" />
                <Link className="forget">Forget Password</Link>
                <button>Sign Up</button>
                </form>
            </div>
            <div className="signup-right">
                <img src={ signup } alt="signup" />
                <p>The Process of working collaboratively with a group of people in order to achieve a goal.</p>
            </div>
            </div>
        </div>
    )
}




export default Signup;
