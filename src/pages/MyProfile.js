import React, { useState } from "react";
import '../css/MyProfile.css';
import nlogo from '../images/login/logonexus.png';
import adminpic from '../images/login/profile.png';
import { faHandshake } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DropDownProfile from "../components/DropDownProfile";
import round from '../images/login/round.png';
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";


const MyProfile = () => {
    const [openProfile, setOpenProfile] = useState(false);

    return (
        <div className="admin-container">
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

            <div className="profile-right">
                <div className="nexus-heading">
                    <img src={round} alt="Round" />
                    <h3>Nexus Admin</h3>
                    <span  className="position">Developer &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp;
                    &nbsp;
                    &nbsp; nexusadmin@nexussupport.in</span>
                    <div className="main">
                        <div className="one">
                        <FontAwesomeIcon icon={faArrowUp} className="arrow-icon"></FontAwesomeIcon>
                        <p>$4,500</p>
                        <span className="earn">Earnings</span>
                        </div>

                        <div className="one">
                        <FontAwesomeIcon icon={faArrowDown} className="arrow-icon" style={ {color:"rgb(190, 21, 21)"} }></FontAwesomeIcon>
                        <p>80</p>
                        <span className="earn">Projects</span>
                        </div>

                        <div className="one">
                        <FontAwesomeIcon icon={faArrowUp} className="arrow-icon"></FontAwesomeIcon>
                        <p>%60</p>
                        <span className="earn">Success Rate</span>
                        </div>
                    </div>
                </div>


                <div className="data-form">
                    <div className="personal-form">
                        <form>
                            <div className="heading">
                            <h3>Personal Details</h3>
                            </div>
                            
                            <span>Name : </span>
                            <span>Employee id : </span>
                            <span>Birth Date : </span>
                            <span>Personal Mail : </span>
                            <span>Corporate Number : </span>
                            <span>Personal Number : </span>
                            <span>Corporate Mail : </span>
                            <span>Emergency Number : </span>
                            <span>Blood Group : </span>
                        </form>
                    </div>


                    <div className="education-form">
                        <form>
                        <div className="heading">
                            <h3>Education Details</h3>
                            </div>
                            
                            <span>Qualification: </span>
                            <span>Degree: </span>
                        </form>
                    </div>

                    <div className="department-form">
                        <form>
                        <div className="heading">
                            <h3>Department Details</h3>
                            </div>
                           
                            <span>Department: </span>
                            <span>Job Location: </span>
                            <span>Position: </span>
                            <span>Date of Joining: </span>
                        </form>
                    </div>

                    <div className="bank-form">
                        <form>
                        <div className="heading">
                            <h3>Bank Details</h3>
                            </div>
                           <div className="left-div">
                            <span>Bank Name: </span>
                            <span>IFSC Code: </span>
                            <span>Branch Name: </span>
                            </div>
                            <div className="right-div">
                            <span>Bank A/C Number: </span>
                            <span>Bank Holder Name: </span>
                            <span>Mobile Number: <br/>(Link with Bank)</span>
                            </div>
                        </form>
                    </div>

                    <div className="document-form">
                    <div className="heading">
                            <h3>Documents Details</h3>
                            </div>
                          <div className="contain">
                            <div className="doc-div">
                                <h4>Pan Card</h4>
                                <div className="doc-con"></div>
                            </div>

                            <div className="doc-div">
                                <h4>Adhar Card</h4>
                                <div className="doc-con"></div>
                            </div>

                            <div className="doc-div">
                                <h4>Address Proof</h4>
                                <div className="doc-con"></div>
                            </div>

                            <div className="doc-div">
                                <h4>Bank Statement</h4>
                                <div className="doc-con"></div>
                            </div>

                            <div className="doc-div">
                                <h4>10th</h4>
                                <div className="doc-con"></div>
                            </div>

                            <div className="doc-div">
                                <h4>12th</h4>
                                <div className="doc-con"></div>
                            </div>

                            <div className="doc-div">
                                <h4>Graduate</h4>
                                <div className="doc-con"></div>
                            </div>

                            <div className="doc-div">
                                <h4>Signature</h4>
                                <div className="doc-con"></div>
                            </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default MyProfile
