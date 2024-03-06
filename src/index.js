import { SearchMovies } from './SearchMovies.js';
const apyKey = 'd832edc7';

let keyArray = [];
const serchMovies= ({key})=>{

    console.log(key);
    SearchMovies(key)

}


window.addEventListener('keydown',serchMovies); 