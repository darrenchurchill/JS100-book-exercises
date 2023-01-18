/**
 * Launch School Introduction to Programming with JavaScript
 * Ch. 7: Arrays
 * Exercise 10
 *
 * Write some code to replace the value `6` in the array below with the value
 * `606`. You don't have to search the array for the value `6`, just write the
 * nested assignment statement.
 */

let arr = [
  ["hello", "world"],
  ["example", "mem", null, 6, 88],
  [4, 8, 12]
];

arr[1][3] = 606;
console.log(arr);
