import React from 'react';

import Search from "../Search/Search";

import './SearchSection.css'

const SearchSection = ({searchCityAPIHandler}) => {

    return (
        <div className="searchSection">
            <Search searchCityAPIHandler={searchCityAPIHandler}/>
        </div>
    )
}

export default SearchSection;