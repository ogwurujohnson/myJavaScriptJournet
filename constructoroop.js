function Person(fullName,hobby){
    this.fullName = fullName;
    this.hobby = hobby;
    this.greeting = function(){
        console.log('Hi, i am '+this.fullName+' and i love '+this.hobby+'.');
    }
}
var john = new Person('Ogwuru Johnson','soccer');
john.greeting();
var oge = new Person('Ogwuru Ogechukwu','cooking');
oge.greeting();