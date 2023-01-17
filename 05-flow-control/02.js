/**
 * Launch School Introduction to Programming with JavaScript
 * Ch. 5: Flow Control
 * Exercise 2
 *
 * Write a function, `evenOrOdd`, that determines whether its argument is an
 * even number. If it is, the function should log `even` to the console,
 * otherwise it should log `odd`.
 *
 * Assume the argument is always an integer.
 */

function evenOrOdd(num) {
  if (num % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}

evenOrOdd(4);
evenOrOdd(3);