import React from "react";

import './Logo.css'
import {Link, Route, Routes} from "react-router-dom";

import IndexPage from "../IndexPage/IndexPage";
import Dashboard from "../Dashboard/Dashboard";

const Logo = ({goHome}) => {
    return (
        <div className="logo">
            <Link to="/dashboard">Dashboard</Link>
            <button onClick={()=>{goHome()}}>Go home</button>
        </div>
    )
}

export default Logo;