// Truncate a string

// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). 
// Return the truncated string with a ... ending.

// Note that inserting the three dots to the end will add to the string length.

// However, if the given maximum string length num is less than or equal to 3, 
// then the addition of the three dots does not add to the string length in determining the truncated string.

/**
 * @param {string} str
 * @return {string}
 */

// if the string length is over the limit given
	// check to see if the string has enough characters to cut and add dots at the end
		// if it doesnt just slice at the length of the limit add the dots
		// else slice at the limit - 3 to add the 3 dots
// if the string isnt over the limit just return str

function truncateString(str, num) {
  if (str.length > num) {
	 	return num < 3 ? str.slice(0, num) + '...' : str.slice(0, num - 3) + '...';
  }
  return str;
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 11));