// Errors in JS are disruptions to the normal flow of program execution
// Handling errors is important for debugging and ensuring that your program behaves as expected in unforeseen circumstances

// Try Catch blocks
// try catch statements allows you to define a block of code to be tested for errors while it is being executed and a block of code to be executed if an error occurs

try {
  // code that may throw an error
} catch (error) {
  // code to handle the error
}


// Throwing errors
// you can throw custom errors in JS using the throw statement
// very useful for creating a specific error condition

const calAge = (birthYear) => {
    if (birthYear > new Date().getFullYear()) {
        throw new Error('Birth year cannot be in the future');
    }
    return new Date().getFullYear() - birthYear
}

// this will run but throw an error when someone inputs a birth year that is after the current year
// error handling is crucial in JS to ensure your programs are reliable and user-friendly
// this helps in dealing with unexpected situations gracefully