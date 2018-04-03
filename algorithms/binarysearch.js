var inputList = ['E','I','O','P','Q','P','Q','R','T','U','W','Y'];

function binarySearch(inputList,key){
    var left = 0;
    var right = inputList.length-1;

    while(left <= right){
        var mid = parseInt((left + right)/2);

        if(inputList[mid] == key){
            return mid;
        }
        else if(inputList[mid] < key){
            left = mid + 1;
        }
        else{
            right = mid - 1;
        }
    }
    return 'Not Found';
}

console.log(binarySearch(inputList,'T'));
console.log(binarySearch(inputList,'Z'));