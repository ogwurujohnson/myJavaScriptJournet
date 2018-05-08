let year = 2018;
let dob = 1995;


function calcAge(){
    let age = year-dob;
    if (age > 19){
        let age = "You re young";
        console.log(age);
    }
    console.log(age);
}

calcAge();

