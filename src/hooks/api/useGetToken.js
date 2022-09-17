const FormData = require("form-data");

const useGetToken = (axiosClient, setAccessKey) => {

    
    const data = new FormData();
    data.append('username', 'johndoe');
    data.append('password', 'secret');
//   url: 'http://127.0.0.1:8000/token',
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