import axios from "axios";


const createAxiosClient = async () => {
        return axios.create({baseURL: "https://weather.deta.dev"})

}

export default createAxiosClient;