/**
 * Launch School Introduction to Programming with JavaScript
 * Ch. 8: Objects
 * Exercise 5
 *
 * Create a new object named `myObj` that uses `myProtoObj` as its prototype.
 */

let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);
