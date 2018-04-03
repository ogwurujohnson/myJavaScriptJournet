"use strict";

function addNumbers(a, b, c,d){
    console.log(a+b+c+d);
}

var nums = [3,4,5,6];
addNumbers(nums[0],nums[1],nums[2],nums[3]);

//with es6 we can do this using the spread operator;
addNumbers(...nums);

// we can also use the spread operator to do this
var meats = ['bacon','ham'];
var food = ['apples','kiwi','rice'];
console.log(food);

//but if you asked to merge the meat array to the food arry starting from wer apple stopped, we can do this;

var food1 = ['apples',...meats,'kiwi','rice'];
console.log(food1);