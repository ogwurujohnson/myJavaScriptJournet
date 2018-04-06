function reverseString(str){
    var splitString = str.split("");
    console.log(splitString);
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");

    return joinArray;
}

reverseString("toNslytinutroppOtuBdetubirtsiDylnevEslecnaillirB");

//or

function reverseString(str){
    var newString = "";

    for(var i = str.length - 1; i >= 0; i--){
        newString += str[i];
    }

    return newString;
}

reverseString("toNslytinutroppOtuBdetubirtsiDylnevEslecnaillirB");

//answer
//BrilliancelsEvenlyDistributedButOpportunitylsNot