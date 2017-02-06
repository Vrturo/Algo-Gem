// Implement strStr().

// strstr - locate a substring ( needle ) in a string ( haystack )

// Try not to use standard library string functions for this question.

// Returns the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

// if haystack's length is less than needle we already know needle is not in haystack, so return -1
// if needle is an empty sring return 0 because it will be in haystack


const str = function strStr(haystack, needle) { // 93 ms runtime
  const lenOne = haystack.length;
  const lenTwo = needle.length;
  if (lenOne < lenTwo) {
    return -1;
  } else if (lenTwo === 0) {
    return 0;
  }
  const threshold = lenOne - lenTwo;
  for (let i = 0; i <= threshold; i += 1) {
    if (haystack.substring(i, i + lenTwo) === needle) return i;
  }
  return -1;
};

console.log(str('', ''));

var strStr = function(haystack, needle) { // 95 ms runtime
    for (var i = 0; ; i++) {
        for (var j = 0; ; j++) {
          if (j == needle.length) return i;
          if (i + j == haystack.length) return -1;
          if (needle.charAt(j) !== haystack.charAt(i + j)) break;
        }
    }
};
