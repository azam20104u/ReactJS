import { Computer } from "./computer.js"; //import for the named export, we can import multiple classes inside braces

// export default class MacBook extends Computer {//default class export.
//   //export default
//   constructor(name, company) {
//     super(name);
//     this.company = company;
//   }
//   login() {
//     console.log("you are login into ", this.company, " Laptop");
//   }
// }

//====== OR Another way of default export =====
class MacBook extends Computer {
    //export default
    constructor(name, company) {
      super(name);
      this.company = company;
    }
    login() {
      console.log("you are login into ", this.company, " Laptop");
    }
  }
  export default MacBook;
