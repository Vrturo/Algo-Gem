// Given two strings s and t, write a function to determine if t is an anagram of s.
// For example,

// s = "anagram", t = "nagaram", return true.
// s = "rat", t = "car", return false.

// Note:
// You may assume the string contains only lowercase alphabets.



// Hash table – O(n) time, O(1) space
// To examine if t is a rearrangement of s, we can count occurrences of each letter in the two strings and compare them.
// Since both s and t contain only letters from a-z, a simple counter table of size 26 is suffice.

// Do we need two counter tables for comparison? Actually no,
// because we could increment the counter for each letter in s and decrement the counter for each letter in t,
// then check if the counter reaches back to zero.

function isAnagram(s, t) {
    if(s.length !== t.length ) return false;
    var alphabet = new Array(26);
    for (var i = 0; i < s.length; i++) {
        alphabet[s.charAt(i) - 'a']++;
        alphabet[t.charAt(i) - 'a']--;
    };
    for(var letter in alphabet){
        if (letter !== 0) return false;
    };
    return true;
}



// Sorting – O(n log n) time, O(1) space
// An anagram is produced by rearranging the letters of s into t.
// Therefore, if t is an anagram of s, sorting both strings will result in two identical strings.
// Furthermore, if s and t have different lengths, t must not be an anagram of s and we can return early.

var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;

    s = s.split("").sort().join("");
    t = t.split("").sort().join("");
    return ( s === t );
};

// Complexity analysis: Assume that n is the length of s,
// sorting costs O(n log n) and comparing two strings costs O(n).
// Sorting time dominates and the overall time complexity is O(n log n).


