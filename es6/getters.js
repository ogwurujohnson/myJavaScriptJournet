let restaurant = {
    _name: 'Italian Bistro',
    _seatingCapacity: 120,
    _hasDineInSpecial: true,
    _entrees: ['Penne alla Bolognese', 'Chicken Cacciatore', 'Linguine pesto'],
  
    set seatingCapacity(newCapacity) {
      if (typeof newCapacity === 'number') {
        this._seatingCapacity = newCapacity;
      } else {
        console.log(`Change ${newCapacity} to a number.`)
      }
    },
  
    get seatingCapacity() {
      console.log(`There are ${this._seatingCapacity} seats at Italian Bistro.`);
      return this._seatingCapacity;
    }
  }


  //another example

  let person = {
    _name: 'Lu Xun',
    _age: 137,
    
    set age(newage){
      if(typeof newage === 'number'){
        this._age = newage;
        console.log('valid input')
      }
      else{
        return 'Invalid input';
      }
    },
    
    get age(){
      console.log(`${this._name} is ${this._age} old`);
      return this._age
    }
  
  };
  
  person.age = 'Thirty-nine';
  person.age = 39;
  console.log(person.age);