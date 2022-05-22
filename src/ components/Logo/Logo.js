import React from "react";

import './Logo.css'
import {Link, Route, Routes} from "react-router-dom";

import IndexPage from "../IndexPage/IndexPage";
import Dashboard from "../Dashboard/Dashboard";

const Logo = () => {
    return (
        <div className="logo">
            <Link to="/dashboard">Logo</Link>
        </div>
    )
}

export default Logo;