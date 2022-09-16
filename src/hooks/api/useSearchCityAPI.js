import createAxiosClient from "./axiosClient";
import getToken from "./getToken";
import {useEffect, useState} from "react";

export const useSearchCityAPI = (cityName, setSearchedCityDetails, setIsLoading) => {


    const axiosClient = createAxiosClient()
    /* get city weather via api */
    const searchCityGet = async () => {
        setIsLoading(true)
        let accessKey = getToken(axiosClient)
        //await new Promise(resolve => setTimeout(resolve, 1000));

        if (accessKey) {
            console.log("idemo")

            const config1 = {
                headers: {Authorization: `Bearer ${accessKey}`}
            };
            axiosClient.get(`/current/${cityName}`, config1).then((response) => {
                setSearchedCityDetails(response)
                //await new Promise(resolve => setTimeout(resolve, 1000));
                setIsLoading(false)
            }).catch(function (error) {
                setIsLoading(false)
                //TODO ovde pokazat error useru
                console.log(error.toJSON())
            })

        }


    }

    searchCityGet()

    // return {status: true, showResults: true, cityName: cityName, weatherNow: "rain", api: res}
}