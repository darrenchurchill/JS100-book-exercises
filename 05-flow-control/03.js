/**
 * Launch School Introduction to Programming with JavaScript
 * Ch. 5: Flow Control
 * Exercise 3
 *
 * Write a function, `evenOrOdd`, that determines whether its argument is an
 * even number. If it is, the function should log `even` to the console,
 * otherwise it should log `odd`.
 *
 * If the argument is not an integer, the function should issue an error message
 * and return.
 */

function evenOrOdd(num) {
  if (!Number.isInteger(num)) {
    console.log(`ERROR: ${num} is not an integer.`)
    return;
  }

  if (num % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}

evenOrOdd(4);
evenOrOdd(3);
evenOrOdd(3.1);
evenOrOdd('hello');