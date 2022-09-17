const FormData = require("form-data");

const useGetToken = (axiosClient, setAccessKey) => {

    const data = new FormData();
    data.append('username', process.env.WEATHER_USERNAME);
    data.append('password', process.env.WEATHER_PASSWORD);
    const config = {
        method: 'post',
        url: '/token',
        data: data
    };

    axiosClient(config)
        .then(function (response) {
            setAccessKey(response.data.access_token)
        })
        .catch(function (error) {
            console.log(error);
        });

}


export default useGetToken;