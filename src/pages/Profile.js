import React from "react";
// import '../css/onboarding/Profile.css';
import '../css/Profile.css';
import { useNavigate } from "react-router";
import logo from '../images/login/logonexus.png';
import user from '../images/onboarding/user.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

const Profile = (props) => {

const navigate = useNavigate();


return (
    <div className="container">
        <div className="left">

            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            <div className="onboarding-options">
                <div className="profile">
                    <div className="number-logo">
                        <span>1</span>
                    </div>
                    <div className="description">
                        <h3>Profile</h3>
                        <p>Let's Get Started to Create Account</p>
                    </div>
                    <div className="dashed"></div>
                </div>


                <div className="personal-info">
                    <div className="number-logo">
                        <span>2</span>
                    </div>
                    <div className="description">
                        <h3>Personal Info</h3>
                        <p>Setup your some Personal Information</p>
                    </div>
                    <div className="dashed"></div>
                </div>


                <div className="educational-detail">
                    <div className="number-logo">
                        <span>3</span>
                    </div>
                    <div className="description">
                        <h3>Educational Details</h3>
                        <p>Setup your Educational Details</p>
                    </div>
                    <div className="dashed"></div>
                </div>


                <div className="employment-detail">
                    <div className="number-logo">
                        <span>4</span>
                    </div>
                    <div className="description">
                        <h3>Employment Details</h3>
                        <p>Provide your Employment Details</p>
                    </div>
                    <div className="dashed"></div>
                </div>


                <div className="document-details">
                    <div className="number-logo">
                        <span>5</span>
                    </div>
                    <div className="description">
                        <h3>Document Details</h3>
                        <p>Setup your Document Details</p>
                    </div>
                    <div className="dashed"></div>
                </div>


            </div>
            {/* <div className="side-scroll"></div> */}
        </div>
        <div className="right">
            <div className="profile-pic">
                <h3>Hi, Ravaji Patel</h3>
                <div className="picture">
                    <img src={user} alt="UserLogo" />
                    <div className="pen">
                <FontAwesomeIcon icon={faPen} className="pen-icon"></FontAwesomeIcon>
                </div>
                </div>
            </div>
            <div className="about">
                <p>How about uploading a profile picture of yours ? </p>
                <span>Also, tell us a bit more about your basic academic & professional details</span>
            </div>
            <button onClick={() => navigate("/personal")} className="profilebutton">Continue</button>
        </div>
        
    </div>
    )
}


export default Profile
