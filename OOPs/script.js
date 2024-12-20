// let obj = {
//     a: 1,
//     b: "Shiv"
// }
// console.log(obj)

// let animal = {
//     eats: true
// };
// let rabbit = {
//     jumps: true
// };

// rabbit._proto_ = animal; // sets rabbit.[[Prototype]] = animal

class Animal {
  constructor(name) {
    this.name = name;
    // this keyword
    console.log("Object is created...");
  }

  eats() {
    console.log("kha raha hoon");
  }
  jumps() {
    console.log("kood raha hoon");
  }
}

// extend copied all properties of Animal to Lion
// inheritance method using Extend keyword
class Lion extends Animal {
  constructor(name) {
    super(name)
    this.name = name;
    // this keyword
    console.log("Object is created and he ia lion......");
  }
   
// //   here method overriding by copy Animal propertis to Lion
  eats() {
    // super keyword
    super.eats() 
    console.log("kha raha hoon roar");
  }
}

let a = new Animal("Bunny");
console.log(a);

let l = new Lion("Shera");
console.log(l);

// method overriding

