
// Котопоиск, с использованием публичного The Cat API

// import axios from 'axios';

// axios.defaults.headers.common['x-api-key'] = 'твой ключ';

'https://api.thecatapi.com/v1/images/search?api_key=YOUR_API_KEY'

const BASE_URL = 'https://api.thecatapi.com/v1/images/search';
const API_KEY ='live_nyzZ4QjNtDq03IFxKqTnmDqyZDlfHDPE7tDYK56tjMFQ80XfJTc6gNUHpWGEEVPD';


https://api.thecatapi.com/v1/images/search?breed_ids=идентификатор_породы
    
function getBreedCat(breek) {
    return fetch(`${BASE_URL}?${API_KEY}`).then(response => {
        if (!response.ok) {
            throw new Error(response.status)
        }
        return response.json()
    }
    )
}