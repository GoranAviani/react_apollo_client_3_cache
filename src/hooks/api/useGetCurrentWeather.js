const useGetCurrentWeather = (axiosClient, accessKey, cityName, setIsLoading, setSearchedCityDetails) => {

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

export default useGetCurrentWeather;