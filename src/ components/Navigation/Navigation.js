import React from 'react';

import LoginRegister from "../LoginRegister/LoginRegister";
import Search from "../Search/Search";

import './Navigation.css'

const Navigation = () =>{

    return(
        <div class="Navigation">
            <Search/>
            <LoginRegister />
        </div>
    )
}

export default Navigation;