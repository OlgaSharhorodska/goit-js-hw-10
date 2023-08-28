
// Котопоиск, с использованием публичного The Cat API

// import axios from 'axios';

// axios.defaults.headers.common['x-api-key'] = 'твой ключ';

'https://api.thecatapi.com/v1/images/search?api_key=YOUR_API_KEY'

const BASE_URL = 'https://api.thecatapi.com/v1/images/search';
const API_KEY ='live_nyzZ4QjNtDq03IFxKqTnmDqyZDlfHDPE7tDYK56tjMFQ80XfJTc6gNUHpWGEEVPD';

//api.thecatapi.com/v1/images/search?breed_ids=идентификатор_породы

// const searchParams = new URLSearchParams({
//     breed_ids: breedId,
//     api_key:API_KEY,
// })

function fetchBreeds() {
  return fetch(`${BASE_URL}?breeds&api_key=${API_KEY}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}


function getBreedCat(breedId) {
    return fetch(`${BASE_URL}?api_key=${API_KEY}&breed_ids=${breedId}`).then(response => {
        if (!response.ok) {
            throw new Error(response.status)
        }
        return response.json()
    }
    )
}