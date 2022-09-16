import createAxiosClient from "./axiosClient";

export const useSearchCityAPI = async (cityName, setSearchedCityDetails, setIsLoading) => {


    const axiosClient = await createAxiosClient()
    /* get city weather via api */
    const searchCityGet = async () => {
        setIsLoading(true)

var FormData = require('form-data');
var data = new FormData();
data.append('username', 'johndoe');
data.append('password', 'secret');
//   url: 'http://127.0.0.1:8000/token',
var config = {
  method: 'post',
  url: '/token',
  data : data
};

axiosClient(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});


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