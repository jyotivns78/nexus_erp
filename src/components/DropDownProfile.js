import React from "react";
import '../css/AdminProfile.css';
import { useNavigate } from "react-router-dom";

const DropDownProfile = () => {

    const navigate = useNavigate();
    return (
        <div className="flex flex-col dropDownProfile">
            <ul className="flex flex-col gap-4">
                
                <li onClick={() => navigate('/myprofile')}>My Profile</li>
                <div className="line1"></div>
                <br></br>
                <li>Mode</li>
                <li onClick={() => navigate('/mysetting')}>Account Setting</li>
                <li>Logout</li>
            </ul>
        </div>
    )
}

export default DropDownProfile