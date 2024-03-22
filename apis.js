// Web APIs are interfaces that allow interactions between different software applications, particularly over the web
// They enable your JS code to fetch data from external sources, interact with hardware, and much more

// Fetching Data
// The Fetch API provides an easy and logical way to fetch resources asynchronously across the network
// Using Fetch API

fetch("https://api.example.com/data")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));

// Working with JSOn
// JSON (JavaScript Object Notation) is a common format for sending and requesting data through a Web API

// Parsing JSON
let jsonData = '{"name": "Alice", "age": 30}';
let user = JSON.parse(jsonData);
// parse when given a valid JSON string will converts a JSON string into an object.
console.log(user.name); // Alice

// Stringifying JSON
let userObject = { name: "Bob", age: 25 };
let jsonString = JSON.stringify(userObject);
console.log(jsonString); // '{"name":"Bob","age":25}'

// Web APIs expand the capabilities of your JS apps by allowing them to communicate with external services and processes
