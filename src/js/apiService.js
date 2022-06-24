import axios from "axios";

// const BASE_URL = 'http://api.weatherstack.com';
// const API_KEY = '65597c5b7a0295aa7818b4b27a1fb23f';
//second
const BASE_URL = 'https://api.weatherapi.com/v1'
const API_KEY = 'df636f8b7f7c4cb691c131856221404';

function fetchCity(searchQuery) {
    const url = `${BASE_URL}/current.json?key=${API_KEY}&q=${searchQuery}`;
    return axios.get (url)
            .then(city => city.data)
}

export default { fetchCity };   
    

