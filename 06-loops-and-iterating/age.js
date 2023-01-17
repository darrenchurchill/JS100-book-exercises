/**
 * Launch School Introduction to Programming with JavaScript
 * Ch. 6: Loops and Iterating
 * Exercise 1
 *
 * Write a program named age.js that asks the user for their age, and then
 * calculates and reports their future age in 10, 20, 30, and 40 years.
 *
 * Update for Ch 6: Use a for loop to display the future ages.
 */

let rlsync = require('readline-sync');

const age = Number(rlsync.question('How old are you? '));

let numYears = 10;
for (let numYears = 10; numYears <= 40; numYears += 10) {
  console.log(`In ${numYears} years, you will be ${age + numYears} years old.`);
}
