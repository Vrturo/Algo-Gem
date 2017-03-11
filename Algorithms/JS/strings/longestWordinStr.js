// Longest Word in a String

// Return the length of the longest word in the provided sentence.

// Your response should be a number.


// Input: String
// ex. "The quick brown fox jumped over the lazy dog"
// "May the force be with you"

// Output: Integer
// 6
// 5

// Logic
// Split string onto an array sperated by each word
// create a max variable that stores the highest count
// loop through the array of words
  // check count of each word
  // if word is higher than max count, update mas count
// return max count

function findLongestWord(str) {
  const words = str.split(' ');
  let max = 0;
  for (let i = 0; i < words.length; i += 1) {
    if (words[i].length > max) max = words[i].length;
  }
  return max;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
