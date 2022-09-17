import React from "react";

import {Link} from "react-router-dom";

import './Navigation.css'
import LoginRegister from "../LoginRegister/LoginRegister";


const Navigation = () => {
    return (
        <div className="logo">
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/">Index
            </Link>
            <LoginRegister/>

        </div>
    )
}

export default Navigation;