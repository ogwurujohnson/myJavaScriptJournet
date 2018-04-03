"use strict";

function circleArea1(r){
    var PI = 3.14;
    return PI*r*r;
}

console.log(circleArea1(7));

//es6 syntax of the above code
let circleArea2 = (r) => {
    const PI = 3.14; //we cant assign another value to it
    return PI*r*r; 
};
console.log(circleArea2(7));

//how about we want to make thing easy we can do this;
let circleArea3 = r => 3.14*r*r; //this is anoda way of writing functions in es6, when you have one parameter and function process
// doesnt require plenty steps


console.log(circleArea3(7));

//in es6 try as much as possible to avoid using the var keyword but use let. if a variables content shouldnt be edited
//use the const keyword meaning constant