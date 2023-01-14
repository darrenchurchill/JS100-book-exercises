/**
 * Launch School Introduction to Programming with JavaScript
 * Ch. 3: Input/Output
 * Exercise 3
 *
 * Write a program named age.js that asks the user for their age, and then
 * calculates and reports their future age in 10, 20, 30, and 40 years.
 */

let rlsync = require('readline-sync');

const age = Number(rlsync.question('How old are you? '));

let numYears = 10;
console.log(`In ${numYears} years, you will be ${age + numYears} years old.`)

numYears += 10;
console.log(`In ${numYears} years, you will be ${age + numYears} years old.`)

numYears += 10;
console.log(`In ${numYears} years, you will be ${age + numYears} years old.`)

numYears += 10;
console.log(`In ${numYears} years, you will be ${age + numYears} years old.`)