/**
 * Launch School Introduction to Programming with JavaScript
 * Ch. 8: Objects
 * Exercise 13
 *
 * Without modifying `foo`, update the code to print the desired text.
 */

function foo(bar) {
  console.log(bar());
}

foo(() => 'Welcome');    // Should print 'Welcome'
foo(() => 3.1415);       // Should print 3.1415
foo(() => [1, 2, 3]);    // Should print [1, 2, 3]
