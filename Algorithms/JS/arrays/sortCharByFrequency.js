// Sort Characters By Frequency

// Given a string, sort it in decreasing order based on the frequency of characters.

// Example 1:

// Input:
// "tree"

// Output:
// "eert"

// Explanation:
// 'e' appears twice while 'r' and 't' both appear once.
// So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
// Example 2:

// Input:
// "cccaaa"

// Output:
// "cccaaa"

// Explanation:
// Both 'c' and 'a' appear three times, so "aaaccc" is also a valid answer.
// Note that "cacaca" is incorrect, as the same characters must be together.
// Example 3:

// Input:
// "Aabb"

// Output:
// "bbAa"

// Explanation:
// "bbaA" is also a valid answer, but "Aabb" is incorrect.
// Note that 'A' and 'a' are treated as two different characters.


/**
 * @param {string} s
 * @return {string}
 */

var frequencySort = function(s) {
    var map = {},
        result = "";

    for(var i=0; i<s.length; i++){
        if( map[s[i]] ){
            map[s[i]]+=1;
        } else {
            map[s[i]] = 1;
        }
    }
    var temp = Object.keys(map).sort( function(a,b){ return map[b] - map[a]});
    for(var j = 0; j<temp.length; j++){
        for(var k = 0; k < map[temp[j]]; k++){
            result+=temp[j];
        }
    }
    return result;
};
