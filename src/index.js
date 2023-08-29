import { fetchBreeds,fetchCatByBreed } from "./cat-api";

const breedSelect = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');
const catInfo = document.querySelector('.cat-info');


breedSelect.addEventListener('change', handlerBreedSelect)

function handlerBreedSelect() {
    
}