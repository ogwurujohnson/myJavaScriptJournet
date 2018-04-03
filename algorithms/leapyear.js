function checkLeapYear(year){
    if(((year % 4 == 0 ) && (year % 100 != 0)) || (year % 400 == 0)){
        console.log(year+ ' is leap');
        return true
    }else{
        console.log(year + ' is NOT leap');
        return false
    }
}

console.log(checkLeapYear(2012));
console.log(checkLeapYear(2017));