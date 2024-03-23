// Regular expression are patterns used to match character combinations in strings
// JS regex can be used within various string methods like match(), replace(), search(), and split()

// Creating and Testing RegEx

// Creating a RegEx
// Literal syntax: /pattern/modifier
// Constructor syntax: new RegExp("pattern", "modifier")

// Testing a RegEx
// test() returns true if there is a match in the string
// exec() returns an array containing all matched groups

let pattern = /hello/;
console.log(pattern.test('hello world')); // true
 
let globalPattern = /hello/g;
console.log('hello hello'.match(globalPattern)); // ['hello', 'hello']

// Common RegEx Patterns
// character classes such as \d for digits, \w from word characters, \s for whitespace
// Quantifiers such as + (at least one), * (zero or more), ? (zero or one) {n} (exactly n occurrences)
// Anchors and Boundaries such as ^ (start of string), $ (end of string), \b (word boundary)

// Regex are a key tool in any JS dev toolkit, ideal for validating, extracting and manipulating text. 

// common modifiers
// i performance case-insensitive matching
// g performs a global match (find all)
// m perform multiline matching
// d perform start and end matching

// Brackets are used to find a ranch of characters
// [abc] find any character between the brackets
// [0-9] find any digits between the brackets
// (x|y) find any of the alternative separate with |


