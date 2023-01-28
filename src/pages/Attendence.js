import React, { useState } from "react";
import '../css/Attendence.css';
import nlogo from '../images/login/logonexus.png';
import adminpic from '../images/login/profile.png';
import { faHandshake } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DropDownProfile from "../components/DropDownProfile";
import AttendenceChart from "../components/AttendenceChart";


import { Data } from "../utils/Data";
import { BarChart } from "../components/BarChart";


const Attendence = () => {

    const [openProfile, setOpenProfile] = useState(false);

    const [chartData, setChartData] = useState({
        labels: Data.map((data) => data.status),
        datasets: [
            {
                label: "Users",
                data: Data.map((data) => data.date),
                backgroundColor: [
                    "rgba(75, 192, 192, 1)",
                    "#ecf0f1",
                    "#50AF95",
                    "#f3ba2f",
                    "#2a71d0"
                ],
                borderColor: "black",
                borderWidth: 2
            }
        ]
    });

    return(
        <div className="admin-container">
                  <div className="admin-left">
                <div className="logo-with-profile-image">
                    <img src={ nlogo } alt="Nlogo" />
                    
                    <div className="profile-logo">
                        <img src={ adminpic } alt="AdminPic" onClick={() => setOpenProfile((prev) => !prev)}/>
                    
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
                {
                    openProfile &&  <DropDownProfile />
                }


               
            </div>


            <div className="attendence-right">
                <AttendenceChart chartData={chartData} />
                <BarChart chartData={chartData} />
            </div>
        </div>
    )
}




export default Attendence;
