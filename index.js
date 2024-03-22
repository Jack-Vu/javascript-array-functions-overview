// Basic Array Functions

// Syntax to create an array with a specific x length, and x being the size of the array you want to make
// Indices start from 0 in js

const x = 3; // x can be any number 3 is used as an example

const array = new Array(x); // this creates an array called array and provides it with a size of 3

// To access the elements of an array we use indices remembering that the index starts at 0
// So in this array the following indices are 0, 1, 2
// currently the array will present as [ <3 empty items> ] until you place values within the array
array[0] = "first index"; // [ 'first index', <2 empty items> ]
array[1] = "second index"; // [ 'first index', 'second index', <1 empty item> ]
array[2] = "third index"; // [ 'first index', 'second index', 'third index' ]
// In js arrays are mutable meaning they can be changes even their size can be changes which allows for the below to occur
// While we made an array of size 3 we added a forth element which is allowed in js
array[3] = "forth index"; // [ 'first index', 'second index', 'third index', 'forth index' ]

// Adding and removing elements from an array

// These two functions add to an array and you can add multiple items by comma separating each item
// unshift adds the beginning of the array
array.unshift("new element at the beginning of array"); // ['new element at the beginning of array','first index','second index','third index','forth index',]
// push adds to the end of the array
array.push("new element at the end of the array"); // ['new element at the beginning of array','first index','second index','third index','forth index','new element at the end of the array',]

// These two functions remove from an array and they don't take any argument and even if you do put in an argument they will still only remove one item
// shift removes the first item in the array
array.shift(); // ['first index','second index','third index','forth index','new element at the end of the array',]
// pop removes the last item in the array
array.pop(); // [ 'first index', 'second index', 'third index', 'forth index' ]

// Spice is a unique function that can add and/or remove array elements
// the first argument is the index meaning the position that you want to add or remove items
// the second argument which is optional is the number of items you want to remove based starting from the index you indicated first
// the third and follow arguments are optional and are to add new element(s) to the array from the indicated index of the first argument
array.splice(1, 1, "Replacing the second index"); // ['first index','Replacing the second index','third index','forth index',]
array.splice(1, 1, "second index"); // ['first index','second index','third index','forth index',]

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Array Iteration Functions

// Higher order functions are functions that accepts or return other functions

// calculate is an example that accepts a function as an argument and returns the function as well
const add = (num1, num2) => {
  return num1 + num2;
};

const calculate = (num1, num2, operation) => {
  return operation(num1, num2);
};

// forEach() is calls a callback function once for each array element you can think of it as the block of code will execute for each element of the array
// the expected outcome in your console should be for just the function above should be this:
// first index
// second index
// third index
// forth index
array.forEach((element) => {
  console.log(element); // this will log each element of the array
});

const numbers = [1, 2, 3, 4, 5];

// map() creates a new array performing a function on each of the array elements
// map also calls a callback function for each element of the array
// this array function does not affect the original array
// usually we would assign the newly created array made by the map function to make use of that new array
// numbersDoubled should look like this based on the numbers array : [ 1, 4, 9, 16, 25 ]
const numbersDoubled = numbers.map((number) => {
  return number * number;
});

// filter() also creates a new array, but only elements that pass the requirements of the function
// the below function should create a new array with only the even numbers of the numbers array this should look like this [ 2, 4 ]
const evenNumbers = numbers.filter((number) => number % 2 === 0); // if you are creating a call back function that returns a single line you can write it like this

// For these functions you can combine them to apply multiple array functions at a time

// reduce() will go through an array and reduce it to a single value
// calculating the sum
// the first argument is a callback function that uses the accumulator and the currentValue each iteration
// the optional you can set the initial value for the accumulator and the accumulator will start with that value
// if nothing is places in this optional argument the accumulator will use the first element of the array as the initial value and start the iterations from the second element
const sumOfNumbers = numbers.reduce((a, c) => a + c); // the result of sumOfNumbers should be 15

// indexOf() searches for an element in the array and returns the index of that element in the array if it is found
// if there are multiple elements that match the search the first one's index will be returned
// the arguments taken in is the element to search for and an optional argument to state which index do you want to start the search
const findNumberFive = numbers.indexOf(5); // this should return the number 4 which is the index of 5 in the numbers array

// includes() this checks to see if the argument exist in the array it will search the array and return a boolean value
const doesSixExist = numbers.includes(6); // this should return false since 6 is not in the numbers array

const randomWords = [
  "Hello",
  "my",
  "name",
  "is",
  "Jack",
  "and",
  "I",
  "love",
  "coding",
];
// sort() this function mutates the original array you can sort string and number elements
// when used on an array of strings you can plainly use .sort()
// the sorting below cause randomWords to turn into this
// [
//   'Hello',  'I',
//   'Jack',   'and',
//   'coding', 'is',
//   'love',   'my',
//   'name'
// ]
randomWords.sort();

// but for numbers you require a compare function  this function will return negative, zero, or a positive number and will sort the values accordingly
// traditionally we use a - b for ascending order and b - a for descending order
// the below sorting will sort all the numbers appropriately into this
// [
//   1, 2,  3,   5, 6,
//   8, 9, 21, 111
// ]
const randomNumbers = [1, 5, 6, 21, 3, 8, 2, 111, 9];
randomNumbers.sort((a, b) => a - b);

// some() this function is a way to check to see if at least one element in the array meets the statement within the call back function
// if they do meet the requirement of the call back function it will return true
// if no elements meet the requirements within the call back function then te return will be false
// using the randomNumbers array as an example
const someTest = randomNumbers.some((number) => number > 90); // true
const someTest1 = randomNumbers.some((number) => number > 1000); // false

// find() this function will search for the first element that passes the requirements in the call back function
// that value is returned but if the value if no element meets the requirements then undefined is returned
// using randomNumbers array again
const findTest = randomNumbers.find((number) => number > 100); // 111
const findTest1 = randomNumbers.find((number) => number > 1000); // undefined
