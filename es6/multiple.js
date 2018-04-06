var mutnum = 0;
var notnum = [];
function multNum(){
    for(var i = 0;i<=100;i++){
        if(i % 5 == 0){
            mutnum += i;
        }
    }
    return mutnum;
}


var num = multNum();
console.log(num);