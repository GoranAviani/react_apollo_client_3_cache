import React from 'react';

import LoginRegister from "../LoginRegister/LoginRegister";
import Search from "../Search/Search";

import './Navigation.css'

const Navigation = ({searchCityAPI}) => {

    return (
        <div className="navigation">
            <Search searchCityAPI={searchCityAPI}/>
            <LoginRegister/>
        </div>
    )
}

export default Navigation;