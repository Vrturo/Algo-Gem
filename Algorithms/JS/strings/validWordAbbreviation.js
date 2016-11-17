// Valid Word Abbreviation

// Given a non-empty string s and an abbreviation abbr, return whether the string matches with the given abbreviation.

// A string such as "word" contains only the following valid abbreviations:

// ["word", "1ord", "w1rd", "wo1d", "wor1", "2rd", "w2d", "wo2", "1o1d", "1or1", "w1r1", "1o2", "2r1", "3d", "w3", "4"]
// Notice that only the above abbreviations are valid abbreviations of the string "word".
// Any other string is not a valid abbreviation of "word".

// Note:
// Assume s contains only lowercase letters and abbr contains only lowercase letters and digits.

// Example 1:
// Given s = "internationalization", abbr = "i12iz4n":

// Return true.
// Example 2:
// Given s = "apple", abbr = "a2e":

// Return false.

/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */


var validWordAbbreviation = function(word, abbr) {
    if(word.length < 1) return false;
    var stack = '';
    for( var i=0, j=0, k; i< word.length || j < abbr.length; ){// j = abbr | i = word
        if( Number(abbr[j]) ){
            k = j+1;
            stack = abbr[j];
            while( Number(abbr[k]) || abbr[k] < 1 ){ // check for double digits
                stack += abbr[k]; // add extra digits to stack
                k++;
                j++;
            }
            i+=Number(stack);
            j++;
            if( i > word.length ) return false; // false if number is is bigger than word length
            continue;
        }

        if( word[i] !== abbr[j] ) return false;
        i++;
        j++;
    }
    return true;
};

var ex1 = ["internationalization", "i12iz4n"]
console.log(validWordAbbreviation(ex1[0], ex1[1]))

var ex2 = ["apple", "appl1"]
console.log(validWordAbbreviation(ex2[0], ex2[1]))

var ex3 = ["apple", "a2e"]
console.log(validWordAbbreviation(ex3[0], ex3[1]))
