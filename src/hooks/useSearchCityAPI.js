import axios from "axios";


export const useSearchCityAPI = (cityName) => {

    const client = axios.create({baseURL: "weather.deta.dev"})
    /* get city weather via api */

    return {status: true, showResults: true, cityName: cityName, weatherNow: "rain"}
    }