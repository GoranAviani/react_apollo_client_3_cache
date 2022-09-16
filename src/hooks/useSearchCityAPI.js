import createAxiosClient from "./axiosClient";
import FormData from "form-data";

export const useSearchCityAPI = async (cityName, setSearchedCityDetails, setIsLoading) => {


    const axiosClient = await createAxiosClient()
    /* get city weather via api */
    const searchCityGet = async () => {
        setIsLoading(true)

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

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});


var data1 = new FormData();
data1.append('access_token', 'johndoe');
data1.append('token_type', 'bearer');
const config1 = {
    headers: { Authorization: `Bearer johndoe` }
};
        axiosClient.get(`/current/${cityName}`, config1).then((response)=> {
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