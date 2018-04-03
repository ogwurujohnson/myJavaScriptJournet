"use strict";
let movie = 'Good Will Hunting';

function theNotebook(){
    let movie = 'The Notebook';
    return movie;
}
console.log(theNotebook());
console.log(movie); 

function buckyFunction(){
    let isHorse = true;
    let saying = 'Bacon is good';
    console.log('\nBefore if:', saying);

    if(isHorse){
        let saying = 'I am a horse';
        console.log('Inside if:', saying);
    }

    console.log('After if:', saying);

}

buckyFunction();