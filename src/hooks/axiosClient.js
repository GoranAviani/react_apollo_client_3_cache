import axios from "axios";


const createAxiosClient = () => {
        return axios.create({baseURL: "https://weather.deta.dev"})

}

export default createAxiosClient;