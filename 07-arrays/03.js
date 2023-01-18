/**
 * Launch School Introduction to Programming with JavaScript
 * Ch. 7: Arrays
 * Exercise 3
 *
 * Log all of the even values from `myArray` to the console.
 */

let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0]
];

myArray.flat().filter(el => el % 2 === 0).forEach(el => console.log(el));