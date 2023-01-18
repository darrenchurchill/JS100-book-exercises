/**
 * Launch School Introduction to Programming with JavaScript
 * Ch. 7: Arrays
 * Exercise 4
 *
 * Use the `map` function to create a new array with `length ===
 * myArray.length`. If the element in `myArray` is even, the corresponding
 * element in the new array should be `'even'`; otherwise the element should be
 * `'odd'`.
 */

let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];

console.log(myArray.map(el => {
  if (el % 2 === 0) {
    return 'even';
  }
  return 'odd';
}));