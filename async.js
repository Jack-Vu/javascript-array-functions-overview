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
