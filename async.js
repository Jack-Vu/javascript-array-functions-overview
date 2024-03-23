// Asynchronous programming allows JS to perform long network request or other operations without blocking the main thread
// To perform this a way to do it is with a Promise
// A promise is an object representing the eventual completion or failure of an asynchronous operation

const { log } = require("async");

// Creating a Promise:

let promise = new Promise((resolve, reject) => {
  // Asynchronous action goes here
});

// Using a Promise:
// when used with then allows the function it is nested to continue and once this has finished the results will be ready
// this tends to lead to some errors needing to predict when this will end can be difficult

promise.then(
  function (result) {
    /*handles a successful result*/
  },
  function (error) {
    /*handles a errors*/
  }
);

// Async/Await
// async and await make asynchronous code look and behave a little more like synchronous code
// when this function with in the function the await will need to finish before the rest of the async function continues

const fetchData = async () => {
  console.log("This executes because it is before the await");
  let response = await fetch("url"); // it will wait here to fetch data before continuing to the rest of the function
  let data = await response.json(); // it will also wait here before continuing
  console.log("This executes after the two above awaits are finished");
  // if you were to perform a similar function with then you will run into an unexpected behavior where the fetching data can happen but the program will proceed to the rest of the code
  // so if fetching the data is crucial to the next part of your function you should use async/await
};

// Asynchronous JS is crucial for creating responsive and efficient web applications

// Diving Deeper Asynchronous Programming in Depth
// callbacks are functions passed into another function as an argument which are then invoked inside the outer function to complete an action

// Example

const fetchDatav2 = (callback) => {
  setTimeout(() => {
    callback("Data loaded");
  }, 1000);
};

fetchDatav2((data) => console.log(data));
// issue with Callbacks (Callback Hell or Pyramid of Doom)
// nested callbacks can lead to complex and hard-to-read code

// Promises
// Promises are objects that represent the eventual completion or failure of an asynchronous operation
// they provide a cleaner and more robust way of handling asynchronous logic

// Creating and using promises with error handling
let promisev2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Data fetched"), 1000);
});

promise
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

// Async/Await
// offers a more readable and concise syntax for working with promises

async function loadData() {
  try {
    let response = await fetch("https://api.example.com/data");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Failed to load data:", error);
  }
}

loadData();

// Async programming is the cornerstone of JS especially in web dev where operations often depend on external data or user interactions
// Mastering callbacks, promises, and async/await will greatly enhance your ability to write efficient and effective JS code

// when we discuss the execution of async code we need to also mention JS event loop

// the Event Loop is a mechanism that allows JS to perform non-blocking async operations, despite being single-threaded
// it continuously checks if the call stack is empty and if there are ay pending callbacks in the queue

// Call Stacks and Web APIs

// call stacks is where JS stores the execution context of function calls
// when a function is called it is added to the stack and when it returns it is removed from the stack

// web APIs are provided by the browser environment and can handle certain task asynchronously 

// Callback Queue and Microtask Queue

// callback queue is a queue where callbacks from async operations are pushed
// these callbacks will wait in a line to be executed once the call stack is empty 

// microtask queue is a queue for promises
// microtasks have higher priority then callback queue tasks and are executed immediately after the current task is completed and before a new tasks are taken from the callback queue

// Example
console.log('Start');
 
setTimeout(() => {
    console.log('Timeout Callback');
}, 0);
 
Promise.resolve()
    .then(() => console.log('Promise Callback'));
 
console.log('End');
// the output will be Start, End, Promise Callback, Timeout Callback
// this order is due to the event loop processing the microtask queue (promises) before the callback queue (setTimeout)

// The event loop is a fundamental part of the JS runtime environment, ensuring that asynchronous code is executed at the right time

