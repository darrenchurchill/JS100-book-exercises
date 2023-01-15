/**
 * Launch School Introduction to Programming with JavaScript
 * Ch. 4: Functions
 * Exercise 3
 *
 * Write a program that uses a `multiply` function to multiply two numbers and
 * return the result. Ask the user to enter the two numbers, then output the
 * numbers and the result as a simple equation.
 */

let rlsync = require('readline-sync');

function multiply(n1, n2) {
  return `${n1} * ${n2} = ${n1 * n2}`
}

num1 = Number(rlsync.question('Enter the first number: '));
num2 = Number(rlsync.question('Enter the second number: '));
console.log(multiply(num1, num2));