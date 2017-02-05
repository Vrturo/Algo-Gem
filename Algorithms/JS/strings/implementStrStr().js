// Implement strStr().

// strstr - locate a substring ( needle ) in a string ( haystack )

// Try not to use standard library string functions for this question.

// Returns the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

const str = function strStr(haystack, needle) {
  const lenOne = haystack.length;
  const lenTwo = needle.length;
  if (lenOne < lenTwo) {
    return -1;
  } else if (lenTwo === 0) {
    return 0;
  }
  const threshold = lenOne - lenTwo;
  for (let i = 0;i <= threshold;i += 1) {
    if (haystack.substring(i,i + lenTwo) === needle) return i;
  }
  return -1;
};
