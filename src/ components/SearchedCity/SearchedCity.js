import React from "react";

import './SearchedCity.css'

const SearchedCity = ({searchedCityDetails}) => {
    console.log('SearchedCity')
    console.log({searchedCityDetails})
    /* unpack api result info */
    return (
        <div className="searchedCity">
            <div className="searchedCityMainDetails">
                <div className="currentTemperature">
                    <div className="currentTemperatureTitle">Temperature</div>
                    <div className="currentTemperatureNumber">{JSON.stringify(searchedCityDetails.data)} </div>
                </div>
                <div className="citsearchedCityInfoName">
                            {searchedCityDetails.data.cityName}
                </div>
                <div>
                    <div className="currentWeatherIcon">weather Icon</div>
                </div>
            </div>
            <div className="searchedCityOtherDetails">
                <div>
                    <div className="lowestTemperatureTitle">Daily lowest</div>
                    <div className="lowestTemperatureNumber">{searchedCityDetails.data.cityName}</div>
                </div>
                <div>
                    <div className="highestTemperatureTitle">Daily highest</div>
                    <div className="highestTemperatureNumber">****</div>
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