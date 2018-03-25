(function(){

var randomBodyParts = ["Face","Nose","Hair"];
var randomAdjectives = ["Smelly","Boring","Stupid"];
var randomWords = ["Fly","Marmot","Stick","Monkey","Rat"];
var randomWordsPart = ["Ear","Nose","Eye"];

var randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)];
var randomAdjective = randomAdjectives[Math.floor(Math.random()*3)];
var randomWord = randomWords[Math.floor(Math.random()*5)];
var randomWordPart = randomWordsPart[Math.floor(Math.random() * randomWordsPart.length)]

//using the + function
var randomInsult = "Your " +randomBodyPart+ " is like a "+randomAdjective+" "+randomWord+" "+randomWordPart;
console.log(randomInsult);

//using Join function
var randInsult = ["Your",randomBodyPart,"is like a ",randomAdjective,randomWord,randomWordPart];
console.log(randInsult.join(" "));

})();