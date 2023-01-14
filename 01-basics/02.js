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

const num = 4936;

const thousands = Math.floor(num / Math.pow(10, 3));
let remainder = num % Math.pow(10, 3);

const hundreds = Math.floor(remainder / Math.pow(10, 2));
remainder = num % Math.pow(10, 2);

const tens = Math.floor(remainder / Math.pow(10, 1));
remainder = num % Math.pow(10, 1);

const ones = Math.floor(remainder / Math.pow(10, 0));
remainder = num % Math.pow(10, 0);

console.log(thousands);
console.log(hundreds);
console.log(tens);
console.log(ones);