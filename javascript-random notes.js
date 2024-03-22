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