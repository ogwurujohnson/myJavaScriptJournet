//xhr for get request 
const url = '';
const xhr = new XMLHttpRequest();


xhr.responseType = 'json';
xhr.onreadystatechange = function(){
    if(xhr.readyState === XMLHttpRequest.DONE){
        console.log(response);
    }
}
xhr.open('GET',url);
xhr.send();

//xhr for post
const url = '';
const data = JSON.stringify({id:200}); //you would fetch the data from the view before this line
xhr.responseType = 'json';
xhr.onreadystatechange = function(){
    if(xhr.readyState === XMLHttpRequest.DONE){
        console.log(response);
    }
}
xhr.open('GET',url);
xhr.setRequestHeader('Content-Type','application/json');
xhr.send(data);


