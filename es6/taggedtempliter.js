let a = 1;
let b = 2;

let tagString = function(strArray, ...val){
    console.log(strArray);
    console.log(val);
}

tagString `Hello ${a} and ${b} would give you ${a+b}`;

//trying out the new functions in es6 startsWith, endsWith, includes, raw
let word = "Johnson";
word.startsWith("John");

let word = "Johnson";
word.endsWith("John");

let word = "Johnson";
word.includes("John");