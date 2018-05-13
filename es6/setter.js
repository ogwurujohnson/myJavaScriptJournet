let restaurant = {
  _name: 'Italian Bistro',
  _seatingCapacity: 120,
  _hasDineInSpecial: true,
  _entrees: ['Penne alla Bolognese', 'Chicken Cacciatore', 'Linguine pesto'],

  set seatingCapacity(newCapacity) {
      if (typeof newCapacity === 'number') {
        this._seatingCapacity = newCapacity;
      console.log(`${newCapacity} is valid input.`);
    } else {
        console.log(`Change ${newCapacity} to a number.`)
    }
  }
}
//second example

let person = {
    _name: 'Lu Xun',
    _age: 137,
    
    set age(newage){
      if(typeof newage === 'number'){
        this._age = newage;
        console.log('valid input')
      }
      else{
        console.log ('Invalid input');
      }
    }
  
  };
  
  //calling a setter
  person.age = 'Thirty-nine';//returns invalid input
  person.age = 39;//returns valid input
  console.log(person._age);