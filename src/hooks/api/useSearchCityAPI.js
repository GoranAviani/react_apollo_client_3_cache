import createAxiosClient from "./axiosClient";
import useGetToken from "./useGetToken";
import useGetCurrentWeather from "./useGetCurrentWeather";


export const useSearchCityAPI = (accessKey, setAccessKey, cityName, setSearchedCityDetails, setIsLoading) => {

    const axiosClient = createAxiosClient()
    /* get city weather via api */
    const searchCityGet = async () => {
        setIsLoading(true)
        useGetToken(axiosClient, setAccessKey)
        //await new Promise(resolve => setTimeout(resolve, 1000));
        console.log({accessKey})
        useGetCurrentWeather(axiosClient, accessKey, cityName, setIsLoading, setSearchedCityDetails)


    }

    searchCityGet()
}