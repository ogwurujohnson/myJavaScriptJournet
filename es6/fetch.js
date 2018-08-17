//fetch request syntax

fetch('https://api-to-use.com/endpoint').then(response=>{
    if(response.ok){
        return response.json();
    }
    throw new Error('Request Failed!');
}, networkError=>console.log(networkError.message)
).then(jsonResponse=>{
    return jsonResponse;
});