import {Animal} from 'exportclass';

export class AnimalClient {
    constructor(){
        this._animal = new Animal('Dog','Barks');
        console.log(this._animal.greeting());
    }
}

let ac = new AnimalClient();
Animal.echo("roof, roof");