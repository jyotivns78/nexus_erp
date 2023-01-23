import React from "react";
import '../css/AdminProfile.css';
import nlogo from '../images/login/logonexus.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshake } from "@fortawesome/free-solid-svg-icons";
import adminpic from '../images/login/Ellipse.png';
import { faFileArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons"; 


const AdminProfile = () => {

    return (
        <div className="admin-container">
            <div className="admin-left">
                <div className="logo-with-profile-image">
                    <img src={ nlogo } alt="Nlogo" />
                    <div className="profile-logo">
                        <img src={ adminpic } alt="AdminPic" />
                    </div>
                </div>
                
                <div className="des">
                    <h3>Welcome Back Admin</h3>
                    <FontAwesomeIcon icon={faHandshake} className="pen-icon"></FontAwesomeIcon>
                
                </div>

                <div className="option-div">
                    <div className="home">
                        <h3>Home</h3>
                    </div>

                    <div className="home">
                        <h3>Attendence Master</h3>
                    </div>

                    <div className="home">
                        <h3>Organization Documents</h3>
                    </div>
                </div>
            </div>
            <div className="admin-right">
                <div className="heading-div">
                    <h3>Organization Documents</h3>
                    <span>Home - Organization Documents</span>
                    <button className="create">Create + </button>
                </div>

                <div className="main-container">
                    <div className="div1">
                        <h3>Agreement of Documents</h3>
                        <h4>Description</h4>
                        <p>A Promise arrangement between two or more parties</p>
                        <FontAwesomeIcon icon={faFileArrowUp} className="file"></FontAwesomeIcon>
                        <span>Date -   01-02-2023</span>
                        <FontAwesomeIcon icon={faEye} className="eye"></FontAwesomeIcon>
                        
                    </div>

                    <div className="div1">
                        <h3>Agreement of Documents</h3>
                        <h4>Description</h4>
                        <p>A Promise arrangement between two or more parties</p>
                        <FontAwesomeIcon icon={faFileArrowUp} className="file"></FontAwesomeIcon>
                        <span>Date -   01-02-2023</span>
                        <FontAwesomeIcon icon={faEye} className="eye"></FontAwesomeIcon>
                        
                    </div>

                    <div className="div1">
                        <h3>Agreement of Documents</h3>
                        <h4>Description</h4>
                        <p>A Promise arrangement between two or more parties</p>
                        <FontAwesomeIcon icon={faFileArrowUp} className="file"></FontAwesomeIcon>
                        <span>Date -   01-02-2023</span>
                        <FontAwesomeIcon icon={faEye} className="eye"></FontAwesomeIcon>
                        
                    </div>


                    <div className="div1">
                        <h3>Agreement of Documents</h3>
                        <h4>Description</h4>
                        <p>A Promise arrangement between two or more parties</p>
                        <FontAwesomeIcon icon={faFileArrowUp} className="file"></FontAwesomeIcon>
                        <span>Date -   01-02-2023</span>
                        <FontAwesomeIcon icon={faEye} className="eye"></FontAwesomeIcon>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminProfile;
