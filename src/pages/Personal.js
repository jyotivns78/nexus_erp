import React from "react";
import logo from '../images/login/logonexus.png';
import '../css/Personal.css';
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";


const Personal = (props) => {
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
            <div className="education-des">
                <h3>Education Details</h3>
                <span>If you need more info please check out</span>
            </div>
            <hr></hr>
            <div className="form">
                <label className="one">Education Qualification</label>
                <input className="input1" type="text" required />
                <label className="two">Degree</label>
                <input className="input2" type="text" required />
            </div>

            <div className="documents">
            <h3>Document Upload</h3>
            
                <div className="doc-div">
                
                <div className="upload-icon">
                    <span>10th</span>
                    <br></br>
                    <br></br>
                    <FontAwesomeIcon icon={faFileArrowUp} className="pen-icon"></FontAwesomeIcon>
                    <div className="pen">
                <FontAwesomeIcon icon={faPen} className="pen-icon"></FontAwesomeIcon>
                </div>
                </div>
                </div>


                <div className="doc-div">
                
                <div className="upload-icon">
                    <span>12th</span>
                    <br></br>
                    <br></br>
                    <FontAwesomeIcon icon={faFileArrowUp} className="pen-icon"></FontAwesomeIcon>
                    <div className="pen">
                <FontAwesomeIcon icon={faPen} className="pen-icon"></FontAwesomeIcon>
                </div>
                </div>
                </div>

                <div className="doc-div">
                
                <div className="upload-icon">
                    <span>Graduation Certificate</span>
                    <br></br>
                    <br></br>
                    <FontAwesomeIcon icon={faFileArrowUp} className="pen-icon"></FontAwesomeIcon>
                    <div className="pen">
                <FontAwesomeIcon icon={faPen} className="pen-icon"></FontAwesomeIcon>
                </div>
                </div>
                </div>

                <div className="doc-div">
                
                <div className="upload-icon">
                    <span>Other Certificate</span>
                    <br></br>
                    <br></br>
                    <FontAwesomeIcon icon={faFileArrowUp} className="pen-icon"></FontAwesomeIcon>
                    <div className="pen">
                <FontAwesomeIcon icon={faPen} className="pen-icon"></FontAwesomeIcon>
                </div>
                </div>
                </div>
            </div>

            <button onClick={() => navigate("/education")}>Continue</button>
       
        </div>
    </div>
)
}

export default Personal

