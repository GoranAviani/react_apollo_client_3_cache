import axios from "axios";


const createAxiosClient = () => {
    let BASE_URL = ""
    const REACT_APP_ENVIRONMENT_TYPE = process.env.REACT_APP_ENVIRONMENT_TYPE
    console.log({REACT_APP_ENVIRONMENT_TYPE})
    if (REACT_APP_ENVIRONMENT_TYPE === "dev") {
        BASE_URL = "http://127.0.0.1:8000/"
    } else {
        BASE_URL = "https://weather.deta.dev"
    }
    return axios.create({baseURL: BASE_URL})
}

export default createAxiosClient;