import createAxiosClient from "./axiosClient";
import FormData from "form-data";

export const useSearchCityAPI = async (cityName, setSearchedCityDetails, setIsLoading) => {


    const axiosClient = await createAxiosClient()
    /* get city weather via api */
    const searchCityGet = async () => {
        setIsLoading(true)



        //    formData.set("username", "johndoe");
         //   formData.set("password", "secret");


       // axiosClient.get(`/current/${cityName}`, formData).

    //    axiosClient({
    //method: 'get',
   // params: formData,
   // url: `/current/${cityName}`,
 // }).

        var axios = require('axios');
var FormData = require('form-data');
var data = new FormData();
data.append('username', 'johndoe');
data.append('password', 'secret');
//   url: 'http://127.0.0.1:8000/token',
var config = {
  method: 'post',
  url: 'https://weather.deta.dev/token',
  data : data
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