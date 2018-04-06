"use strict";

function* sampleGenerator(){
    yield 'apples';
    yield 'bacon';
    console.log('ok this is the line after the bacon.....');
    yield 'corn';
}

let sample = sampleGenerator();
//console.log(sample.next());//or
console.log(sample.next().value);
console.log(sample.next().value);
console.log(sample.next().value);

console.log('----------------');

function* getNextId(){
    let id = 0;
    while(id < 3){
        yield id++;
    }
}

let createUser = getNextId();
console.log(createUser.next().value);