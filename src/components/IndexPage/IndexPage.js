import React, {useState} from "react";

import SearchSection from "../SearchSection/SearchSection";
import DefaultCities from "../DefaultCities/DefaultCities";
import Footer from "../Footer/Footer";
import ResultSearchedCity from "../ResultSearchedCity/ResultSearchedCity";
import Loader from "../Loader/Loader";
import Navigation from "../Navigation/Navigation";

import {useSearchCityAPI} from "../../hooks/api/useSearchCityAPI";

import './IndexPage.css'
import '../../css/GlobalContainer.css'


const IndexPage = () => {

    const [searchedCityDetails, setSearchedCityDetails] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const [accessKey, setAccessKey] = useState()

    const searchCityAPIHandler = (cityName) => {
        /* check input */
        useSearchCityAPI(accessKey, setAccessKey, cityName, setSearchedCityDetails, setIsLoading)
    }

    return (
        <div className="globalContainer">

            <div className="indexPage">
                <Navigation setSearchedCityDetails={setSearchedCityDetails}/>
                <SearchSection searchCityAPIHandler={searchCityAPIHandler}/>
                {!isLoading ? <Loader/> : searchedCityDetails ?
                    <ResultSearchedCity searchedCityDetails={searchedCityDetails}/> :
                    <DefaultCities/>}
                <Footer/>
            </div>
        </div>

    )
}

export default IndexPage;