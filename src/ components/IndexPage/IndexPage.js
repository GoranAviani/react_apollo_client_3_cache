import React from "react";

import Navigation from "../Navigation/Navigation";
import DefaultCities from "../DefaultCities/DefaultCities";
import Footer from "../Footer/Footer";

import './IndexPage.css'

const IndexPage = () => {
    return(
        <div className="indexPage">
            <Navigation/>
            <DefaultCities/>
            <Footer/>
        </div>
    )
}

export default IndexPage;