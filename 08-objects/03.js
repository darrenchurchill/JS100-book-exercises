/**
 * Launch School Introduction to Programming with JavaScript
 * Ch. 8: Objects
 * Exercise 3
 *
 * Use object literal syntax to create an object that behaves as an array in a
 * `for` statement. The object should contain at least 3 elements.
 */

let myArray = {
  length: 3,
  0: '0',
  1: '1',
  2: '2'
};

for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
}
