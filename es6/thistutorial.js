var person = {
	"firstName": "johnson",
	"lastName": "ogwuru",
	"getFullName": function(){
		return this.firstName+" "+this.lastName;	
}
};

var fullName = person.getFullName();
console.log(fullName);

var person2 = person;
person = {};

console.log(person2.getFullName());
