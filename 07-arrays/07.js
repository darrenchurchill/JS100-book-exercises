/**
 * Launch School Introduction to Programming with JavaScript
 * Ch. 7: Arrays
 * Exercise 7
 *
 * Use `reduce` to compute the sum of the squares of all the numbers in an
 * array.
 */

function sumOfSquares(array) {
  return array.reduce((accum, cur) => accum + cur * cur, 0);
}

let arr = [3, 5, 7];
console.log(sumOfSquares(arr));
