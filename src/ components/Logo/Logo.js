import React from "react";

import {Link} from "react-router-dom";

import './Logo.css'


const Navigation = () => {
    return (
        <div className="logo">
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/">Index
            </Link>
        </div>
    )
}

export default Navigation;