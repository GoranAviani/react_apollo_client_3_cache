import axios from "axios";

const WEATHER_MICROSERVICE = "https://weather.deta.dev"

const createAxiosClient =  () => {
       return axios.create({baseURL: WEATHER_MICROSERVICE})


}

export default createAxiosClient;