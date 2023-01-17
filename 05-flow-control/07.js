/**
 * Launch School Introduction to Programming with JavaScript
 * Ch. 5: Flow Control
 * Exercise 7
 *
 * Write a function that takes a string as an argument and returns an all-caps
 * version of the string when the string is longer than 10 characters. Otherwise
 * is should return the original string.
 */

function capitalizeLongString(str) {
  if (str.length > 10) {
    return str.toUpperCase();
  } else {
    return str;
  }
}

console.log(capitalizeLongString('hello there world'));
console.log(capitalizeLongString('Hello'));