import React, {useState} from "react";

import SearchSection from "../SearchSection/SearchSection";
import DefaultCities from "../DefaultCities/DefaultCities";
import Footer from "../Footer/Footer";
import ResultSearchedCity from "../ResultSearchedCity/ResultSearchedCity";
import Navigation from "../Logo/Logo";

import {useSearchCityAPI} from "../../hooks/api/useSearchCityAPI";

import './IndexPage.css'


const IndexPage = () => {

    const [searchedCityDetails, setSearchedCityDetails] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const [accessKey, setAccessKey] = useState()

    const searchCityAPIHandler = (cityName) => {
        /* check input */
        useSearchCityAPI(accessKey, setAccessKey, cityName, setSearchedCityDetails, setIsLoading)
    }

    return (

        <div className="indexPage">
            <Navigation/>
            <SearchSection searchCityAPIHandler={searchCityAPIHandler}/>
            {isLoading ? "loading" : searchedCityDetails ?
                <ResultSearchedCity searchedCityDetails={searchedCityDetails}/> :
                <DefaultCities/>}
            <Footer/>
        </div>

    )
}

export default IndexPage;