"use strict";

class Person{
    //always needed.
    constructor(name, age, weight){
        this.name = name;
        this.age = age;
        this.weight = weight;
    }

    displayWeight(){
        console.log(`${this.weight} pounds`);
    }

}

let bucky = new Person('johnson', 23, 7000);
bucky.displayWeight();