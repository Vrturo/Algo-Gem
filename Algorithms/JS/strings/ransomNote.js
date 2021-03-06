// Ransom Note

// Given an arbitrary ransom note string and another string containing letters from all the magazines,
// write a function that will return true if the ransom note can be constructed from the magazines ;
// otherwise, it will return false.

// Each letter in the magazine string can only be used once in your ransom note.

// Note:
// You may assume that both strings contain only lowercase letters.

// canConstruct("a", "b") -> false
// canConstruct("aa", "ab") -> false
// canConstruct("aa", "aab") -> true
// canConstruct("aa", "sdfaab") -> true

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

// -------------------------------------------------------

// create a var map to store all characters and their count
// loop through magazine
  // if char exists in map, increment count
  // else create char in map, and increment by 1
// loop through ransomNote
  // if a char is found that isnt in map OR there's a char who's count is less than 1, return false
  // if char in map exists in ransomNote, decrement count
// return true at end, meaning above cases passed

var canConstruct = function(ransomNote, magazine) {
    var map = {};

    for(var i=0; i<magazine.length; i++){
        if (map[magazine[i]]) {
            map[magazine[i]]+=1;
        } else {
            map[magazine[i]]=1;
        }
    }
    for(var j=0; j<ransomNote.length; j++){
        if(!map[ransomNote[j]] || map[ransomNote[j]] < 1) return false;
        if(map[ransomNote[j]]) map[ransomNote[j]] -=1;
    }
    return true;
};

