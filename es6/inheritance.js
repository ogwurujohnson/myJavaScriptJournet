

class Person{
    //always needed.
    constructor(name, age, weight){
        this.name = name;
        this.age = age;
        this.weight = weight;
    }

    //a method in the classs
    displayWeight(){
        console.log(`${this.weight} pounds`);
    }

    displayName(){
        console.log(`your name is ${this.name}`);
    }

    displayAge(){
        console.log(`your are ${this.age} old`);
    }

}

class Programmer extends Person{
    constructor(name,age,weight,language){
        super(name,age,weight);
        this.language = language;
    }

    displayLanguage(){
        console.log(`Programming language: ${this.language}`);
    }
}

let bucky = new Person('johnson', 23, 7000);
bucky instanceof Person;
bucky.displayName();
bucky.displayAge();
bucky.displayWeight();

let johnson = new Programmer('Johnson O',23,7000,'JavaScript');
johnson.displayName();
johnson.displayAge();
johnson.displayWeight();
johnson.displayLanguage();