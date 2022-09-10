import createAxiosClient from "./axiosClient";

export const useSearchCityAPI = async (cityName, setSearchedCityDetails, setIsLoading) => {


    const axiosClient = await createAxiosClient()
    /* get city weather via api */
    const searchCityGet = async () => {
        setIsLoading(true)
        axiosClient.get().then((response)=> {
            setSearchedCityDetails(response)
            setIsLoading(false)
        })
        //await new Promise(resolve => setTimeout(resolve, 1000));

    }

    searchCityGet()

   // return {status: true, showResults: true, cityName: cityName, weatherNow: "rain", api: res}
    }