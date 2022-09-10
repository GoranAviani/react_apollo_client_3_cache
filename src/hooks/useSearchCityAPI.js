import createAxiosClient from "./axiosClient";

export const useSearchCityAPI = (cityName) => {


    const axiosClient = createAxiosClient()
    /* get city weather via api */
    const response = axiosClient.get().then((response)=> console.log({response}))

    return {status: true, showResults: true, cityName: cityName, weatherNow: "rain"}
    }