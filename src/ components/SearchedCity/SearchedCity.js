import React from "react";

import './SearchedCity.css'

const SearchedCity = ({searchedCityDetails}) => {
    console.log(searchedCityDetails)
    /* unpack api result info */
    return (
        <div className="searchedCity">
            <div className="searchedCityMainDetails">

                <div className="currentTemperature">
                    <div className="currentTemperatureTitle">Temperature</div>
                    <div className="currentTemperatureNumber">current temp {searchedCityDetails.status.toString()}</div>
                </div>
                <div className="citsearchedCityInfoName">
                    city name
                </div>
                <div>
                    <div className="currentWeatherIcon">weather Icon</div>
                </div>
            </div>
            <div className="searchedCityOtherDetails">
                <div>
                    <div className="lowestTemperatureTitle">Daily lowest</div>
                    <div className="lowestTemperatureNumber">lowest temp</div>
                </div>
                <div>
                    <div className="highestTemperatureTitle">Daily highest</div>
                    <div className="highestTemperatureNumber">highest temp</div>
                </div>

                <div>

<div className="weatherDescriptionTitle">Weather description</div>
                    <div className="weatherDescriptionText">{searchedCityDetails.weatherNow}</div>


                </div>
            </div>
        </div>
    )
}

export default SearchedCity;