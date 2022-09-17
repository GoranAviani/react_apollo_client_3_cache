import axios from "axios";

const WEATHER_MICROSERVICE = "https://weather.deta.dev"
const LOCAL_MICROWERVICE = "http://127.0.0.1:8000/"

const createAxiosClient = () => {
    return axios.create({baseURL: WEATHER_MICROSERVICE})
}

export default createAxiosClient;