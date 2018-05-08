const reverseStr = str => {
    let splitStr = str.split("");
    let reverseString = splitStr.reverse();
    let joinString = reverseString.join("");

    return joinString;
};

let out = reverseStr('toNsIytinutroppOtuBdetubirtsiDnevEsIecnaillirB');
console.log(out);