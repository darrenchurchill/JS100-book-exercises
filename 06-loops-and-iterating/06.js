/**
 * Launch School Introduction to Programming with JavaScript
 * Ch. 6: Loops and Iterating
 * Exercise 6
 *
 * Write a function that computes and returns the factorial of a number by using
 * a `for` loop. The factorial of a positive integer `n`, signified by `n!`, is
 * defined as:
 * the product of all integers between `1` and `n`, inclusive
 *
 * Example:
 * 1! -> 1 -> 1
 * 2! -> 1 * 2 -> 2
 * 3! -> 1 * 2 * 3 -> 6
 * 4! -> 1 * 2 * 3 * 4 -> 24
 * 5! -> 1 * 2 * 3 * 4 * 5 -> 120
 *
 * You may assume the argument is always a postitive integer.
 *
 * UPDATE for exercise 6: Refactor to use recursion.
 */


function factorial(num) {
  if (num === 1) return num;

  return num * factorial(num - 1);
}

console.log(factorial(1));     // => 1
console.log(factorial(2));     // => 2
console.log(factorial(3));     // => 6
console.log(factorial(4));     // => 24
console.log(factorial(5));     // => 120
console.log(factorial(6));     // => 720
console.log(factorial(7));     // => 5040
console.log(factorial(8));     // => 40320
