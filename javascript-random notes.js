const numbers = [1, 2, 3, 4, 5];
// a common operation we have used with manipulating an array is spread operator
// an easy way to duplicate the same array twice with the same numbers is with the spread operator

const doubleNumbers = [...numbers, ...numbers]; // [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]

