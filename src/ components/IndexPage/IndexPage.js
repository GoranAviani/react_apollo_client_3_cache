import React, {useState} from "react";

import Navigation from "../Navigation/Navigation";
import DefaultCities from "../DefaultCities/DefaultCities";
import Footer from "../Footer/Footer";
import SearchedCity from "../SearchedCity/SearchedCity";

import './IndexPage.css'

const IndexPage = () => {
    const [showSearchResult, setShowSearchResult] = useState(false)
    const [searchedCityInfo, setSearchedCityInfo] = useState("searchedCityInfo info")
    const searchCityAPI = (userInput) => {
        console.log("index")
        console.log(userInput)
        setShowSearchResult(true)
    }


    return(

        <div className="indexPage">
            <Navigation searchCityAPI={searchCityAPI}/>
            {showSearchResult ?  <SearchedCity/> : <DefaultCities/>}
            <Footer/>
        </div>
    )
}

export default IndexPage;