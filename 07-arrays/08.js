/**
 * Launch School Introduction to Programming with JavaScript
 * Ch. 7: Arrays
 * Exercise 8
 *
 * Write a function similar to `oddLengths` from Exercise 6, but don't use `map`
 * or `filter`. Instead, try to use `reduce`.
 *
 */

function oddLengths(array) {
  return array.reduce(
    (accum, el) => {
      if (el.length % 2 !== 0)
        accum.push(el.length);
      return accum;
    },
    []
  );
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr));
