export class Computer{//example of named export
    constructor(name){
        this.name=name;
    }
    turnOn(){
        console.log(this.name, ' Computer is on');
    }
}