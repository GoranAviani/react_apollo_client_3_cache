import {useState} from "react";

import createAxiosClient from "./axiosClient";
import useGetToken from "./useGetToken";
import useGetCurrentWeather from "./useGetCurrentWeather";


export const useSearchCityAPI = (cityName, setSearchedCityDetails, setIsLoading) => {

    const axiosClient = createAxiosClient()
    /* get city weather via api */
    const searchCityGet = async () => {
        const [accessKey, setAccessKey] = useState()
        setIsLoading(true)
        useGetToken(axiosClient, setAccessKey)
        //await new Promise(resolve => setTimeout(resolve, 1000));
        useGetCurrentWeather(axiosClient, accessKey, cityName, setIsLoading, setSearchedCityDetails)


    }

    searchCityGet()

    // return {status: true, showResults: true, cityName: cityName, weatherNow: "rain", api: res}
}