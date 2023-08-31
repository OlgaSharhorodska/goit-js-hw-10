
// Котопоиск, с использованием публичного The Cat API

// import axios from 'axios';
// axios.defaults.headers.common['x-api-key'] = 'твой ключ';

const BASE_URL = 'https://api.thecatapi.com/v1/';
const END_POINT_BREEDS = 'breeds';
const END_POINT_IMG = 'images/search';
const API_KEY ='live_nyzZ4QjNtDq03IFxKqTnmDqyZDlfHDPE7tDYK56tjMFQ80XfJTc6gNUHpWGEEVPD';

//api.thecatapi.com/v1/breeds
export function fetchBreeds() {
  return fetch(`${BASE_URL}${END_POINT_BREEDS}?api_key=${API_KEY}`).then(
    response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
  );
}

//api.thecatapi.com/v1/images/search?breed_ids=идентификатор_породы

export function fetchCatByBreed(breedId) {
  return fetch(
    `${BASE_URL}${END_POINT_IMG}?api_key=${API_KEY}&breed_ids=${breedId}`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}



