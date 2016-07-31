// Given a Pattern and a dictionary, print out all the strings that match the pattern.
// where a character in the pattern is mapped uniquely to a character in the dictionary.

// e.g 1. ("abc" , <"cdf", "too", "hgfdt" ,"paa">) -> output = "cdf"
//       2. ("acc" , <"cdf", "too", "hgfdt" ,"paa">) -> output = "too", "paa"


var wordPattern = function(pattern, str) {
  var i,
      j;

    function decode( string ){
      var storage = {},
          arrayValues = [];

      for( i = 0; i < string.length; i++ ){ // set counter. {"a": 1, "b": 1, "c": 1}
        storage[string[i]] ? storage[string[i]] += 1 : storage[string[i]] = 1
      }
      for(var key in storage ){ // push values into array. [1,1,1]
        arrayValues.push( storage[key] );
      }
      return arrayValues; // [1,1,1]
    }

    var patternArr = decode( pattern ).toString(); // turn to string to compare array to array faster

    for( j = 0; j < str.length; j++ ){
        if( decode(str[j]).toString() === patternArr ) console.log( str[j] );
    }
}

var test = ["cdf", "too", "hgfdt" ,"paa"]
console.log( wordPattern("acc", test) )
