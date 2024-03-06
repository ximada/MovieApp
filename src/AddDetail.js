const apyKey = 'd832edc7';

export const AddDetail = (id) =>{
    const request = fetch(`http://www.omdbapi.com/?i=${ id }&apikey=${ apyKey }&`);
    request.then(resp => resp.json()).then((response)=>{
        console.log('AddDetail---->',response )
        addTemplate(response)
    })
}

const addTemplate= ()=>{
    

}