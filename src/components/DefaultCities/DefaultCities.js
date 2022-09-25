import React from "react";
import './DefaultCities.css'
import WeatherBoard from "../WeatherBoard/WeatherBoard";

const DefaultCities = ({windowDimension}) => {


    return (
        <div className="defaultCities">
            <WeatherBoard windowDimension ={windowDimension}/>
        </div>
    )
}

export default DefaultCities;