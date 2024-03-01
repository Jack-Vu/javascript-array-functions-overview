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

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
