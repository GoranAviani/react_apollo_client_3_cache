const FormData = require("form-data");

const getToken = () => {

var FormData = require('form-data');
var data = new FormData();
data.append('username', 'johndoe');
data.append('password', 'secret');
//   url: 'http://127.0.0.1:8000/token',
var config = {
  method: 'post',
  url: '/token',
  data : data
};

const accessKey = axiosClient(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
  return (response.data.access_token)
})
.catch(function (error) {
  console.log(error);
});


}


export default getToken;