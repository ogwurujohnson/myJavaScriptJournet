class Animal{
    constructor(name,sound){
        this._name = name;
        this._sound = sound;
    }

    get name(){
        return this._name;
    }

    get greeting(){
        console.log(`${this._name} likes to ${this._sound}. `)
    }
    
    static get echo(){
        console.log('huff,huff');
    }
}

