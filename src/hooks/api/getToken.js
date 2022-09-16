const FormData = require("form-data");

const getToken = (axiosClient) => {

    var FormData = require('form-data');
    var data = new FormData();
    data.append('username', 'johndoe');
    data.append('password', 'secret');
//   url: 'http://127.0.0.1:8000/token',
    var config = {
        method: 'post',
        url: '/token',
        data: data
    };

    return axiosClient(config)
        .then(function (response) {
            return response.data.access_token

        })
        .catch(function (error) {
            console.log(error);
        });

}


export default getToken;