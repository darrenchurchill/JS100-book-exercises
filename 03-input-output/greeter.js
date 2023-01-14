/**
 * Launch School Introduction to Programming with JavaScript
 * Ch. 3: Input/Output
 * Exercise 1/2
 *
 * Write a dynamic greeter program named greeter.js. The program should ask for
 * your name, then output Hello, {name}! where {name} is the name you entered.
 */

let rlsync = require('readline-sync');

let firstname = rlsync.question('What is your first name? ');
let lastname = rlsync.question('What is your last name? ');

console.log(`Hello ${firstname} ${lastname}!`);