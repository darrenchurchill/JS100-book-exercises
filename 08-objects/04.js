/**
 * Launch School Introduction to Programming with JavaScript
 * Ch. 8: Objects
 * Exercise 4
 *
 * Create an array from the keys of `obj`, with all of the keys converted to
 * uppercase. Your implementation must not mutate `obj`.
 */

let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let upperKeys = [];
for (let key in obj) {
  upperKeys.push(key.toUpperCase());
}

console.log(upperKeys);
