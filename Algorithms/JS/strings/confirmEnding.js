// Confirm the Ending

// Check if a string (first argument, str) ends with the given target string (second argument, target).

// This challenge can be solved with the .endsWith() method, which was introduced in ES2015. 
// But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

// Sample Input

// "Bastian", "n"
// "Connor", "n"
// "Open sesame", "same"

// Sample Output

// true
// false
// true

// Split str into an array
// if the split array is just one element long we know its one word
	// check the word and see if last elements matches target
// if array has words
	// check to see if last word contains target

function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  const strArr = str.split(' ');
  if (strArr.length === 1) return target === str[str.length - 1];
  return strArr[strArr.length - 1].includes(target);
}

console.log(confirmEnding('Bastian', 'n'));