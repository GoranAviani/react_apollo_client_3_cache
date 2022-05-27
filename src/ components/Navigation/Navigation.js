import React from 'react';

import LoginRegister from "../LoginRegister/LoginRegister";
import Search from "../Search/Search";

import './Navigation.css'

const Navigation = ({searchCityAPIHandler}) => {

    return (
        <div className="navigation">
            <Search searchCityAPIHandler={searchCityAPIHandler}/>
            <LoginRegister/>
        </div>
    )
}

export default Navigation;