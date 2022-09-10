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
    const [searchedCityDetails, setSearchedCityDetails] = useState(false)
    const [isLoading, setIsLoading] = useState(false)


    const goHome = () => {
        setShowSearchResult(false)
    }

    const searchCityAPIHandler = (cityName) => {
        /* check input */
        setIsLoading(true)
        console.log({isLoading})
        const weatherApiResult = useSearchCityAPI(cityName)
        setSearchedCityDetails(weatherApiResult)
        console.log({searchedCityDetails})

        setIsLoading(true)

        console.log({isLoading})


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