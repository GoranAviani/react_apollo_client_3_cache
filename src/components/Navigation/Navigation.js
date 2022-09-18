import React from "react";

import {Link} from "react-router-dom";

import './Navigation.css'
import LoginRegister from "../LoginRegister/LoginRegister";

//             <Link to="/dashboard">Dashboard</Link>
const Navigation = ({setSearchedCityDetails}) => {
    return (
        <div className="navigation">
            <Link to="/" onClick={() => {
                setSearchedCityDetails(null)
            }}>Index </Link>

            <LoginRegister/>

        </div>
    )
}

export default Navigation;