//old method using objects
let halley = {
    _name: 'Halley',
    _behavior: 0,
  
    get name() {
      return this._name;
    },
  
    get behavior() {
      return this._behavior;
    },
  
    incrementBehavior() {
      this._behavior++;
    }
  }

  //now using classes
  class Dog {
    constructor(name) {
      this._name = name;
      this._behavior = 0;
    }
  
    get name() {
      return this._name;
    }
    get behavior() {
      return this._behavior;
    }   
  
    incrementBehavior() {
      this._behavior ++;
    }
  }
  const halley = new Dog('Halley');
  console.log(halley.name); // Print name value to console
  console.log(halley.behavior); // Print behavior value to console
  halley.incrementBehavior(); // Add one to behavior
  console.log(halley.name); // Print name value to console
  console.log(halley.behavior); // Print behavior value to console

  //my class tasks

  class Surgeon {
    constructor(name, department) {
      this._name = name;
      this._department = department;
      this._remainingVacationDays = 20;
    }
    
    get name(){
      return this._name;
    }
    
    get department(){
      return this._department;
    }
    
    get remainingVacationDays(){
      return this._remainingVacationDays;
    }
    
    takeVacationDays(daysOff){
      this._remainingVacationDays = this._remainingVacationDays - daysOff;
    }
  }
  