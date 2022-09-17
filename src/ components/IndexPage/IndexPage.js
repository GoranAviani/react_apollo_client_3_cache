import React, {useState} from "react";

import Navigation from "../Navigation/Navigation";
import DefaultCities from "../DefaultCities/DefaultCities";
import Footer from "../Footer/Footer";
import SearchedCity from "../ResultSearchedCity/SearchedCity";
import Logo from "../Logo/Logo";

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
            <Logo/>
            <Navigation searchCityAPIHandler={searchCityAPIHandler}/>
            {isLoading ? "loading" : searchedCityDetails ? <SearchedCity searchedCityDetails={searchedCityDetails}/> :
                <DefaultCities/>}
            <Footer/>
        </div>

    )
}

export default IndexPage;