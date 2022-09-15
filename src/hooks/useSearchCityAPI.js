import createAxiosClient from "./axiosClient";

export const useSearchCityAPI = async (cityName, setSearchedCityDetails, setIsLoading) => {


    const axiosClient = await createAxiosClient()
    /* get city weather via api */
    const searchCityGet = async () => {
        setIsLoading(true)
          const formData = new FormData();
            formData.append("username", "johndoe");
            formData.append("password", "secret");


       // axiosClient.get(`/current/${cityName}`, formData).

        axiosClient({
    method: 'get',
    data: formData,
    url: `/current/${cityName}`,
  }).then((response)=> {
            setSearchedCityDetails(response)
            //await new Promise(resolve => setTimeout(resolve, 1000));
            setIsLoading(false)
        }).catch(function (error){
                        setIsLoading(false)
                //TODO ovde pokazat error useru
            console.log(error.toJSON())
        })

    }

    searchCityGet()

   // return {status: true, showResults: true, cityName: cityName, weatherNow: "rain", api: res}
    }