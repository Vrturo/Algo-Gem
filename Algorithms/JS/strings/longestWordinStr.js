// Longest Word in a String

// Return the length of the longest word in the provided sentence.

// Your response should be a number.


// Input: String
// ex. "The quick brown fox jumped over the lazy dog"
// "May the force be with you"

// Output: Integer
// 6
// 5

function findLongestWord(str) {
  var words = str.split(' ');
  var max = 0;
  for (var i = 0; i < words.length; i += 1) {
    if (words[i].length > max) max = words[i].length;
  }
  return max;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
