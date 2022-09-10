import createAxiosClient from "./axiosClient";

export const useSearchCityAPI = async (cityName, setSearchedCityDetails, setIsLoading) => {


    const axiosClient = createAxiosClient()
    /* get city weather via api */
    const searchCityGet = async () => {
        axiosClient.get().then((response)=> { setSearchedCityDetails(response) })
        setIsLoading(false)
    }

    searchCityGet()

   // return {status: true, showResults: true, cityName: cityName, weatherNow: "rain", api: res}
    }