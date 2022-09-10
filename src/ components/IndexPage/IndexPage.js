import React, {useEffect, useState} from "react";

import {useSearchCityAPI} from "../../hooks/useSearchCityAPI";

import Navigation from "../Navigation/Navigation";
import DefaultCities from "../DefaultCities/DefaultCities";
import Footer from "../Footer/Footer";
import SearchedCity from "../SearchedCity/SearchedCity";
import Logo from "../Logo/Logo";

import './IndexPage.css'


const IndexPage = () => {

    const [showSearchResult, setShowSearchResult] = useState(false)
    const [searchedCityDetails, setSearchedCityDetails] = useState()


    const goHome = () => {
        setShowSearchResult(false)
    }

    const searchCityAPIHandler = (cityName) => {
        /* check input */
        const weatherApiResult = useSearchCityAPI(cityName)
        console.log("index")
        console.log({weatherApiResult})
        setShowSearchResult(true)
        setSearchedCityDetails(weatherApiResult)

    }



    return (

        <div className="indexPage">
            <Logo goHome={goHome}/>
            <Navigation searchCityAPIHandler={searchCityAPIHandler}/>
            {searchedCityDetails ? <SearchedCity searchedCityDetails={searchedCityDetails}/> : <DefaultCities/>}
            <Footer/>
        </div>

    )
}

export default IndexPage;