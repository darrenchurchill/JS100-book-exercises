/**
 * Launch School Introduction to Programming with JavaScript
 * Ch. 9: More Stuff
 * Exercise 6
 *
 * Write a function that searches an array of strings for every element that
 * matches the regular expression given by its argument. The function should
 * return all matching elements in an array.
 */

function allMatches(words, regex) {
  return words.reduce(
    (accum, word) => {
      if (regex.test(word))
        accum.push(word);
      return accum;
    },
    []
  );
}

let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

console.log(allMatches(words, /lab/));  // ['laboratory', 'flab', 'elaborate']