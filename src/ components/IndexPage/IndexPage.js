import React, {useState} from "react";

import Navigation from "../Navigation/Navigation";
import DefaultCities from "../DefaultCities/DefaultCities";
import Footer from "../Footer/Footer";
import SearchedCity from "../SearchedCity/SearchedCity";
import Logo from "../Logo/Logo";

import './IndexPage.css'


const IndexPage = () => {
    const [showSearchResult, setShowSearchResult] = useState(false)
    const [searchedCityInfo, setSearchedCityInfo] = useState("searchedCityInfo info")
    const searchCityAPI = (userInput) => {
        console.log("index")
        console.log(userInput)
        setSearchedCityInfo(userInput)
        setShowSearchResult(true)
    }


    return(

        <div className="indexPage">
            <Logo/>
            <Navigation searchCityAPI={searchCityAPI}/>
            {showSearchResult ?  <SearchedCity searchedCityDetails={searchedCityInfo}/> : <DefaultCities/>}
            <Footer/>
        </div>

    )
}

export default IndexPage;