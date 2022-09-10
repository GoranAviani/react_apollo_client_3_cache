import createAxiosClient from "./axiosClient";

export const useSearchCityAPI = (cityName) => {


    const axiosClient = createAxiosClient()
    /* get city weather via api */
    const searchCity = async () => {
        let res = axiosClient.get().then((response)=> console.log("odgovor"))
        return res
    }

    const res = searchCity()
    return res

   // return {status: true, showResults: true, cityName: cityName, weatherNow: "rain", api: res}
    }