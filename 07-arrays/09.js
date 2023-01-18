/**
 * Launch School Introduction to Programming with JavaScript
 * Ch. 7: Arrays
 * Exercise 9
 *
 * Without using a `for`, `while`, or `do/while` loop, write some code that
 * checks whether the number `3` appears inside an array.
 */

function isInArray(array, num) {
  return array.indexOf(num) > 0;
}

let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

console.log(isInArray(numbers1, 3));
console.log(isInArray(numbers2, 3));
console.log(isInArray(numbers3, 3));
