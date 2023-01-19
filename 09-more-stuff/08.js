/**
 * Launch School Introduction to Programming with JavaScript
 * Ch. 9: More Stuff
 * Exercise 8
 *
 * Earlier, we learned that `Number.isNaN(value)` returns `true` if `value` is
 * the `NaN` value, `false` otherwise. You can also use `Object.is(value, NaN)`
 * to make the same determination.
 *
 * Without using either of these methods, write a function named `isNotANumber`
 * that returns `true` if a value is `NaN` and `false` otherwise.
 */

function isNotANumber(value) {
  // NaN is the __only__ value in JavaScript that isn't equal to itself!
  return value !== value;
}

console.log(isNotANumber(NaN));
console.log(isNotANumber(1));
console.log(isNotANumber('hello'));