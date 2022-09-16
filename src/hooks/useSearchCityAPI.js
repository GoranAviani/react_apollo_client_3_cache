import createAxiosClient from "./axiosClient";
import FormData from "form-data";

export const useSearchCityAPI = async (cityName, setSearchedCityDetails, setIsLoading) => {


    const axiosClient = await createAxiosClient()
    /* get city weather via api */
    const searchCityGet = async () => {
        setIsLoading(true)
          let formData = new FormData();
        formData.username =  "johndoe";
        formData.password =  "secret";


        //    formData.set("username", "johndoe");
         //   formData.set("password", "secret");


       // axiosClient.get(`/current/${cityName}`, formData).

    //    axiosClient({
    //method: 'get',
   // params: formData,
   // url: `/current/${cityName}`,
 // }).
         const data = {
      username: "johndoe",
      password: "secret",
    };

        axiosClient.get(`/current/${cityName}`, formData).then((response)=> {
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