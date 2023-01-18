/**
 * Launch School Introduction to Programming with JavaScript
 * Ch. 7: Arrays
 * Exercise 6
 *
 * Use `map` and `filter` to first determine the lengths of all the elements in
 * an array of string values, then discard the even values (keep the odd
 * values).
 */

function oddLengths(array) {
  return array.map(el => el.length).filter(el => el % 2 !== 0);
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr));