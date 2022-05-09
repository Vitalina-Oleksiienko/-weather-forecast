import axios from "axios";

const BASE_URL = 'https://api.weatherstack.com';
const API_KEY = '65597c5b7a0295aa7818b4b27a1fb23f';

function fetchCity(searchQuery) {
    const url = `${BASE_URL}/current?access_key=${API_KEY}&query=${searchQuery}`;
    return axios.get (url)
            .then(city => city.data)
}

export default { fetchCity };   
    

