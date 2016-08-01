// Given a pattern and a string str, find if str follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty substring in str.

// Examples:
// pattern = "abab", str = "redblueredblue" should return true.
// pattern = "aaaa", str = "asdasdasdasd" should return true.
// pattern = "aabb", str = "xyzabcxzyabc" should return false.
// Notes:
// You may assume both pattern and str contains only lowercase letters.

/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */


var wordPatternMatch = function(pattern, str) {
    var patLen = pattern.length,
        strLen = str.length,
        firstHalf = str.substr( 0, strLen/2 ),
        secondHalf = str.substr( strLen/2, strLen ),
        result = false;

    function decode( string ){
      var storage = {},
          arrayValues = [];

      for(var i = 0; i < string.length; i++ ){ // set counter. { "a": 2, "b": 2 }
        storage[string[i]] ? storage[string[i]] += 1 : storage[string[i]] = 1
      }
      for(var key in storage ){ // push values into array. [2,2]
        arrayValues.push( storage[key] );
      }
      return arrayValues; // [2,2]
    }

    var patternArr = decode( pattern ).toString();
    function recurse( i ){
        if( i >= (strLen-1)/2 ){
            return result;
        }else{
            var subSet = [],
                one = firstHalf.substr( 0, i+1 ),
                two = firstHalf.substr( i+1, firstHalf.length ),
                three = secondHalf.substr( 0, i+1 ),
                four = firstHalf.substr( i+1, secondHalf.length );
            subSet.push( one, two, three, four );
            if ( decode(subSet).toString() === patternArr ) return true;
            return recurse( i+1 );
        }
    }
    return recurse( 0 );
    // console.log( firstHalf, secondHalf );
};

// |a| = 1, |b| = 6 -> divided string = r edblue b luered -> no match
// |a| = 2, |b| = 5 -> divided string = re dblue bl uered -> no match
// |a| = 3, |b| = 4 -> divided string = red blue blu ered -> no match
