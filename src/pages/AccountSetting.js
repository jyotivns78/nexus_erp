import React, { useState } from "react";
import '../css/AccountSetting.css';
import nlogo from '../images/login/logonexus.png';
import adminpic from '../images/login/profile.png';
import { faHandshake } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DropDownProfile from "../components/DropDownProfile";
import { faShieldHalved } from "@fortawesome/free-solid-svg-icons";

const AccountSetting = () => {
    const [openProfile, setOpenProfile] = useState(false);

    return(
        <div className="account-container">
                   <div className="admin-left">
                <div className="logo-with-profile-image">
                    <img src={ nlogo } alt="Nlogo" />
                    
                    <div className="profile-logo">
                        <img src={ adminpic } alt="AdminPic" onClick={() => setOpenProfile((prev) => !prev)}/>
                    
                    </div>
                    
                    {/* Dropdown Menu */}

                    
                    {/* Dropdown Menu */}



                
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
                {
                    openProfile &&  <DropDownProfile />
                }


               
            </div>


            <div className="account-right">
                <div className="acoount-header">
                    <h3>Account Settings</h3>
                    <span>Dashboard - Account Settings</span>
                </div>

                <div className="change-password">
                    <div className="dash-border1">
                    <h3>Change Password</h3>
                    </div>
                    <span>Current Password</span><br></br><br></br><br></br>
                    <input type="password" name="password" required />
                    <br></br>
                    <span>New Password</span><br></br><br></br><br></br>
                    <input type="password" name="new-password" required />
                    <br></br>
                    <span>New Password</span><br></br>
                    <br></br><br></br>
                    <input type="password" name="new-password" required />
                    <br></br>
                    <br></br>
                    <br></br>
                    <button className="update-password">Update Password</button>
                    <button className="cancel">Cancel</button> 
                </div>

                <div className="mail-account">
                <div className="dash-border1">
                    <h3>Mail Account Configuration</h3>
                    </div>
                    <div className="mail-con">
                    <FontAwesomeIcon icon={faShieldHalved} className="shield-icon"></FontAwesomeIcon>
                     <h3>Your Account is All Ready Configed</h3>
                     <button className="enable">Enable</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default AccountSetting
