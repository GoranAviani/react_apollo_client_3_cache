import React from "react";

import Navigation from "../Navigation/Navigation";
import DefaultCities from "../DefaultCities/DefaultCities";
import Footer from "../Footer/Footer";

import './IndexPage.css'

const IndexPage = () => {

    const searchCityAPI = (userInput) => {
        console.log("index")
        console.log(userInput)
    }


    return(
        <div className="indexPage">
            <Navigation searchCityAPI={searchCityAPI}/>
            <DefaultCities/>
            <Footer/>
        </div>
    )
}

export default IndexPage;