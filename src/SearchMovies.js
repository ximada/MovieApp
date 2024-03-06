import { AddDetail } from './AddDetail.js';
 const apyKey = 'd832edc7';
 let keyArray = [];

export const SearchMovies = (key)=>{
    requestSearch(key)

}

const  requestSearch  = (key)=>{
    console.log('------', key)
    keyArray.push(key)

if(keyArray.length > 3){
    let word = keyArray.join('')
    console.log('realiza la busqueda', word)
    const request = fetch(`http://www.omdbapi.com/?s=${ word }&apikey=${ apyKey }&`);
    request.then(resp => resp.json()).then((response)=>{
        console.log('response---->',response )
        apendList(response);
    })
}
}

const  apendList = ({Search}) => {
	let domElement = document.getElementById('result-contaier');
		console.log('---------',Search)
	for (var i = 0; i < Search.length; i++) {
		// items[i]
		let result_tempate = "<div class ='container-item' data-id ="+Search[i].imdbID+"><button class = 'more-info'></button><div style= background-image:url('"+ Search[i].Poster +"');></div><div>"+ Search[i].Title +"</div><div>"+ Search[i].Year +"</div></div>"
		domElement.insertAdjacentHTML("afterend", result_tempate)
    }
    moreInfo()

}

const moreInfo = ()=>{
    let elements = document.querySelectorAll('.container-item');
    for (var i = 0; i < elements.length; i++) {
        const contaier = elements[i];
        contaier.addEventListener('click', (ev) => addDetail(ev,i, contaier))

    }

}

const addDetail = (ev, i, contaier)=>{
    console.log('evento:',ev , 'index:' ,i, contaier);
    const idMovieDetail = contaier.getAttribute('data-id');
    AddDetail(idMovieDetail );


    
}


// export default SearchMovies;