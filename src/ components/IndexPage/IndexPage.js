import React, {useEffect, useState} from "react";

import {useSearchCityAPI} from "../../hooks/api/useSearchCityAPI";

import Navigation from "../Navigation/Navigation";
import DefaultCities from "../DefaultCities/DefaultCities";
import Footer from "../Footer/Footer";
import SearchedCity from "../SearchedCity/SearchedCity";
import Logo from "../Logo/Logo";

import './IndexPage.css'


const IndexPage = () => {

    const [showHomePage, setShowHomePage] = useState(true)
    const [searchedCityDetails, setSearchedCityDetails] = useState()
    const [isLoading, setIsLoading] = useState(false)


    const goHome = () => {
        setShowHomePage(true)
    }

    const searchCityAPIHandler = (cityName) => {
        /* check input */
        setShowHomePage(false)
        useSearchCityAPI(cityName, setSearchedCityDetails, setIsLoading)
    }

    return (

        <div className="indexPage">
            <Logo goHome={goHome}/>
            <Navigation searchCityAPIHandler={searchCityAPIHandler}/>
            {showHomePage ? <DefaultCities/> :
            isLoading ? "loading" :
            (searchedCityDetails && <SearchedCity searchedCityDetails={searchedCityDetails}/>)}
            <Footer/>
        </div>

    )
}

export default IndexPage;