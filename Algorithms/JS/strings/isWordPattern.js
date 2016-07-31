// Given a pattern and a string str, find if str follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.

// Examples:
// pattern = "abba", str = "dog cat cat dog" should return true.
// pattern = "abba", str = "dog cat cat fish" should return false.
// pattern = "aaaa", str = "dog cat cat dog" should return false.
// pattern = "abba", str = "dog dog dog dog" should return false.
// Notes:
// You may assume pattern contains only lowercase letters, and str contains lowercase letters separated by a single space.

/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */

var wordPattern = function(pattern, str) { // 96ms runtime
    var subSet = str.split(" "),
        result = true,
        i;

     function map( a, b ){
        var storage = {};
        for( i = 0; i < subSet.length; i++ ){
           if( storage[a[i]] ){
               if( storage[a[i]] !== b[i] ) return false;
           }else{
               storage[a[i]] = b[i];
            }
       }
        return true;
      }

    pattern.length !== subSet.length ? result = false : result = map( pattern, subSet ) && map( subSet, pattern );
    return result;
};

// -----------------------------------------------------------------


var wordPattern = function(pattern, str) {
    var subSet = str.split(" "),
        result = true,
        i;
    function decode( string ){
      var storage = {},
          arrayValues = [];

      for( i = 0; i < string.length; i++ ){ // set counter. { "a": 2, "b": 2 }
        storage[string[i]] ? storage[string[i]] += 1 : storage[string[i]] = 1
      }
      for(var key in storage ){ // push values into array. [2,2]
        arrayValues.push( storage[key] );
      }
      return arrayValues; // [2,2]
    }
    return decode( str.split(" ") ).toString() === decode( pattern ).toString(); // check return arrays as strings
                                                                                 // for a faster comparison
};
