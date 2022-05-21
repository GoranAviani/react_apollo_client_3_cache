import React from "react";

import Navigation from "../Navigation/Navigation";
import DefaultCities from "../DefaultCities/DefaultCities";
import Footer from "../Footer/Footer";

const IndexPage = () => {
    return(
        <React.Fragment>
            <Navigation/>
            <DefaultCities/>
            <Footer/>
        </React.Fragment>
    )
}

export default IndexPage;