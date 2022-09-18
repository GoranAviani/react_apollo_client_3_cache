import React from "react";

import {Link} from "react-router-dom";

import './Navigation.css'
import LoginRegister from "../LoginRegister/LoginRegister";


const Navigation = ({setSearchedCityDetails}) => {
    return (
        <div className="navigation">
            <Link to="/" onClick={() => {
                setSearchedCityDetails(null)
            }}>Index

                <Link to="/dashboard">Dashboard</Link>
            </Link>
            <LoginRegister/>

        </div>
    )
}

export default Navigation;