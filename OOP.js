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

// Closures
// a closure is a function that remembers its outer variables and can access them
// in JS closures are created every time a function is created

// Creating Closures
// closures are automatically created in JS when a function is defined
// the inner function will have access to the variable in the outer function scoop, even after the function has returned

// Example
const outerFunction = () => {
  let outerVariable = "I am outside!";

  const innerFunction = () => {
    console.log(outerVariable); // Accesses outerVariable
  };

  return innerFunction;
};

let myFunction = outerFunction();
myFunction(); // 'I am outside!'

// Practical uses and benefits

// Data Encapsulation
// closure can be used to create private variables and methods which is the fundamental aspect of the module pattern
// Maintaining state in Async operations closure are useful in maintaining state in async operations like callback and event handlers

// Closures are a key concept of JS providing a qay to retain access to local variables of a function and enabling powerful programming patterns
