import React, {useState} from "react";

import {useSearchCityAPI} from "../../hooks/useSearchCityAPI";

import Navigation from "../Navigation/Navigation";
import DefaultCities from "../DefaultCities/DefaultCities";
import Footer from "../Footer/Footer";
import SearchedCity from "../SearchedCity/SearchedCity";
import Logo from "../Logo/Logo";

import './IndexPage.css'


const IndexPage = () => {


    const [showSearchResult, setShowSearchResult] = useState(false)
    const [searchedCityInfo, setSearchedCityInfo] = useState("searchedCityInfo info")


    const goHome = () => {
        setShowSearchResult(false)
    }

    const searchCityAPIHandler = (userInput) => {
        /* check input */
        const cityWeatherDetails = useSearchCityAPI(userInput)
        console.log("index")
        console.log(userInput)
        setSearchedCityDetails(cityWeatherDetails)
        setShowSearchResult(true)
    }


    return (

        <div className="indexPage">
            <Logo goHome={goHome}/>
            <Navigation searchCityAPI={searchCityAPI}/>
            {showSearchResult ? <SearchedCity searchedCityDetails={SearchedCityDetails}/> : <DefaultCities/>}
            <Footer/>
        </div>

    )
}

export default IndexPage;