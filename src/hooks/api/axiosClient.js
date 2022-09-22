import axios from "axios";


const createAxiosClient = () => {
    const REACT_APP_ENVIRONMENT_TYPE = process.env.REACT_APP_ENVIRONMENT_TYPE
    let BASE_URL = (REACT_APP_ENVIRONMENT_TYPE === "dev") ? "http://127.0.0.1:8000/" : "https://weather.deta.dev"
    return axios.create({baseURL: BASE_URL})
}

export default createAxiosClient;