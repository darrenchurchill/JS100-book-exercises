/**
 * Launch School Introduction to Programming with JavaScript
 * Ch. 4: Functions
 * Exercise 2
 *
 * Write a dynamic greeter program named greeter.js. The program should ask for
 * your name, then output Hello, {name}! where {name} is the name you entered.
 */

let rlsync = require('readline-sync');

function getName(prompt) {
  return rlsync.question(prompt);
}

let firstname = getName('What is your first name? ');
let lastname = getName('What is your last name? ');
console.log(`Hello ${firstname} ${lastname}!`);