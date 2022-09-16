import axios from "axios";

const WEATHER_MICROSERVICE = "https://weather.deta.dev"

const createAxiosClient =  () => {
       return axios.create({baseURL: "https://weather.deta.dev"})
       //         return axios.create({baseURL: "http://127.0.0.1:8000/"})


}

export default createAxiosClient;