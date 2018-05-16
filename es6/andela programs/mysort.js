function mySort(num) { // An algorithm that takes a list of int, returns a new lists sorting them into odd and even number respectively
    let odd = [];
    let even = [];
    let result = [];
    
    if (!Array.isArray(num)) { // check of the argument passed is an array
        return "Please input an array";
    } else { // loops through to check if the values are integers and then sorts them into an odd and even array respectively
        for (let counter = 0; counter < num.length; counter++) {
            if (typeof num[counter] === 'string') {
                num.splice(counter, 0);
            } else if (Math.floor(num[counter]) % 2 === 0) {
                even.push(Math.floor(num[counter]));
            } else {
                odd.push(num[counter]);
            }
        }
    }
    
    let newOdd = odd.sort(function(a,b) {return a-b}); // sorts the contect of the odd array
    let newEven = even.sort(function(a,b) {return a-b}); // sorts the contect of the odd array
    return result = newOdd.concat(newEven); // returns the new array.
  
}