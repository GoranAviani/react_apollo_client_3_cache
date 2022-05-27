import React from "react";

import {Link} from "react-router-dom";

import './Logo.css'


const Logo = ({goHome}) => {
    return (
        <div className="logo">
            <Link to="/dashboard">Dashboard</Link>
            <button onClick={()=>{goHome()}}>Go home</button>
        </div>
    )
}

export default Logo;