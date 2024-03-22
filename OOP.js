// In JS, objects are collections of properties
// Properties are key-value pairs where values can be attributes or methods

// Creating an Object

let person = {
  name: "Jack",
  age: 25,
  greet: () => {
    console.log("Hello " + this.name); // this here refers to the object person
  },
};

// Prototypes
// every JS object has a prototype
// A prototype is also an object and all JS objects inherit their props and methods from their prototype

// Prototype inheritance
const Person = (name, age) => {
  this.name = name;
  this.age = age;
};

Person.prototype.greet = () => {
  console.log("Hello " + this.name);
};

let alice = new Person("Alice", 30);
alice.greet(); // "Hello Alice"

// Classes
// the class syntax in JS is a syntactical sugar over JS's existing prototype-based inheritance and does not actually introduce a new OO inheritance model
class Person1 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("Hello, " + this.name);
  }
}

let bob = new Person1("Bob", 25);
bob.greet(); // 'Hello, Bob'


// OOP provides a structured approach to JS programming especially when dealing with more complex applications
// Practice creating and using objects, prototypes and classes to get a good understanding of the concepts