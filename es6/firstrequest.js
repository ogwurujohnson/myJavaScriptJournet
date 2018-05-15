const xhr = new XMLHttpRequest();
const url = 'https://api-to-call.com/endpoint';

xhr.responseType = 'json';
xhr.onreadystatechange = function(){
    if(xhr.readyState === XMLHttpRequest.DONE){
        //what program does with response
        console.log(xhr.response);
    }
};

xhr.open('GET',url);
xhr.send();