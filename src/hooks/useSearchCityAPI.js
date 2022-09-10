import createAxiosClient from "./axiosClient";

export const useSearchCityAPI = async (cityName, setSearchedCityDetails, setIsLoading) => {


    const axiosClient = await createAxiosClient()
    /* get city weather via api */
    const searchCityGet = async () => {
        axiosClient.get().then((response)=> { setSearchedCityDetails(response) })
        // await new Promise(resolve => setTimeout(resolve, 1000));

        await setIsLoading(false)
    }

    searchCityGet()

   // return {status: true, showResults: true, cityName: cityName, weatherNow: "rain", api: res}
    }