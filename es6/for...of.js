//new loop in es6 replacing for-in and forEach()
let values = [10,20,30];
for(let value of values){
    console.log(value);
}

//iterating over a string
let color = "blue";
for(let c of color){
    console.log(c);
}

//difference between for..in and for..of
for(let value in values){
    console.log(value);
}
