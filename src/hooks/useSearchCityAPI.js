import createAxiosClient from "./axiosClient";

export const useSearchCityAPI = (cityName) => {


    const axiosClient = createAxiosClient()
    /* get city weather via api */
    const searchCityGet = async () => {
        return axiosClient.get().then((response)=> console.log("odgovor"))
    }

    return searchCityGet()

   // return {status: true, showResults: true, cityName: cityName, weatherNow: "rain", api: res}
    }