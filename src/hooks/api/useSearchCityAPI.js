import createAxiosClient from "./axiosClient";
import getToken from "./getToken";
import getCurrentWeather from "./getCurrentWeather";
import {useEffect, useState} from "react";

export const useSearchCityAPI = (cityName, setSearchedCityDetails, setIsLoading) => {


    const axiosClient = createAxiosClient()
    /* get city weather via api */
    const searchCityGet = async () => {
        setIsLoading(true)
        const accessKey = getToken(axiosClient)
        //await new Promise(resolve => setTimeout(resolve, 1000));
        getCurrentWeather(axiosClient, accessKey, cityName, setIsLoading, setSearchedCityDetails)


    }

    searchCityGet()

    // return {status: true, showResults: true, cityName: cityName, weatherNow: "rain", api: res}
}