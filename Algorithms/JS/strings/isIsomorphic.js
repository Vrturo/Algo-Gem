// Given two strings s and t, determine if they are isomorphic.

// Two strings are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters.
// No two characters may map to the same character but a character may map to itself.

// For example,
// Given "egg", "add", return true.

// Given "foo", "bar", return false.

// Given "paper", "title", return true.

// Note:
// You may assume both s and t have the same length.



// create a hash and set is a variable called obj
// loop through one of the strings length
  // set s + each character of the string as the same character of the t string
  // set s + each character of the string as the same character of the t string
  // return false if the character of the string doesnt equal the objec key
// return true

var isIsomorphic = function(s, t) {
    var obj = {};

    for(var i = 0; i < s.length; i++){
        if(obj['s' + s[i]] === undefined){
          obj['s' + s[i]] = t[i];
        }
        if(obj['t' + t[i]] === undefined){
          obj['t' + t[i]] = s[i];
        }
        if(t[i] !== obj['s' + s[i]] || s[i] !== obj['t' + t[i]]){
          return false;
        }
    }
    return true;
};
