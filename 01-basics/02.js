/**
 * Launch School Introduction to Programming with JavaScript
 * Ch. 1: The Basics
 * Exercise 2
 *
 * Using arithmetic operators, get the individual digits of a 4-digit number like 4936:
 *
 * 1. thousands place is 4
 * 2. hundreds place is 9
 * 3. tens place is 3
 * 4. ones place is 6
 */

let num = 4936;

const ones = num % 10;
num = Math.floor(num / 10);

const tens = num % 10;
num = Math.floor(num / 10);

const hundreds = num % 10;
num = Math.floor(num / 10);

const thousands = num % 10;

console.log(thousands);
console.log(hundreds);
console.log(tens);
console.log(ones);