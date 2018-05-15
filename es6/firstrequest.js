const xhr = new XMLHttpRequest();
const url = '';

xhr.responseType = 'json';
xhr.onreadystatechange = function(){
    if(readyState === XMLHttpRequest.DONE){
        //what program does with response
    }
};

xhr.open('GET',url);
xhr.send();