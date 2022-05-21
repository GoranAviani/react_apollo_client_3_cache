import React from "react";

import Navigation from "../Navigation/Navigation";
import DefaultCities from "../DefaultCities/DefaultCities";

const IndexPage = () => {
    return(
        <React.Fragment>
            <Navigation/>
            <DefaultCities/>
        </React.Fragment>
    )
}

export default IndexPage;