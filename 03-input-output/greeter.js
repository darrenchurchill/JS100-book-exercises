/**
 * Launch School Introduction to Programming with JavaScript
 * Ch. 3: Input/Output
 * Exercise 1
 *
 * Write a dynamic greeter program named greeter.js. The program should ask for
 * your name, then output Hello, {name}! where {name} is the name you entered.
 */

let rlsync = require('readline-sync');

let username = rlsync.question('What is your name? ');
console.log(`Hello ${username}!`);