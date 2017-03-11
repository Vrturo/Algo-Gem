// Title Case a Sentence

// Return the provided string with the first letter of each word capitalized.
// Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

/**
 * @param {string} s
 * @return {str}
 */

// Logic

// create a words array that stores each element seperately
// loop through words array
  // set each element to a copy of the current element uppercasing the first char &&
  // lower casing the rest
// return the words array joined into a string

function titleCase(str) {
  const words = str.split(' ');
  for (let i = 0; i < words.length; i += 1) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
  }
  return words.join(' ');
}

titleCase("I'm a little tea pot");
