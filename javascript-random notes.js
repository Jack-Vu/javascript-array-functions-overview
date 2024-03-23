const numbers = [1, 2, 3, 4, 5];
// a common operation we have used with manipulating an array is spread operator
// an easy way to duplicate the same array twice with the same numbers is with the spread operator

const doubleNumbers = [...numbers, ...numbers]; // [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]

// understanding the keyword this
// this in JS refers to an object 
// which object depends on how this is being invoked
// this keyword refers to different objects depending on how it is ussed

// in an object method this refers to the object
// alone this refers to the global object
// in a function this refers to the global object
// in a function in strict mode this refers is undefined
// in an event this refers to the element that receives the event
// methods like call(), apply(), and bind() can refer this to any object

let x = this
console.log(this);


// Expanding and adding to this
// this as stated before refers to an object it belongs to and acts as a reference to the context in which the current code is executing

// Context
// Global context in the global execution context (outside of any function) "this" refers to global object whether in strict mode or not
// Function context "this" inside a function depends on how the function is called
// regular functions "this" refers to the global object (window in browser), unless it is in strict mode, where it is undefined
// method calls "this" refers to the object that the method is called on
// Arrow functions do not have their own "this" value the value of "this" inside an arrow function is always inherited from the enclosing scope

// Common Issues and Solution
// losing context is when you lose the intended context of "this" in callbacks or event handlers
// solution to this is use an arrow function or bind the context using bind() method

const person = {
    name: 'Alice',
    greet: function() {
        console.log('Hello, ' + this.name);
    }
};
 
setTimeout(person.greet.bind(person), 1000); // Correctly references 'person'

// "this" keyword is a fundamental aspect of JS that can be tricky to understand but is crucial for effective coding, especially when dealing with OOP or handling context in callbacks