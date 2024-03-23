// Template literals are string literals allowing embedded expressions, multi-line strings, and string interpolation
// template literals are enclosed in by backticks `` instead of single/double quotes

// Interpolation and Expression
// with template literals you can embed expressions and variable directly within a string using ${expression} syntax

// Basic usage
let name = "Alice";
let greeting = `Hello, ${name}!`;
console.log(greeting); // 'Hello, Alice!'

// Multi-line Strings
let address = `123 Main Street
Anytown, USA`;
console.log(address);

// Tagged Template Literals
// tagged template literals allow you to parse template literals with a function
// the first argument of a tag function contains an array of a string values, and the subsequent arguments are related to the expressions

// tag function example
const tag = (strings, ...values) => {
  return strings.reduce((finalString, str, index) => {
    return finalString + str + (values[index] || "");
  }, "");
};

let taggedResult = tag`Hello, ${name}. It's ${new Date().getHours()} o'clock.`;
console.log(taggedResult);

// tags allow yu to parse template literals with a function the first argument contains an array of string values
// the remaining arguments are related to the expression

// the tag function can then perform whatever operation on these arguments you wish and return the manipulated string
// alternatively it can return something completely different

const person = "Mike";
const age = 28;

function myTag(strings, personExp, ageExp) {
  const str0 = strings[0]; // "That "
  const str1 = strings[1]; // " is a "
  const str2 = strings[2]; // "."

  const ageStr = ageExp < 100 ? "youngster" : "centenarian";

  // We can even return a string built using a template literal
  return `${str0}${personExp}${str1}${ageStr}${str2}`;
}

const output = myTag`That ${person} is a ${age}.`;

console.log(output);
// That Mike is a youngster.

// template literals are a more powerful and flexible way to work with strings in js simplifying the creation of complex strings and can be used in a wide range of scenarios 
