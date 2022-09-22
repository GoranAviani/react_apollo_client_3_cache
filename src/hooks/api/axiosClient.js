import axios from "axios";

let BASE_URL = ""
const ENVIRONMENT_TYPE = process.env.ENVIRONMENT_TYPE

if (ENVIRONMENT_TYPE === "dev") {
    BASE_URL = "http://127.0.0.1:8000/"
} else {
    BASE_URL = "https://weather.deta.dev"
}

const createAxiosClient = () => {


    return axios.create({baseURL: BASE_URL})
}

export default createAxiosClient();