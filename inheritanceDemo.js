//without export and import, use inheritance code re-use
class Computer {
  constructor(name) {
    this.name = name;
  }
  turnOn() {
    console.log(this.name, " Computer is on");
  }
}
class MacBook extends Computer {
  constructor(name, company) {
    super(name);
    this.company = company;
  }
  login() {
    console.log("you are login into ", this.company, " Laptop");
  }
}
let laptop = new MacBook("Air", "Apple");
laptop.turnOn();
laptop.login();
