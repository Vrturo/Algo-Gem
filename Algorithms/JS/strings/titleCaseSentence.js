// Title Case a Sentence

// Return the provided string with the first letter of each word capitalized.
// Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

/**
 * @param {string} s
 * @return {str}
 */

function titleCase(str) {
  var words = str.split(' ');
  for (var i = 0; i < words.length; i += 1) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
  }
  return words.join(' ');
}

titleCase("I'm a little tea pot");
