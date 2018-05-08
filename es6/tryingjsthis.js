let firstName = prompt("Enter your firstname?: ");
let lastName = prompt("Enter Last name?: ");

const server = "gmail.com";

var user = function(firstName,lastName,server){
    return {
        "createEmail": firstName+"."+lastName+"@"+server,
        "generateEmail": function(){
            return this.createEmail;
        }
    }
}

user1 = user(firstName,lastName,server);
var user1Email = user1.generateEmail;
console.log(user1Email);